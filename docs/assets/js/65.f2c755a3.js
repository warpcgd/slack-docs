(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{386:function(t,e,n){"use strict";n(387)("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),n(388))},387:function(t,e,n){"use strict";var r=n(1),i=n(4),o=n(3),s=n(77),u=n(16),a=n(218),c=n(136),f=n(217),l=n(5),v=n(11),d=n(2),h=n(138),p=n(32),g=n(103);t.exports=function(t,e,n){var x=-1!==t.indexOf("Map"),y=-1!==t.indexOf("Weak"),b=x?"set":"add",k=i[t],w=k&&k.prototype,m=k,_={},z=function(t){var e=o(w[t]);u(w,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(y&&!v(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return y&&!v(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!v(t))&&e(this,0===t?0:t)}:function(t,n){return e(this,0===t?0:t,n),this})};if(s(t,!l(k)||!(y||w.forEach&&!d((function(){(new k).entries().next()})))))m=n.getConstructor(e,t,x,b),a.enable();else if(s(t,!0)){var O=new m,S=O[b](y?{}:-0,1)!=O,j=d((function(){O.has(1)})),E=h((function(t){new k(t)})),R=!y&&d((function(){for(var t=new k,e=5;e--;)t[b](e,e);return!t.has(-0)}));E||((m=e((function(t,e){f(t,w);var n=g(new k,t,m);return null!=e&&c(e,n[b],{that:n,AS_ENTRIES:x}),n}))).prototype=w,w.constructor=m),(j||R)&&(z("delete"),z("has"),x&&z("get")),(R||S)&&z(b),y&&w.clear&&delete w.clear}return _[t]=m,r({global:!0,constructor:!0,forced:m!=k},_),p(m,t),y||n.setStrong(m,t,x),m}},388:function(t,e,n){"use strict";var r=n(13).f,i=n(38),o=n(391),s=n(51),u=n(217),a=n(136),c=n(139),f=n(137),l=n(8),v=n(218).fastKey,d=n(25),h=d.set,p=d.getterFor;t.exports={getConstructor:function(t,e,n,c){var f=t((function(t,r){u(t,d),h(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),l||(t.size=0),null!=r&&a(r,t[c],{that:t,AS_ENTRIES:n})})),d=f.prototype,g=p(e),x=function(t,e,n){var r,i,o=g(t),s=y(t,e);return s?s.value=n:(o.last=s={index:i=v(e,!0),key:e,value:n,previous:r=o.last,next:void 0,removed:!1},o.first||(o.first=s),r&&(r.next=s),l?o.size++:t.size++,"F"!==i&&(o.index[i]=s)),t},y=function(t,e){var n,r=g(t),i=v(e);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==e)return n};return o(d,{clear:function(){for(var t=g(this),e=t.index,n=t.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete e[n.index],n=n.next;t.first=t.last=void 0,l?t.size=0:this.size=0},delete:function(t){var e=g(this),n=y(this,t);if(n){var r=n.next,i=n.previous;delete e.index[n.index],n.removed=!0,i&&(i.next=r),r&&(r.previous=i),e.first==n&&(e.first=r),e.last==n&&(e.last=i),l?e.size--:this.size--}return!!n},forEach:function(t){for(var e,n=g(this),r=s(t,arguments.length>1?arguments[1]:void 0);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!y(this,t)}}),o(d,n?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return x(this,0===t?0:t,e)}}:{add:function(t){return x(this,t=0===t?0:t,t)}}),l&&r(d,"size",{get:function(){return g(this).size}}),f},setStrong:function(t,e,n){var r=e+" Iterator",i=p(e),o=p(r);c(t,e,(function(t,e){h(this,{type:r,target:t,state:i(t),kind:e,last:void 0})}),(function(){for(var t=o(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),f(e)}}},389:function(t,e,n){n(386)},390:function(t,e,n){var r=n(1),i=n(2),o=n(21),s=n(35).f,u=n(8),a=i((function(){s(1)}));r({target:"Object",stat:!0,forced:!u||a,sham:!u},{getOwnPropertyDescriptor:function(t,e){return s(o(t),e)}})},396:function(t,e,n){n(1)({global:!0},{globalThis:n(4)})},766:function(t,e,n){"use strict";n.r(e);var r=n(385),i=n(429),o=(n(428),function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(i=t[u])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s});let s=class extends r.h{constructor(){super(...arguments),this.val=!1}};s=o([Object(r.a)({components:{Dialogs:i.b}})],s);var u=s,a=n(18),c=Object(a.a)(u,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("button",{on:{click:function(e){t.val=!0}}},[t._v("????????????")]),t._v(" "),e("Dialogs",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" Today's gift ")]},proxy:!0}]),model:{value:t.val,callback:function(e){t.val=e},expression:"val"}},[t._v("\n    Your amount is not enough, 100 gold pieces will be given to you today. Maximum 3 times per day\n  ")])],1)}),[],!1,null,null,null);e.default=c.exports}}]);