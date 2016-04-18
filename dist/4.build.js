/*! This file is created by samlee Thu Mar 24 2016 15:57:59 GMT+0800 (中国标准时间) */
webpackJsonp([4],{

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(150)
	__webpack_require__(152)
	module.exports = __webpack_require__(154)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(181)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./entry.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./entry.vue","-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./entry.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./entry.vue")
	if (newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./entry.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(151);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./markdown.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./markdown.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports
	
	
	// module
	exports.push([module.id, "pre {\n  border: 1px solid #e0ded3;\n  border-radius: 4px;\n  margin: 10px 10px 40px 10px;\n  padding: 10px;\n  background-color: #000;\n  overflow: auto;\n  font-size: 14px;\n  font-family: Consolas, \"Liberation Mono\", Courier, monospace;\n}\n \ncode {\n  white-space: pre;\n  color: #FFF!important;\n  .keyword         { font-weight: bold; color: #6089d4; }\n  .string, .regexp { color: green }\n  .class, .special { color: #6089d4 }\n  .number          { color: red }\n  .comment         { color: grey }\n}", ""]);
	
	// exports


/***/ },

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(153);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./entry.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./entry.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports
	
	
	// module
	exports.push([module.id, ".faed {\n  color: rgb(255, 64, 129);\n}\n\n.entry-content {\n  border-radius: 2px;\n  padding: 20px 56px;\n  margin-bottom: 80px;\n  min-height: 300px;\n}\n\n.entry .comment > .comment__actions > button {\n  background: none;\n}\n\n.entry .comments > .comment {\n  margin-bottom: 2rem;\n}\n.page-hide{\n  opacity: 0;\n}", ""]);
	
	// exports


/***/ },

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty2 = __webpack_require__(155);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _getIterator2 = __webpack_require__(159);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _material = __webpack_require__(79);
	
	var _material2 = _interopRequireDefault(_material);
	
	var _index = __webpack_require__(81);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Cloud = _index2.default.state.Cloud;
	var Post = Cloud.Object.extend('Post');
	var Comment = Cloud.Object.extend('Comment');
	var self = null;
	exports.default = (0, _defineProperty3.default)({
	  data: function data() {
	    self = this;
	    this.getData();
	    return {
	      state: {
	        favorite: false,
	        commentTmp: '',
	        loaded: false
	      },
	      post: {
	        frontcover: 'dist/welcome_card.jpg',
	        comment: []
	      }
	    };
	  },
	
	  computed: {
	    loginState: function loginState() {
	      return _index2.default.state.logined;
	    }
	  },
	  ready: function ready() {
	    this.$nextTick(function () {
	      componentHandler.upgradeAllRegistered();
	    });
	  },
	  methods: {
	    getData: function getData() {
	      this.loadPost(function (tmp) {
	        self.post = tmp;
	        self.$nextTick(function () {
	          componentHandler.upgradeAllRegistered();
	          _index2.default.actions.hideLoading();
	          self.state.loaded = true;
	        });
	      });
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
	          self.loadComment();
	        },
	        error: function error(object, _error) {
	          self.showModal('提示', '加载失败，我也不知道怎么回事');
	        }
	      });
	    },
	    loadComment: function loadComment() {
	      var tmp = [];
	      var query = new Cloud.Query(Comment);
	      var post = new Post();
	      post.id = this.$route.params.id;
	
	      query.include('author');
	      query.equalTo('post', post);
	      query.find({
	        success: function success(comments) {
	          var _iteratorNormalCompletion = true;
	          var _didIteratorError = false;
	          var _iteratorError = undefined;
	
	          try {
	            for (var _iterator = (0, _getIterator3.default)(comments), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	              var c = _step.value;
	
	              tmp.push({
	                "avatar": c.get('author').get('avatar'),
	                "name": c.get('author').getUsername(),
	                "time": c.updatedAt,
	                "text": c.get('text')
	              });
	            }
	          } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	              }
	            } finally {
	              if (_didIteratorError) {
	                throw _iteratorError;
	              }
	            }
	          }
	
	          self.post.comment = tmp;
	        }
	      });
	    },
	
	    tapFavorite: function tapFavorite() {
	      var query = new Cloud.Query(Post);
	      query.get(this.$route.params.id, {
	        success: function success(post) {
	
	          if (self.state.favorite) {
	            self.state.favorite = false;
	            self.post.favorite--;
	            post.increment('favorite', -1);
	          } else {
	            self.state.favorite = true;
	            self.post.favorite++;
	            post.increment('favorite', 1);
	          }
	
	          post.save();
	        },
	        error: function error(object, _error2) {
	          self.showModal('提示', '点赞失败，我也不知道怎么回事');
	        }
	      });
	    },
	    addComment: function addComment() {
	      var query = new Cloud.Query(Post);
	      var post = new Post();
	      var comment = new Comment();
	
	      var currentUser = _index2.default.state.Cloud.User.current();
	      if (!currentUser) {
	        self.showModal('提示', '你还没登录呢，登录之后才能评论文章哦');
	        return false;
	      }
	
	      post.id = this.$route.params.id;
	      comment.set('post', post);
	      comment.save({
	        "author": currentUser,
	        "time": new Date(),
	        "text": self.state.commentTmp
	      }, {
	        success: function success(comment) {
	          self.loadComment();
	        },
	        error: function error(comment, _error3) {
	          self.showModal('提示', '加载失败，' + _error3.message);
	        }
	      });
	    }
	  }
	}, 'ready', function ready() {
	  _index2.default.actions.showLoading();
	  window.scrollTop = 0;
	});

