<template>
<div>
  <div id="header">
		<div class="page-container" id="nav">
			<div id="logo" class="logo"><a href="/" target="_self" class="hide-text" title="首页">慕课网</a></div>
			<button type="button" class="navbar-toggle visible-xs-block js-show-menu">
				<i class="icon-menu"></i>
			</button>
			<ul class="nav-item">
							<li class="set-btn visible-xs-block"><a href="/user/newlogin" target="_self">登录</a> / <a href="/user/newsignup" target="_self">注册</a></li>
							
				<li>
					<a href="#/video" class="active" target="_self">免费课程</a>
				</li>           
				<li><a href="#/detail" class="program-nav " target="_self">职业路径<i class="icn-new"></i></a></li>
				<li>
					<a href="//coding.imooc.com" target="_self">实战</a>
				</li>
				<li><a href="/wenda" target="_self">猿问</a></li>
				<li><a href="/discovery" target="_self">发现</a></li>
				
			</ul>
					<div id="login-area">
				<ul class="header-unlogin clearfix">
					<li class="app-load" id="js-app-load">
						<a href="//www.imooc.com/mobile/app" target="_blank" style="width:60px;">下载APP</a>
						<div class="app-load-box clearfix js-load-box">
							<img src="/img/appload.png" class="l">
							<div class="r">
								<p>扫描下载慕课网APP</p>
								<a href="https://itunes.apple.com/cn/app/mu-ke-wang/id722179140?mt=8" target="_blank"><i class="icon-apple"></i>App Store下载</a>
								<a href="//www.imooc.com/mobile/mukewang.apk" target="_blank"><i class="icon-android"></i>Android下载</a>
							</div>
						</div>
					</li>

					<li class="shop-cart" id="shop-cart">
						<a href="//order.imooc.com/pay/cart" class="shop-cart-icon" target="_blank">
							<span class="icon-shopping-cart js-endcart"></span><span>购物车</span><span class="shopping_icon js-cart-num" data-ordernum="0" data-cartnum="0" style="display: none">0</span>
						</a>
						<div class="my-cart" id="js-my-cart"><div class="cart-title-box clearfix">                                        <h2 class="l">我的购物车</h2>                                        <h5 class="r">已加入<span class="js-incart-num">0</span>门课程</h5>                                    </div>                                    <div class="cart-wrap">                                        <div class="clear-cart">                                            <span class="cartIcon icon-shopping-cart"></span>                                            <h3>购物车里空空如也</h3>                                            <div class="text">快去这里选购你中意的课程</div>                                            <p><a class="go-link" href="//coding.imooc.com" target="_blank">实战课程</a></p>                                            <p><a class="go-link" href="//class.imooc.com/" target="_blank">职业路径</a></p>                                        </div>                                    </div>                                    <div class="more-box clearfix">                                        <div class="l show-box">                                            <span class="text"><a href="//order.imooc.com/myorder" target="_blank">我的订单中心</a></span>                                        </div>                                        <a href="//order.imooc.com/pay/cart" target="_blank" class="r moco-btn moco-btn-red go-cart">去购物车</a>                                    </div></div>
					</li>             
					<li class="header-signin">
						<a href="#" id="js-signin-btn">登录</a> / <a href="#" id="js-signup-btn">注册</a>
					</li>             
				</ul>
			</div>
					<div class="search-warp clearfix" style="min-width: 32px; height: 72px;">
								<div class="pa searchTags">
										<a href="//class.imooc.com/sc/20" target="_blank">前端入门</a>
										<a href="//class.imooc.com/sc/18" target="_blank">Java入门</a>
										<a href="//class.imooc.com/sc/41" target="_blank">C</a>
									</div>
				
				<div class="search-area" data-search="top-banner">
					<input class="search-input" data-suggest-trigger="suggest-trigger" type="text" autocomplete="off">
					<input type="hidden" class="btn_search" data-search-btn="search-btn">
					<ul class="search-area-result" data-suggest-result="suggest-result">
					</ul>
				</div>
				<div class="showhide-search" data-show="no"><i class="icon-search"></i></div>
			</div>
		</div>
	</div>
  <div class="ml-box">
        <div class="ml-box3">
            <div class="ml-top">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item><a href="#/home">课程</a></el-breadcrumb-item>
                    <el-breadcrumb-item>目录</el-breadcrumb-item>
                </el-breadcrumb>
                <h3>{{list.title}}</h3>
                <div class="ml-botbox">
                    <ul class="ml-bot">
                        <div class="ksxx">开始学习 丨☆</div>
                        <li class="ml-xxrs">
                            <h4>学习人数</h4>
                            <p>{{list.view}}</p>
                        </li>
                        <li class="ml-xxrs">
                            <h4>难度级别</h4>
                            <p>初级</p>
                        </li>
                        <li class="ml-xxrs">
                            <h4>课程时常</h4>
                            <p>1小时3分</p>
                        </li>
                        <li class="ml-xxrs">
                            <h4>综合评分</h4>
                            <p>10.0</p>
                        </li>

                    </ul>
                    <ul class="ml-bot2">
                        <li><img src="../img/QQ.png" alt=""></li>
                        <li><img src="../img/weibo.png" alt=""></li>
                        <li><img src="../img/wechat.png" alt=""></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        <div id="list-biao">
            <div class="lsb-box1">
              <p>简介：本课程将带领大家一起学习如何让数据逻辑与UI的结合使用、react的事件处理机制以及react对DOM模型的操作</p>
              <ul class="daohang">
                  <li style="color: #00b142">章节</li>
                  <li>评论</li>
                  <li>问答</li>
                  <li>笔记</li>
              </ul>
            <ul class="list1" v-for="(chapter,i) in list.chapters" :key="chapter.id">
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item name="1">
                        <template slot="title">
                            <i class="el-icon-menu"></i>&nbsp; {{chapter.title}}
                        </template>
                        <ul class="list1-ul">
                          <a href="#/video">
                            <li class="list1-ulli" v-for="(section,j) in chapter.sections" :key="section.id">
                                <div>
                                    <span><b>▶</b> {{(i+1)+'-'+(j+1)}}</span>
                                    {{section.title}}
                                    <span></span>
                                </div>
                                <span class="zzx2">最近学习 <b>●</b></span>
                            </li>
                          </a>                                
                        </ul>
                    </el-collapse-item>
                </el-collapse>

            </ul>
          </div>
    </div>
  <div class="aside r">
    <div class="bd">
      <div class="box mb40 js-usercard-box">
      <h4>讲师提示</h4>
        <div class="teacher-info">
          <a href="/u/4662028/courses?sort=publish" target="_blank">
            <img data-userid="4662028" class="js-usercard-dialog" src="//img3.mukewang.com/5861d3ab0001389402000200-80-80.jpg" width="80" height="80">
          </a>
          <span class="tit">
            <a href="/u/4662028/courses?sort=publish" target="_blank">黑影儿</a><i class="icon-imooc"></i>
          </span>
          <span class="job">全栈工程师</span>
        </div>
          <div class="course-info-tip">
            <dl class="first">
            <dt>课程须知</dt>
            <dd class="autowrap">1、知道云是什么。
                2、如果你负责一个初创项目的云选型，那么本课程是帮你了解AWS的一个不错的机会。。
            </dd>
            </dl>
            <dl>
                <dt>老师告诉你能学到什么？</dt>
                <dd class="autowrap">1、云平台选择的基本思路
