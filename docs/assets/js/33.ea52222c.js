(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{386:function(e,t,n){"use strict";n(387)("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),n(388))},387:function(e,t,n){"use strict";var r=n(1),o=n(4),i=n(3),a=n(77),c=n(16),u=n(218),s=n(136),f=n(217),l=n(5),d=n(11),p=n(2),v=n(138),y=n(32),h=n(103);e.exports=function(e,t,n){var b=-1!==e.indexOf("Map"),m=-1!==e.indexOf("Weak"),g=b?"set":"add",O=o[e],w=O&&O.prototype,_=O,j={},x=function(e){var t=i(w[e]);c(w,e,"add"==e?function(e){return t(this,0===e?0:e),this}:"delete"==e?function(e){return!(m&&!d(e))&&t(this,0===e?0:e)}:"get"==e?function(e){return m&&!d(e)?void 0:t(this,0===e?0:e)}:"has"==e?function(e){return!(m&&!d(e))&&t(this,0===e?0:e)}:function(e,n){return t(this,0===e?0:e,n),this})};if(a(e,!l(O)||!(m||w.forEach&&!p((function(){(new O).entries().next()})))))_=n.getConstructor(t,e,b,g),u.enable();else if(a(e,!0)){var R=new _,S=R[g](m?{}:-0,1)!=R,P=p((function(){R.has(1)})),E=v((function(e){new O(e)})),C=!m&&p((function(){for(var e=new O,t=5;t--;)e[g](t,t);return!e.has(-0)}));E||((_=t((function(e,t){f(e,w);var n=h(new O,e,_);return null!=t&&s(t,n[g],{that:n,AS_ENTRIES:b}),n}))).prototype=w,w.constructor=_),(P||C)&&(x("delete"),x("has"),b&&x("get")),(C||S)&&x(g),m&&w.clear&&delete w.clear}return j[e]=_,r({global:!0,constructor:!0,forced:_!=O},j),y(_,e),m||n.setStrong(_,e,b),_}},388:function(e,t,n){"use strict";var r=n(13).f,o=n(38),i=n(391),a=n(51),c=n(217),u=n(136),s=n(139),f=n(137),l=n(8),d=n(218).fastKey,p=n(25),v=p.set,y=p.getterFor;e.exports={getConstructor:function(e,t,n,s){var f=e((function(e,r){c(e,p),v(e,{type:t,index:o(null),first:void 0,last:void 0,size:0}),l||(e.size=0),null!=r&&u(r,e[s],{that:e,AS_ENTRIES:n})})),p=f.prototype,h=y(t),b=function(e,t,n){var r,o,i=h(e),a=m(e,t);return a?a.value=n:(i.last=a={index:o=d(t,!0),key:t,value:n,previous:r=i.last,next:void 0,removed:!1},i.first||(i.first=a),r&&(r.next=a),l?i.size++:e.size++,"F"!==o&&(i.index[o]=a)),e},m=function(e,t){var n,r=h(e),o=d(t);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==t)return n};return i(p,{clear:function(){for(var e=h(this),t=e.index,n=e.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete t[n.index],n=n.next;e.first=e.last=void 0,l?e.size=0:this.size=0},delete:function(e){var t=h(this),n=m(this,e);if(n){var r=n.next,o=n.previous;delete t.index[n.index],n.removed=!0,o&&(o.next=r),r&&(r.previous=o),t.first==n&&(t.first=r),t.last==n&&(t.last=o),l?t.size--:this.size--}return!!n},forEach:function(e){for(var t,n=h(this),r=a(e,arguments.length>1?arguments[1]:void 0);t=t?t.next:n.first;)for(r(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!m(this,e)}}),i(p,n?{get:function(e){var t=m(this,e);return t&&t.value},set:function(e,t){return b(this,0===e?0:e,t)}}:{add:function(e){return b(this,e=0===e?0:e,e)}}),l&&r(p,"size",{get:function(){return h(this).size}}),f},setStrong:function(e,t,n){var r=t+" Iterator",o=y(t),i=y(r);s(e,t,(function(e,t){v(this,{type:r,target:e,state:o(e),kind:t,last:void 0})}),(function(){for(var e=i(this),t=e.kind,n=e.last;n&&n.removed;)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),f(t)}}},389:function(e,t,n){n(386)},390:function(e,t,n){var r=n(1),o=n(2),i=n(21),a=n(35).f,c=n(8),u=o((function(){a(1)}));r({target:"Object",stat:!0,forced:!c||u,sham:!c},{getOwnPropertyDescriptor:function(e,t){return a(i(e),t)}})},400:function(e,t,n){var r=n(1),o=n(2),i=n(148).f;r({target:"Object",stat:!0,forced:o((function(){return!Object.getOwnPropertyNames(1)}))},{getOwnPropertyNames:i})},502:function(e,t,n){},695:function(e,t,n){},696:function(e,t,n){"use strict";var r=n(502),o=n.n(r);n.d(t,"default",(function(){return o.a}))},740:function(e,t,n){"use strict";n.r(t);var r=n(385),o=n(37),i=(n(33),n(34),n(105),n(52),n(53),n(9),n(73),n(20),n(26),n(104),n(74),n(75),n(141),n(221),n(220),n(41),n(145),n(144),n(400),n(72),n(80),n(390),n(219),n(143),n(24),n(71),n(389),n(76),n(392),n(393),n(394),n(395),n(140),n(142),n(39),n(0));
/*!
 * slack-business v1.21.1
 * (c) 2021-2022 lixichen <lixichen@yy.com>",
 */
function a(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return s(e)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n,r,o){var i={};return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}
/**
  * vue-class-component v7.2.6
  * (c) 2015-present Evan You
  * @license MIT
  */function y(e){return(y="function"==typeof Symbol&&"symbol"===Object(o.a)(Symbol.iterator)?function(e){return Object(o.a)(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":Object(o.a)(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function g(e,t){O(e,t),Object.getOwnPropertyNames(t.prototype).forEach((function(n){O(e.prototype,t.prototype,n)})),Object.getOwnPropertyNames(t).forEach((function(n){O(e,t,n)}))}function O(e,t,n){(n?Reflect.getOwnMetadataKeys(t,n):Reflect.getOwnMetadataKeys(t)).forEach((function(r){var o=n?Reflect.getOwnMetadata(r,t,n):Reflect.getOwnMetadata(r,t);n?Reflect.defineMetadata(r,o,e,n):Reflect.defineMetadata(r,o,e)}))}var w={__proto__:[]}instanceof Array;function _(e){return function(t,n,r){var o="function"==typeof t?t:t.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof r&&(r=void 0),o.__decorators__.push((function(t){return e(t,n,r)}))}}function j(e,t){var n=t.prototype._init;t.prototype._init=function(){var t=this,n=Object.getOwnPropertyNames(e);if(e.$options.props)for(var r in e.$options.props)e.hasOwnProperty(r)||n.push(r);n.forEach((function(n){Object.defineProperty(t,n,{get:function(){return e[n]},set:function(t){e[n]=t},configurable:!0})}))};var r=new t;t.prototype._init=n;var o={};return Object.keys(r).forEach((function(e){void 0!==r[e]&&(o[e]=r[e])})),o}var x=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.name=t.name||e._componentTag||e.name;var n=e.prototype;Object.getOwnPropertyNames(n).forEach((function(e){if("constructor"!==e)if(x.indexOf(e)>-1)t[e]=n[e];else{var r=Object.getOwnPropertyDescriptor(n,e);void 0!==r.value?"function"==typeof r.value?(t.methods||(t.methods={}))[e]=r.value:(t.mixins||(t.mixins=[])).push({data:function(){return h({},e,r.value)}}):(r.get||r.set)&&((t.computed||(t.computed={}))[e]={get:r.get,set:r.set})}})),(t.mixins||(t.mixins=[])).push({data:function(){return j(this,e)}});var r=e.__decorators__;r&&(r.forEach((function(e){return e(t)})),delete e.__decorators__);var o=Object.getPrototypeOf(e.prototype),a=o instanceof i.a?o.constructor:i.a,c=a.extend(t);return P(c,e,a),m()&&g(c,e),c}var S={prototype:!0,arguments:!0,callee:!0,caller:!0};function P(e,t,n){Object.getOwnPropertyNames(t).forEach((function(r){if(!S[r]){var o=Object.getOwnPropertyDescriptor(e,r);if(!o||o.configurable){var i,a,c=Object.getOwnPropertyDescriptor(t,r);if(!w){if("cid"===r)return;var u=Object.getOwnPropertyDescriptor(n,r);if(i=c.value,a=y(i),null!=i&&("object"===a||"function"===a)&&u&&u.value===c.value)return}0,Object.defineProperty(e,r,c)}}}))}function E(e){return"function"==typeof e?R(e):function(t){return R(t,e)}}E.registerHooks=function(e){x.push.apply(x,b(e))};var C="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function z(e){return void 0===e&&(e={}),function(t,n){!function(e,t,n){if(C&&!Array.isArray(e)&&"function"!=typeof e&&!e.hasOwnProperty("type")&&void 0===e.type){var r=Reflect.getMetadata("design:type",t,n);r!==Object&&(e.type=r)}}(e,t,n),_((function(t,n){(t.props||(t.props={}))[n]=e}))(t,n)}}var k,T,A,M,N,$,D,B,F,H;function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}var U=(k=E({name:"s-rich-text"}),T=z({type:String,default:""}),A=z({type:String,default:""}),M=z({type:Boolean,default:!0}),N=function(e,t){void 0===t&&(t={});var n=t.deep,r=void 0!==n&&n,i=t.immediate,a=void 0!==i&&i;return _((function(t,n){"object"!==Object(o.a)(t.watch)&&(t.watch=Object.create(null));var i=t.watch;"object"!==Object(o.a)(i[e])||Array.isArray(i[e])?void 0===i[e]&&(i[e]=[]):i[e]=[i[e]],i[e].push({handler:n,deep:r,immediate:a})}))}("txtContent",{immediate:!0}),k((D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(i,e);var t,n,r,o=I(i);function i(){var e;c(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return a(s(e=o.call.apply(o,[this].concat(n))),"content",B,s(e)),a(s(e),"customStyles",F,s(e)),a(s(e),"autoHeight",H,s(e)),e}return t=i,(n=[{key:"txtContent",get:function(){var e,t,n;return(null!==(e=null===(t=this.$slots.default)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.text)&&void 0!==e?e:"")||this.content}},{key:"handleRender",value:function(e){var t=this;this.$nextTick((function(){var n=t.$refs.root,r=n.contentDocument,o=n.contentWindow;if(r&&o){if(function(e,t){var n=e.createElement("meta");Object.keys(t).forEach((function(e){return n.setAttribute(e,t[e])})),e.head.appendChild(n)}(r,{name:"viewport",content:"width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,viewport-fit=cover"}),function(e,t){var n=e.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t,e.head.appendChild(n)}(r,"\n        * { margin: 0; padding: 0; }\n        \n        body {font-size: 14px;}\n        \n        ".concat(t.customStyles,"\n        ")),r.body.innerHTML="<div>".concat(e,"</div>"),t.autoHeight&&r.body.firstElementChild){var i=r.body.firstElementChild.getBoundingClientRect().height;n.style.height=i+"px"}}else console.warn("slack RichText: 注入失败！")}))}}])&&u(t.prototype,n),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(i.a),B=v(D.prototype,"content",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=v(D.prototype,"customStyles",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),H=v(D.prototype,"autoHeight",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v(D.prototype,"handleRender",[N],Object.getOwnPropertyDescriptor(D.prototype,"handleRender"),D.prototype),$=D))||$);var L,K=function(e,t,n,r,o,i,a,c,u,s){"boolean"!=typeof a&&(u=c,c=a,a=!1);var f,l="function"==typeof n?n.options:n;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),r&&(l._scopeId=r),i?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,u(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=f):t&&(f=a?function(e){t.call(this,s(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,c(e))}),f)if(l.functional){var d=l.render;l.render=function(e,t){return f.call(t),d(e,t)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,f):[f]}return n},J="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var V={};var W=function(e){return function(e,t){return function(e,t){var n=J?t.media||"default":e,r=V[n]||(V[n]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var o=t.source;if(t.map&&(o+="\n/*# sourceURL="+t.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",t.media&&r.element.setAttribute("media",t.media),void 0===L&&(L=document.head||document.getElementsByTagName("head")[0]),L.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var i=r.ids.size-1,a=document.createTextNode(o),c=r.element.childNodes;c[i]&&r.element.removeChild(c[i]),c.length?r.element.insertBefore(a,c[i]):r.element.appendChild(a)}}}(e,t)}},X=U,q=function(){var e=this.$createElement;return(this._self._c||e)("iframe",{ref:"root",class:this.$style.iframe,attrs:{frameborder:"0"}})};q._withStripped=!0;var G=K({render:q,staticRenderFns:[]},(function(e){e&&(e("data-v-1141be6c_0",{source:"",map:void 0,media:void 0}),Object.defineProperty(this,"$style",{value:{iframe:"slack__richText__iframe"}}))}),X,void 0,!1,void 0,!1,W,void 0,void 0),Q=(n(695),function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a});let Y=class extends r.h{constructor(){super(...arguments),this.myCustomStyles="\n  body {\n    font-weight: bold;\n  }\n  ",this.content='\n    <div>\n      <span style="color: #009aba;">rich text</span> component\n    </div>\n  '}};Y=Q([Object(r.a)({components:{RichText:G}})],Y);var Z=Y,ee=n(696),te=n(18);var ne=Object(te.a)(Z,(function(){var e=this._self._c;this._self._setupProxy;return e("div",[e("RichText",{staticStyle:{height:"50px"},attrs:{"custom-styles":this.myCustomStyles}},[this._v(this._s(this.content))])],1)}),[],!1,(function(e){this.$style=ee.default.locals||ee.default}),null,null);t.default=ne.exports}}]);