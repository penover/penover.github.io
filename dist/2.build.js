/*! This file is created by samlee Thu Mar 24 2016 15:57:59 GMT+0800 (中国标准时间) */
webpackJsonp([2],{

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(142)
	module.exports = __webpack_require__(144)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(145)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./write.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./write.vue","-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./write.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./write.vue")
	if (newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./write.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(143);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./write.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./write.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 143:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports
	
	
	// module
	exports.push([module.id, ".writing {\n    background: #fff\n}\n\n.writing .mdl-layout__content {\n    margin-top: 112px;\n}\n\n@media screen and (max-width: 1024px) {\n    \n}\n\n.writing .mdl-navigation__link {\n    cursor: pointer;\n}\n\n.writing .mdl-textfield {\n    margin: 1rem 0;\n    width: 100%;\n}\n\n.writing .preview-content {\n    border-radius: 2px;\n    padding: 220px 56px 56px 56px;\n    margin-bottom: 80px;\n    min-height: 600px;\n    position: relative;\n}\n\n.writing .preview-content .mdl-card__title{\n    position: absolute;\n    width: 100%;\n    left: 0;\n    top: 0;\n    height: 200px;\n}\n.writing .mdl-layout__header-row {\n    height: 56px;\n    padding: 0 16px 0 0px;\n}\n\n.writing .mdl-layout-title {\n    padding-left: 20px;\n}\n.writing .mdl-card {\n  width: 512px;\n}\n.writing .mdl-card__title {\n    position: relative;\n    color: #fff;\n    height: 176px;\n    background: url(" + __webpack_require__(77) + ") center/cover;\n}\n#frontImg{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n}", ""]);
	
	// exports


/***/ },

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _material = __webpack_require__(79);
	
	var _material2 = _interopRequireDefault(_material);
	
	var _autosize = __webpack_require__(80);
	
	var _autosize2 = _interopRequireDefault(_autosize);
	
	var _index = __webpack_require__(81);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Post = _index2.default.state.Cloud.Object.extend('Post');
	var Cloud = _index2.default.state.Cloud;
	var self = null;
	exports.default = {
	    data: function data() {
	        self = this;
	        var edit = false;
	        if (this.$route.params.id != undefined) {
	            edit = true;
	        }
	        return {
	            edit: edit,
	            post: {
	                title: '',
	                content: "",
	                frontImg: null
	            }
	        };
	    },
	
	    ready: function ready() {
	        _index2.default.actions.showLoading();
	
	        if (this.edit) {
	            this.loadPost(function (tmp) {
	                self.post = {
	                    title: tmp.title,
	                    content: tmp.text,
	                    frontImg: tmp.frontcover
	                };
	
	                self.$nextTick(function () {
	                    componentHandler.upgradeAllRegistered();
	                });
	            });
	        } else {
	            this.$nextTick(function () {
	                componentHandler.upgradeAllRegistered();
	            });
	        }
	        (0, _autosize2.default)(document.querySelector('#content'));
	    },
	    computed: {
	        loginState: function loginState() {
	            return _index2.default.state.logined;
	        }
	    },
	    methods: {
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
	        showModal: function showModal(title, text) {
	            _index2.default.actions.showModal(title, text);
	
	            this.$nextTick(function () {
	                componentHandler.upgradeAllRegistered();
	            });
	        },
	
	        loadPost: function loadPost(add) {
	            var query = new Cloud.Query(Post);
	            var tmp = null;
	            query.include('author');
	            query.get(this.$route.params.id, {
	                success: function success(post) {
	                    var object = post;
	                    tmp = {
	                        "id": object.id,
	                        "title": object.get('title'),
	                        "frontcover": object.get('frontcover'),
	                        "text": object.get('text'),
	                        "author": object.get('author').getUsername(),
	                        'avatar': object.get('author').get('avatar'),
	                        "time": object.updatedAt,
	                        "favorite": object.get('favorite'),
	                        "comment": []
	                    };
	
	                    add(tmp);
	                },
	                error: function error(object, _error) {
	                    self.showModal('提示', '加载失败，我也不知道怎么回事');
	                }
	            });
	        },
	        newPost: function newPost() {
	
	            var currentUser = _index2.default.state.Cloud.User.current();
	            if (!currentUser) {
	                self.showModal('提示', '你还没登录呢，登录之后才能提交文章哦');
	                return false;
	            }
	            if (self.post.title == '') {
	                self.showModal('提示', '标题都没有写呢');
	                return false;
	            }
	            if (self.post.content == '') {
	                self.showModal('提示', '文章内容都没有写呢');
	                return false;
	            }
	            if (self.post.frontImg == null) {
	                self.post.frontImg = 'dist/shopping.jpg';
	            }
	
	            if (!this.edit) {
	                var post = new Post();
	
	                post.save({
	                    "title": self.post.title,
	                    "frontcover": self.post.frontImg,
	                    "text": self.post.content,
	                    "author": currentUser,
	                    "favorite": 0
	                }, {
	                    success: function success(post) {
	                        self.showModal('提示', '你的文章写的太棒了，已经完成提交。');
	                    },
	                    error: function error(post, _error2) {
	                        self.showModal('提示', '你的文章写的太棒了，但是由于一些故障，没有完成提交。');
	                    }
	                });
	            } else {
	                var query = new Cloud.Query(Post);
	                query.get(this.$route.params.id, {
	                    success: function success(post) {
	
	                        post.save({
	                            "title": self.post.title,
	                            "frontcover": self.post.frontImg,
	                            "text": self.post.content,
	                            "author": currentUser
	                        }, {
	                            success: function success(post) {
	                                self.showModal('提示', '你的文章写的太棒了，已经完成提交。');
	                            },
	                            error: function error(post, _error3) {
	                                self.showModal('提示', '你的文章写的太棒了，但是由于一些故障，没有完成提交。');
	                            }
	                        });
	                    },
	                    error: function error(object, _error4) {
	                        self.showModal('提示', _error4.message);
	                    }
	                });
	            }
	        },
	        upImg: function upImg() {
	            _index2.default.actions.showLoading();
	            var fileUploadControl = document.getElementById('frontImg');
	            if (fileUploadControl.files.length < 1) {
	                self.showModal('提示', '文件类型异常');
	                return false;
	            }
	            var file = fileUploadControl.files[0];
	            var name = 'avatar.jpg';
	
	            var avFile = new Cloud.File(name, file);
	            avFile.save().then(function () {
	                self.post.frontImg = avFile.url();
	                _index2.default.actions.hideLoading();
	            }, function (error) {
	                self.showModal('提示', error.message);
	            });
	        }
	    }
	
	};

/***/ },

/***/ 145:
/***/ function(module, exports) {

	module.exports = "<div @click=\"hideLogin\" class=\"writing mdl-layout mdl-js-layout mdl-layout--fixed-header\n            mdl-layout--fixed-tabs\">\n        <header class=\"mdl-layout__header\">\n            <div class=\"mdl-layout__header-row\">\n                <div class=\"demo-back\">\n                    <a class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\" v-link=\"'/'\" title=\"go back\" role=\"button\">\n                        <i class=\"material-icons\" role=\"presentation\">arrow_back</i>\n                    </a>\n                </div>\n                <!-- Title -->\n                <span class=\"mdl-layout-title\" v-link=\"{name:'home'}\">Cov Blog</span>\n                <div class=\"mdl-layout-spacer\"></div>\n                <!-- Navigation -->\n                <nav class=\"mdl-navigation\">\n                    <a class=\"mdl-navigation__link\" @click=\"newPost\">完成</a>\n                </nav>\n            </div>\n            <!-- Tabs -->\n            <div class=\"mdl-layout__tab-bar mdl-js-ripple-effect\">\n                <a href=\"#fixed-tab-1\" class=\"mdl-layout__tab is-active\">编辑</a>\n                <a href=\"#fixed-tab-2\" class=\"mdl-layout__tab\">预览</a>\n            </div>\n        </header>\n        <main class=\"mdl-layout__content\">\n            <section class=\"mdl-layout__tab-panel is-active\" id=\"fixed-tab-1\">\n                <div class=\"page-content\">\n                    <div class=\"mdl-grid\">\n                        <div class=\"mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet\"></div>\n                        <div class=\"mdl-cell mdl-cell--8-col mdl-cell--10-col-tablet\">\n                            <div class=\"mdl-card__title\" :style=\"{'background-image': 'url('+(post.frontImg == null ? 'dist/welcome_card.jpg' : post.frontImg)+')'}\">\n                                <h2 class=\"mdl-card__title-text\" >{{post.title=='' ? '文章的封面图' : post.title}}</h2>\n                                 <div class=\"mdl-card__menu\">\n                                <button id=\"demo-menu-lower-right\"\n                                          class=\"mdl-button mdl-js-button mdl-button--icon\">\n                                    <i class=\"material-icons\">more_vert</i>\n                                  </button>\n\n                                  <ul class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect\"\n                                      for=\"demo-menu-lower-right\">\n                                    <li class=\"mdl-menu__item\"><input @change=\"upImg\" type=\"file\" id=\"frontImg\">上传新图片</li>\n                                  </ul>\n                                  </div>\n                            </div>\n                            <div class=\"mdl-textfield mdl-js-textfield\">\n                                <input class=\"mdl-textfield__input\" type=\"text\" v-model=\"post.title\">\n                                <label class=\"mdl-textfield__label\">Title</label>\n                            </div>\n                            <div class=\"mdl-textfield mdl-js-textfield\">\n                                <textarea class=\"mdl-textfield__input\" id=\"content\" v-model=\"post.content\" type=\"text\" rows=\"15\"></textarea>\n                                <label class=\"mdl-textfield__label\">Content</label>\n                            </div>\n                        </div>\n                        <div class=\"mdl-cell mdl-cell--2-col mdl-cell--1-col-phone\"></div>\n                    </div>\n                </div>\n            </section>\n            <section class=\"mdl-layout__tab-panel\" id=\"fixed-tab-2\">\n                <div class=\"page-content\">\n                    <div class=\"preview-container mdl-grid\">\n                        <div class=\"mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone\"></div>\n                        <div class=\"preview-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col\">\n                        <div class=\"mdl-card__title\" :style=\"{'background-image': 'url('+(post.frontImg == null ? 'dist/welcome_card.jpg' : post.frontImg)+')'}\">\n                                <h2 class=\"mdl-card__title-text\" >{{post.title=='' ? '文章的封面图' : post.title}}</h2>\n                            </div>\n                            <!-- <h3>{{post.title}}</h3> --> {{{post.content | marked}}}\n                        </div>\n                    </div>\n                </div>\n            </section>\n        </main>\n    </div>";

/***/ }

});
//# sourceMappingURL=2.build.js.map