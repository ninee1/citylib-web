import Vue from 'vue'
import App from './App.vue'
import BaiduMap from 'vue-baidu-map'
import axios from 'axios';
import ElementUI from 'element-ui'
import VueAxios from 'vue-axios'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.config.productionTip = false
Vue.use(BaiduMap,{
  ak:'F9jWOUu0NEakjr7EdZdZ6KRW2yUAnWqj'
})
Vue.use(ElementUI)
// axios.defaults.baseURL="//211.87.232.144:8081"
axios.defaults.baseURL="//localhost:8081"
Vue.use(VueAxios, axios)
NProgress.inc(0.4)
NProgress.configure({
  easing: "ease",
  speed: 500,
  showSpinner: false
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')