/***/ },

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(156);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(157), __esModule: true };

/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(158);
	var $Object = __webpack_require__(31).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(30);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(39), 'Object', {defineProperty: __webpack_require__(35).f});

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(160), __esModule: true };

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(161);
	__webpack_require__(176);
	module.exports = __webpack_require__(178);

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(162);
	var global        = __webpack_require__(26)
	  , hide          = __webpack_require__(34)
	  , Iterators     = __webpack_require__(165)
	  , TO_STRING_TAG = __webpack_require__(174)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(163)
	  , step             = __webpack_require__(164)
	  , Iterators        = __webpack_require__(165)
	  , toIObject        = __webpack_require__(17);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(166)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },

/***/ 163:
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },

/***/ 164:
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },

/***/ 165:
/***/ function(module, exports) {

	module.exports = {};

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(167)
	  , $export        = __webpack_require__(30)
	  , redefine       = __webpack_require__(168)
	  , hide           = __webpack_require__(34)
	  , has            = __webpack_require__(16)
	  , Iterators      = __webpack_require__(165)
	  , $iterCreate    = __webpack_require__(169)
	  , setToStringTag = __webpack_require__(173)
	  , getPrototypeOf = __webpack_require__(175)
	  , ITERATOR       = __webpack_require__(174)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },

