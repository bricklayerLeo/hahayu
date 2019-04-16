// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

import VueRouter from 'vue-router'

Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color="#"+Math.random().toString(16).slice(2,8);
  }
})

Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1260px";
    }
  
  }
})

Vue.filter("to-uppercase",function(value){
  return value.toUpperCase();
})


Vue.filter("snippet",function(value){
return value.slice(0,100)+'...'
})

Vue.use(VueRouter)

import router from './router'
import { randomBytes } from 'crypto';

Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
