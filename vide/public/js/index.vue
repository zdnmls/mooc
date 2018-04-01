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
		<div id="main">
		<div class="wrap ">
			<div class="top">
				<div class="course-content">
					<div class="course-nav-box">
						<div class="course-nav-row clearfix">
							<span class="hd l">方向：</span>
							<div class="bd">
								<ul class="">
									<li v-on:click.prevent='state.fid = v.id'
									 v-for="v in [].concat({id:0,name:'全部'}).concat(pageData.fields)" :key="v" :class="'course-nav-item ' + ((v&&(state.fid==v.id))?'on':'')">
										<a href="" data-ct="fe">{{v&&v.name}}</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="course-nav-row clearfix">
							<span class="hd l">分类：</span>
							<div class="bd">
								<ul class="">
									<li v-on:click.prevent="state.cid = v.id"
									v-for="v in [].concat({id:0,name:'全部'}).concat(pageData.categorys.filter(v=>state.fid?(v.fid == state.fid):v))"	:key="v.id"	:class="'course-nav-item ' + ((state.cid == v.id)?'on':'')"					
									>
										<a href="" >{{v.name}}</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="course-nav-row clearfix border_bottom_none">
							<span class="hd l">类型：</span>
							<div class="bd">
								<ul class="">
									<li v-on:click.prevent="state.tid = v.id" v-for="v in [].concat({id:0,name:'全部'}).concat(pageData.types)" :key="v" :class="'course-nav-item ' + ((state.tid == v.id)? 'on' :'') ">
										<a href="">{{v.name}}</a>
									</li>   
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="course-tool-bar clearfix">
				<div class="tool-left l">
					<a href=""
					v-for="v in [{id:1,name:'最新'},{id:2,name:'最热'}]" :key="v.id"
					:class="'sort-item ' + ((state.new_hot == v.id)?'active':'')"
					v-on:click.prevent='state.new_hot = v.id'
					>
					{{v.name}}
					</a>
          		</div>
				<div class="l">
					<span class="tool-item" style="display: none;">
						<a class="follow-learn tool-chk" href="javascript:void(0);">跟我学</a>
					</span>
				</div>
				<div class="tool-right r">
					
					<span class="tool-item total-num">
						共<b>833</b>个课程
					</span>
					<span class="tool-item tool-pager">
						<span class="pager-num">
							<b class="pager-cur">1</b>/<em class="pager-total">200</em>
						</span>
							<a href="javascript:void(0)" class="pager-action pager-prev  disabled"><i class="icon-left2"></i></a>

							<a href="/course/list?page=2" class="pager-action pager-next"><i class="icon-right2"></i></a>
					</span>
				</div>
				<div class="tool-iseasy r"><strong>难度：</strong>
					<a href="" :class="'sort-item ' + ((state.did ==v.id)?'active':'')" v-for="v in [].concat({id:0,name:'全部'} ).concat(pageData.degrees)" :key="v.id" v-on:click.prevent="state.did = v.id">{{v.name}}</a>
				</div>
			</div>
				<div class="course-list">
					<div class="moco-course-list">
						<ul class="clearfix">

				<div class="course-card-container" v-for="v in filter (pageData.courses)" :key='v.id'>
		<a target="_blank" href="#/detail" class="course-card">
			
			<div class="course-card-top">
				<img class="course-banner lazy" :src="v.pic" style="display: inline;">
						<div class="course-label">
							<label v-for="o in v.lable" :key='o.id'>{{o.name}}</label>
						</div>
			</div>
			<div class="course-card-content">
				<h3 class="course-card-name">{{v.title}}</h3>
				<div class="clearfix course-card-bottom">
					<div class="course-card-info">
						<span>{{v.d_name}}</span><span><i class="el-icon-star-off"></i>{{v.view_count}}</span>
					</div>
					<p class="course-card-desc">{{v.des}}</p>
				</div>
			</div>
		</a>
	</div>			
	</ul>
</div>
		<div class="page"><span class="disabled_page">首页</span><span class="disabled_page">上一页</span><a href="javascript:void(0)" class="active text-page-tag">1</a><a class="text-page-tag" href="/course/list?page=2">2</a><a class="text-page-tag" href="/course/list?page=3">3</a><a class="text-page-tag" href="/course/list?page=4">4</a><a class="text-page-tag" href="/course/list?page=5">5</a><a class="text-page-tag" href="/course/list?page=6">6</a><a class="text-page-tag" href="/course/list?page=7">7</a><a href="/course/list?page=2">下一页</a><a href="/course/list?page=34">尾页</a></div>
			</div>

		</div>
	</div>
</div>
</template>
<script>
export default {
  data: function() {
    return {
      state: {
        fid: 0,
        cid: 0,
        tid: 0,
        new_hot: 1, // 1 代表最新 2 代表最热
        did: 0,
        page: 1,
        pageNumber: 20,
      },
      pageData: {
        fid: [],
        cid: [],
        tid: [],
        did: []
      }
    };
  },
  watch: {
    "state.fid": function() {
      this.state.cid = 0;
    }
  },
  mounted: function() {
    fetch("/index_page_data")
      .then(r => r.json())
      .then(v => (this.pageData = v));
  },
  methods: {
    format: function(string) {
      return new Date(string).valueOf();
    },
    // 给我所有的课程
    // 我给你筛选后的结果
    // 根据state里面的数据进行层层过滤
    filter: function(arr) {
      //    根据state里面的数据层层过滤
      let { fid, tid, did, new_hot, cid } = this.state;
      return arr
        .filter(v => (fid ? v.fid == fid : v))
        .filter(v => (tid ? v.tid == tid : v))
        .filter(v => (did ? v.did == did : v))
        .filter(v => {
          if (cid) {
            return v.lable.filter(o => o.category_id == cid).length;
          } else {
            return v;
          }
        })
        .sort((a, b) => {
          if (new_hot == 1) {
            new Date(b.create_time) - this.format(a.create_time);
          } else if (new_hot == 2) {
            return b.view_count - a.view_count;
          }
        });
    }
  }
};
</script>