2、介绍国际区域与中国区AWS的区别
3、介绍AWS的主要功能
4、如果在AWS上部署一个高可用的互联网项目
</dd>
      </dl>
    </div>
  </div>
  </div></div>
</div>
</template>
<script>
export default {
  data: function() {
    return {
      activeNames: ["1"],
      list: {}
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  },
  mounted: function() {
    fetch("/play_data?course_id=2")
      .then(r => r.json())
      .then(v => (this.list = v));
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
.ml-box {
  width: 100%;
  height: 200px;
  padding-top: 0px;
  background: url("../img/b.jpg") no-repeat;
  background-size: 100%;
  position: relative;
}
.ml-box3 {
  width: 100%;
  height: 200px;
  position: absolute;
  top: 0px;
  left: 0;
  background: -webkit-linear-gradient(
    left,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
  background: -o-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  background: -moz-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  background: linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.ml-top {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}
.ml-top h3 {
  font-size: 30px;
  padding-top: 10px;
  padding-bottom: 20px;
  font-weight: normal;
  color: white;
}
#list-biao {
  width: 1200px;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.lsb-box1 {
  width: 900px;
  height: auto;
}
.lsb-box1 p {
  padding: 45px 60px 0 5px;
  font-size: 14px;
  color: #666;
}
.daohang {
  width: 100%;
  height: 80px;
  padding: 0 5px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.daohang li {
  padding: 0 60px 0 0;
  font-size: 16px;
  color: #333;
  font-weight: bold;
  cursor: pointer;
}
.list1 {
  padding: 0 30px 0px;
  box-sizing: border-box;
  background: #fff;
  border-bottom: 1px solid #eee;
}

.list1 .ops {
  line-height: 60px;
  color: #777;
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ops b {
  padding: 0 10px 0 0;
  font-size: 18px;
  box-sizing: border-box;
}
.list1-ulli {
  /*margin: 0 35px 0 20px;*/
  line-height: 40px;
  background: #f3f5f7;
}
.list1-ulli:hover {
  background: #2b333b;
}
.list1-ul {
  padding-bottom: 15px;
}
.el-collapse-item__content {
  padding-bottom: 0 !important;
}
.list1-ul li {
  font-size: 13px;
  color: #666;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7px;
}
.list1-ul li:hover {
  color: #fff;
  cursor: pointer;
}
.list1-ul li b {
  padding: 0 10px 0 15px;
  box-sizing: border-box;
}

.zzx2 {
  color: #00b142;
  font-size: 10px;
  /*opacity: 0;*/
}
.zzx2 b {
  line-height: 40px;
  /*font-size:26px;*/
}
.lsb-box2 {
  width: 300px;
  height: auto;
  background: paleturquoise;
}
.el-collapse-item__header {
  height: 60px !important;
  line-height: 60px !important;
  font-size: 16px !important;
  font-weight: bold !important;
  border: 0 !important;
}
.el-collapse-item__wrap {
  border: 0 !important;
}
.el-collapse-item__content {
  padding-bottom: 0 !important;
}
.el-collapse-item__arrow {
  height: 60px !important;
  line-height: 60px !important;
}
.el-breadcrumb {
  padding: 15px 0;
}
.ml-botbox {
  width: 100%;
  height: 55px;
  /*background: palegreen;*/
  display: flex;
  justify-content: space-between;
}
.el-breadcrumb__inner,
.el-breadcrumb__inner a {
  color: #eee !important;
}
.el-icon-arrow-right:before {
  color: #eee !important;
}
.ksxx {
  width: 140px;
  height: 55px;
  line-height: 55px;
  text-align: center;
  background: #96c20a;
  border-radius: 20px;
  color: white;
  font-size: 17px;
  cursor: pointer;
}
.ml-bot {
  width: 700px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ml-xxrs h4 {
  font-size: 12px;
  color: #e2edde;
}
.ml-xxrs p {
  font-size: 18px;
  padding: 3px 0;
  color: #e2edde;
}
.ml-bot2 {
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ml-bot2 li {
  width: 40px;
  height: 40px;
  background: powderblue;
  border-radius: 50%;
  line-height: 61px;
  text-align: center;
}
.aside {
  width: 300px;
  height: auto;
  position: absolute;
  right: 120px;
  top: 300px;
}
.aside h4 {
  font-weight: 600;
  padding-bottom: 15px;
  letter-spacing: 3px;
  font-size: 16px;
}
.course-info-main .aside {
  margin-right: -376px;
  width: 328px;
}
.course-info-main .aside .hd {
  margin-bottom: 38px;
}
.course-info-main .aside h4 {
  font-weight: 700;
  font-size: 16px;
}
.course-info-main .aside h4 small {
  margin-left: 4px;
  font-size: 12px;
  font-weight: 500;
}
.course-info-main .aside .refresh {
  margin-top: 4px;
  font-size: 12px;
  color: #787d82;
}
.course-info-main .aside .refresh:hover {
  color: #f01400;
}
.course-info-main .aside .teacher-info {
  padding: 24px 0 20px 80px;
  overflow: hidden;
}
.teacher-info .tit {
  position: absolute;
  top: 50px;
  left: 90px;
  font-weight: 600;
}
.teacher-info .job {
  position: absolute;
  top: 85px;
  left: 90px;
  font-size: 13px;
}
.teacher-info img {
  border-radius: 50%;
}
.course-info-main .aside .teacher-info img {
  float: left;
  margin-left: -80px;
  width: 60px;
  height: 60px;
  border-radius: 100%;
}
.course-info-main .aside .teacher-info .tit {
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
}
.course-info-main .aside .teacher-info .tit a {
  font-weight: 700;
  color: #07111b;
}
.course-info-main .aside .teacher-info .tit a:hover {
  color: #f01414;
}
.course-info-main .aside .teacher-info .job {
  font-size: 12px;
  color: #71777b;
}
.course-info-main .aside .teacher-info .icon-imooc {
  color: #f01400;
  font-size: 16px;
  margin: 0 0 0 8px;
  vertical-align: -2px;
}
.course-info-main .course-brief {
  font-size: 14px;
  color: #4d555d;
  line-height: 28px;
  word-break: break-all;
  padding-left: 24px;
  padding-right: 24px;
}
.course-info-main.has-progress .aside {
  padding-top: 14px;
}
.course-info-main .content {
  float: left;
  width: 100%;
}
.course-info-main .content .ctit {
  margin-bottom: 6px;
  font-weight: 700;
  font-size: 18px;
  color: #f01400;
}
.course-info-main .content .course-brief {
  font-size: 14px;
  color: #4d555d;
  line-height: 28px;
  word-break: break-all;
}
.course-info-main .content .course-outline .bar {
  margin-bottom: 39px;
}
.course-info-main .content .course-outline .tools {
  margin: 7px 0 0 18px;
}
.course-info-main .content .course-outline .tools li {
  display: block;
  padding: 0 32px 0 20px;
  height: 20px;
  line-height: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #787d82;
  border-left: 1px solid #d0d6d9;
  cursor: default;
}
.course-info-main .content .course-outline .tools li i {
  margin-left: 8px;
  font-weight: 400;
  vertical-align: -2px;
}
.course-info-main .content .course-outline .tools li span {
  display: none;
  margin-left: 8px;
  font-size: 12px;
}
.course-info-main .content .course-outline .tools li:hover span {
  display: inline;
}
.course-info-main .content .course-outline .tools li:hover i {
  display: none;
}
.no-teacher {
  width: 100%;
  height: 20px;
}
.course-info-tip {
  position: relative;
  padding: 24px;
  background-color: #abb5b8;
  color: #4d555d;
  margin-top: 20px;
}
.course-info-tip dl.first {
  margin-bottom: 24px;
}
.course-info-tip dt {
  margin-bottom: 6px;
  font-weight: 700;
  font-size: 12px;
}
.course-info-tip dd {
  font-size: 12px;
  line-height: 24px;
  white-space: pre-line;
}
.course-info-tip:before {
  content: "";
  display: block;
  position: absolute;
  left: 50px;
  top: -10px;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top: 0 none;
  border-bottom-color: #edf1f2;
}
</style>
