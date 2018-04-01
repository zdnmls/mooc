const path = require('path');
const express = require('express');
const async = require('async');
const mysql = require('mysql');
const app = express();
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db'
});
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./views/single.html'));
});

app.get('/play_data', (req, res) => {
  let course_id = req.query.course_id;
  let sql = `
  select
  co.title as course_title,co.view_count as view_count,ch.title as ch_title,se.*
  from
  sections as se,chapters as ch,courses as co
  where
  se.cid=ch.id
  and
  ch.cid=co.id
  and
  co.id=2
  `;
  con.query(sql, (err, r) => {
    let result = {};
    result.title = r[0].course_title;
    result.view = r[0].view_count;
    result.chapters = [];
    let o = {};
    r.forEach(v => {
      let key = v.ch_title;
      if (!o[key]) {
        o[key] = []
      }
      o[key].push(v)
    });
    for (k in o) {
      result.chapters.push({
        title: k,
        sections: o[k]
      })
    }
    res.json(result)
    // console.log(result)    
  })
});
app.get('/index_page_data', (req, res) => {
  let course_id = req.query.course_id;
  let sql = `select 
  courses.*,field.name as f_name,type.name as t_name,degree.name as d_name from 
  courses,field,type,degree 
  where courses.fid = field.id and courses.tid = type.id and courses.did = degree.id`;
  async.series({
    fields: function (callback) {
      con.query('select * from field', (err, r) => callback(null, r))
    },
    categorys: function (callback) {
      con.query('select * from category', (err, r) => callback(null, r))
    },
    types: function (callback) {
      con.query('select * from type', (err, r) => callback(null, r))
    },
    degrees: function (callback) {
      con.query('select * from degree', (err, r) => callback(null, r))
    },
    courses: function (callback) {
      con.query(sql, (err, r) => callback(null, r))
    },
    relation: function (callback) {
      con.query('select * from course_category as a,category as b where a.category_id = b.id', (err, r) => callback(null, r))
    }
  }, function (err, results) {
    results.courses.forEach(v => {
      v.lable = results.relation.filter(o => o.course_id == v.id)
    })
    delete results.relation;
    res.json(results)
  })
})


app.listen(3000); //监听端口3000


// 1.数据  2.页面结构  3.交互

//-单页面应用
//hash值得变化不会发起网络请求
//hash值得变化不会引起页面跳转  始终是video页面
//-前端自动化
//用方便的语法写代码，再通过node.js转成能运行的代码
//node     同步异步 面试题    --async   异步