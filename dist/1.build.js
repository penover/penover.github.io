/*! This file is created by samlee Thu Mar 24 2016 15:57:59 GMT+0800 (中国标准时间) */
webpackJsonp([1],{

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(137)
	module.exports = __webpack_require__(139)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(140)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./index.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./index.vue","-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./index.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./index.vue")
	if (newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./index.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },

/***/ 137:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(138);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./index.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },

/***/ 139:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _material = __webpack_require__(79);
	
	var _material2 = _interopRequireDefault(_material);
	
	var _index = __webpack_require__(81);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Cloud = _index2.default.state.Cloud;
	exports.default = {
	  data: function data() {
	    self = this;
	    return {
	      site: {
	        name: 'Cov Blog',
	        skip: 0
	      },
	      posts: []
	    };
	  },
	
	  asyncData: function asyncData(resolve, reject) {
	    var self = this;
	    this.loadPost(0, function (tmp) {
	      _index2.default.actions.hideLoading();
	      resolve({
	        posts: tmp
	      });
	      self.site.skip = 10;
	      self.$nextTick(function () {
	        componentHandler.upgradeAllRegistered();
	      });
	    });
	  },
	  ready: function ready() {
	    _index2.default.actions.showLoading();
	    window.scrollTop = 0;
	  },
	  computed: {
	    loginState: function loginState() {
	      return _index2.default.state.logined;
	    }
	  },
	  methods: {
	    getData: function getData() {
	      this.loadPost(self.site.skip, function (tmp) {
	        _index2.default.actions.hideLoading();
	        self.posts = tmp;
	        self.site.skip = 10;
	        self.$nextTick(function () {
	          componentHandler.upgradeAllRegistered();
	        });
	      });
	    },
	    showLogin: function showLogin() {
	      _index2.default.actions.showLogin();
	      document.getElementById('indexDrawer').setAttribute('class', 'mdl-layout__drawer');
	      document.getElementsByClassName('mdl-layout__obfuscator')[0].setAttribute('class', 'mdl-layout__obfuscator');
	
	      this.$nextTick(function () {
	        componentHandler.upgradeAllRegistered();
	      });
	    },
	    hideLogin: function hideLogin(event) {
	      if (event.target == document.getElementById('showLogin')) {
	        return true;
	      }
	      _index2.default.actions.hideLogin();
	      _index2.default.actions.hideSign();
	    },
	    showModal: function showModal() {
	      _index2.default.actions.showModal('提示', '你的文章太过糟糕，不能完成提交');
	      document.getElementById('indexDrawer').setAttribute('class', 'mdl-layout__drawer');
	      document.getElementsByClassName('mdl-layout__obfuscator')[0].setAttribute('class', 'mdl-layout__obfuscator');
	
	      this.$nextTick(function () {
	        componentHandler.upgradeAllRegistered();
	      });
	    },
	    loadPost: function loadPost(skip, add) {
	      var Post = Cloud.Object.extend('Post');
	      var query = new Cloud.Query(Post);
	      var tmp = [];
	      query.addDescending('updatedAt');
	      query.skip(skip);
	      query.limit(10);
	      query.include('author');
	      query.find({
	        success: function success(results) {
	          var object = null;
	          for (var i = 0; i < results.length; i++) {
	            object = results[i];
	            tmp.push({
	              "id": object.id,
	              "title": object.get('title'),
	              "frontcover": object.get('frontcover'),
	              "text": object.get('text'),
	              "author": object.get('author').getUsername(),
	              "avatar": object.get('author').get('avatar'),
	              "time": object.updatedAt,
	              "favorite": object.get('favorite'),
	              "comment": object.get('comment')
	            });
	          }
	          add(tmp);
	        },
	        error: function error(_error) {
	          console.log('Error: ' + _error.code + ' ' + _error.message);
	        }
	      });
	    },
	    clickMore: function clickMore() {
	      var self = this;
	
	      this.loadPost(this.site.skip, function (tmp) {
	        for (var i = 0; i < tmp.length; i++) {
	          self.posts.push(tmp[i]);
	        }
	        self.site.skip = self.site.skip + 10;
	        self.$nextTick(function () {
	          componentHandler.upgradeAllRegistered();
	        });
	      });
	    },
	    goEntry: function goEntry(id) {
	      window.scrollTop = 0;
	      this.$route.router.go('entry/' + id);
	    }
	  }
	};

/***/ },

/***/ 140:
/***/ function(module, exports) {

	module.exports = "<div @click=\"hideLogin\" class=\"cov-blog mdl-layout mdl-js-layout has-drawer is-upgraded\">\n      <header class=\"mdl-layout__header mdl-layout__header--transparent\">\n        <div class=\"mdl-layout__header-row\">\n          <!-- Title -->\n          <span class=\"mdl-layout-title\">{{site.name}}</span>\n          \n        </div>\n      </header>\n      <div id=\"indexDrawer\" class=\"mdl-layout__drawer\">\n        <span class=\"mdl-layout-title\">{{site.name}}</span>\n        <nav class=\"mdl-navigation\">\n          <a class=\"mdl-navigation__link\" v-if=\"loginState.value\" >{{loginState.user.getUsername()}}</a>\n          <a class=\"mdl-navigation__link\" id=\"showLogin\" v-if=\"!loginState.value\" v-tap=\"showLogin\">Login</a>\n          <a class=\"mdl-navigation__link\" v-link=\"{path:'/write'}\">New Post</a>\n          <a class=\"mdl-navigation__link\" v-tap=\"showModal\" >Search</a>\n          <a class=\"mdl-navigation__link\" v-link=\"'entry/568f419000b0bca077d8caf4'\">About</a>\n        </nav>\n      </div>\n      <main class=\"mdl-layout__content\">\n\n        <div class=\"cov-blog__posts mdl-grid\">\n\n          <div v-link=\"{ name: 'entry', params: { id: post.id }}\" class=\"mdl-card on-the-road-again mdl-cell mdl-cell--12-col\" v-for=\"post in posts\">\n            <div class=\"mdl-card__media mdl-color-text--grey-50\" :style=\"{'background-image': 'url('+post.frontcover+')'}\">\n              <h3><a >{{post.title}}</a></h3>\n            </div>\n            <div class=\"mdl-color-text--grey-600 mdl-card__supporting-text\">{{post.text | shorttext}}\n            </div>\n            <div class=\"mdl-card__supporting-text meta mdl-color-text--grey-600\">\n              <div class=\"minilogo\"><img :src=\"post.avatar\" alt=\"\"></div>\n              <div>\n                <strong>{{post.author}}</strong>\n                <span>{{post.time | timeago}}</span>\n              </div>\n            </div>\n          </div>\n\n          <nav class=\"demo-nav mdl-cell mdl-cell--12-col\">\n            <div class=\"section-spacer\"></div>\n            <a v-tap=\"clickMore\" class=\"demo-nav__button\" title=\"show more\">\n              More\n              <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\">\n                <i class=\"material-icons\" role=\"presentation\">arrow_forward</i>\n              </button>\n            </a>\n          </nav>\n        </div>\n      </main>\n    </div>";

/***/ }

});
//# sourceMappingURL=1.build.js.map