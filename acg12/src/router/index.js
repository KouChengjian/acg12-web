import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// const _import = require('./import-' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {path: '/404', component: _import('error/404'), name: '404', desc: '404未找到'},
    {path: '/aaa', name: 'HelloWorld', component: HelloWorld}

    // {path: '/index', name: 'index', component: _import('index')}
  ]
})
