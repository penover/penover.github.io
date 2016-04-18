var Vue = require('vue')
var VueRouter = require('vue-router')
var VueAsyncData = require('vue-async-data')
var VueResource = require('vue-resource')
var App = require('./app.vue')
var filter = require('./filter');
var directive = require('./directive')
var index = require('./components/index.vue')
var write = require('./components/write.vue')
var entry = require('./components/entry.vue')
var storage = require('./components/storage.vue')

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueAsyncData)

Vue.config.debug = true;

Object.keys(filter).forEach(function(k) {
  Vue.filter(k, filter[k])
});


Object.keys(directive).forEach(function(k) {
  Vue.directive(k, directive[k])
});



var router = new VueRouter()

router.map({
		'/': {
			name:'home',
            component: index
        },
        '/storage':{
        	name:'storage',
        	component:storage
        },
        '/write': {
        	name:'write',
            component: write
        },
        '/edit/:id': {
        	name:'edit',
            component: write
        },
        'entry/:id':{
        	name:'entry',
        	component: entry
        }
    })

router.redirect({
  // 重定向任意未匹配路径到 /
  '*': '/'
})

router.start(App, 'app')
