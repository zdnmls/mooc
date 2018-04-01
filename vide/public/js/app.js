import vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import videoPage from './video1.vue';
import indexPage from "./index.vue";
import detailPage from "./detail.vue";
import homePage from "./home page.vue";
Vue.use(ElementUI);
var app = new Vue({
    el: '#app',
    data: {
        hash: '#/home'
    },
    render: function (createElement) {
        if (this.hash == '#/') {
            return createElement(indexPage)
        } else if (this.hash == '#/video') {
            return createElement(videoPage)
        } else if (this.hash == '#/detail') {
            return createElement(detailPage)
        } else if (this.hash == '#/home') {
            return createElement(homePage)
        }
    },
    mounted: function () {
        window.onhashchange = () => {
            this.hash = window.location.hash;
        }
        window.onhashchange();
        if (window.location.hash == '') {
            window.location.href = '#/home';
        }
    }
})