/***/ 167:
/***/ function(module, exports) {

	module.exports = true;

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(34);

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(170)
	  , descriptor     = __webpack_require__(43)
	  , setToStringTag = __webpack_require__(173)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(34)(IteratorPrototype, __webpack_require__(174)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(36)
	  , dPs         = __webpack_require__(171)
	  , enumBugKeys = __webpack_require__(28)
	  , IE_PROTO    = __webpack_require__(24)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(41)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(172).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(35)
	  , anObject = __webpack_require__(36)
	  , getKeys  = __webpack_require__(14);
	
	module.exports = __webpack_require__(39) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(26).document && document.documentElement;

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(35).f
	  , has = __webpack_require__(16)
	  , TAG = __webpack_require__(174)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(25)('wks')
	  , uid        = __webpack_require__(27)
	  , Symbol     = __webpack_require__(26).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(16)
	  , toObject    = __webpack_require__(12)
	  , IE_PROTO    = __webpack_require__(24)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(177)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(166)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(22)
	  , defined   = __webpack_require__(13);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(36)
	  , get      = __webpack_require__(179);
	module.exports = __webpack_require__(31).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(180)
	  , ITERATOR  = __webpack_require__(174)('iterator')
	  , Iterators = __webpack_require__(165);
	module.exports = __webpack_require__(31).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(19)
	  , TAG = __webpack_require__(174)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },

/***/ 181:
/***/ function(module, exports) {

	module.exports = "<div class=\"cov-blog entry cov-blog--blogpost mdl-layout mdl-js-layout has-drawer is-upgraded\">\n    <main class=\"mdl-layout__content\" :class=\"{'page-hide': !state.loaded}\">\n      <div class=\"demo-back\">\n        <a class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\" v-link=\"'/'\" title=\"go back\" role=\"button\">\n          <i class=\"material-icons\" role=\"presentation\">arrow_back</i>\n        </a>\n      </div>\n      <div class=\"cov-blog__posts mdl-grid\">\n        <div class=\"mdl-card mdl-shadow--4dp mdl-cell mdl-cell--12-col\">\n          <div class=\"mdl-card__media mdl-color-text--grey-50\" :style=\"{'background-image': 'url('+post.frontcover+')'}\">\n            <h3>{{post.title}}</h3>\n            <div class=\"mdl-card__menu\">\n              <button id=\"demo-menu-lower-right\" class=\"mdl-button mdl-js-button mdl-button--icon\">\n                <i class=\"material-icons\">more_vert</i>\n              </button>\n              <ul class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect\" for=\"demo-menu-lower-right\">\n                <li disabled v-if=\"!loginState.value\" class=\"mdl-menu__item\">编辑</li>\n                <li v-if=\"loginState.value\" v-link=\"'../edit/'+this.$route.params.id\" class=\"mdl-menu__item\">编辑</li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"mdl-color-text--grey-700 mdl-card__supporting-text meta\">\n            <div class=\"minilogo\"><img :src=\"post.avatar\"></div>\n            <div>\n              <strong>{{post.author}}</strong>\n              <span>{{post.time | timeago}}</span>\n            </div>\n            <div class=\"section-spacer\"></div>\n            <div class=\"meta__favorites\" v-tap=\"tapFavorite\">\n              {{post.favorite}} <i class=\"material-icons\" role=\"presentation\" :class=\"{'faed':state.favorite}\">favorite</i>\n              <span class=\"visuallyhidden\">favorites</span>\n            </div>\n            <div>\n              <i class=\"material-icons\" role=\"presentation\">share</i>\n              <span class=\"visuallyhidden\">share</span>\n            </div>\n          </div>\n          <div class=\"entry-content\">\n            {{{post.text | marked}}}\n          </div>\n          <div class=\"mdl-color-text--primary-contrast mdl-card__supporting-text comments\">\n            <div>\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                <textarea rows=1 class=\"mdl-textfield__input\" v-model=\"state.commentTmp\"></textarea>\n                <label for=\"comment\" class=\"mdl-textfield__label\">Join the discussion</label>\n              </div>\n              <button v-tap=\"addComment\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\">\n                <i class=\"material-icons\" role=\"presentation\">check</i><span class=\"visuallyhidden\">add comment</span>\n              </button>\n            </div>\n            <div class=\"comment mdl-color-text--grey-700\" v-for=\"comment in post.comment\">\n              <header class=\"comment__header\">\n                <img :src=\"comment.avatar\" class=\"comment__avatar\">\n                <div class=\"comment__author\">\n                  <strong>{{comment.name}}</strong>\n                  <span>{{comment.time | timeago}}</span>\n                </div>\n              </header>\n              <div class=\"comment__text\">\n                {{comment.text}}\n              </div>\n            </div>\n          </div>\n        </div>\n        <nav class=\"demo-nav mdl-color-text--grey-50 mdl-cell mdl-cell--12-col\">\n          <a class=\"demo-nav__button\">\n            <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon mdl-color--white mdl-color-text--grey-900\" role=\"presentation\">\n              <i class=\"material-icons\">arrow_back</i>\n            </button>\n            Newer\n          </a>\n          <div class=\"section-spacer\"></div>\n          <a class=\"demo-nav__button\">\n              Older\n              <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon mdl-color--white mdl-color-text--grey-900\" role=\"presentation\">\n                <i class=\"material-icons\">arrow_forward</i>\n              </button>\n            </a>\n        </nav>\n      </div>\n    </main>\n    <div class=\"mdl-layout__obfuscator\"></div>\n  </div>";

/***/ }

});
//# sourceMappingURL=4.build.js.map