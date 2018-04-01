const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const request = require('request')
const async = require('async')
const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'video'
});


//   给我一个字符，我给你一个id
let string2did = function (str) {
    let table = {
        '初级': 1,
        '中级': 2,
        '高级': 3
    }
    return table[str]
}
let string2fid = function (cid, fn) {
    let table = {};
    con.query('select * from category', (err, result) => {
        result.forEach(v => {
            table[v.name] = v.fid;
        });
        fn(table[cid[0]])
    })
}
let string2cid = function (str, fn) {
    let t = {};
    con.query('select * from category', (err, result) => {
        result.forEach(v => {
            t[v.name] = v.id;
        })
        fn(t[str])
    })
}
//  urls 集合
let urls = [];
for (let i = 1; i < 35; i++) {
    urls.push('https://www.imooc.com/course/list?page=' + i)
}
//   图片 、数据集合
let pic_urls = [];
async.eachLimit(urls, 10, function (url, callback) {
    request(url, (err, header, body) => {
        console.log('正在处理:' + url)
        let $ = cheerio.load(body);
        $('.course-card-container').each((i, el) => {
            let category = [];
            $(el).find('.course-label label').each((i, v) => category.push($(v).text()))
            string2fid(category, function (fid) {
                let did = string2did($(el).find('.course-card-info span').eq(0).text());
                let tid = 1;
                let pic = '/pics/' + path.basename($(el).find('img').attr('src'))
                let title = $(el).find('.course-card-name').text();
                let teacher_id = 1;
                let teacher_tip = 0;
                let view_count = $(el).find('.course-card-info span').eq(1).text();
                let des = $(el).find('.course-card-desc').text();
                let url = $(el).find('a').attr('href');
                con.query('insert into courses (fid,tid,did,title,view_count,des,pic,teacher_id,teacher_tip,url) values (?,?,?,?,?,?,?,?,?,?)', [fid, tid, did, title, view_count, des, pic, teacher_id, teacher_tip, url], (err, result) => {
                    if (err) {
                        console.log(err.message)
                    } else {
                        let course_id = result.insertId;
                        category.forEach(v => {
                            string2cid(v, function (cid) {
                                let category_id = cid;
                                console.log(cid)
                                con.query(
                                    'insert into course_category (course_id,category_id) values (?,?)', [course_id, category_id],
                                    (err, result) => {
                                        if (err) {
                                            console.log(err.message)
                                        } else {
                                            console.log('分类写入成功');
                                        }
                                    })
                            })
                        })
                        console.log('加入数据库:' + 'ok')
                    }
                })
            })
        })
        pic_urls.concat(
            $('.course-card-container img').each((index, el) => {
                pic_urls.push('https:' + $(el).attr('src'))
            }))
        callback();
    })
}, function (err) {
    if (!err) {
        async.eachLimit(pic_urls, 25, function (url, callback) {
            console.log('正在下载:' + url)
            let file_name = path.basename(url);
            let ws = fs.createWriteStream('./public/pics/' + file_name);
            request(url).pipe(ws);
            ws.on('finish', () => callback())
        }, function (err) {
            if (!err) {
                console.log('done!')
            }
        })
    }
})