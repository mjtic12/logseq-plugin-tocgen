var n,l$1,u$1,t$2,o$2,r$1,f$1,e$2={},c$1=[],s$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a$1(n,l){for(var u in l)n[u]=l[u];return n}function h$1(n){var l=n.parentNode;l&&l.removeChild(n);}function v$1(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return y$1(l,f,t,o,null)}function y$1(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$1:r};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function p$1(){return {current:null}}function d$1(n){return n.children}function _$1(n,l){this.props=n,this.context=l;}function k$2(n,l){if(null==l)return n.__?k$2(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?k$2(n):null}function b$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b$1(n)}}function m$1(n){(!n.__d&&(n.__d=!0)&&t$2.push(n)&&!g$2.__r++||r$1!==l$1.debounceRendering)&&((r$1=l$1.debounceRendering)||o$2)(g$2);}function g$2(){for(var n;g$2.__r=t$2.length;)n=t$2.sort(function(n,l){return n.__v.__b-l.__v.__b}),t$2=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=a$1({},t)).__v=t.__v+1,j$2(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?k$2(t):o,t.__h),z$2(u,t),t.__e!=o&&b$1(t)));});}function w$2(n,l,u,i,t,o,r,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c$1,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y$1(null,_,null,null,_):Array.isArray(_)?y$1(d$1,{children:_},null,null,null):_.__b>0?y$1(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null;}j$2(n,_,p=p||e$2,t,o,r,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&_.__k===p.__k?_.__d=s=x$2(_,s,n):s=P$1(n,_,p,w,b,s),"function"==typeof u.type&&(u.__d=s)):s&&p.__e==s&&s.parentNode!=n&&(s=k$2(p));}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k$2(i,h+1)),N$1(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M$1(g[h],g[++h],g[++h]);}function x$2(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?x$2(i,l,u):P$1(u,i,i,t,i.__e,l));return l}function A$2(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){A$2(n,l);}):l.push(n)),l}function P$1(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function C$1(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H$1(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H$1(n,o,l[o],u[o],i);}function $$1(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s$1.test(l)?u:u+"px";}function H$1(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$$1(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T$2:I$1,o):n.removeEventListener(l,o?T$2:I$1,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function I$1(n){this.l[n.type+!1](l$1.event?l$1.event(n):n);}function T$2(n){this.l[n.type+!0](l$1.event?l$1.event(n):n);}function j$2(n,u,i,t,o,r,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P,C,$=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(s=l$1.__b)&&s(u);try{n:if("function"==typeof $){if(m=u.props,g=(s=$.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in $&&$.prototype.render?u.__c=h=new $(m,x):(u.__c=h=new _$1(m,x),h.constructor=$,h.render=O$1),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=$.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a$1({},h.__s)),a$1(h.__s,$.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==$.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==$.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k);});}if(h.context=x,h.props=m,h.__v=u,h.__P=n,A=l$1.__r,P=0,"prototype"in $&&$.prototype.render)h.state=h.__s,h.__d=!1,A&&A(u),s=h.render(h.props,h.state,h.context);else do{h.__d=!1,A&&A(u),s=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++P<25);h.state=h.__s,null!=h.getChildContext&&(t=a$1(a$1({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),C=null!=s&&s.type===d$1&&null==s.key?s.props.children:s,w$2(n,Array.isArray(C)?C:[C],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L$1(i.__e,u,i,t,o,r,f,c);(s=l$1.diffed)&&s(u);}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l$1.__e(n,u,i);}}function z$2(n,u){l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function L$1(l,u,i,t,o,r,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(o=!0),null!=r)for(;_<r.length;_++)if((s=r[_])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,r[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1;}if(null===d)y===p||c&&l.data===p||(l.data=p);else {if(r=r&&n.call(l.childNodes),a=(y=i.props||e$2).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C$1(l,p,y,o,c),v)u.__k=[];else if(_=u.props.children,w$2(l,Array.isArray(_)?_:[_],u,i,t,o&&"foreignObject"!==d,r,f,r?r[0]:i.__k&&k$2(i,0),c),null!=r)for(_=r.length;_--;)null!=r[_]&&h$1(r[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_||"option"===d&&_!==y.value)&&H$1(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H$1(l,"checked",_,y.checked,!1));}return l}function M$1(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,i);}}function N$1(n,u,i){var t,o;if(l$1.unmount&&l$1.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M$1(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$1.__e(n,u);}t.base=t.__P=null;}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N$1(t[o],u,"function"!=typeof n.type);i||null==n.__e||h$1(n.__e),n.__e=n.__d=void 0;}function O$1(n,l,u){return this.constructor(n,u)}function S$1(u,i,t){var o,r,f;l$1.__&&l$1.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j$2(i,u=(!o&&t||i).__k=v$1(d$1,null,[u]),r||e$2,e$2,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,f,!o&&t?t:r?r.__e:i.firstChild,o),z$2(f,u);}function q$2(n,l){S$1(n,l,q$2);}function B$1(l,u,i){var t,o,r,f=a$1({},l.props);for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),y$1(l.type,f,t||l.key,o||l.ref,null)}function D$1(n,l){var u={__c:l="__cC"+f$1++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(m$1);},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=c$1.slice,l$1={__e:function(n,l,u,i){for(var t,o,r;l=l.__;)if((t=l.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),r=t.__d),r)return t.__E=t}catch(l){n=l;}throw n}},u$1=0,_$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a$1({},this.state),"function"==typeof n&&(n=n(a$1({},u),this.props)),n&&a$1(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m$1(this));},_$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m$1(this));},_$1.prototype.render=d$1,t$2=[],o$2="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g$2.__r=0,f$1=0;

var o$1=0;function e$1(_,e,n,t,f){var l,s,u={};for(s in e)"ref"==s?l=e[s]:u[s]=e[s];var a={type:_,props:u,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--o$1,__source:f,__self:t};if("function"==typeof _&&(l=_.defaultProps))for(s in l)void 0===u[s]&&(u[s]=l[s]);return l$1.vnode&&l$1.vnode(a),a}

/*! For license information please see lsplugin.user.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.LSPluginEntry=e():t.LSPluginEntry=e();}(self,(()=>(()=>{var t={227:(t,e,n)=>{var r=n(155);e.formatArgs=function(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+t.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;e.splice(1,0,n,"color: inherit");let r=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(t=>{"%%"!==t&&(r++,"%c"===t&&(o=r));})),e.splice(o,0,n);},e.save=function(t){try{t?e.storage.setItem("debug",t):e.storage.removeItem("debug");}catch(t){}},e.load=function(){let t;try{t=e.storage.getItem("debug");}catch(t){}!t&&void 0!==r&&"env"in r&&(t=r.env.DEBUG);return t},e.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return !0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return !1;return "undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},e.storage=function(){try{return localStorage}catch(t){}}(),e.destroy=(()=>{let t=!1;return ()=>{t||(t=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));}})(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.log=console.debug||console.log||(()=>{}),t.exports=n(447)(e);const{formatters:o}=t.exports;o.j=function(t){try{return JSON.stringify(t)}catch(t){return "[UnexpectedJSONParseError]: "+t.message}};},447:(t,e,n)=>{t.exports=function(t){function e(t){let n,o,i,s=null;function a(...t){if(!a.enabled)return;const r=a,o=Number(new Date),i=o-(n||o);r.diff=i,r.prev=n,r.curr=o,n=o,t[0]=e.coerce(t[0]),"string"!=typeof t[0]&&t.unshift("%O");let s=0;t[0]=t[0].replace(/%([a-zA-Z%])/g,((n,o)=>{if("%%"===n)return "%";s++;const i=e.formatters[o];if("function"==typeof i){const e=t[s];n=i.call(r,e),t.splice(s,1),s--;}return n})),e.formatArgs.call(r,t);(r.log||e.log).apply(r,t);}return a.namespace=t,a.useColors=e.useColors(),a.color=e.selectColor(t),a.extend=r,a.destroy=e.destroy,Object.defineProperty(a,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==s?s:(o!==e.namespaces&&(o=e.namespaces,i=e.enabled(t)),i),set:t=>{s=t;}}),"function"==typeof e.init&&e.init(a),a}function r(t,n){const r=e(this.namespace+(void 0===n?":":n)+t);return r.log=this.log,r}function o(t){return t.toString().substring(2,t.toString().length-2).replace(/\.\*\?$/,"*")}return e.debug=e,e.default=e,e.coerce=function(t){if(t instanceof Error)return t.stack||t.message;return t},e.disable=function(){const t=[...e.names.map(o),...e.skips.map(o).map((t=>"-"+t))].join(",");return e.enable(""),t},e.enable=function(t){let n;e.save(t),e.namespaces=t,e.names=[],e.skips=[];const r=("string"==typeof t?t:"").split(/[\s,]+/),o=r.length;for(n=0;n<o;n++)r[n]&&("-"===(t=r[n].replace(/\*/g,".*?"))[0]?e.skips.push(new RegExp("^"+t.slice(1)+"$")):e.names.push(new RegExp("^"+t+"$")));},e.enabled=function(t){if("*"===t[t.length-1])return !0;let n,r;for(n=0,r=e.skips.length;n<r;n++)if(e.skips[n].test(t))return !1;for(n=0,r=e.names.length;n<r;n++)if(e.names[n].test(t))return !0;return !1},e.humanize=n(824),e.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");},Object.keys(t).forEach((n=>{e[n]=t[n];})),e.names=[],e.skips=[],e.formatters={},e.selectColor=function(t){let n=0;for(let e=0;e<t.length;e++)n=(n<<5)-n+t.charCodeAt(e),n|=0;return e.colors[Math.abs(n)%e.colors.length]},e.enable(e.load()),e};},856:function(t){t.exports=function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,n){return e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(t,n)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return !1;if(Reflect.construct.sham)return !1;if("function"==typeof Proxy)return !0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return !1}}function r(t,o,i){return r=n()?Reflect.construct:function(t,n,r){var o=[null];o.push.apply(o,n);var i=new(Function.bind.apply(t,o));return r&&e(i,r.prototype),i},r.apply(null,arguments)}function o(t){return i(t)||s(t)||a(t)||l()}function i(t){if(Array.isArray(t))return c(t)}function s(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function a(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return "Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u=Object.hasOwnProperty,f=Object.setPrototypeOf,p=Object.isFrozen,d=Object.getPrototypeOf,h=Object.getOwnPropertyDescriptor,m=Object.freeze,g=Object.seal,v=Object.create,y="undefined"!=typeof Reflect&&Reflect,b=y.apply,_=y.construct;b||(b=function(t,e,n){return t.apply(e,n)}),m||(m=function(t){return t}),g||(g=function(t){return t}),_||(_=function(t,e){return r(t,o(e))});var w=I(Array.prototype.forEach),x=I(Array.prototype.pop),C=I(Array.prototype.push),O=I(String.prototype.toLowerCase),S=I(String.prototype.match),j=I(String.prototype.replace),A=I(String.prototype.indexOf),k=I(String.prototype.trim),E=I(RegExp.prototype.test),T=F(TypeError);function I(t){return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return b(t,e,r)}}function F(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return _(t,n)}}function L(t,e){f&&f(t,null);for(var n=e.length;n--;){var r=e[n];if("string"==typeof r){var o=O(r);o!==r&&(p(e)||(e[n]=o),r=o);}t[r]=!0;}return t}function N(t){var e,n=v(null);for(e in t)b(u,t,[e])&&(n[e]=t[e]);return n}function M(t,e){for(;null!==t;){var n=h(t,e);if(n){if(n.get)return I(n.get);if("function"==typeof n.value)return I(n.value)}t=d(t);}function r(t){return console.warn("fallback value for",t),null}return r}var P=m(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),R=m(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),D=m(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),U=m(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),$=m(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),z=m(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),H=m(["#text"]),B=m(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),q=m(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),W=m(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),G=m(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),J=g(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Z=g(/<%[\w\W]*|[\w\W]*%>/gm),V=g(/^data-[\-\w.\u00B7-\uFFFF]/),K=g(/^aria-[\-\w]+$/),Y=g(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Q=g(/^(?:\w+script|data):/i),X=g(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),tt=g(/^html$/i),et=function(){return "undefined"==typeof window?null:window},nt=function(e,n){if("object"!==t(e)||"function"!=typeof e.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML:function(t){return t}})}catch(t){return console.warn("TrustedTypes policy "+i+" could not be created."),null}};function rt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et(),n=function(t){return rt(t)};if(n.version="2.3.8",n.removed=[],!e||!e.document||9!==e.document.nodeType)return n.isSupported=!1,n;var r=e.document,i=e.document,s=e.DocumentFragment,a=e.HTMLTemplateElement,c=e.Node,l=e.Element,u=e.NodeFilter,f=e.NamedNodeMap,p=void 0===f?e.NamedNodeMap||e.MozNamedAttrMap:f,d=e.HTMLFormElement,h=e.DOMParser,g=e.trustedTypes,v=l.prototype,y=M(v,"cloneNode"),b=M(v,"nextSibling"),_=M(v,"childNodes"),I=M(v,"parentNode");if("function"==typeof a){var F=i.createElement("template");F.content&&F.content.ownerDocument&&(i=F.content.ownerDocument);}var ot=nt(g,r),it=ot?ot.createHTML(""):"",st=i,at=st.implementation,ct=st.createNodeIterator,lt=st.createDocumentFragment,ut=st.getElementsByTagName,ft=r.importNode,pt={};try{pt=N(i).documentMode?i.documentMode:{};}catch(t){}var dt={};n.isSupported="function"==typeof I&&at&&void 0!==at.createHTMLDocument&&9!==pt;var ht,mt,gt=J,vt=Z,yt=V,bt=K,_t=Q,wt=X,xt=Y,Ct=null,Ot=L({},[].concat(o(P),o(R),o(D),o($),o(H))),St=null,jt=L({},[].concat(o(B),o(q),o(W),o(G))),At=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),kt=null,Et=null,Tt=!0,It=!0,Ft=!1,Lt=!1,Nt=!1,Mt=!1,Pt=!1,Rt=!1,Dt=!1,Ut=!1,$t=!0,zt=!0,Ht=!1,Bt={},qt=null,Wt=L({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Gt=null,Jt=L({},["audio","video","img","source","image","track"]),Zt=null,Vt=L({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Kt="http://www.w3.org/1998/Math/MathML",Yt="http://www.w3.org/2000/svg",Qt="http://www.w3.org/1999/xhtml",Xt=Qt,te=!1,ee=["application/xhtml+xml","text/html"],ne="text/html",re=null,oe=i.createElement("form"),ie=function(t){return t instanceof RegExp||t instanceof Function},se=function(e){re&&re===e||(e&&"object"===t(e)||(e={}),e=N(e),Ct="ALLOWED_TAGS"in e?L({},e.ALLOWED_TAGS):Ot,St="ALLOWED_ATTR"in e?L({},e.ALLOWED_ATTR):jt,Zt="ADD_URI_SAFE_ATTR"in e?L(N(Vt),e.ADD_URI_SAFE_ATTR):Vt,Gt="ADD_DATA_URI_TAGS"in e?L(N(Jt),e.ADD_DATA_URI_TAGS):Jt,qt="FORBID_CONTENTS"in e?L({},e.FORBID_CONTENTS):Wt,kt="FORBID_TAGS"in e?L({},e.FORBID_TAGS):{},Et="FORBID_ATTR"in e?L({},e.FORBID_ATTR):{},Bt="USE_PROFILES"in e&&e.USE_PROFILES,Tt=!1!==e.ALLOW_ARIA_ATTR,It=!1!==e.ALLOW_DATA_ATTR,Ft=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Lt=e.SAFE_FOR_TEMPLATES||!1,Nt=e.WHOLE_DOCUMENT||!1,Rt=e.RETURN_DOM||!1,Dt=e.RETURN_DOM_FRAGMENT||!1,Ut=e.RETURN_TRUSTED_TYPE||!1,Pt=e.FORCE_BODY||!1,$t=!1!==e.SANITIZE_DOM,zt=!1!==e.KEEP_CONTENT,Ht=e.IN_PLACE||!1,xt=e.ALLOWED_URI_REGEXP||xt,Xt=e.NAMESPACE||Qt,e.CUSTOM_ELEMENT_HANDLING&&ie(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(At.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ie(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(At.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(At.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ht=ht=-1===ee.indexOf(e.PARSER_MEDIA_TYPE)?ne:e.PARSER_MEDIA_TYPE,mt="application/xhtml+xml"===ht?function(t){return t}:O,Lt&&(It=!1),Dt&&(Rt=!0),Bt&&(Ct=L({},o(H)),St=[],!0===Bt.html&&(L(Ct,P),L(St,B)),!0===Bt.svg&&(L(Ct,R),L(St,q),L(St,G)),!0===Bt.svgFilters&&(L(Ct,D),L(St,q),L(St,G)),!0===Bt.mathMl&&(L(Ct,$),L(St,W),L(St,G))),e.ADD_TAGS&&(Ct===Ot&&(Ct=N(Ct)),L(Ct,e.ADD_TAGS)),e.ADD_ATTR&&(St===jt&&(St=N(St)),L(St,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&L(Zt,e.ADD_URI_SAFE_ATTR),e.FORBID_CONTENTS&&(qt===Wt&&(qt=N(qt)),L(qt,e.FORBID_CONTENTS)),zt&&(Ct["#text"]=!0),Nt&&L(Ct,["html","head","body"]),Ct.table&&(L(Ct,["tbody"]),delete kt.tbody),m&&m(e),re=e);},ae=L({},["mi","mo","mn","ms","mtext"]),ce=L({},["foreignobject","desc","title","annotation-xml"]),le=L({},["title","style","font","a","script"]),ue=L({},R);L(ue,D),L(ue,U);var fe=L({},$);L(fe,z);var pe=function(t){var e=I(t);e&&e.tagName||(e={namespaceURI:Qt,tagName:"template"});var n=O(t.tagName),r=O(e.tagName);return t.namespaceURI===Yt?e.namespaceURI===Qt?"svg"===n:e.namespaceURI===Kt?"svg"===n&&("annotation-xml"===r||ae[r]):Boolean(ue[n]):t.namespaceURI===Kt?e.namespaceURI===Qt?"math"===n:e.namespaceURI===Yt?"math"===n&&ce[r]:Boolean(fe[n]):t.namespaceURI===Qt&&!(e.namespaceURI===Yt&&!ce[r])&&!(e.namespaceURI===Kt&&!ae[r])&&!fe[n]&&(le[n]||!ue[n])},de=function(t){C(n.removed,{element:t});try{t.parentNode.removeChild(t);}catch(e){try{t.outerHTML=it;}catch(e){t.remove();}}},he=function(t,e){try{C(n.removed,{attribute:e.getAttributeNode(t),from:e});}catch(t){C(n.removed,{attribute:null,from:e});}if(e.removeAttribute(t),"is"===t&&!St[t])if(Rt||Dt)try{de(e);}catch(t){}else try{e.setAttribute(t,"");}catch(t){}},me=function(t){var e,n;if(Pt)t="<remove></remove>"+t;else {var r=S(t,/^[\r\n\t ]+/);n=r&&r[0];}"application/xhtml+xml"===ht&&(t='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+t+"</body></html>");var o=ot?ot.createHTML(t):t;if(Xt===Qt)try{e=(new h).parseFromString(o,ht);}catch(t){}if(!e||!e.documentElement){e=at.createDocument(Xt,"template",null);try{e.documentElement.innerHTML=te?"":o;}catch(t){}}var s=e.body||e.documentElement;return t&&n&&s.insertBefore(i.createTextNode(n),s.childNodes[0]||null),Xt===Qt?ut.call(e,Nt?"html":"body")[0]:Nt?e.documentElement:s},ge=function(t){return ct.call(t.ownerDocument||t,t,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null,!1)},ve=function(t){return t instanceof d&&("string"!=typeof t.nodeName||"string"!=typeof t.textContent||"function"!=typeof t.removeChild||!(t.attributes instanceof p)||"function"!=typeof t.removeAttribute||"function"!=typeof t.setAttribute||"string"!=typeof t.namespaceURI||"function"!=typeof t.insertBefore)},ye=function(e){return "object"===t(c)?e instanceof c:e&&"object"===t(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},be=function(t,e,r){dt[t]&&w(dt[t],(function(t){t.call(n,e,r,re);}));},_e=function(t){var e;if(be("beforeSanitizeElements",t,null),ve(t))return de(t),!0;if(E(/[\u0080-\uFFFF]/,t.nodeName))return de(t),!0;var r=mt(t.nodeName);if(be("uponSanitizeElement",t,{tagName:r,allowedTags:Ct}),t.hasChildNodes()&&!ye(t.firstElementChild)&&(!ye(t.content)||!ye(t.content.firstElementChild))&&E(/<[/\w]/g,t.innerHTML)&&E(/<[/\w]/g,t.textContent))return de(t),!0;if("select"===r&&E(/<template/i,t.innerHTML))return de(t),!0;if(!Ct[r]||kt[r]){if(!kt[r]&&xe(r)){if(At.tagNameCheck instanceof RegExp&&E(At.tagNameCheck,r))return !1;if(At.tagNameCheck instanceof Function&&At.tagNameCheck(r))return !1}if(zt&&!qt[r]){var o=I(t)||t.parentNode,i=_(t)||t.childNodes;if(i&&o)for(var s=i.length-1;s>=0;--s)o.insertBefore(y(i[s],!0),b(t));}return de(t),!0}return t instanceof l&&!pe(t)?(de(t),!0):"noscript"!==r&&"noembed"!==r||!E(/<\/no(script|embed)/i,t.innerHTML)?(Lt&&3===t.nodeType&&(e=t.textContent,e=j(e,gt," "),e=j(e,vt," "),t.textContent!==e&&(C(n.removed,{element:t.cloneNode()}),t.textContent=e)),be("afterSanitizeElements",t,null),!1):(de(t),!0)},we=function(t,e,n){if($t&&("id"===e||"name"===e)&&(n in i||n in oe))return !1;if(It&&!Et[e]&&E(yt,e));else if(Tt&&E(bt,e));else if(!St[e]||Et[e]){if(!(xe(t)&&(At.tagNameCheck instanceof RegExp&&E(At.tagNameCheck,t)||At.tagNameCheck instanceof Function&&At.tagNameCheck(t))&&(At.attributeNameCheck instanceof RegExp&&E(At.attributeNameCheck,e)||At.attributeNameCheck instanceof Function&&At.attributeNameCheck(e))||"is"===e&&At.allowCustomizedBuiltInElements&&(At.tagNameCheck instanceof RegExp&&E(At.tagNameCheck,n)||At.tagNameCheck instanceof Function&&At.tagNameCheck(n))))return !1}else if(Zt[e]);else if(E(xt,j(n,wt,"")));else if("src"!==e&&"xlink:href"!==e&&"href"!==e||"script"===t||0!==A(n,"data:")||!Gt[t])if(Ft&&!E(_t,j(n,wt,"")));else if(n)return !1;return !0},xe=function(t){return t.indexOf("-")>0},Ce=function(t){var e,r,o,i;be("beforeSanitizeAttributes",t,null);var s=t.attributes;if(s){var a={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:St};for(i=s.length;i--;){var c=e=s[i],l=c.name,u=c.namespaceURI;if(r="value"===l?e.value:k(e.value),o=mt(l),a.attrName=o,a.attrValue=r,a.keepAttr=!0,a.forceKeepAttr=void 0,be("uponSanitizeAttribute",t,a),r=a.attrValue,!a.forceKeepAttr&&(he(l,t),a.keepAttr))if(E(/\/>/i,r))he(l,t);else {Lt&&(r=j(r,gt," "),r=j(r,vt," "));var f=mt(t.nodeName);if(we(f,o,r))try{u?t.setAttributeNS(u,l,r):t.setAttribute(l,r),x(n.removed);}catch(t){}}}be("afterSanitizeAttributes",t,null);}},Oe=function t(e){var n,r=ge(e);for(be("beforeSanitizeShadowDOM",e,null);n=r.nextNode();)be("uponSanitizeShadowNode",n,null),_e(n)||(n.content instanceof s&&t(n.content),Ce(n));be("afterSanitizeShadowDOM",e,null);};return n.sanitize=function(o,i){var a,l,u,f,p;if((te=!o)&&(o="\x3c!--\x3e"),"string"!=typeof o&&!ye(o)){if("function"!=typeof o.toString)throw T("toString is not a function");if("string"!=typeof(o=o.toString()))throw T("dirty is not a string, aborting")}if(!n.isSupported){if("object"===t(e.toStaticHTML)||"function"==typeof e.toStaticHTML){if("string"==typeof o)return e.toStaticHTML(o);if(ye(o))return e.toStaticHTML(o.outerHTML)}return o}if(Mt||se(i),n.removed=[],"string"==typeof o&&(Ht=!1),Ht){if(o.nodeName){var d=mt(o.nodeName);if(!Ct[d]||kt[d])throw T("root node is forbidden and cannot be sanitized in-place")}}else if(o instanceof c)1===(l=(a=me("\x3c!----\x3e")).ownerDocument.importNode(o,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?a=l:a.appendChild(l);else {if(!Rt&&!Lt&&!Nt&&-1===o.indexOf("<"))return ot&&Ut?ot.createHTML(o):o;if(!(a=me(o)))return Rt?null:Ut?it:""}a&&Pt&&de(a.firstChild);for(var h=ge(Ht?o:a);u=h.nextNode();)3===u.nodeType&&u===f||_e(u)||(u.content instanceof s&&Oe(u.content),Ce(u),f=u);if(f=null,Ht)return o;if(Rt){if(Dt)for(p=lt.call(a.ownerDocument);a.firstChild;)p.appendChild(a.firstChild);else p=a;return St.shadowroot&&(p=ft.call(r,p,!0)),p}var m=Nt?a.outerHTML:a.innerHTML;return Nt&&Ct["!doctype"]&&a.ownerDocument&&a.ownerDocument.doctype&&a.ownerDocument.doctype.name&&E(tt,a.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+a.ownerDocument.doctype.name+">\n"+m),Lt&&(m=j(m,gt," "),m=j(m,vt," ")),ot&&Ut?ot.createHTML(m):m},n.setConfig=function(t){se(t),Mt=!0;},n.clearConfig=function(){re=null,Mt=!1;},n.isValidAttribute=function(t,e,n){re||se({});var r=mt(t),o=mt(e);return we(r,o,n)},n.addHook=function(t,e){"function"==typeof e&&(dt[t]=dt[t]||[],C(dt[t],e));},n.removeHook=function(t){if(dt[t])return x(dt[t])},n.removeHooks=function(t){dt[t]&&(dt[t]=[]);},n.removeAllHooks=function(){dt={};},n}return rt()}();},729:t=>{var e=Object.prototype.hasOwnProperty,n="~";function r(){}function o(t,e,n){this.fn=t,this.context=e,this.once=n||!1;}function i(t,e,r,i,s){if("function"!=typeof r)throw new TypeError("The listener must be a function");var a=new o(r,i||t,s),c=n?n+e:e;return t._events[c]?t._events[c].fn?t._events[c]=[t._events[c],a]:t._events[c].push(a):(t._events[c]=a,t._eventsCount++),t}function s(t,e){0==--t._eventsCount?t._events=new r:delete t._events[e];}function a(){this._events=new r,this._eventsCount=0;}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(n=!1)),a.prototype.eventNames=function(){var t,r,o=[];if(0===this._eventsCount)return o;for(r in t=this._events)e.call(t,r)&&o.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(t)):o},a.prototype.listeners=function(t){var e=n?n+t:t,r=this._events[e];if(!r)return [];if(r.fn)return [r.fn];for(var o=0,i=r.length,s=new Array(i);o<i;o++)s[o]=r[o].fn;return s},a.prototype.listenerCount=function(t){var e=n?n+t:t,r=this._events[e];return r?r.fn?1:r.length:0},a.prototype.emit=function(t,e,r,o,i,s){var a=n?n+t:t;if(!this._events[a])return !1;var c,l,u=this._events[a],f=arguments.length;if(u.fn){switch(u.once&&this.removeListener(t,u.fn,void 0,!0),f){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,e),!0;case 3:return u.fn.call(u.context,e,r),!0;case 4:return u.fn.call(u.context,e,r,o),!0;case 5:return u.fn.call(u.context,e,r,o,i),!0;case 6:return u.fn.call(u.context,e,r,o,i,s),!0}for(l=1,c=new Array(f-1);l<f;l++)c[l-1]=arguments[l];u.fn.apply(u.context,c);}else {var p,d=u.length;for(l=0;l<d;l++)switch(u[l].once&&this.removeListener(t,u[l].fn,void 0,!0),f){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,e);break;case 3:u[l].fn.call(u[l].context,e,r);break;case 4:u[l].fn.call(u[l].context,e,r,o);break;default:if(!c)for(p=1,c=new Array(f-1);p<f;p++)c[p-1]=arguments[p];u[l].fn.apply(u[l].context,c);}}return !0},a.prototype.on=function(t,e,n){return i(this,t,e,n,!1)},a.prototype.once=function(t,e,n){return i(this,t,e,n,!0)},a.prototype.removeListener=function(t,e,r,o){var i=n?n+t:t;if(!this._events[i])return this;if(!e)return s(this,i),this;var a=this._events[i];if(a.fn)a.fn!==e||o&&!a.once||r&&a.context!==r||s(this,i);else {for(var c=0,l=[],u=a.length;c<u;c++)(a[c].fn!==e||o&&!a[c].once||r&&a[c].context!==r)&&l.push(a[c]);l.length?this._events[i]=1===l.length?l[0]:l:s(this,i);}return this},a.prototype.removeAllListeners=function(t){var e;return t?(e=n?n+t:t,this._events[e]&&s(this,e)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,t.exports=a;},717:t=>{"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}});}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t;};},824:t=>{var e=1e3,n=60*e,r=60*n,o=24*r,i=7*o,s=365.25*o;function a(t,e,n,r){var o=e>=1.5*n;return Math.round(t/n)+" "+r+(o?"s":"")}t.exports=function(t,c){c=c||{};var l=typeof t;if("string"===l&&t.length>0)return function(t){if((t=String(t)).length>100)return;var a=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(!a)return;var c=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*s;case"weeks":case"week":case"w":return c*i;case"days":case"day":case"d":return c*o;case"hours":case"hour":case"hrs":case"hr":case"h":return c*r;case"minutes":case"minute":case"mins":case"min":case"m":return c*n;case"seconds":case"second":case"secs":case"sec":case"s":return c*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(t);if("number"===l&&isFinite(t))return c.long?function(t){var i=Math.abs(t);if(i>=o)return a(t,i,o,"day");if(i>=r)return a(t,i,r,"hour");if(i>=n)return a(t,i,n,"minute");if(i>=e)return a(t,i,e,"second");return t+" ms"}(t):function(t){var i=Math.abs(t);if(i>=o)return Math.round(t/o)+"d";if(i>=r)return Math.round(t/r)+"h";if(i>=n)return Math.round(t/n)+"m";if(i>=e)return Math.round(t/e)+"s";return t+"ms"}(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))};},520:(t,e,n)=>{var r=n(155),o="win32"===r.platform,i=n(539);function s(t,e){for(var n=[],r=0;r<t.length;r++){var o=t[r];o&&"."!==o&&(".."===o?n.length&&".."!==n[n.length-1]?n.pop():e&&n.push(".."):n.push(o));}return n}function a(t){for(var e=t.length-1,n=0;n<=e&&!t[n];n++);for(var r=e;r>=0&&!t[r];r--);return 0===n&&r===e?t:n>r?[]:t.slice(n,r+1)}var c=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,l=/^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,u={};function f(t){var e=c.exec(t),n=(e[1]||"")+(e[2]||""),r=e[3]||"",o=l.exec(r);return [n,o[1],o[2],o[3]]}function p(t){var e=c.exec(t),n=e[1]||"",r=!!n&&":"!==n[1];return {device:n,isUnc:r,isAbsolute:r||!!e[2],tail:e[3]}}function d(t){return "\\\\"+t.replace(/^[\\\/]+/,"").replace(/[\\\/]+/g,"\\")}u.resolve=function(){for(var t="",e="",n=!1,o=arguments.length-1;o>=-1;o--){var a;if(o>=0?a=arguments[o]:t?(a=r.env["="+t])&&a.substr(0,3).toLowerCase()===t.toLowerCase()+"\\"||(a=t+"\\"):a=r.cwd(),!i.isString(a))throw new TypeError("Arguments to path.resolve must be strings");if(a){var c=p(a),l=c.device,u=c.isUnc,f=c.isAbsolute,h=c.tail;if((!l||!t||l.toLowerCase()===t.toLowerCase())&&(t||(t=l),n||(e=h+"\\"+e,n=f),t&&n))break}}return u&&(t=d(t)),t+(n?"\\":"")+(e=s(e.split(/[\\\/]+/),!n).join("\\"))||"."},u.normalize=function(t){var e=p(t),n=e.device,r=e.isUnc,o=e.isAbsolute,i=e.tail,a=/[\\\/]$/.test(i);return (i=s(i.split(/[\\\/]+/),!o).join("\\"))||o||(i="."),i&&a&&(i+="\\"),r&&(n=d(n)),n+(o?"\\":"")+i},u.isAbsolute=function(t){return p(t).isAbsolute},u.join=function(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(!i.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&t.push(n);}var r=t.join("\\");return /^[\\\/]{2}[^\\\/]/.test(t[0])||(r=r.replace(/^[\\\/]{2,}/,"\\")),u.normalize(r)},u.relative=function(t,e){t=u.resolve(t),e=u.resolve(e);for(var n=t.toLowerCase(),r=e.toLowerCase(),o=a(e.split("\\")),i=a(n.split("\\")),s=a(r.split("\\")),c=Math.min(i.length,s.length),l=c,f=0;f<c;f++)if(i[f]!==s[f]){l=f;break}if(0==l)return e;var p=[];for(f=l;f<i.length;f++)p.push("..");return (p=p.concat(o.slice(l))).join("\\")},u._makeLong=function(t){if(!i.isString(t))return t;if(!t)return "";var e=u.resolve(t);return /^[a-zA-Z]\:\\/.test(e)?"\\\\?\\"+e:/^\\\\[^?.]/.test(e)?"\\\\?\\UNC\\"+e.substring(2):t},u.dirname=function(t){var e=f(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},u.basename=function(t,e){var n=f(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},u.extname=function(t){return f(t)[3]},u.format=function(t){if(!i.isObject(t))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof t);var e=t.root||"";if(!i.isString(e))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof t.root);var n=t.dir,r=t.base||"";return n?n[n.length-1]===u.sep?n+r:n+u.sep+r:r},u.parse=function(t){if(!i.isString(t))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof t);var e=f(t);if(!e||4!==e.length)throw new TypeError("Invalid path '"+t+"'");return {root:e[0],dir:e[0]+e[1].slice(0,-1),base:e[2],ext:e[3],name:e[2].slice(0,e[2].length-e[3].length)}},u.sep="\\",u.delimiter=";";var h=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,m={};function g(t){return h.exec(t).slice(1)}m.resolve=function(){for(var t="",e=!1,n=arguments.length-1;n>=-1&&!e;n--){var o=n>=0?arguments[n]:r.cwd();if(!i.isString(o))throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,e="/"===o[0]);}return (e?"/":"")+(t=s(t.split("/"),!e).join("/"))||"."},m.normalize=function(t){var e=m.isAbsolute(t),n=t&&"/"===t[t.length-1];return (t=s(t.split("/"),!e).join("/"))||e||(t="."),t&&n&&(t+="/"),(e?"/":"")+t},m.isAbsolute=function(t){return "/"===t.charAt(0)},m.join=function(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];if(!i.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&(t+=t?"/"+n:n);}return m.normalize(t)},m.relative=function(t,e){t=m.resolve(t).substr(1),e=m.resolve(e).substr(1);for(var n=a(t.split("/")),r=a(e.split("/")),o=Math.min(n.length,r.length),i=o,s=0;s<o;s++)if(n[s]!==r[s]){i=s;break}var c=[];for(s=i;s<n.length;s++)c.push("..");return (c=c.concat(r.slice(i))).join("/")},m._makeLong=function(t){return t},m.dirname=function(t){var e=g(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},m.basename=function(t,e){var n=g(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},m.extname=function(t){return g(t)[3]},m.format=function(t){if(!i.isObject(t))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof t);var e=t.root||"";if(!i.isString(e))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof t.root);return (t.dir?t.dir+m.sep:"")+(t.base||"")},m.parse=function(t){if(!i.isString(t))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof t);var e=g(t);if(!e||4!==e.length)throw new TypeError("Invalid path '"+t+"'");return e[1]=e[1]||"",e[2]=e[2]||"",e[3]=e[3]||"",{root:e[0],dir:e[0]+e[1].slice(0,-1),base:e[2],ext:e[3],name:e[2].slice(0,e[2].length-e[3].length)}},m.sep="/",m.delimiter=":",t.exports=o?u:m,t.exports.posix=m,t.exports.win32=u;},155:t=>{var e,n,r=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:o;}catch(t){e=o;}try{n="function"==typeof clearTimeout?clearTimeout:i;}catch(t){n=i;}}();var a,c=[],l=!1,u=-1;function f(){l&&a&&(l=!1,a.length?c=a.concat(c):u=-1,c.length&&p());}function p(){if(!l){var t=s(f);l=!0;for(var e=c.length;e;){for(a=c,c=[];++u<e;)a&&a[u].run();u=-1,e=c.length;}a=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t);}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t);}}function d(t,e){this.fun=t,this.array=e;}function h(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new d(t,e)),1!==c.length||l||s(p);},d.prototype.run=function(){this.fun.apply(null,this.array);},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(t){return []},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return "/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0};},384:t=>{t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8};},539:(t,e,n)=>{var r=n(155),o=/%[sdj%]/g;e.format=function(t){if(!v(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(a(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,i=r.length,s=String(t).replace(o,(function(t){if("%%"===t)return "%";if(n>=i)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return "[Circular]"}default:return t}})),c=r[n];n<i;c=r[++n])m(c)||!_(c)?s+=" "+c:s+=" "+a(c);return s},e.deprecate=function(t,o){if(y(n.g.process))return function(){return e.deprecate(t,o).apply(this,arguments)};if(!0===r.noDeprecation)return t;var i=!1;return function(){if(!i){if(r.throwDeprecation)throw new Error(o);r.traceDeprecation?console.trace(o):console.error(o),i=!0;}return t.apply(this,arguments)}};var i,s={};function a(t,n){var r={seen:[],stylize:l};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),h(n)?r.showHidden=n:n&&e._extend(r,n),y(r.showHidden)&&(r.showHidden=!1),y(r.depth)&&(r.depth=2),y(r.colors)&&(r.colors=!1),y(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=c),u(r,t,r.depth)}function c(t,e){var n=a.styles[e];return n?"["+a.colors[n][0]+"m"+t+"["+a.colors[n][1]+"m":t}function l(t,e){return t}function u(t,n,r){if(t.customInspect&&n&&C(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,t);return v(o)||(o=u(t,o,r)),o}var i=function(t,e){if(y(e))return t.stylize("undefined","undefined");if(v(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(g(e))return t.stylize(""+e,"number");if(h(e))return t.stylize(""+e,"boolean");if(m(e))return t.stylize("null","null")}(t,n);if(i)return i;var s=Object.keys(n),a=function(t){var e={};return t.forEach((function(t,n){e[t]=!0;})),e}(s);if(t.showHidden&&(s=Object.getOwnPropertyNames(n)),x(n)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return f(n);if(0===s.length){if(C(n)){var c=n.name?": "+n.name:"";return t.stylize("[Function"+c+"]","special")}if(b(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(w(n))return t.stylize(Date.prototype.toString.call(n),"date");if(x(n))return f(n)}var l,_="",O=!1,S=["{","}"];(d(n)&&(O=!0,S=["[","]"]),C(n))&&(_=" [Function"+(n.name?": "+n.name:"")+"]");return b(n)&&(_=" "+RegExp.prototype.toString.call(n)),w(n)&&(_=" "+Date.prototype.toUTCString.call(n)),x(n)&&(_=" "+f(n)),0!==s.length||O&&0!=n.length?r<0?b(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),l=O?function(t,e,n,r,o){for(var i=[],s=0,a=e.length;s<a;++s)k(e,String(s))?i.push(p(t,e,n,r,String(s),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(p(t,e,n,r,o,!0));})),i}(t,n,r,a,s):s.map((function(e){return p(t,n,r,a,e,O)})),t.seen.pop(),function(t,e,n){if(t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(l,_,S)):S[0]+_+S[1]}function f(t){return "["+Error.prototype.toString.call(t)+"]"}function p(t,e,n,r,o,i){var s,a,c;if((c=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?a=c.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):c.set&&(a=t.stylize("[Setter]","special")),k(r,o)||(s="["+o+"]"),a||(t.seen.indexOf(c.value)<0?(a=m(n)?u(t,c.value,null):u(t,c.value,n-1)).indexOf("\n")>-1&&(a=i?a.split("\n").map((function(t){return "  "+t})).join("\n").substr(2):"\n"+a.split("\n").map((function(t){return "   "+t})).join("\n")):a=t.stylize("[Circular]","special")),y(s)){if(i&&o.match(/^\d+$/))return a;(s=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"));}return s+": "+a}function d(t){return Array.isArray(t)}function h(t){return "boolean"==typeof t}function m(t){return null===t}function g(t){return "number"==typeof t}function v(t){return "string"==typeof t}function y(t){return void 0===t}function b(t){return _(t)&&"[object RegExp]"===O(t)}function _(t){return "object"==typeof t&&null!==t}function w(t){return _(t)&&"[object Date]"===O(t)}function x(t){return _(t)&&("[object Error]"===O(t)||t instanceof Error)}function C(t){return "function"==typeof t}function O(t){return Object.prototype.toString.call(t)}function S(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(t){if(y(i)&&(i=r.env.NODE_DEBUG||""),t=t.toUpperCase(),!s[t])if(new RegExp("\\b"+t+"\\b","i").test(i)){var n=r.pid;s[t]=function(){var r=e.format.apply(e,arguments);console.error("%s %d: %s",t,n,r);};}else s[t]=function(){};return s[t]},e.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=d,e.isBoolean=h,e.isNull=m,e.isNullOrUndefined=function(t){return null==t},e.isNumber=g,e.isString=v,e.isSymbol=function(t){return "symbol"==typeof t},e.isUndefined=y,e.isRegExp=b,e.isObject=_,e.isDate=w,e.isError=x,e.isFunction=C,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n(384);var j=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function A(){var t=new Date,e=[S(t.getHours()),S(t.getMinutes()),S(t.getSeconds())].join(":");return [t.getDate(),j[t.getMonth()],e].join(" ")}function k(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",A(),e.format.apply(e,arguments));},e.inherits=n(717),e._extend=function(t,e){if(!e||!_(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t};}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]});},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});};var r={};return (()=>{n.r(r),n.d(r,{LSPluginUser:()=>Co,setupPluginUserInstance:()=>Oo});var t=n(520);n(856);const e=function(){this.__data__=[],this.size=0;};const o=function(t,e){return t===e||t!=t&&e!=e};const i=function(t,e){for(var n=t.length;n--;)if(o(t[n][0],e))return n;return -1};var s=Array.prototype.splice;const a=function(t){var e=this.__data__,n=i(e,t);return !(n<0)&&(n==e.length-1?e.pop():s.call(e,n,1),--this.size,!0)};const c=function(t){var e=this.__data__,n=i(e,t);return n<0?void 0:e[n][1]};const l=function(t){return i(this.__data__,t)>-1};const u=function(t,e){var n=this.__data__,r=i(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function f(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}f.prototype.clear=e,f.prototype.delete=a,f.prototype.get=c,f.prototype.has=l,f.prototype.set=u;const p=f;const d=function(){this.__data__=new p,this.size=0;};const h=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n};const m=function(t){return this.__data__.get(t)};const g=function(t){return this.__data__.has(t)};const v="object"==typeof global&&global&&global.Object===Object&&global;var y="object"==typeof self&&self&&self.Object===Object&&self;const b=v||y||Function("return this")();const _=b.Symbol;var w=Object.prototype,x=w.hasOwnProperty,C=w.toString,O=_?_.toStringTag:void 0;const S=function(t){var e=x.call(t,O),n=t[O];try{t[O]=void 0;var r=!0;}catch(t){}var o=C.call(t);return r&&(e?t[O]=n:delete t[O]),o};var j=Object.prototype.toString;const A=function(t){return j.call(t)};var k=_?_.toStringTag:void 0;const E=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":k&&k in Object(t)?S(t):A(t)};const T=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};const I=function(t){if(!T(t))return !1;var e=E(t);return "[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};const F=b["__core-js_shared__"];var L,N=(L=/[^.]+$/.exec(F&&F.keys&&F.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"";const M=function(t){return !!N&&N in t};var P=Function.prototype.toString;const R=function(t){if(null!=t){try{return P.call(t)}catch(t){}try{return t+""}catch(t){}}return ""};var D=/^\[object .+?Constructor\]$/,U=Function.prototype,$=Object.prototype,z=U.toString,H=$.hasOwnProperty,B=RegExp("^"+z.call(H).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const q=function(t){return !(!T(t)||M(t))&&(I(t)?B:D).test(R(t))};const W=function(t,e){return null==t?void 0:t[e]};const G=function(t,e){var n=W(t,e);return q(n)?n:void 0};const J=G(b,"Map");const Z=G(Object,"create");const V=function(){this.__data__=Z?Z(null):{},this.size=0;};const K=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e};var Y=Object.prototype.hasOwnProperty;const Q=function(t){var e=this.__data__;if(Z){var n=e[t];return "__lodash_hash_undefined__"===n?void 0:n}return Y.call(e,t)?e[t]:void 0};var X=Object.prototype.hasOwnProperty;const tt=function(t){var e=this.__data__;return Z?void 0!==e[t]:X.call(e,t)};const et=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Z&&void 0===e?"__lodash_hash_undefined__":e,this};function nt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}nt.prototype.clear=V,nt.prototype.delete=K,nt.prototype.get=Q,nt.prototype.has=tt,nt.prototype.set=et;const rt=nt;const ot=function(){this.size=0,this.__data__={hash:new rt,map:new(J||p),string:new rt};};const it=function(t){var e=typeof t;return "string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};const st=function(t,e){var n=t.__data__;return it(e)?n["string"==typeof e?"string":"hash"]:n.map};const at=function(t){var e=st(this,t).delete(t);return this.size-=e?1:0,e};const ct=function(t){return st(this,t).get(t)};const lt=function(t){return st(this,t).has(t)};const ut=function(t,e){var n=st(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function ft(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}ft.prototype.clear=ot,ft.prototype.delete=at,ft.prototype.get=ct,ft.prototype.has=lt,ft.prototype.set=ut;const pt=ft;const dt=function(t,e){var n=this.__data__;if(n instanceof p){var r=n.__data__;if(!J||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new pt(r);}return n.set(t,e),this.size=n.size,this};function ht(t){var e=this.__data__=new p(t);this.size=e.size;}ht.prototype.clear=d,ht.prototype.delete=h,ht.prototype.get=m,ht.prototype.has=g,ht.prototype.set=dt;const mt=ht;const gt=function(){try{var t=G(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();const vt=function(t,e,n){"__proto__"==e&&gt?gt(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n;};const yt=function(t,e,n){(void 0!==n&&!o(t[e],n)||void 0===n&&!(e in t))&&vt(t,e,n);};const bt=function(t){return function(e,n,r){for(var o=-1,i=Object(e),s=r(e),a=s.length;a--;){var c=s[t?a:++o];if(!1===n(i[c],c,i))break}return e}}();var _t="object"==typeof exports&&exports&&!exports.nodeType&&exports,wt=_t&&"object"==typeof module&&module&&!module.nodeType&&module,xt=wt&&wt.exports===_t?b.Buffer:void 0,Ct=xt?xt.allocUnsafe:void 0;const Ot=function(t,e){if(e)return t.slice();var n=t.length,r=Ct?Ct(n):new t.constructor(n);return t.copy(r),r};const St=b.Uint8Array;const jt=function(t){var e=new t.constructor(t.byteLength);return new St(e).set(new St(t)),e};const At=function(t,e){var n=e?jt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)};const kt=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e};var Et=Object.create;const Tt=function(){function t(){}return function(e){if(!T(e))return {};if(Et)return Et(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();const It=function(t,e){return function(n){return t(e(n))}};const Ft=It(Object.getPrototypeOf,Object);var Lt=Object.prototype;const Nt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Lt)};const Mt=function(t){return "function"!=typeof t.constructor||Nt(t)?{}:Tt(Ft(t))};const Pt=function(t){return null!=t&&"object"==typeof t};const Rt=function(t){return Pt(t)&&"[object Arguments]"==E(t)};var Dt=Object.prototype,Ut=Dt.hasOwnProperty,$t=Dt.propertyIsEnumerable;const zt=Rt(function(){return arguments}())?Rt:function(t){return Pt(t)&&Ut.call(t,"callee")&&!$t.call(t,"callee")};const Ht=Array.isArray;const Bt=function(t){return "number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991};const qt=function(t){return null!=t&&Bt(t.length)&&!I(t)};const Wt=function(t){return Pt(t)&&qt(t)};const Gt=function(){return !1};var Jt="object"==typeof exports&&exports&&!exports.nodeType&&exports,Zt=Jt&&"object"==typeof module&&module&&!module.nodeType&&module,Vt=Zt&&Zt.exports===Jt?b.Buffer:void 0;const Kt=(Vt?Vt.isBuffer:void 0)||Gt;var Yt=Function.prototype,Qt=Object.prototype,Xt=Yt.toString,te=Qt.hasOwnProperty,ee=Xt.call(Object);const ne=function(t){if(!Pt(t)||"[object Object]"!=E(t))return !1;var e=Ft(t);if(null===e)return !0;var n=te.call(e,"constructor")&&e.constructor;return "function"==typeof n&&n instanceof n&&Xt.call(n)==ee};var re={};re["[object Float32Array]"]=re["[object Float64Array]"]=re["[object Int8Array]"]=re["[object Int16Array]"]=re["[object Int32Array]"]=re["[object Uint8Array]"]=re["[object Uint8ClampedArray]"]=re["[object Uint16Array]"]=re["[object Uint32Array]"]=!0,re["[object Arguments]"]=re["[object Array]"]=re["[object ArrayBuffer]"]=re["[object Boolean]"]=re["[object DataView]"]=re["[object Date]"]=re["[object Error]"]=re["[object Function]"]=re["[object Map]"]=re["[object Number]"]=re["[object Object]"]=re["[object RegExp]"]=re["[object Set]"]=re["[object String]"]=re["[object WeakMap]"]=!1;const oe=function(t){return Pt(t)&&Bt(t.length)&&!!re[E(t)]};const ie=function(t){return function(e){return t(e)}};var se="object"==typeof exports&&exports&&!exports.nodeType&&exports,ae=se&&"object"==typeof module&&module&&!module.nodeType&&module,ce=ae&&ae.exports===se&&v.process,le=function(){try{var t=ae&&ae.require&&ae.require("util").types;return t||ce&&ce.binding&&ce.binding("util")}catch(t){}}();var ue=le&&le.isTypedArray;const fe=ue?ie(ue):oe;const pe=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]};var de=Object.prototype.hasOwnProperty;const he=function(t,e,n){var r=t[e];de.call(t,e)&&o(r,n)&&(void 0!==n||e in t)||vt(t,e,n);};const me=function(t,e,n,r){var o=!n;n||(n={});for(var i=-1,s=e.length;++i<s;){var a=e[i],c=r?r(n[a],t[a],a,n,t):void 0;void 0===c&&(c=t[a]),o?vt(n,a,c):he(n,a,c);}return n};const ge=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r};var ve=/^(?:0|[1-9]\d*)$/;const ye=function(t,e){var n=typeof t;return !!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&ve.test(t))&&t>-1&&t%1==0&&t<e};var be=Object.prototype.hasOwnProperty;const _e=function(t,e){var n=Ht(t),r=!n&&zt(t),o=!n&&!r&&Kt(t),i=!n&&!r&&!o&&fe(t),s=n||r||o||i,a=s?ge(t.length,String):[],c=a.length;for(var l in t)!e&&!be.call(t,l)||s&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||ye(l,c))||a.push(l);return a};const we=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e};var xe=Object.prototype.hasOwnProperty;const Ce=function(t){if(!T(t))return we(t);var e=Nt(t),n=[];for(var r in t)("constructor"!=r||!e&&xe.call(t,r))&&n.push(r);return n};const Oe=function(t){return qt(t)?_e(t,!0):Ce(t)};const Se=function(t){return me(t,Oe(t))};const je=function(t,e,n,r,o,i,s){var a=pe(t,n),c=pe(e,n),l=s.get(c);if(l)yt(t,n,l);else {var u=i?i(a,c,n+"",t,e,s):void 0,f=void 0===u;if(f){var p=Ht(c),d=!p&&Kt(c),h=!p&&!d&&fe(c);u=c,p||d||h?Ht(a)?u=a:Wt(a)?u=kt(a):d?(f=!1,u=Ot(c,!0)):h?(f=!1,u=At(c,!0)):u=[]:ne(c)||zt(c)?(u=a,zt(a)?u=Se(a):T(a)&&!I(a)||(u=Mt(c))):f=!1;}f&&(s.set(c,u),o(u,c,r,i,s),s.delete(c)),yt(t,n,u);}};const Ae=function t(e,n,r,o,i){e!==n&&bt(n,(function(s,a){if(i||(i=new mt),T(s))je(e,n,a,r,t,o,i);else {var c=o?o(pe(e,a),s,a+"",e,n,i):void 0;void 0===c&&(c=s),yt(e,a,c);}}),Oe);};const ke=function(t){return t};const Ee=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)};var Te=Math.max;const Ie=function(t,e,n){return e=Te(void 0===e?t.length-1:e,0),function(){for(var r=arguments,o=-1,i=Te(r.length-e,0),s=Array(i);++o<i;)s[o]=r[e+o];o=-1;for(var a=Array(e+1);++o<e;)a[o]=r[o];return a[e]=n(s),Ee(t,this,a)}};const Fe=function(t){return function(){return t}};const Le=gt?function(t,e){return gt(t,"toString",{configurable:!0,enumerable:!1,value:Fe(e),writable:!0})}:ke;var Ne=Date.now;const Me=function(t){var e=0,n=0;return function(){var r=Ne(),o=16-(r-n);if(n=r,o>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(Le);const Pe=function(t,e){return Me(Ie(t,e,ke),t+"")};const Re=function(t,e,n){if(!T(n))return !1;var r=typeof e;return !!("number"==r?qt(n)&&ye(e,n.length):"string"==r&&e in n)&&o(n[e],t)};const De=function(t){return Pe((function(e,n){var r=-1,o=n.length,i=o>1?n[o-1]:void 0,s=o>2?n[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,s&&Re(n[0],n[1],s)&&(i=o<3?void 0:i,o=1),e=Object(e);++r<o;){var a=n[r];a&&t(e,a,r,i);}return e}))}((function(t,e,n){Ae(t,e,n);}));var Ue=function(){return Ue=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},Ue.apply(this,arguments)};function $e(t){return t.toLowerCase()}var ze=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],He=/[^A-Z0-9]+/gi;function Be(t,e,n){return e instanceof RegExp?t.replace(e,n):e.reduce((function(t,e){return t.replace(e,n)}),t)}function qe(t,e){return void 0===e&&(e={}),function(t,e){void 0===e&&(e={});for(var n=e.splitRegexp,r=void 0===n?ze:n,o=e.stripRegexp,i=void 0===o?He:o,s=e.transform,a=void 0===s?$e:s,c=e.delimiter,l=void 0===c?" ":c,u=Be(Be(t,r,"$1\0$2"),i,"\0"),f=0,p=u.length;"\0"===u.charAt(f);)f++;for(;"\0"===u.charAt(p-1);)p--;return u.slice(f,p).split("\0").map(a).join(l)}(t,Ue({delimiter:"."},e))}var We=n(729),Ge=n.n(We);function Je(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const Ze="win32"===navigator.platform.toLowerCase()?t.win32:t.posix;const Ve=function(t,e){return void 0===e&&(e={}),qe(t,Ue({delimiter:"_"},e))};const Ke=De;class Ye extends(Ge()){constructor(t,e){super(),Je(this,"_tag",void 0),Je(this,"_opts",void 0),Je(this,"_logs",[]),this._tag=t,this._opts=e;}write(t,e,n){var r;null!=e&&e.length&&!0===e[e.length-1]&&(n=!0,e.pop());const o=e.reduce(((t,e)=>(e&&e instanceof Error?t+=`${e.message} ${e.stack}`:t+=e.toString(),t)),`[${this._tag}][${(new Date).toLocaleTimeString()}] `);var i;(this._logs.push([t,o]),n||null!==(r=this._opts)&&void 0!==r&&r.console)&&(null===(i=console)||void 0===i||i["ERROR"===t?"error":"debug"](`${t}: ${o}`));this.emit("change");}clear(){this._logs=[],this.emit("change");}info(...t){this.write("INFO",t);}error(...t){this.write("ERROR",t);}warn(...t){this.write("WARN",t);}setTag(t){this._tag=t;}toJSON(){return this._logs}}function Qe(t,...e){try{const n=new URL(t);if(!n.origin)throw new Error(null);const r=Ze.join(t.substr(n.origin.length),...e);return n.origin+r}catch(n){return Ze.join(t,...e)}}function Xe(t,e){let n,r,o=!1;const i=e=>n=>{t&&clearTimeout(t),e(n),o=!0;},s=new Promise(((o,s)=>{n=i(o),r=i(s),t&&(t=setTimeout((()=>r(new Error(`[deferred timeout] ${e}`))),t));}));return {created:Date.now(),setTag:t=>e=t,resolve:n,reject:r,promise:s,get settled(){return o}}}const tn=new Map;window.__injectedUIEffects=tn;var en=n(227),nn=n.n(en);function rn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const on="application/x-postmate-v1+json";let sn=0;const an={handshake:1,"handshake-reply":1,call:1,emit:1,reply:1,request:1},cn=(t,e)=>("string"!=typeof e||t.origin===e)&&(!!t.data&&(("object"!=typeof t.data||"postmate"in t.data)&&(t.data.type===on&&!!an[t.data.postmate])));class ln{constructor(t){rn(this,"parent",void 0),rn(this,"frame",void 0),rn(this,"child",void 0),rn(this,"events",{}),rn(this,"childOrigin",void 0),rn(this,"listener",void 0),this.parent=t.parent,this.frame=t.frame,this.child=t.child,this.childOrigin=t.childOrigin,this.listener=t=>{if(!cn(t,this.childOrigin))return !1;const{data:e,name:n}=((t||{}).data||{}).value||{};"emit"===t.data.postmate&&n in this.events&&this.events[n].forEach((t=>{t.call(this,e);}));},this.parent.addEventListener("message",this.listener,!1);}get(t,...e){return new Promise((n=>{const r=++sn,o=t=>{t.data.uid===r&&"reply"===t.data.postmate&&(this.parent.removeEventListener("message",o,!1),n(t.data.value));};this.parent.addEventListener("message",o,!1),this.child.postMessage({postmate:"request",type:on,property:t,args:e,uid:r},this.childOrigin);}))}call(t,e){this.child.postMessage({postmate:"call",type:on,property:t,data:e},this.childOrigin);}on(t,e){this.events[t]||(this.events[t]=[]),this.events[t].push(e);}destroy(){window.removeEventListener("message",this.listener,!1),this.frame.parentNode.removeChild(this.frame);}}class un{constructor(t){rn(this,"model",void 0),rn(this,"parent",void 0),rn(this,"parentOrigin",void 0),rn(this,"child",void 0),this.model=t.model,this.parent=t.parent,this.parentOrigin=t.parentOrigin,this.child=t.child,this.child.addEventListener("message",(t=>{if(!cn(t,this.parentOrigin))return;const{property:e,uid:n,data:r,args:o}=t.data;"call"!==t.data.postmate?((t,e,n)=>{const r="function"==typeof t[e]?t[e].apply(null,n):t[e];return Promise.resolve(r)})(this.model,e,o).then((r=>{t.source.postMessage({property:e,postmate:"reply",type:on,uid:n,value:r},t.origin);})):e in this.model&&"function"==typeof this.model[e]&&this.model[e](r);}));}emit(t,e){this.parent.postMessage({postmate:"emit",type:on,value:{name:t,data:e}},this.parentOrigin);}}class fn{constructor(t){rn(this,"container",void 0),rn(this,"parent",void 0),rn(this,"frame",void 0),rn(this,"child",void 0),rn(this,"childOrigin",void 0),rn(this,"url",void 0),rn(this,"model",void 0),this.container=t.container,this.url=t.url,this.parent=window,this.frame=document.createElement("iframe"),t.id&&(this.frame.id=t.id),t.name&&(this.frame.name=t.name),this.frame.classList.add.apply(this.frame.classList,t.classListArray||[]),this.container.appendChild(this.frame),this.child=this.frame.contentWindow,this.model=t.model||{};}sendHandshake(t){const e=(t=>{const e=document.createElement("a");e.href=t;const n=e.protocol.length>4?e.protocol:window.location.protocol,r=e.host.length?"80"===e.port||"443"===e.port?e.hostname:e.host:window.location.host;return e.origin||`${n}//${r}`})(t=t||this.url);let n,r=0;return new Promise(((o,i)=>{const s=t=>!!cn(t,e)&&("handshake-reply"===t.data.postmate?(clearInterval(n),this.parent.removeEventListener("message",s,!1),this.childOrigin=t.origin,o(new ln(this))):i("Failed handshake"));this.parent.addEventListener("message",s,!1);const a=()=>{r++,this.child.postMessage({postmate:"handshake",type:on,model:this.model},e),5===r&&clearInterval(n);};this.frame.addEventListener("load",(()=>{a(),n=setInterval(a,500);})),this.frame.src=t;}))}destroy(){this.frame.parentNode.removeChild(this.frame);}}rn(fn,"debug",!1),rn(fn,"Model",void 0);class pn{constructor(t){rn(this,"child",void 0),rn(this,"model",void 0),rn(this,"parent",void 0),rn(this,"parentOrigin",void 0),this.child=window,this.model=t,this.parent=this.child.parent;}sendHandshakeReply(){return new Promise(((t,e)=>{const n=r=>{if(r.data.postmate){if("handshake"===r.data.postmate){this.child.removeEventListener("message",n,!1),r.source.postMessage({postmate:"handshake-reply",type:on},r.origin),this.parentOrigin=r.origin;const e=r.data.model;return e&&Object.keys(e).forEach((t=>{this.model[t]=e[t];})),t(new un(this))}return e("Handshake Reply Failed")}};this.child.addEventListener("message",n,!1);}))}}function dn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const{importHTML:hn,createSandboxContainer:mn}=window.QSandbox||{};function gn(t,e){return t.startsWith("http")?fetch(t,e):(t=t.replace("file://",""),new Promise((async(e,n)=>{try{const n=await window.apis.doAction(["readFile",t]);e({text:()=>n});}catch(t){console.error(t),n(t);}})))}class vn extends(Ge()){constructor(t){super(),dn(this,"_pluginLocal",void 0),dn(this,"_frame",void 0),dn(this,"_root",void 0),dn(this,"_loaded",!1),dn(this,"_unmountFns",[]),this._pluginLocal=t,t._dispose((()=>{this._unmount();}));}async load(){const{name:t,entry:e}=this._pluginLocal.options;if(this.loaded||!e)return;const{template:n,execScripts:r}=await hn(e,{fetch:gn});this._mount(n,document.body);const o=mn(t,{elementGetter:()=>{var t;return null===(t=this._root)||void 0===t?void 0:t.firstChild}}).instance.proxy;o.__shadow_mode__=!0,o.LSPluginLocal=this._pluginLocal,o.LSPluginShadow=this,o.LSPluginUser=o.logseq=new Co(this._pluginLocal.toJSON(),this._pluginLocal.caller);const i=await r(o,!0);this._unmountFns.push(i.unmount),this._loaded=!0;}_mount(t,e){const n=this._frame=document.createElement("div");n.classList.add("lsp-shadow-sandbox"),n.id=this._pluginLocal.id,this._root=n.attachShadow({mode:"open"}),this._root.innerHTML=`<div>${t}</div>`,e.appendChild(n),this.emit("mounted");}_unmount(){for(const t of this._unmountFns)t&&t.call(null);}destroy(){var t,e;null===(t=this.frame)||void 0===t||null===(e=t.parentNode)||void 0===e||e.removeChild(this.frame);}get loaded(){return this._loaded}get document(){var t;return null===(t=this._root)||void 0===t?void 0:t.firstChild}get frame(){return this._frame}}function yn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const bn=nn()("LSPlugin:caller"),_n="#await#response#",wn="#lspmsg#",xn="#lspmsg#error#",Cn=t=>`#lspmsg#${t}`;class On extends(Ge()){constructor(t){super(),yn(this,"_pluginLocal",void 0),yn(this,"_connected",!1),yn(this,"_parent",void 0),yn(this,"_child",void 0),yn(this,"_shadow",void 0),yn(this,"_status",void 0),yn(this,"_userModel",{}),yn(this,"_call",void 0),yn(this,"_callUserModel",void 0),yn(this,"_debugTag",""),this._pluginLocal=t,t&&(this._debugTag=t.debugTag);}async connectToChild(){if(this._connected)return;const{shadow:t}=this._pluginLocal;t?await this._setupShadowSandbox():await this._setupIframeSandbox();}async connectToParent(t={}){if(this._connected)return;const e=this,n=null!=this._pluginLocal;let o=0;const i=new Map,s=Xe(6e4),a=this._extendUserModel({"#lspmsg#ready#":async t=>{a[Cn(null==t?void 0:t.pid)]=({type:t,payload:n})=>{bn(`[host (_call) -> *user] ${this._debugTag}`,t,n),e.emit(t,n);},await s.resolve();},"#lspmsg#beforeunload#":async t=>{const n=Xe(1e4);e.emit("beforeunload",Object.assign({actor:n},t)),await n.promise;},"#lspmsg#settings#":async({type:t,payload:n})=>{e.emit("settings:changed",n);},[wn]:async({ns:t,type:n,payload:r})=>{bn(`[host (async) -> *user] ${this._debugTag} ns=${t} type=${n}`,r),t&&t.startsWith("hook")?e.emit(`${t}:${n}`,r):e.emit(n,r);},"#lspmsg#reply#":({_sync:t,result:e})=>{if(bn(`[sync host -> *user] #${t}`,e),i.has(t)){const n=i.get(t);n&&(null!=e&&e.hasOwnProperty(xn)?n.reject(e[xn]):n.resolve(e),i.delete(t));}},...t});var c;if(n)return await s.promise,JSON.parse(JSON.stringify(null===(c=this._pluginLocal)||void 0===c?void 0:c.toJSON()));const l=new pn(a).sendHandshakeReply();return this._status="pending",await l.then((t=>{this._child=t,this._connected=!0,this._call=async(e,n={},r)=>{if(r){const t=++o;i.set(t,r),n._sync=t,r.setTag(`async call #${t}`),bn(`async call #${t}`);}return t.emit(Cn(a.baseInfo.id),{type:e,payload:n}),null==r?void 0:r.promise},this._callUserModel=async(t,e)=>{try{a[t](e);}catch(e){bn(`[model method] #${t} not existed`);}},setInterval((()=>{if(i.size>100)for(const[t,e]of i)e.settled&&i.delete(t);}),18e5);})).finally((()=>{this._status=void 0;})),await s.promise,a.baseInfo}async call(t,e={}){var n;return null===(n=this._call)||void 0===n?void 0:n.call(this,t,e)}async callAsync(t,e={}){var n;const r=Xe(1e4);return null===(n=this._call)||void 0===n?void 0:n.call(this,t,e,r)}async callUserModel(t,...e){var n;return null===(n=this._callUserModel)||void 0===n?void 0:n.apply(this,[t,...e])}async callUserModelAsync(t,...e){var n;return t=`${_n}${t}`,null===(n=this._callUserModel)||void 0===n?void 0:n.apply(this,[t,...e])}async _setupIframeSandbox(){const t=this._pluginLocal,e=t.id,n=`${e}_lsp_main`,r=new URL(t.options.entry);r.searchParams.set("__v__",t.options.version);const o=document.querySelector(`#${n}`);o&&o.parentElement.removeChild(o);const i=document.createElement("div");i.classList.add("lsp-iframe-sandbox-container"),i.id=n,i.dataset.pid=e;try{var s;const t=null===(s=await this._pluginLocal._loadLayoutsData())||void 0===s?void 0:s.$$0;if(t){i.dataset.inited_layout="true";let{width:e,height:n,left:r,top:o,vw:s,vh:a}=t;r=Math.max(r,0),r="number"==typeof s?`${Math.min(100*r/s,99)}%`:`${r}px`,o=Math.max(o,45),o="number"==typeof a?`${Math.min(100*o/a,99)}%`:`${o}px`,Object.assign(i.style,{width:e+"px",height:n+"px",left:r,top:o});}}catch(t){console.error("[Restore Layout Error]",t);}document.body.appendChild(i);const a=new fn({id:e+"_iframe",container:i,url:r.href,classListArray:["lsp-iframe-sandbox"],model:{baseInfo:JSON.parse(JSON.stringify(t.toJSON()))}});let c,l=a.sendHandshake();return this._status="pending",new Promise(((e,n)=>{c=setTimeout((()=>{n(new Error("handshake Timeout")),a.destroy();}),4e3),l.then((n=>{this._parent=n,this._connected=!0,this.emit("connected"),n.on(Cn(t.id),(({type:t,payload:e})=>{var n,r;bn("[user -> *host] ",t,e),null===(n=this._pluginLocal)||void 0===n||n.emit(t,e||{}),null===(r=this._pluginLocal)||void 0===r||r.caller.emit(t,e||{});})),this._call=async(...e)=>{await n.call(Cn(t.id),{type:e[0],payload:Object.assign(e[1]||{},{$$pid:t.id})});},this._callUserModel=async(t,...e)=>{if(t.startsWith(_n))return await n.get(t.replace(_n,""),...e);n.call(t,null==e?void 0:e[0]);},e(null);})).catch((t=>{n(t);})).finally((()=>{clearTimeout(c);}));})).catch((t=>{throw bn("[iframe sandbox] error",t),t})).finally((()=>{this._status=void 0;}))}async _setupShadowSandbox(){const t=this._pluginLocal,e=this._shadow=new vn(t);try{this._status="pending",await e.load(),this._connected=!0,this.emit("connected"),this._call=async(e,n={},r)=>{var o;return r&&(n.actor=r),null===(o=this._pluginLocal)||void 0===o||o.emit(e,Object.assign(n,{$$pid:t.id})),null==r?void 0:r.promise},this._callUserModel=async(...t)=>{var e;let n=t[0];null!==(e=n)&&void 0!==e&&e.startsWith(_n)&&(n=n.replace(_n,""));const r=t[1]||{},o=this._userModel[n];"function"==typeof o&&await o.call(null,r);};}catch(t){throw bn("[shadow sandbox] error",t),t}finally{this._status=void 0;}}_extendUserModel(t){return Object.assign(this._userModel,t)}_getSandboxIframeContainer(){var t;return null===(t=this._parent)||void 0===t?void 0:t.frame.parentNode}_getSandboxShadowContainer(){var t;return null===(t=this._shadow)||void 0===t?void 0:t.frame.parentNode}_getSandboxIframeRoot(){var t;return null===(t=this._parent)||void 0===t?void 0:t.frame}_getSandboxShadowRoot(){var t;return null===(t=this._shadow)||void 0===t?void 0:t.frame}set debugTag(t){this._debugTag=t;}async destroy(){var t;let e=null;this._parent&&(e=this._getSandboxIframeContainer(),await this._parent.destroy()),this._shadow&&(e=this._getSandboxShadowContainer(),this._shadow.destroy()),null===(t=e)||void 0===t||t.parentNode.removeChild(e);}}function Sn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class jn{constructor(t,e){Sn(this,"ctx",void 0),Sn(this,"opts",void 0),this.ctx=t,this.opts=e;}get ctxId(){return this.ctx.baseInfo.id}setItem(t,e){var n;return this.ctx.caller.callAsync("api:call",{method:"write-plugin-storage-file",args:[this.ctxId,t,e,null===(n=this.opts)||void 0===n?void 0:n.assets]})}getItem(t){var e;return this.ctx.caller.callAsync("api:call",{method:"read-plugin-storage-file",args:[this.ctxId,t,null===(e=this.opts)||void 0===e?void 0:e.assets]})}removeItem(t){var e;return this.ctx.caller.call("api:call",{method:"unlink-plugin-storage-file",args:[this.ctxId,t,null===(e=this.opts)||void 0===e?void 0:e.assets]})}allKeys(){var t;return this.ctx.caller.callAsync("api:call",{method:"list-plugin-storage-files",args:[this.ctxId,null===(t=this.opts)||void 0===t?void 0:t.assets]})}clear(){var t;return this.ctx.caller.call("api:call",{method:"clear-plugin-storage-files",args:[this.ctxId,null===(t=this.opts)||void 0===t?void 0:t.assets]})}hasItem(t){var e;return this.ctx.caller.callAsync("api:call",{method:"exist-plugin-storage-file",args:[this.ctxId,t,null===(e=this.opts)||void 0===e?void 0:e.assets]})}}class An{constructor(t){var e,n,r;r=void 0,(n="ctx")in(e=this)?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,this.ctx=t;}get React(){return this.ensureHostScope().React}get ReactDOM(){return this.ensureHostScope().ReactDOM}get pluginLocal(){return this.ensureHostScope().LSPluginCore.ensurePlugin(this.ctx.baseInfo.id)}invokeExperMethod(t,...e){var n,r;const o=this.ensureHostScope();return t=null===(n=Ve(t))||void 0===n?void 0:n.toLowerCase(),null===(r=o.logseq.api["exper_"+t])||void 0===r?void 0:r.apply(o,e)}async loadScripts(...t){(t=t.map((t=>null!=t&&t.startsWith("http")?t:this.ctx.resolveResourceFullUrl(t)))).unshift(this.ctx.baseInfo.id),await this.invokeExperMethod("loadScripts",...t);}registerFencedCodeRenderer(t,e){return this.ensureHostScope().logseq.api.exper_register_fenced_code_renderer(this.ctx.baseInfo.id,t,e)}registerExtensionsEnhancer(t,e){const n=this.ensureHostScope();if("katex"===t)n.katex&&e(n.katex).catch(console.error);return n.logseq.api.exper_register_extensions_enhancer(this.ctx.baseInfo.id,t,e)}ensureHostScope(){if(window===top)throw new Error("Can not access host scope!");return top}}function kn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const En=t=>`task_callback_${t}`;class Tn{constructor(t,e,n={}){kn(this,"_client",void 0),kn(this,"_requestId",void 0),kn(this,"_requestOptions",void 0),kn(this,"_promise",void 0),kn(this,"_aborted",!1),this._client=t,this._requestId=e,this._requestOptions=n,this._promise=new Promise(((t,e)=>{if(!this._requestId)return e(null);this._client.once(En(this._requestId),(n=>{n&&n instanceof Error?e(n):t(n);}));}));const{success:r,fail:o,final:i}=this._requestOptions;this._promise.then((t=>{null==r||r(t);})).catch((t=>{null==o||o(t);})).finally((()=>{null==i||i();}));}abort(){this._requestOptions.abortable&&!this._aborted&&(this._client.ctx._execCallableAPI("http_request_abort",this._requestId),this._aborted=!0);}get promise(){return this._promise}get client(){return this._client}get requestId(){return this._requestId}}class In extends We.EventEmitter{constructor(t){super(),kn(this,"_ctx",void 0),this._ctx=t,this.ctx.caller.on("#lsp#request#callback",(t=>{const e=null==t?void 0:t.requestId;e&&this.emit(En(e),null==t?void 0:t.payload);}));}static createRequestTask(t,e,n){return new Tn(t,e,n)}async _request(t){const e=this.ctx.baseInfo.id,{success:n,fail:r,final:o,...i}=t,s=this.ctx.Experiments.invokeExperMethod("request",e,i),a=In.createRequestTask(this.ctx.Request,s,t);return i.abortable?a:a.promise}get ctx(){return this._ctx}}const Fn=It(Object.keys,Object);var Ln=Object.prototype.hasOwnProperty;const Nn=function(t){if(!Nt(t))return Fn(t);var e=[];for(var n in Object(t))Ln.call(t,n)&&"constructor"!=n&&e.push(n);return e};const Mn=function(t){return qt(t)?_e(t):Nn(t)};const Pn=function(t,e){return t&&bt(t,e,Mn)};const Rn=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this};const Dn=function(t){return this.__data__.has(t)};function Un(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new pt;++e<n;)this.add(t[e]);}Un.prototype.add=Un.prototype.push=Rn,Un.prototype.has=Dn;const $n=Un;const zn=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return !0;return !1};const Hn=function(t,e){return t.has(e)};const Bn=function(t,e,n,r,o,i){var s=1&n,a=t.length,c=e.length;if(a!=c&&!(s&&c>a))return !1;var l=i.get(t),u=i.get(e);if(l&&u)return l==e&&u==t;var f=-1,p=!0,d=2&n?new $n:void 0;for(i.set(t,e),i.set(e,t);++f<a;){var h=t[f],m=e[f];if(r)var g=s?r(m,h,f,e,t,i):r(h,m,f,t,e,i);if(void 0!==g){if(g)continue;p=!1;break}if(d){if(!zn(e,(function(t,e){if(!Hn(d,e)&&(h===t||o(h,t,n,r,i)))return d.push(e)}))){p=!1;break}}else if(h!==m&&!o(h,m,n,r,i)){p=!1;break}}return i.delete(t),i.delete(e),p};const qn=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t];})),n};const Wn=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t;})),n};var Gn=_?_.prototype:void 0,Jn=Gn?Gn.valueOf:void 0;const Zn=function(t,e,n,r,i,s,a){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return !1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return !(t.byteLength!=e.byteLength||!s(new St(t),new St(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return o(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var c=qn;case"[object Set]":var l=1&r;if(c||(c=Wn),t.size!=e.size&&!l)return !1;var u=a.get(t);if(u)return u==e;r|=2,a.set(t,e);var f=Bn(c(t),c(e),r,i,s,a);return a.delete(t),f;case"[object Symbol]":if(Jn)return Jn.call(t)==Jn.call(e)}return !1};const Vn=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t};const Kn=function(t,e,n){var r=e(t);return Ht(t)?r:Vn(r,n(t))};const Yn=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var s=t[n];e(s,n,t)&&(i[o++]=s);}return i};const Qn=function(){return []};var Xn=Object.prototype.propertyIsEnumerable,tr=Object.getOwnPropertySymbols;const er=tr?function(t){return null==t?[]:(t=Object(t),Yn(tr(t),(function(e){return Xn.call(t,e)})))}:Qn;const nr=function(t){return Kn(t,Mn,er)};var rr=Object.prototype.hasOwnProperty;const or=function(t,e,n,r,o,i){var s=1&n,a=nr(t),c=a.length;if(c!=nr(e).length&&!s)return !1;for(var l=c;l--;){var u=a[l];if(!(s?u in e:rr.call(e,u)))return !1}var f=i.get(t),p=i.get(e);if(f&&p)return f==e&&p==t;var d=!0;i.set(t,e),i.set(e,t);for(var h=s;++l<c;){var m=t[u=a[l]],g=e[u];if(r)var v=s?r(g,m,u,e,t,i):r(m,g,u,t,e,i);if(!(void 0===v?m===g||o(m,g,n,r,i):v)){d=!1;break}h||(h="constructor"==u);}if(d&&!h){var y=t.constructor,b=e.constructor;y==b||!("constructor"in t)||!("constructor"in e)||"function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b||(d=!1);}return i.delete(t),i.delete(e),d};const ir=G(b,"DataView");const sr=G(b,"Promise");const ar=G(b,"Set");const cr=G(b,"WeakMap");var lr="[object Map]",ur="[object Promise]",fr="[object Set]",pr="[object WeakMap]",dr="[object DataView]",hr=R(ir),mr=R(J),gr=R(sr),vr=R(ar),yr=R(cr),br=E;(ir&&br(new ir(new ArrayBuffer(1)))!=dr||J&&br(new J)!=lr||sr&&br(sr.resolve())!=ur||ar&&br(new ar)!=fr||cr&&br(new cr)!=pr)&&(br=function(t){var e=E(t),n="[object Object]"==e?t.constructor:void 0,r=n?R(n):"";if(r)switch(r){case hr:return dr;case mr:return lr;case gr:return ur;case vr:return fr;case yr:return pr}return e});const _r=br;var wr="[object Arguments]",xr="[object Array]",Cr="[object Object]",Or=Object.prototype.hasOwnProperty;const Sr=function(t,e,n,r,o,i){var s=Ht(t),a=Ht(e),c=s?xr:_r(t),l=a?xr:_r(e),u=(c=c==wr?Cr:c)==Cr,f=(l=l==wr?Cr:l)==Cr,p=c==l;if(p&&Kt(t)){if(!Kt(e))return !1;s=!0,u=!1;}if(p&&!u)return i||(i=new mt),s||fe(t)?Bn(t,e,n,r,o,i):Zn(t,e,c,n,r,o,i);if(!(1&n)){var d=u&&Or.call(t,"__wrapped__"),h=f&&Or.call(e,"__wrapped__");if(d||h){var m=d?t.value():t,g=h?e.value():e;return i||(i=new mt),o(m,g,n,r,i)}}return !!p&&(i||(i=new mt),or(t,e,n,r,o,i))};const jr=function t(e,n,r,o,i){return e===n||(null==e||null==n||!Pt(e)&&!Pt(n)?e!=e&&n!=n:Sr(e,n,r,o,t,i))};const Ar=function(t,e,n,r){var o=n.length,i=o,s=!r;if(null==t)return !i;for(t=Object(t);o--;){var a=n[o];if(s&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return !1}for(;++o<i;){var c=(a=n[o])[0],l=t[c],u=a[1];if(s&&a[2]){if(void 0===l&&!(c in t))return !1}else {var f=new mt;if(r)var p=r(l,u,c,t,e,f);if(!(void 0===p?jr(u,l,3,r,f):p))return !1}}return !0};const kr=function(t){return t==t&&!T(t)};const Er=function(t){for(var e=Mn(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,kr(o)];}return e};const Tr=function(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}};const Ir=function(t){var e=Er(t);return 1==e.length&&e[0][2]?Tr(e[0][0],e[0][1]):function(n){return n===t||Ar(n,t,e)}};const Fr=function(t){return "symbol"==typeof t||Pt(t)&&"[object Symbol]"==E(t)};var Lr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Nr=/^\w*$/;const Mr=function(t,e){if(Ht(t))return !1;var n=typeof t;return !("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Fr(t))||(Nr.test(t)||!Lr.test(t)||null!=e&&t in Object(e))};function Pr(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var s=t.apply(this,r);return n.cache=i.set(o,s)||i,s};return n.cache=new(Pr.Cache||pt),n}Pr.Cache=pt;const Rr=Pr;var Dr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ur=/\\(\\)?/g;const $r=function(t){var e=Rr(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Dr,(function(t,n,r,o){e.push(r?o.replace(Ur,"$1"):n||t);})),e}));const zr=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o};var Hr=_?_.prototype:void 0,Br=Hr?Hr.toString:void 0;const qr=function t(e){if("string"==typeof e)return e;if(Ht(e))return zr(e,t)+"";if(Fr(e))return Br?Br.call(e):"";var n=e+"";return "0"==n&&1/e==-Infinity?"-0":n};const Wr=function(t){return null==t?"":qr(t)};const Gr=function(t,e){return Ht(t)?t:Mr(t,e)?[t]:$r(Wr(t))};const Jr=function(t){if("string"==typeof t||Fr(t))return t;var e=t+"";return "0"==e&&1/t==-Infinity?"-0":e};const Zr=function(t,e){for(var n=0,r=(e=Gr(e,t)).length;null!=t&&n<r;)t=t[Jr(e[n++])];return n&&n==r?t:void 0};const Vr=function(t,e,n){var r=null==t?void 0:Zr(t,e);return void 0===r?n:r};const Kr=function(t,e){return null!=t&&e in Object(t)};const Yr=function(t,e,n){for(var r=-1,o=(e=Gr(e,t)).length,i=!1;++r<o;){var s=Jr(e[r]);if(!(i=null!=t&&n(t,s)))break;t=t[s];}return i||++r!=o?i:!!(o=null==t?0:t.length)&&Bt(o)&&ye(s,o)&&(Ht(t)||zt(t))};const Qr=function(t,e){return null!=t&&Yr(t,e,Kr)};const Xr=function(t,e){return Mr(t)&&kr(e)?Tr(Jr(t),e):function(n){var r=Vr(n,t);return void 0===r&&r===e?Qr(n,t):jr(e,r,3)}};const to=function(t){return function(e){return null==e?void 0:e[t]}};const eo=function(t){return function(e){return Zr(e,t)}};const no=function(t){return Mr(t)?to(Jr(t)):eo(t)};const ro=function(t){return "function"==typeof t?t:null==t?ke:"object"==typeof t?Ht(t)?Xr(t[0],t[1]):Ir(t):no(t)};const oo=function(t,e){var n={};return e=ro(e),Pn(t,(function(t,r,o){vt(n,e(t,r,o),t);})),n};function io(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class so{constructor(t,e){io(this,"ctx",void 0),io(this,"serviceHooks",void 0),this.ctx=t,this.serviceHooks=e,t._execCallableAPI("register-search-service",t.baseInfo.id,e.name,e.options);Object.entries({query:{f:"onQuery",args:["graph","q",!0],reply:!0,transformOutput:t=>(Ht(null==t?void 0:t.blocks)&&(t.blocks=t.blocks.map((t=>t&&oo(t,((t,e)=>`block/${e}`))))),t)},rebuildBlocksIndice:{f:"onIndiceInit",args:["graph","blocks"]},transactBlocks:{f:"onBlocksChanged",args:["graph","data"]},truncateBlocks:{f:"onIndiceReset",args:["graph"]},removeDb:{f:"onGraph",args:["graph"]}}).forEach((([n,r])=>{const o=(t=>`service:search:${t}:${e.name}`)(n);t.caller.on(o,(async n=>{if(I(null==e?void 0:e[r.f])){let i=null;try{i=await e[r.f].apply(e,(r.args||[]).map((t=>{if(n){if(!0===t)return n;if(n.hasOwnProperty(t)){const e=n[t];return delete n[t],e}}}))),r.transformOutput&&(i=r.transformOutput(i));}catch(t){console.error("[SearchService] ",t),i=t;}finally{r.reply&&t.caller.call(`${o}:reply`,i);}}}));}));}}function ao(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const co=Symbol.for("proxy-continue"),lo=nn()("LSPlugin:user"),uo=new Ye("",{console:!0});function fo(t,e,n){var r;if("function"!=typeof n)return !1;const{key:o,label:i,desc:s,palette:a,keybinding:c,extras:l}=e,u=`SimpleCommandHook${o}${++vo}`;this.Editor["on"+u](n),null===(r=this.caller)||void 0===r||r.call("api:call",{method:"register-plugin-simple-command",args:[this.baseInfo.id,[{key:o,label:i,type:t,desc:s,keybinding:c,extras:l},["editor/hook",u]],a]});}function po(t){return !("string"!=typeof(e=t)||36!==e.length||!/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi.test(e))||(uo.error(`#${t} is not a valid UUID string.`),!1);var e;}let ho=null,mo=new Map;const go={async getInfo(t){return ho||(ho=await this._execCallableAPIAsync("get-app-info")),"string"==typeof t?ho[t]:ho},registerCommand:fo,registerSearchService(t){if(mo.has(t.name))throw new Error(`SearchService: #${t.name} has registered!`);mo.set(t.name,new so(this,t));},registerCommandPalette(t,e){const{key:n,label:r,keybinding:o}=t;return fo.call(this,"$palette$",{key:n,label:r,palette:!0,keybinding:o},e)},registerCommandShortcut(t,e){const{binding:n}=t,r="$shortcut$",o=r+Ve(n);return fo.call(this,r,{key:o,palette:!1,keybinding:t},e)},registerUIItem(t,e){var n;const r=this.baseInfo.id;null===(n=this.caller)||void 0===n||n.call("api:call",{method:"register-plugin-ui-item",args:[r,t,e]});},registerPageMenuItem(t,e){if("function"!=typeof e)return !1;const n=t+"_"+this.baseInfo.id,r=t;fo.call(this,"page-menu-item",{key:n,label:r},e);},onBlockRendererSlotted(t,e){if(!po(t))return;const n=this.baseInfo.id,r=`hook:editor:${Ve(`slot:${t}`)}`;return this.caller.on(r,e),this.App._installPluginHook(n,r),()=>{this.caller.off(r,e),this.App._uninstallPluginHook(n,r);}},invokeExternalPlugin(t,...e){var n;if(!(t=null===(n=t)||void 0===n?void 0:n.trim()))return;let[r,o]=t.split(".");if(!["models","commands"].includes(null==o?void 0:o.toLowerCase()))throw new Error("Type only support '.models' or '.commands' currently.");const i=t.replace(`${r}.${o}.`,"");if(!r||!o||!i)throw new Error(`Illegal type of #${t} to invoke external plugin.`);return this._execCallableAPIAsync("invoke_external_plugin_cmd",r,o.toLowerCase(),i,e)},setFullScreen(t){const e=(...t)=>this._callWin("setFullScreen",...t);"toggle"===t?this._callWin("isFullScreen").then((t=>{t?e():e(!0);})):t?e(!0):e();}};let vo=0;const yo={newBlockUUID(){return this._execCallableAPIAsync("new_block_uuid")},registerSlashCommand(t,e){var n;lo("Register slash command #",this.baseInfo.id,t,e),"function"==typeof e&&(e=[["editor/clear-current-slash",!1],["editor/restore-saved-cursor"],["editor/hook",e]]),e=e.map((t=>{const[e,...n]=t;if("editor/hook"===e){let r=n[0],o=()=>{var t;null===(t=this.caller)||void 0===t||t.callUserModel(r);};"function"==typeof r&&(o=r);const i=`SlashCommandHook${e}${++vo}`;t[1]=i,this.Editor["on"+i](o);}return t})),null===(n=this.caller)||void 0===n||n.call("api:call",{method:"register-plugin-slash-command",args:[this.baseInfo.id,[t,e]]});},registerBlockContextMenuItem(t,e){if("function"!=typeof e)return !1;const n=t+"_"+this.baseInfo.id;fo.call(this,"block-context-menu-item",{key:n,label:t},e);},registerHighlightContextMenuItem(t,e,n){if("function"!=typeof e)return !1;const r=t+"_"+this.baseInfo.id;fo.call(this,"highlight-context-menu-item",{key:r,label:t,extras:n},e);},scrollToBlockInPage(t,e,n){const r="block-content-"+e;null!=n&&n.replaceState?this.App.replaceState("page",{name:t},{anchor:r}):this.App.pushState("page",{name:t},{anchor:r});}},bo={onBlockChanged(t,e){if(!po(t))return;const n=this.baseInfo.id,r=`hook:db:${Ve(`block:${t}`)}`,o=({block:n,txData:r,txMeta:o})=>{n.uuid===t&&e(n,r,o);};return this.caller.on(r,o),this.App._installPluginHook(n,r),()=>{this.caller.off(r,o),this.App._uninstallPluginHook(n,r);}},datascriptQuery(t,...e){if(e.pop(),null!=e&&e.some((t=>"function"==typeof t))){return this.Experiments.ensureHostScope().logseq.api.datascript_query(t,...e)}return this._execCallableAPIAsync("datascript_query",t,...e)}},_o={},wo={},xo={makeSandboxStorage(){return new jn(this,{assets:!0})}};class Co extends(Ge()){constructor(t,e){super(),ao(this,"_baseInfo",void 0),ao(this,"_caller",void 0),ao(this,"_version","0.0.14"),ao(this,"_debugTag",""),ao(this,"_settingsSchema",void 0),ao(this,"_connected",!1),ao(this,"_ui",new Map),ao(this,"_mFileStorage",void 0),ao(this,"_mRequest",void 0),ao(this,"_mExperiments",void 0),ao(this,"_beforeunloadCallback",void 0),this._baseInfo=t,this._caller=e,e.on("sys:ui:visible",(t=>{null!=t&&t.toggle&&this.toggleMainUI();})),e.on("settings:changed",(t=>{const e=Object.assign({},this.settings),n=Object.assign(this._baseInfo.settings,t);this.emit("settings:changed",{...n},e);})),e.on("beforeunload",(async t=>{const{actor:n,...r}=t,o=this._beforeunloadCallback;try{o&&await o(r),null==n||n.resolve(null);}catch(t){console.debug(`${e.debugTag} [beforeunload] `,t),null==n||n.reject(t);}}));}async ready(t,e){if(!this._connected)try{var n;"function"==typeof t&&(e=t,t={});let r=await this._caller.connectToParent(t);this._connected=!0,r=Ke(this._baseInfo,r),null!==(n=r)&&void 0!==n&&n.id&&(this._debugTag=this._caller.debugTag=`#${r.id} [${r.name}]`,this.logger.setTag(this._debugTag)),this._settingsSchema&&(r.settings=function(t,e){const n=(e||[]).reduce(((t,e)=>("default"in e&&(t[e.key]=e.default),t)),{});return Object.assign(n,t)}(r.settings,this._settingsSchema),await this.useSettingsSchema(this._settingsSchema));try{await this._execCallableAPIAsync("setSDKMetadata",{version:this._version});}catch(t){console.warn(t);}e&&e.call(this,r);}catch(t){console.error(`${this._debugTag} [Ready Error]`,t);}}ensureConnected(){if(!this._connected)throw new Error("not connected")}beforeunload(t){"function"==typeof t&&(this._beforeunloadCallback=t);}provideModel(t){return this.caller._extendUserModel(t),this}provideTheme(t){return this.caller.call("provider:theme",t),this}provideStyle(t){return this.caller.call("provider:style",t),this}provideUI(t){return this.caller.call("provider:ui",t),this}useSettingsSchema(t){return this.connected&&this.caller.call("settings:schema",{schema:t,isSync:!0}),this._settingsSchema=t,this}updateSettings(t){this.caller.call("settings:update",t);}onSettingsChanged(t){const e="settings:changed";return this.on(e,t),()=>this.off(e,t)}showSettingsUI(){this.caller.call("settings:visible:changed",{visible:!0});}hideSettingsUI(){this.caller.call("settings:visible:changed",{visible:!1});}setMainUIAttrs(t){this.caller.call("main-ui:attrs",t);}setMainUIInlineStyle(t){this.caller.call("main-ui:style",t);}hideMainUI(t){const e={key:0,visible:!1,cursor:null==t?void 0:t.restoreEditingCursor};this.caller.call("main-ui:visible",e),this.emit("ui:visible:changed",e),this._ui.set(e.key,e);}showMainUI(t){const e={key:0,visible:!0,autoFocus:null==t?void 0:t.autoFocus};this.caller.call("main-ui:visible",e),this.emit("ui:visible:changed",e),this._ui.set(e.key,e);}toggleMainUI(){const t=0,e=this._ui.get(t);e&&e.visible?this.hideMainUI():this.showMainUI();}get version(){return this._version}get isMainUIVisible(){const t=this._ui.get(0);return Boolean(t&&t.visible)}get connected(){return this._connected}get baseInfo(){return this._baseInfo}get effect(){return (t=this)&&((null===(e=t.baseInfo)||void 0===e?void 0:e.effect)||!(null!==(n=t.baseInfo)&&void 0!==n&&n.iir));var t,e,n;}get logger(){return uo}get settings(){var t;return null===(t=this.baseInfo)||void 0===t?void 0:t.settings}get caller(){return this._caller}resolveResourceFullUrl(t){if(this.ensureConnected(),t)return t=t.replace(/^[.\\/]+/,""),Qe(this._baseInfo.lsr,t)}_makeUserProxy(t,e){const n=this,r=this.caller;return new Proxy(t,{get(t,o,i){const s=t[o];return function(...t){if(s){const r=s.apply(n,t.concat(e));if(r!==co)return r}if(e){const i=o.toString().match(/^(once|off|on)/i);if(null!=i){const o=i[0].toLowerCase(),s=i.input.slice(o.length),a="off"===o,c=n.baseInfo.id,l=`hook:${e}:${Ve(s)}`,u=t[0];r[o](l,u);const f=()=>{r.off(l,u),r.listenerCount(l)||n.App._uninstallPluginHook(c,l);};return a?void f():(n.App._installPluginHook(c,l),f)}}let i=o;return ["git","ui","assets"].includes(e)&&(i=e+"_"+i),r.callAsync("api:call",{tag:e,method:i,args:t})}}})}_execCallableAPIAsync(t,...e){return this._caller.callAsync("api:call",{method:t,args:e})}_execCallableAPI(t,...e){this._caller.call("api:call",{method:t,args:e});}_callWin(...t){return this._execCallableAPIAsync("_callMainWin",...t)}get App(){return this._makeUserProxy(go,"app")}get Editor(){return this._makeUserProxy(yo,"editor")}get DB(){return this._makeUserProxy(bo,"db")}get Git(){return this._makeUserProxy(_o,"git")}get UI(){return this._makeUserProxy(wo,"ui")}get Assets(){return this._makeUserProxy(xo,"assets")}get FileStorage(){let t=this._mFileStorage;return t||(t=this._mFileStorage=new jn(this)),t}get Request(){let t=this._mRequest;return t||(t=this._mRequest=new In(this)),t}get Experiments(){let t=this._mExperiments;return t||(t=this._mExperiments=new An(this)),t}}function Oo(t,e){return new Co(t,e)}if(null==window.__LSP__HOST__){const t=new On(null);window.logseq=Oo({},t);}})(),r})()));

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/**
 * Reverse an array and return a sequence.
 */
function reverseArray(arr) {
    var i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (arr == null)
                    return [2 /*return*/];
                i = arr.length - 1;
                _a.label = 1;
            case 1:
                if (!(i >= 0)) return [3 /*break*/, 4];
                return [4 /*yield*/, arr[i]];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                i--;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
/**
 * Iterate a sequence in a functional style.
 */
function forEach(seq, fn) {
    var e_1, _a;
    try {
        for (var seq_1 = __values(seq), seq_1_1 = seq_1.next(); !seq_1_1.done; seq_1_1 = seq_1.next()) {
            var x = seq_1_1.value;
            fn(x);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (seq_1_1 && !seq_1_1.done && (_a = seq_1.return)) _a.call(seq_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
/**
 * Perform reduce on a sequence.
 */
function reduce$1(seq, fn, initialValue) {
    var e_4, _a;
    var prev = initialValue;
    try {
        for (var seq_4 = __values(seq), seq_4_1 = seq_4.next(); !seq_4_1.done; seq_4_1 = seq_4.next()) {
            var x = seq_4_1.value;
            if (prev === undefined) {
                prev = x;
                continue;
            }
            prev = fn(prev, x);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (seq_4_1 && !seq_4_1.done && (_a = seq_4.return)) _a.call(seq_4);
        }
        finally { if (e_4) throw e_4.error; }
    }
    return prev;
}
/**
 * Find an element in a sequence.
 */
function find(seq, predicate) {
    var e_5, _a;
    try {
        for (var seq_5 = __values(seq), seq_5_1 = seq_5.next(); !seq_5_1.done; seq_5_1 = seq_5.next()) {
            var x = seq_5_1.value;
            if (predicate(x))
                return x;
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (seq_5_1 && !seq_5_1.done && (_a = seq_5.return)) _a.call(seq_5);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return undefined;
}
/**
 * Check if an element in the sequence meets predicate.
 */
function some(seq, predicate) {
    var e_6, _a;
    try {
        for (var seq_6 = __values(seq), seq_6_1 = seq_6.next(); !seq_6_1.done; seq_6_1 = seq_6.next()) {
            var x = seq_6_1.value;
            if (predicate(x))
                return true;
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (seq_6_1 && !seq_6_1.done && (_a = seq_6.return)) _a.call(seq_6);
        }
        finally { if (e_6) throw e_6.error; }
    }
    return false;
}
/**
 * Check if all elements in the sequence meet predicate.
 */
function every(seq, predicate) {
    var e_7, _a;
    try {
        for (var seq_7 = __values(seq), seq_7_1 = seq_7.next(); !seq_7_1.done; seq_7_1 = seq_7.next()) {
            var x = seq_7_1.value;
            if (!predicate(x))
                return false;
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (seq_7_1 && !seq_7_1.done && (_a = seq_7.return)) _a.call(seq_7);
        }
        finally { if (e_7) throw e_7.error; }
    }
    return true;
}

var Node$1 = /** @class */ (function () {
    function Node(val, prev, next) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
    return Node;
}());
/**
 * A doubly-linked list.
 *
 * ```ts
 * const list = new DLinkedList<number>()
 * list.push(2)
 * list.unshift(1)
 * list.append([3, 4])
 * list
 *   .filter((num) => n % 2 === 0)
 *   .map((num) => n * 2)
 *   .forEach((num) => console.log(num))
 * ```
 */
var DLinkedList = /** @class */ (function () {
    function DLinkedList() {
        this._length = 0;
    }
    Object.defineProperty(DLinkedList.prototype, "length", {
        /**
         * Number of elements in the list.
         */
        get: function () {
            return this._length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Pop an element from the start of the list.
     */
    DLinkedList.prototype.shift = function () {
        var first = this.first;
        if (first === undefined)
            return undefined;
        this._length--;
        if (first.next === undefined) {
            this.last = undefined;
        }
        else {
            first.next.prev = undefined;
        }
        this.first = first.next;
        first.next = undefined;
        return first.val;
    };
    /**
     * Pop an element from the end of the list.
     */
    DLinkedList.prototype.pop = function () {
        var last = this.last;
        if (last === undefined)
            return undefined;
        this._length--;
        if (last.prev === undefined) {
            this.first = undefined;
        }
        else {
            last.prev.next = undefined;
        }
        this.last = last.prev;
        last.prev = undefined;
        return last.val;
    };
    /**
     * Push an element to the start of the list.
     *
     * @param val Element to push.
     */
    DLinkedList.prototype.unshift = function (val) {
        var node = new Node$1(val);
        var first = this.first;
        if (first === undefined) {
            this.last = node;
        }
        else {
            node.next = first;
            first.prev = node;
        }
        this.first = node;
        this._length++;
    };
    /**
     * Push an element to the end of the list.
     *
     * @param val Element to push.
     */
    DLinkedList.prototype.push = function (val) {
        var node = new Node$1(val);
        var last = this.last;
        if (last === undefined) {
            this.first = node;
        }
        else {
            last.next = node;
            node.prev = last;
        }
        this.last = node;
        this._length++;
    };
    /**
     * Push a sequence of elements to the start of the list.
     *
     * @param vals Elements to push.
     */
    DLinkedList.prototype.prepend = function (vals) {
        var e_1, _a;
        var node;
        var curr;
        var count = 0;
        try {
            for (var vals_1 = __values(vals), vals_1_1 = vals_1.next(); !vals_1_1.done; vals_1_1 = vals_1.next()) {
                var val = vals_1_1.value;
                count++;
                if (node === undefined) {
                    node = new Node$1(val);
                    curr = node;
                    continue;
                }
                var newNode = new Node$1(val);
                curr.next = newNode;
                newNode.prev = curr;
                curr = newNode;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (vals_1_1 && !vals_1_1.done && (_a = vals_1.return)) _a.call(vals_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var first = this.first;
        if (curr !== undefined) {
            curr.next = first;
            if (first !== undefined) {
                first.prev = curr;
            }
        }
        if (node !== undefined) {
            this.first = node;
        }
        this._length += count;
    };
    /**
     * Push a sequence of elements to the end of the list.
     *
     * @param vals Elements to push.
     */
    DLinkedList.prototype.append = function (vals) {
        var e_2, _a;
        var node;
        var curr;
        var count = 0;
        try {
            for (var vals_2 = __values(vals), vals_2_1 = vals_2.next(); !vals_2_1.done; vals_2_1 = vals_2.next()) {
                var val = vals_2_1.value;
                count++;
                if (node === undefined) {
                    node = new Node$1(val);
                    curr = node;
                    continue;
                }
                var newNode = new Node$1(val);
                curr.next = newNode;
                newNode.prev = curr;
                curr = newNode;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (vals_2_1 && !vals_2_1.done && (_a = vals_2.return)) _a.call(vals_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var last = this.last;
        if (last === undefined) {
            this.first = node;
        }
        else {
            last.next = node;
            if (node !== undefined) {
                node.prev = last;
            }
        }
        this.last = node;
        this._length += count;
    };
    /**
     * Make instance iterable.
     */
    DLinkedList.prototype[Symbol.iterator] = function () {
        var cur = this.first;
        return {
            next: function () {
                if (cur === undefined) {
                    return {
                        done: true,
                        value: undefined,
                    };
                }
                else {
                    var ret = {
                        done: false,
                        value: cur.val,
                    };
                    cur = cur.next;
                    return ret;
                }
            },
        };
    };
    /**
     * Iterate through the list.
     */
    DLinkedList.prototype.forEach = function (fn) {
        forEach(this, fn);
    };
    /**
     * Map the list elements.
     *
     * @returns A new list instance.
     */
    DLinkedList.prototype.map = function (fn) {
        var e_3, _a;
        var newList = new DLinkedList();
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var x = _c.value;
                newList.push(fn(x));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return newList;
    };
    /**
     * Filter the list.
     *
     * @returns A new list instance.
     */
    DLinkedList.prototype.filter = function (predicate) {
        var e_4, _a;
        var newList = new DLinkedList();
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var x = _c.value;
                if (predicate(x)) {
                    newList.push(x);
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return newList;
    };
    /**
     * Perform reduce on the list.
     *
     * @returns The reduced value.
     */
    DLinkedList.prototype.reduce = function (fn, initialValue) {
        return reduce$1(this, fn, initialValue);
    };
    /**
     * Find a specific element in the list.
     *
     * @returns Element found or `undefined` otherwise.
     */
    DLinkedList.prototype.find = function (predicate) {
        return find(this, predicate);
    };
    /**
     * Check if at least one element meets the predicate.
     */
    DLinkedList.prototype.some = function (predicate) {
        return some(this, predicate);
    };
    /**
     * Check if all elements meet the predicate.
     */
    DLinkedList.prototype.every = function (predicate) {
        return every(this, predicate);
    };
    DLinkedList.prototype.toString = function () {
        return "DLinkedList:".concat(Array.from(this));
    };
    return DLinkedList;
}());

/**
 * A doubly-ended queue.
 *
 * ```ts
 * const queue = new Deque<number>()
 * queue.push(3)
 * queue.push(4)
 * queue.unshift(2)
 * queue.unshift(1)
 * queue.shift() // 1
 * queue.pop() // 4
 * ```
 */
/** @class */ ((function () {
    function Deque() {
        this._list = new DLinkedList();
    }
    Object.defineProperty(Deque.prototype, "length", {
        /**
         * Number of elements in the queue.
         */
        get: function () {
            return this._list.length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Preview the element to shift next.
     */
    Deque.prototype.peekStart = function () {
        var _a;
        return (_a = this._list.first) === null || _a === void 0 ? void 0 : _a.val;
    };
    /**
     * Preview the element to pop next.
     */
    Deque.prototype.peekEnd = function () {
        var _a;
        return (_a = this._list.last) === null || _a === void 0 ? void 0 : _a.val;
    };
    /**
     * Push an element to the end of the queue.
     *
     * @param val Element to push.
     */
    Deque.prototype.push = function (val) {
        this._list.push(val);
    };
    /**
     * Pop an element from the end of the queue.
     */
    Deque.prototype.pop = function () {
        return this._list.pop();
    };
    /**
     * Push an element to the start of the queue.
     *
     * @param val Element to push.
     */
    Deque.prototype.unshift = function (val) {
        this._list.unshift(val);
    };
    /**
     * Pop an element from the start of the queue.
     */
    Deque.prototype.shift = function () {
        return this._list.shift();
    };
    return Deque;
})());

/**
 * MaxHeap
 */
var MaxHeap = /** @class */ (function () {
    /**
     * Make an instance of MaxHeap.
     *
     * @param accessor Accessor function that gives the number to sort to.
     */
    function MaxHeap(accessor) {
        if (accessor === void 0) { accessor = function (x) { return x; }; }
        this._data = [];
        this._accessor = accessor;
    }
    Object.defineProperty(MaxHeap.prototype, "length", {
        /**
         * Number of elements in the heap.
         */
        get: function () {
            return this._data.length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Preview the root value.
     */
    MaxHeap.prototype.peek = function () {
        return this._data[0];
    };
    /**
     * Push a value onto the heap/
     */
    MaxHeap.prototype.push = function (val) {
        var _a;
        var data = this._data;
        var accessor = this._accessor;
        data.push(val);
        var me = data.length - 1;
        var parent = ((me - 1) / 2) >> 0;
        while (me > 0 && accessor(data[me]) > accessor(data[parent])) {
            _a = __read([data[me], data[parent]], 2), data[parent] = _a[0], data[me] = _a[1];
            me = parent;
            parent = ((me - 1) / 2) >> 0;
        }
    };
    /**
     * Pop the root value.
     */
    MaxHeap.prototype.pop = function () {
        var _a;
        var _b, _c, _d, _e, _f, _g;
        var data = this._data;
        if (data.length <= 1)
            return data.pop();
        var accessor = this._accessor;
        var toPop = data[0];
        data[0] = data.pop();
        var me = 0;
        var left = 2 * me + 1;
        var right = 2 * me + 2;
        var leftVal = (_b = accessor(data[left])) !== null && _b !== void 0 ? _b : -Infinity;
        var rightVal = (_c = accessor(data[right])) !== null && _c !== void 0 ? _c : -Infinity;
        var child = rightVal > leftVal ? right : left;
        var childVal = (_d = accessor(data[child])) !== null && _d !== void 0 ? _d : -Infinity;
        while (childVal > accessor(data[me])) {
            _a = __read([data[me], data[child]], 2), data[child] = _a[0], data[me] = _a[1];
            me = child;
            left = 2 * me + 1;
            right = 2 * me + 2;
            leftVal = (_e = accessor(data[left])) !== null && _e !== void 0 ? _e : -Infinity;
            rightVal = (_f = accessor(data[right])) !== null && _f !== void 0 ? _f : -Infinity;
            child = rightVal > leftVal ? right : left;
            childVal = (_g = accessor(data[child])) !== null && _g !== void 0 ? _g : -Infinity;
        }
        return toPop;
    };
    return MaxHeap;
}());
/**
 * MinHeap
 */
var MinHeap = /** @class */ (function () {
    /**
     * Make an instance of MinHeap.
     *
     * @param accessor Accessor function that gives the number to sort to.
     */
    function MinHeap(accessor) {
        if (accessor === void 0) { accessor = function (x) { return x; }; }
        this._data = [];
        this._accessor = accessor;
    }
    Object.defineProperty(MinHeap.prototype, "length", {
        /**
         * Number of elements in the heap.
         */
        get: function () {
            return this._data.length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Preview the root value.
     */
    MinHeap.prototype.peek = function () {
        return this._data[0];
    };
    /**
     * Push a value onto the heap/
     */
    MinHeap.prototype.push = function (val) {
        var _a;
        var data = this._data;
        data.push(val);
        var accessor = this._accessor;
        var me = data.length - 1;
        var parent = ((me - 1) / 2) >> 0;
        while (me > 0 && accessor(data[me]) < accessor(data[parent])) {
            _a = __read([data[me], data[parent]], 2), data[parent] = _a[0], data[me] = _a[1];
            me = parent;
            parent = ((me - 1) / 2) >> 0;
        }
    };
    /**
     * Pop the root value.
     */
    MinHeap.prototype.pop = function () {
        var _a;
        var _b, _c, _d, _e, _f, _g;
        var data = this._data;
        if (data.length <= 1)
            return data.pop();
        var accessor = this._accessor;
        var toPop = data[0];
        data[0] = data.pop();
        var me = 0;
        var left = 2 * me + 1;
        var right = 2 * me + 2;
        var leftVal = (_b = accessor(data[left])) !== null && _b !== void 0 ? _b : Infinity;
        var rightVal = (_c = accessor(data[right])) !== null && _c !== void 0 ? _c : Infinity;
        var child = rightVal < leftVal ? right : left;
        var childVal = (_d = accessor(data[child])) !== null && _d !== void 0 ? _d : Infinity;
        while (childVal < accessor(data[me])) {
            _a = __read([data[me], data[child]], 2), data[child] = _a[0], data[me] = _a[1];
            me = child;
            left = 2 * me + 1;
            right = 2 * me + 2;
            leftVal = (_e = accessor(data[left])) !== null && _e !== void 0 ? _e : Infinity;
            rightVal = (_f = accessor(data[right])) !== null && _f !== void 0 ? _f : Infinity;
            child = rightVal > leftVal ? right : left;
            childVal = (_g = accessor(data[child])) !== null && _g !== void 0 ? _g : Infinity;
        }
        return toPop;
    };
    return MinHeap;
}());

var Node = /** @class */ (function () {
    function Node(val, next) {
        this.val = val;
        this.next = next;
    }
    return Node;
}());
/**
 * A singlely-linked list.
 *
 * ```ts
 * const list = new LinkedList<number>()
 * list.push(1)
 * list.append([2, 3])
 * list
 *   .filter((num) => n % 2 !== 0)
 *   .map((num) => n * 2)
 *   .forEach((num) => console.log(num))
 * ```
 */
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this._length = 0;
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        /**
         * Number of elements in the queue.
         */
        get: function () {
            return this._length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Pop an element from the start of the list.
     */
    LinkedList.prototype.shift = function () {
        var first = this.first;
        if (first === undefined)
            return undefined;
        this._length--;
        if (first.next === undefined) {
            this.last = undefined;
        }
        this.first = first.next;
        first.next = undefined;
        return first.val;
    };
    /**
     * Push an element to the start of the list.
     *
     * @param val Element to push.
     */
    LinkedList.prototype.unshift = function (val) {
        var node = new Node(val);
        var first = this.first;
        if (first === undefined) {
            this.last = node;
        }
        else {
            node.next = first;
        }
        this.first = node;
        this._length++;
    };
    /**
     * Push an element to the end of the list.
     *
     * @param val Element to push.
     */
    LinkedList.prototype.push = function (val) {
        var node = new Node(val);
        var last = this.last;
        if (last === undefined) {
            this.first = node;
        }
        else {
            last.next = node;
        }
        this.last = node;
        this._length++;
    };
    /**
     * Push a sequence of elements to the start of the list.
     *
     * @param vals Elements to push.
     */
    LinkedList.prototype.prepend = function (vals) {
        var e_1, _a;
        var node;
        var curr;
        var count = 0;
        try {
            for (var vals_1 = __values(vals), vals_1_1 = vals_1.next(); !vals_1_1.done; vals_1_1 = vals_1.next()) {
                var val = vals_1_1.value;
                count++;
                if (node === undefined) {
                    node = new Node(val);
                    curr = node;
                    continue;
                }
                var newNode = new Node(val);
                curr.next = newNode;
                curr = newNode;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (vals_1_1 && !vals_1_1.done && (_a = vals_1.return)) _a.call(vals_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (curr !== undefined) {
            curr.next = this.first;
        }
        if (node !== undefined) {
            this.first = node;
        }
        this._length += count;
    };
    /**
     * Push a sequence of elements to the end of the list.
     *
     * @param vals Elements to push.
     */
    LinkedList.prototype.append = function (vals) {
        var e_2, _a;
        var node;
        var curr;
        var count = 0;
        try {
            for (var vals_2 = __values(vals), vals_2_1 = vals_2.next(); !vals_2_1.done; vals_2_1 = vals_2.next()) {
                var val = vals_2_1.value;
                count++;
                if (node === undefined) {
                    node = new Node(val);
                    curr = node;
                    continue;
                }
                var newNode = new Node(val);
                curr.next = newNode;
                curr = newNode;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (vals_2_1 && !vals_2_1.done && (_a = vals_2.return)) _a.call(vals_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var last = this.last;
        if (last === undefined) {
            this.first = node;
        }
        else {
            last.next = node;
        }
        this.last = node;
        this._length += count;
    };
    /**
     * Make instance iterable.
     */
    LinkedList.prototype[Symbol.iterator] = function () {
        var cur = this.first;
        return {
            next: function () {
                if (cur === undefined) {
                    return {
                        done: true,
                        value: undefined,
                    };
                }
                else {
                    var ret = {
                        done: false,
                        value: cur.val,
                    };
                    cur = cur.next;
                    return ret;
                }
            },
        };
    };
    /**
     * Iterate through the list.
     */
    LinkedList.prototype.forEach = function (fn) {
        forEach(this, fn);
    };
    /**
     * Map the list elements.
     *
     * @returns A new list instance.
     */
    LinkedList.prototype.map = function (fn) {
        var e_3, _a;
        var newList = new LinkedList();
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var x = _c.value;
                newList.push(fn(x));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return newList;
    };
    /**
     * Filter the list.
     *
     * @returns A new list instance.
     */
    LinkedList.prototype.filter = function (predicate) {
        var e_4, _a;
        var newList = new LinkedList();
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var x = _c.value;
                if (predicate(x)) {
                    newList.push(x);
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return newList;
    };
    /**
     * Perform reduce on the list.
     *
     * @returns The reduced value.
     */
    LinkedList.prototype.reduce = function (fn, initialValue) {
        return reduce$1(this, fn, initialValue);
    };
    /**
     * Find a specific element in the list.
     *
     * @returns Element found or `undefined` otherwise.
     */
    LinkedList.prototype.find = function (predicate) {
        return find(this, predicate);
    };
    /**
     * Check if at least one element meets the predicate.
     */
    LinkedList.prototype.some = function (predicate) {
        return some(this, predicate);
    };
    /**
     * Check if all elements meet the predicate.
     */
    LinkedList.prototype.every = function (predicate) {
        return every(this, predicate);
    };
    LinkedList.prototype.toString = function () {
        return "LinkedList:".concat(Array.from(this));
    };
    return LinkedList;
}());
/**
 * Returns a promise that wait for ms milliseconds.
 */
function waitMs(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}

/**
 * A proper queue implemented using a linked list.
 */
var Queue = /** @class */ (function () {
    /**
     * Create a new queue with an optional initial element.
     *
     * @param initial Optional initial element.
     */
    function Queue(initial) {
        this._list = new LinkedList();
        if (initial !== undefined) {
            this._list.push(initial);
        }
    }
    Object.defineProperty(Queue.prototype, "length", {
        /**
         * Number of elements in the queue.
         */
        get: function () {
            return this._list.length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Preview the element to pop next.
     */
    Queue.prototype.peek = function () {
        var _a;
        return (_a = this._list.first) === null || _a === void 0 ? void 0 : _a.val;
    };
    /**
     * Push an element onto the queue.
     *
     * @param val Element to push.
     */
    Queue.prototype.push = function (val) {
        this._list.push(val);
    };
    /**
     * Pop an element from the queue.
     */
    Queue.prototype.pop = function () {
        return this._list.shift();
    };
    /**
     * Pop all the elements left in the queue into an array.
     *
     * @returns An array of the elements.
     */
    Queue.prototype.popAll = function () {
        var result = Array.from(this._list);
        this._list = new LinkedList();
        return result;
    };
    /**
     * Push all elements given.
     *
     * @param vals An iterable of elements to push.
     */
    Queue.prototype.pushAll = function (vals) {
        this._list.append(vals);
    };
    return Queue;
}());

var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this._data = new Map();
        this._length = 0;
    }
    Object.defineProperty(PriorityQueue.prototype, "length", {
        /**
         * Number of elements in the queue.
         */
        get: function () {
            return this._length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Push an element onto the queue.
     *
     * @param priority Priority of the element.
     * @param val Element to push.
     */
    PriorityQueue.prototype.push = function (priority, val) {
        var data = this._data;
        if (!data.has(priority)) {
            data.set(priority, new Queue());
            this._priorities.push(priority);
        }
        var list = data.get(priority);
        list.push(val);
        this._length++;
    };
    /**
     * Pop an element from the queue.
     */
    PriorityQueue.prototype.pop = function () {
        var data = this._data;
        var priorities = this._priorities;
        var priority = priorities.peek();
        if (!priority)
            return undefined;
        var list = data.get(priority);
        var val = list.pop();
        if (list.length < 1) {
            priorities.pop();
            data.delete(priority);
        }
        this._length--;
        return val;
    };
    /**
     * Preview the element to pop next.
     */
    PriorityQueue.prototype.peek = function () {
        var data = this._data;
        var priorities = this._priorities;
        var priority = priorities.peek();
        if (!priority)
            return undefined;
        var list = data.get(priority);
        return list.peek();
    };
    /**
     * Preview the next priority number.
     */
    PriorityQueue.prototype.peekPriority = function () {
        return this._priorities.peek();
    };
    return PriorityQueue;
}());
/**
 * A priority queue where bigger numbers have higher
 * priorities.
 *
 * ```ts
 * const queue = new MaxPriorityQueue<string>()
 * queue.push(1, "1")
 * queue.push(2, "2")
 * queue.pop() // "2"
 * ```
 */
/** @class */ ((function (_super) {
    __extends(MaxPriorityQueue, _super);
    function MaxPriorityQueue() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._priorities = new MaxHeap();
        return _this;
    }
    return MaxPriorityQueue;
})(PriorityQueue));
/**
 * A priority queue where smaller numbers have higher
 * priorities.
 *
 * ```ts
 * const queue = new MinPriorityQueue<string>()
 * queue.push(1, "1")
 * queue.push(2, "2")
 * queue.push(0, "0")
 * queue.pop() // "0"
 * ```
 */
/** @class */ ((function (_super) {
    __extends(MinPriorityQueue, _super);
    function MinPriorityQueue() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._priorities = new MinHeap();
        return _this;
    }
    return MinPriorityQueue;
})(PriorityQueue));

/**
 * A proper stack implemented using a linked list.
 */
/** @class */ ((function () {
    /**
     * Create a new stack with an optional initial element.
     *
     * @param initial Optional initial element.
     */
    function Stack(initial) {
        this._list = new LinkedList();
        if (initial !== undefined) {
            this._list.unshift(initial);
        }
    }
    Object.defineProperty(Stack.prototype, "length", {
        /**
         * Number of elements in the queue.
         */
        get: function () {
            return this._list.length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Preview the element to pop next.
     */
    Stack.prototype.peek = function () {
        var _a;
        return (_a = this._list.first) === null || _a === void 0 ? void 0 : _a.val;
    };
    /**
     * Push an element to the stack.
     *
     * @param val Element to push.
     */
    Stack.prototype.push = function (val) {
        this._list.unshift(val);
    };
    /**
     * Pop an element from the stack.
     */
    Stack.prototype.pop = function () {
        return this._list.shift();
    };
    /**
     * Pop all the elements left in the stack into an array.
     *
     * @returns An array of the elements.
     */
    Stack.prototype.popAll = function () {
        var result = Array.from(this._list);
        this._list = new LinkedList();
        return result;
    };
    /**
     * Push all elements given in an optional specific order.
     *
     * @param vals An array of elements to push.
     * @param reversed Push the elements in reversed order.
     */
    Stack.prototype.pushAll = function (vals, reversed) {
        if (reversed === void 0) { reversed = false; }
        if (reversed) {
            this._list.prepend(vals);
        }
        else {
            this._list.prepend(reverseArray(vals));
        }
    };
    return Stack;
})());

const DEFAULT_LOCALE = "en";
let locale = DEFAULT_LOCALE;
let translations = {};
async function setup({ defaultLocale = DEFAULT_LOCALE, builtinTranslations, }) {
    locale = (await logseq.App.getUserConfigs()).preferredLanguage;
    if (locale === defaultLocale)
        return;
    if (builtinTranslations?.[locale] != null) {
        translations = builtinTranslations;
    }
}
function t$1(key, args) {
    const template = translations[locale]?.[key] ?? key;
    if (args == null)
        return template;
    return Object.entries(args).reduce((str, [name, val]) => str.replaceAll(`\${${name}}`, val), template);
}

const _isArray = Array.isArray;

function curry(fn, args = []) {
  return (..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]);
}

function debounce(func, ms, immediate = false) {
  let timeout;
  return function (...input) {
    const later = function () {
      timeout = null;

      if (!immediate) {
        return func.apply(null, input);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, ms);

    if (callNow) {
      return func.apply(null, input);
    }
  };
}

function reduceFn(reducer, acc, list) {
  if (!_isArray(list)) {
    throw new TypeError('reduce: list must be array or iterable');
  }

  let index = 0;
  const len = list.length;

  while (index < len) {
    acc = reducer(acc, list[index], index, list);
    index++;
  }

  return acc;
}

const reduce = curry(reduceFn);

function multiply(x, y) {
  if (arguments.length === 1) return _y => multiply(x, _y);
  return x * y;
}

reduce(multiply, 1);

var t,u,r,o,i=0,c=[],f=[],e=l$1.__b,a=l$1.__r,v=l$1.diffed,l=l$1.__c,m=l$1.unmount;function p(t,r){l$1.__h&&l$1.__h(u,t,i||r),i=0;var o=u.__H||(u.__H={__:[],__h:[]});return t>=o.__.length&&o.__.push({__V:f}),o.__[t]}function y(n){return i=1,d(z$1,n)}function d(n,r,o){var i=p(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):z$1(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}],i.__c=u),i.__}function _(r,o){var i=p(t++,3);!l$1.__s&&w$1(i.__H,o)&&(i.__=r,i.u=o,u.__H.__h.push(i));}function h(r,o){var i=p(t++,4);!l$1.__s&&w$1(i.__H,o)&&(i.__=r,i.u=o,u.__h.push(i));}function s(n){return i=5,F$1(function(){return {current:n}},[])}function A$1(n,t,u){i=6,h(function(){return "function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==u?u:u.concat(n));}function F$1(n,u){var r=p(t++,7);return w$1(r.__H,u)?(r.__V=n(),r.u=u,r.__h=n,r.__V):r.__}function T$1(n,t){return i=8,F$1(function(){return n},t)}function q$1(n){var r=u.context[n.__c],o=p(t++,9);return o.c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function x$1(t,u){l$1.useDebugValue&&l$1.useDebugValue(u?u(t):t);}function b(){for(var t;t=c.shift();)if(t.__P)try{t.__H.__h.forEach(j$1),t.__H.__h.forEach(k$1),t.__H.__h=[];}catch(u){t.__H.__h=[],l$1.__e(u,t.__v);}}l$1.__b=function(n){u=null,e&&e(n);},l$1.__r=function(n){a&&a(n),t=0;var o=(u=n.__c).__H;o&&(r===u?(o.__h=[],u.__h=[],o.__.forEach(function(n){n.__V=f,n.u=void 0;})):(o.__h.forEach(j$1),o.__h.forEach(k$1),o.__h=[])),r=u;},l$1.diffed=function(t){v&&v(t);var i=t.__c;i&&i.__H&&(i.__H.__h.length&&(1!==c.push(i)&&o===l$1.requestAnimationFrame||((o=l$1.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),g$1&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);g$1&&(t=requestAnimationFrame(u));})(b)),i.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.__V!==f&&(n.__=n.__V),n.u=void 0,n.__V=f;})),r=u=null;},l$1.__c=function(t,u){u.some(function(t){try{t.__h.forEach(j$1),t.__h=t.__h.filter(function(n){return !n.__||k$1(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],l$1.__e(r,t.__v);}}),l&&l(t,u);},l$1.unmount=function(t){m&&m(t);var u,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{j$1(n);}catch(n){u=n;}}),u&&l$1.__e(u,r.__v));};var g$1="function"==typeof requestAnimationFrame;function j$1(n){var t=u,r=n.__c;"function"==typeof r&&(n.__c=void 0,r()),u=t;}function k$1(n){var t=u;n.__c=n.__(),u=t;}function w$1(n,t){return !n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function z$1(n,t){return "function"==typeof t?t(n):t}

function S(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function E(n){this.props=n;}function g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return !r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:C(this.props,n)}function r(t){return this.shouldComponentUpdate=e,v$1(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new _$1).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var w=l$1.__b;l$1.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n);};var x="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function R(n){function t(t){var e=S({},t);return delete e.ref,n(e,t.ref||null)}return t.$$typeof=x,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var N=function(n,t){return null==n?null:A$2(A$2(n).map(t))},k={map:N,forEach:N,count:function(n){return n?A$2(n).length:0},only:function(n){var t=A$2(n);if(1!==t.length)throw "Children.only";return t[0]},toArray:A$2},A=l$1.__e;l$1.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);A(n,t,e,r);};var O=l$1.unmount;function T(){this.__u=0,this.t=null,this.__b=null;}function L(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function U(n){var t,e,r;function u(u){if(t||(t=n()).then(function(n){e=n.default||n;},function(n){r=n;}),r)throw r;if(!e)throw t;return v$1(e,u)}return u.displayName="Lazy",u.__f=!0,u}function D(){this.u=null,this.o=null;}l$1.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n);},(T.prototype=new _$1).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=L(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate();}},f=!0===t.__h;r.__u++||f||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i);},T.prototype.componentWillUnmount=function(){this.t=[];},T.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),t.__c.__H=null),null!=(t=S({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P);}this.__b=null;}var u=t.__a&&v$1(d$1,null,n.fallback);return u&&(u.__h=null),[v$1(d$1,null,t.__a?null:n.children),u]};var F=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};function I(n){return this.getChildContext=function(){return n.context},n.children}function M(n){var t=this,e=n.i;t.componentWillUnmount=function(){S$1(null,t.l),t.l=null,t.i=null;},t.i&&t.i!==e&&t.componentWillUnmount(),n.__v?(t.l||(t.i=e,t.l={nodeType:1,parentNode:e,childNodes:[],appendChild:function(n){this.childNodes.push(n),t.i.appendChild(n);},insertBefore:function(n,e){this.childNodes.push(n),t.i.appendChild(n);},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),t.i.removeChild(n);}}),S$1(v$1(I,{context:t.context},n.__v),t.l)):t.l&&t.componentWillUnmount();}function V(n,t){var e=v$1(M,{__v:n,i:t});return e.containerInfo=t,e}(D.prototype=new _$1).__a=function(n){var t=this,e=L(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),F(t,n,r)):u();};e?e(o):o();}},D.prototype.render=function(n){this.u=null,this.o=new Map;var t=A$2(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},D.prototype.componentDidUpdate=D.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){F(n,e,t);});};var W="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|shape|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,$="undefined"!=typeof document,j=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function z(n,t,e){return null==t.__k&&(t.textContent=""),S$1(n,t),"function"==typeof e&&e(),n?n.__c:null}function B(n,t,e){return q$2(n,t),"function"==typeof e&&e(),n?n.__c:null}_$1.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(_$1.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t});}});});var H=l$1.event;function Z(){}function Y(){return this.cancelBubble}function q(){return this.defaultPrevented}l$1.event=function(n){return H&&(n=H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=q,n.nativeEvent=n};var G,J={configurable:!0,get:function(){return this.class}},K=l$1.vnode;l$1.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){var u=-1===t.indexOf("-");for(var o in r={},e){var i=e[o];$&&"children"===o&&"noscript"===t||"value"===o&&"defaultValue"in e&&null==i||("defaultValue"===o&&"value"in e&&null==e.value?o="value":"download"===o&&!0===i?i="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!j(e.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)?o=o.toLowerCase():u&&P.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===i&&(i=void 0),/^oninput$/i.test(o)&&(o=o.toLowerCase(),r[o]&&(o="oninputCapture")),r[o]=i);}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=A$2(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value);})),"select"==t&&null!=r.defaultValue&&(r.value=A$2(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value;})),n.props=r,e.class!=e.className&&(J.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",J));}n.$$typeof=W,K&&K(n);};var Q=l$1.__r;l$1.__r=function(n){Q&&Q(n),G=n.__c;};var X={ReactCurrentDispatcher:{current:{readContext:function(n){return G.__n[n.__c].props.value}}}};function tn(n){return v$1.bind(null,n)}function en(n){return !!n&&n.$$typeof===W}function rn(n){return en(n)?B$1.apply(null,arguments):n}function un(n){return !!n.__k&&(S$1(null,n),!0)}function on(n){return n&&(n.base||1===n.nodeType&&n)||null}var ln=function(n,t){return n(t)},fn=function(n,t){return n(t)};function an(n){n();}function sn(n){return n}function hn(){return [!1,an]}function dn(t,r){var u=y(r),o=u[0],i=u[1];return _(function(){return t(function(){i(r());})},[t,r]),o}var React = {useState:y,useReducer:d,useEffect:_,useLayoutEffect:h,useInsertionEffect:h,useTransition:hn,useDeferredValue:sn,useSyncExternalStore:dn,startTransition:an,useRef:s,useImperativeHandle:A$1,useMemo:F$1,useCallback:T$1,useContext:q$1,useDebugValue:x$1,version:"17.0.2",Children:k,render:z,hydrate:B,unmountComponentAtNode:un,createPortal:V,createElement:v$1,createContext:D$1,createFactory:tn,cloneElement:rn,createRef:p$1,Fragment:d$1,isValidElement:en,findDOMNode:on,Component:_$1,PureComponent:E,memo:g,forwardRef:R,flushSync:fn,unstable_batchedUpdates:ln,StrictMode:d$1,Suspense:T,SuspenseList:D,lazy:U,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:X};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/**
 * This hooks allows you to track a value across renderings.
 * It keeps the value during the last rendering or `undefined` if there
 * is no last rendering.
 *
 * Note you can combine multiple uses of this hook if you want to keep
 * history steps deeper, as you can see in the following example.
 *
 * ```js
 * const prevA = usePrev(a)
 * const prevPrevA = usePrev(prevA)
 * ```
 */
function usePrev(val) {
    var prevRef = s();
    _(function () {
        prevRef.current = val;
    });
    return prevRef.current;
}

/**
 * This component keeps the previous rendered view and its state around
 * so when you switch back to it, no render is required and all of its
 * state are retained. It can optionally retain the scroll offset too.
 *
 * Views are associated and identified by `kpvId`. There are 2 ways to
 * render a view, `kpvComponent` or `kpvRender` function and regardless of
 * what you choose to use, you will receive 2 extra props,
 * `kpvRestored` and `kpvScrollElementRef`. `kpvRestored` tells you whether
 * the view to render is "restored", that is, it was kept as the previous
 * view; `kpvScrollElementRef` in the other hand, allows you to "attach" a
 * scrolling DOM element if you want to persist scroll offset.
 *
 * @example
 * ```jsx
 * let view
 *
 * switch (path) {
 * case "/pages/a":
 *   view = <KeepPrevView kpvId="/pages/a" kpvComponent={CompA} />
 *   break
 * case "/pages/b":
 *   view = <KeepPrevView kpvId="/pages/b" kpvComponent={CompB} />
 *   break
 * }
 *
 * // CompA
 * function CompA({kpvRestored, kpvScrollElementRef}) {
 *   useEffect(() => {
 *     kpvScrollElementRef.current = document.body
 *   }, [])
 *
 *   useEffect(() => {
 *     if (kpvRestored) {
 *       // View is showed up again.
 *     }
 *   }, [kpvRestored])
 *
 *   return ...
 * }
 * ```
 */
g(function KeepPrevView(_a) {
    var kpvId = _a.kpvId, kpvComponent = _a.kpvComponent, kpvRender = _a.kpvRender, others = __rest(_a, ["kpvId", "kpvComponent", "kpvRender"]);
    var prevId = usePrev(kpvId);
    var prevPrevId = usePrev(prevId);
    var restored = kpvId === prevPrevId;
    var scrollElementRef = useScrollRestore$1(restored);
    var Comp = kpvComponent;
    var jsx = kpvRender ? (kpvRender(__assign({ kpvRestored: restored, kpvScrollElementRef: scrollElementRef }, others))) : (React.createElement(Comp, __assign({ kpvRestored: restored, kpvScrollElementRef: scrollElementRef }, others)));
    var prevJsx = usePrev(jsx);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { key: prevId, style: { display: "none" } }, prevJsx === undefined
            ? undefined
            : rn(prevJsx, { kpvRestored: false })),
        React.createElement("div", { key: kpvId }, jsx)));
}, function (prev, next) { return prev.kpvId === next.kpvId; });
function useScrollRestore$1(restored) {
    var _a;
    var scrollElementRef = s();
    var prevScrollElement = usePrev(scrollElementRef.current);
    var scrollTopRef = s();
    scrollTopRef.current = (_a = scrollElementRef.current) === null || _a === void 0 ? void 0 : _a.scrollTop;
    var prevScrollTop = usePrev(scrollTopRef.current);
    h(function () {
        if (restored && prevScrollElement != null && prevScrollTop != null) {
            prevScrollElement.scrollTop = prevScrollTop;
        }
    });
    return scrollElementRef;
}

/**
 * This component keeps the specified (`kvId` that starts with `kvPrefix`)
 * rendered view and its state around so when you switch back to it, no
 * render is required and all of its state are retained. It can optionally
 * retain the scroll offset too.
 *
 * Views are associated and identified by `kvId`. There are 2 ways to
 * render a view, `kvComponent` or `kvRender` function and regardless of
 * what you choose to use, you will receive 2 extra props,
 * `kvRestored` and `kvScrollElementRef`. `kvRestored` tells you whether
 * the view to render is "restored", that is, it was kept as the previous
 * view; `kvScrollElementRef` in the other hand, allows you to "attach" a
 * scrolling DOM element if you want to persist scroll offset.
 *
 * @example
 * ```jsx
 * let view
 *
 * switch (path) {
 * case "/pages/a":
 *   view = <KeepView kvPrefix="/pages/a" kvId="/pages/a" kvComponent={CompA} />
 *   break
 * case "/pages/b":
 *   view = <KeepView kvPrefix="/pages/a" kvId="/pages/b" kvComponent={CompB} />
 *   break
 * case "/pages/c":
 *   view = <KeepView kvPrefix="/pages/a" kvId="/pages/c" kvComponent={CompC} />
 *   break
 * }
 *
 * // CompA
 * function CompA({kvRestored, kvScrollElementRef}) {
 *   useEffect(() => {
 *     kvScrollElementRef.current = document.body
 *   }, [])
 *
 *   useEffect(() => {
 *     if (kvRestored) {
 *       // View is showed up again.
 *     }
 *   }, [kvRestored])
 *
 *   return ...
 * }
 * ```
 */
g(function KeepView(_a) {
    var kvId = _a.kvId, kvPrefix = _a.kvPrefix, kvComponent = _a.kvComponent, kvRender = _a.kvRender, others = __rest(_a, ["kvId", "kvPrefix", "kvComponent", "kvRender"]);
    var keptId = s();
    var keptJsx = s();
    var prevId = usePrev(kvId);
    var restored = kvId === keptId.current;
    if (restored) {
        keptId.current = undefined;
        keptJsx.current = undefined;
    }
    var shallKeep = !!(prevId === null || prevId === void 0 ? void 0 : prevId.startsWith(kvPrefix));
    var scrollElementRef = useScrollRestore(shallKeep, restored);
    var Comp = kvComponent;
    var jsx = kvRender ? (kvRender(__assign({ kvRestored: restored, kvScrollElementRef: scrollElementRef }, others))) : (React.createElement(Comp, __assign({ kvRestored: restored, kvScrollElementRef: scrollElementRef }, others)));
    var prevJsx = usePrev(jsx);
    if (shallKeep) {
        keptId.current = prevId;
        keptJsx.current = prevJsx;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { key: keptId.current, style: { display: "none" } }, keptJsx.current === undefined
            ? undefined
            : rn(keptJsx.current, { kvRestored: false })),
        React.createElement("div", { key: kvId }, jsx)));
}, function (prev, next) { return prev.kvId === next.kvId; });
function useScrollRestore(shallKeep, restored) {
    var _a;
    var scrollElementRef = s();
    var scrollTopRef = s();
    var prevScrollTop = usePrev((_a = scrollElementRef.current) === null || _a === void 0 ? void 0 : _a.scrollTop);
    if (shallKeep) {
        scrollTopRef.current = prevScrollTop;
    }
    h(function () {
        if (restored &&
            scrollElementRef.current != null &&
            scrollTopRef.current != null) {
            scrollElementRef.current.scrollTop = scrollTopRef.current;
        }
    });
    return scrollElementRef;
}

/**
 * Join your classes for a component, any non-string values will be excluded.
 *
 * ```js
 * const level = 1
 * const visible = false
 * let dynamicClassName
 *
 * <MyComp
 *   className={cls(
 *     "container",
 *     `level-${level}`,
 *     visible && "visible",
 *     dynamicClassName,
 *   )}
 * />
 *
 * // Will be <MyComp className="container level-1" />
 * ```
 */
function cls() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return (classes.filter(function (c) { return typeof c === "string" && c !== ""; }).join(" ") ||
        undefined);
}

function getGlobal() {
    var g = undefined;
    try {
        g = window;
        return g;
    }
    catch (e) {
        // ignore, try next
    }
    try {
        g = global;
        return g;
    }
    catch (e) {
        // ignore, try next
    }
    return g;
}
getGlobal();

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2022, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */

function getDefaults() {
  return {
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}

let defaults = getDefaults();

function changeDefaults(newDefaults) {
  defaults = newDefaults;
}

/**
 * Helpers
 */
const escapeTest = /[&<>"']/;
const escapeReplace = /[&<>"']/g;
const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
const escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }

  return html;
}

const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

/**
 * @param {string} html
 */
function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

const caret = /(^|[^\[])\^/g;

/**
 * @param {string | RegExp} regex
 * @param {string} opt
 */
function edit(regex, opt) {
  regex = typeof regex === 'string' ? regex : regex.source;
  opt = opt || '';
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, '$1');
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}

const nonWordAndColonTest = /[^\w:]/g;
const originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

/**
 * @param {boolean} sanitize
 * @param {string} base
 * @param {string} href
 */
function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(unescape(href))
        .replace(nonWordAndColonTest, '')
        .toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }
  return href;
}

const baseUrls = {};
const justDomain = /^[^:]+:\/*[^/]*$/;
const protocol = /^([^:]+:)[\s\S]*$/;
const domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

/**
 * @param {string} base
 * @param {string} href
 */
function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (justDomain.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = rtrim(base, '/', true);
    }
  }
  base = baseUrls[' ' + base];
  const relativeBase = base.indexOf(':') === -1;

  if (href.substring(0, 2) === '//') {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, '$1') + href;
  } else if (href.charAt(0) === '/') {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, '$1') + href;
  } else {
    return base + href;
  }
}

const noopTest = { exec: function noopTest() {} };

function merge(obj) {
  let i = 1,
    target,
    key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
      let escaped = false,
        curr = offset;
      while (--curr >= 0 && str[curr] === '\\') escaped = !escaped;
      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
    cells = row.split(/ \|/);
  let i = 0;

  // First/last cell in a row cannot be empty if it has no leading/trailing pipe
  if (!cells[0].trim()) { cells.shift(); }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) { cells.pop(); }

  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) cells.push('');
  }

  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }
  return cells;
}

/**
 * Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
 * /c*$/ is vulnerable to REDOS.
 *
 * @param {string} str
 * @param {string} c
 * @param {boolean} invert Remove suffix of non-c chars instead. Default falsey.
 */
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return '';
  }

  // Length of suffix matching the invert condition.
  let suffLen = 0;

  // Step left until we fail to match the invert condition.
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }

  return str.slice(0, l - suffLen);
}

function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  const l = str.length;
  let level = 0,
    i = 0;
  for (; i < l; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}

function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
  }
}

// copied from https://stackoverflow.com/a/5450113/806777
/**
 * @param {string} pattern
 * @param {number} count
 */
function repeatString(pattern, count) {
  if (count < 1) {
    return '';
  }
  let result = '';
  while (count > 1) {
    if (count & 1) {
      result += pattern;
    }
    count >>= 1;
    pattern += pattern;
  }
  return result + pattern;
}

function outputLink(cap, link, raw, lexer) {
  const href = link.href;
  const title = link.title ? escape(link.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, '$1');

  if (cap[0].charAt(0) !== '!') {
    lexer.state.inLink = true;
    const token = {
      type: 'link',
      raw,
      href,
      title,
      text,
      tokens: lexer.inlineTokens(text, [])
    };
    lexer.state.inLink = false;
    return token;
  }
  return {
    type: 'image',
    raw,
    href,
    title,
    text: escape(text)
  };
}

function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);

  if (matchIndentToCode === null) {
    return text;
  }

  const indentToCode = matchIndentToCode[1];

  return text
    .split('\n')
    .map(node => {
      const matchIndentInNode = node.match(/^\s+/);
      if (matchIndentInNode === null) {
        return node;
      }

      const [indentInNode] = matchIndentInNode;

      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }

      return node;
    })
    .join('\n');
}

/**
 * Tokenizer
 */
class Tokenizer {
  constructor(options) {
    this.options = options || defaults;
  }

  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: 'space',
        raw: cap[0]
      };
    }
  }

  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, '');
      return {
        type: 'code',
        raw: cap[0],
        codeBlockStyle: 'indented',
        text: !this.options.pedantic
          ? rtrim(text, '\n')
          : text
      };
    }
  }

  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || '');

      return {
        type: 'code',
        raw,
        lang: cap[2] ? cap[2].trim() : cap[2],
        text
      };
    }
  }

  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();

      // remove trailing #s
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, '#');
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          // CommonMark requires space before trailing #s
          text = trimmed.trim();
        }
      }

      const token = {
        type: 'heading',
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: 'hr',
        raw: cap[0]
      };
    }
  }

  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ *>[ \t]?/gm, '');

      return {
        type: 'blockquote',
        raw: cap[0],
        tokens: this.lexer.blockTokens(text, []),
        text
      };
    }
  }

  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine,
        line, nextLine, rawLine, itemContents, endEarly;

      let bull = cap[1].trim();
      const isordered = bull.length > 1;

      const list = {
        type: 'list',
        raw: '',
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : '',
        loose: false,
        items: []
      };

      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;

      if (this.options.pedantic) {
        bull = isordered ? bull : '[*+-]';
      }

      // Get next list item
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[\t ][^\\n]*)?(?:\\n|$))`);

      // Check if current bullet point can start a new List Item
      while (src) {
        endEarly = false;
        if (!(cap = itemRegex.exec(src))) {
          break;
        }

        if (this.rules.block.hr.test(src)) { // End list if bullet was actually HR (possibly move into itemRegex?)
          break;
        }

        raw = cap[0];
        src = src.substring(raw.length);

        line = cap[2].split('\n', 1)[0];
        nextLine = src.split('\n', 1)[0];

        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/); // Find first non-space char
          indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }

        blankLine = false;

        if (!line && /^ *$/.test(nextLine)) { // Items begin with at most one blank line
          raw += nextLine + '\n';
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }

        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
          const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);

          // Check if following lines should be included in List Item
          while (src) {
            rawLine = src.split('\n', 1)[0];
            line = rawLine;

            // Re-align to follow commonmark nesting rules
            if (this.options.pedantic) {
              line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
            }

            // End list item if found code fences
            if (fencesBeginRegex.test(line)) {
              break;
            }

            // End list item if found start of new heading
            if (headingBeginRegex.test(line)) {
              break;
            }

            // End list item if found start of new bullet
            if (nextBulletRegex.test(line)) {
              break;
            }

            // Horizontal rule found
            if (hrRegex.test(src)) {
              break;
            }

            if (line.search(/[^ ]/) >= indent || !line.trim()) { // Dedent if possible
              itemContents += '\n' + line.slice(indent);
            } else if (!blankLine) { // Until blank line, item doesn't need indentation
              itemContents += '\n' + line;
            } else { // Otherwise, improper indentation ends this item
              break;
            }

            if (!blankLine && !line.trim()) { // Check if current line is blank
              blankLine = true;
            }

            raw += rawLine + '\n';
            src = src.substring(rawLine.length + 1);
          }
        }

        if (!list.loose) {
          // If the previous item ended with a blank line, the list is loose
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }

        // Check for task list items
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== '[ ] ';
            itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
          }
        }

        list.items.push({
          type: 'list_item',
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });

        list.raw += raw;
      }

      // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic
      list.items[list.items.length - 1].raw = raw.trimRight();
      list.items[list.items.length - 1].text = itemContents.trimRight();
      list.raw = list.raw.trimRight();

      const l = list.items.length;

      // Item child tokens handled here at end because we needed to have the final item to trim it first
      for (i = 0; i < l; i++) {
        this.lexer.state.top = false;
        list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
        const spacers = list.items[i].tokens.filter(t => t.type === 'space');
        const hasMultipleLineBreaks = spacers.every(t => {
          const chars = t.raw.split('');
          let lineBreaks = 0;
          for (const char of chars) {
            if (char === '\n') {
              lineBreaks += 1;
            }
            if (lineBreaks > 1) {
              return true;
            }
          }

          return false;
        });

        if (!list.loose && spacers.length && hasMultipleLineBreaks) {
          // Having a single line break doesn't mean a list is loose. A single line break is terminating the last list item
          list.loose = true;
          list.items[i].loose = true;
        }
      }

      return list;
    }
  }

  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: 'html',
        raw: cap[0],
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      };
      if (this.options.sanitize) {
        token.type = 'paragraph';
        token.text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
        token.tokens = [];
        this.lexer.inline(token.text, token.tokens);
      }
      return token;
    }
  }

  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
      const tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
      return {
        type: 'def',
        tag,
        raw: cap[0],
        href: cap[2],
        title: cap[3]
      };
    }
  }

  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (cap) {
      const item = {
        type: 'table',
        header: splitCells(cap[1]).map(c => { return { text: c }; }),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, '').split('\n') : []
      };

      if (item.header.length === item.align.length) {
        item.raw = cap[0];

        let l = item.align.length;
        let i, j, k, row;
        for (i = 0; i < l; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        l = item.rows.length;
        for (i = 0; i < l; i++) {
          item.rows[i] = splitCells(item.rows[i], item.header.length).map(c => { return { text: c }; });
        }

        // parse child tokens inside headers and cells

        // header child tokens
        l = item.header.length;
        for (j = 0; j < l; j++) {
          item.header[j].tokens = [];
          this.lexer.inline(item.header[j].text, item.header[j].tokens);
        }

        // cell child tokens
        l = item.rows.length;
        for (j = 0; j < l; j++) {
          row = item.rows[j];
          for (k = 0; k < row.length; k++) {
            row[k].tokens = [];
            this.lexer.inline(row[k].text, row[k].tokens);
          }
        }

        return item;
      }
    }
  }

  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      const token = {
        type: 'heading',
        raw: cap[0],
        depth: cap[2].charAt(0) === '=' ? 1 : 2,
        text: cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const token = {
        type: 'paragraph',
        raw: cap[0],
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      const token = {
        type: 'text',
        raw: cap[0],
        text: cap[0],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: 'escape',
        raw: cap[0],
        text: escape(cap[1])
      };
    }
  }

  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }

      return {
        type: this.options.sanitize
          ? 'text'
          : 'html',
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize
          ? (this.options.sanitizer
            ? this.options.sanitizer(cap[0])
            : escape(cap[0]))
          : cap[0]
      };
    }
  }

  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        // commonmark requires matching angle brackets
        if (!(/>$/.test(trimmedUrl))) {
          return;
        }

        // ending angle bracket cannot be escaped
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        // find closing parenthesis
        const lastParenIndex = findClosingBracket(cap[2], '()');
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf('!') === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = '';
        }
      }
      let href = cap[2];
      let title = '';
      if (this.options.pedantic) {
        // split pedantic href and title
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : '';
      }

      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !(/>$/.test(trimmedUrl))) {
          // pedantic allows starting angle bracket without ending angle bracket
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
        title: title ? title.replace(this.rules.inline._escapes, '$1') : title
      }, cap[0], this.lexer);
    }
  }

  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src))
        || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = links[link.toLowerCase()];
      if (!link || !link.href) {
        const text = cap[0].charAt(0);
        return {
          type: 'text',
          raw: text,
          text
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }

  emStrong(src, maskedSrc, prevChar = '') {
    let match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match) return;

    // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u)) return;

    const nextChar = match[1] || match[2] || '';

    if (!nextChar || (nextChar && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar)))) {
      const lLength = match[0].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;

      const endReg = match[0][0] === '*' ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0;

      // Clip maskedSrc to same section of string as src (move to lexer?)
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);

      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];

        if (!rDelim) continue; // skip single * in __abc*abc__

        rLength = rDelim.length;

        if (match[3] || match[4]) { // found another Left Delim
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) { // either Left or Right Delim
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue; // CommonMark Emphasis Rules 9-10
          }
        }

        delimTotal -= rLength;

        if (delimTotal > 0) continue; // Haven't found enough closing delimiters

        // Remove extra characters. *a*** -> *a*
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);

        // Create `em` if smallest delimiter has odd char count. *a***
        if (Math.min(lLength, rLength) % 2) {
          const text = src.slice(1, lLength + match.index + rLength);
          return {
            type: 'em',
            raw: src.slice(0, lLength + match.index + rLength + 1),
            text,
            tokens: this.lexer.inlineTokens(text, [])
          };
        }

        // Create 'strong' if smallest delimiter has even char count. **a***
        const text = src.slice(2, lLength + match.index + rLength - 1);
        return {
          type: 'strong',
          raw: src.slice(0, lLength + match.index + rLength + 1),
          text,
          tokens: this.lexer.inlineTokens(text, [])
        };
      }
    }
  }

  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, ' ');
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape(text, true);
      return {
        type: 'codespan',
        raw: cap[0],
        text
      };
    }
  }

  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: 'br',
        raw: cap[0]
      };
    }
  }

  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: 'del',
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2], [])
      };
    }
  }

  autolink(src, mangle) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === '@') {
        text = escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
        href = 'mailto:' + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }

      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: 'text',
            raw: text,
            text
          }
        ]
      };
    }
  }

  url(src, mangle) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === '@') {
        text = escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
        href = 'mailto:' + text;
      } else {
        // do extended autolink path validation
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = escape(cap[0]);
        if (cap[1] === 'www.') {
          href = 'http://' + text;
        } else {
          href = text;
        }
      }
      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: 'text',
            raw: text,
            text
          }
        ]
      };
    }
  }

  inlineText(src, smartypants) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0])) : cap[0];
      } else {
        text = escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
      }
      return {
        type: 'text',
        raw: cap[0],
        text
      };
    }
  }
}

/**
 * Block-Level Grammar
 */
const block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
    + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
    + '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
    + '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
    + ')',
  def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};

block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def)
  .replace('label', block._label)
  .replace('title', block._title)
  .getRegex();

block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */)
  .replace('bull', block.bullet)
  .getRegex();

block.list = edit(block.list)
  .replace(/bull/g, block.bullet)
  .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
  .replace('def', '\\n+(?=' + block.def.source + ')')
  .getRegex();

block._tag = 'address|article|aside|base|basefont|blockquote|body|caption'
  + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption'
  + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe'
  + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option'
  + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr'
  + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, 'i')
  .replace('comment', block._comment)
  .replace('tag', block._tag)
  .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
  .getRegex();

block.paragraph = edit(block._paragraph)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('|table', '')
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();

block.blockquote = edit(block.blockquote)
  .replace('paragraph', block.paragraph)
  .getRegex();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  table: '^ *([^\\n ].*\\|.*)\\n' // Header
    + ' {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?' // Align
    + '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells
});

block.gfm.table = edit(block.gfm.table)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('blockquote', ' {0,3}>')
  .replace('code', ' {4}[^\\n]')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();

block.gfm.paragraph = edit(block._paragraph)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('table', block.gfm.table) // interrupt paragraphs with table
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();
/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */

block.pedantic = merge({}, block.normal, {
  html: edit(
    '^ *(?:comment *(?:\\n|\\s*$)'
    + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))')
    .replace('comment', block._comment)
    .replace(/tag/g, '(?!(?:'
      + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub'
      + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)'
      + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b')
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest, // fences not supported
  paragraph: edit(block.normal._paragraph)
    .replace('hr', block.hr)
    .replace('heading', ' *#{1,6} *[^\n]')
    .replace('lheading', block.lheading)
    .replace('blockquote', ' {0,3}>')
    .replace('|fences', '')
    .replace('|list', '')
    .replace('|html', '')
    .getRegex()
});

/**
 * Inline-Level Grammar
 */
const inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: '^comment'
    + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>', // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: 'reflink|nolink(?!\\()',
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //          () Skip orphan inside strong  () Consume to delim (1) #***                (2) a***#, a***                   (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
    rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ // ^- Not allowed for _
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};

// list of punctuation marks from CommonMark spec
// without * and _ to handle the different emphasis markers * and _
inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();

// sequences em should skip over [title](link), `code`, <html>
inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline.escapedEmSt = /\\\*|\\_/g;

inline._comment = edit(block._comment).replace('(?:-->|$)', '-->').getRegex();

inline.emStrong.lDelim = edit(inline.emStrong.lDelim)
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, 'g')
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, 'g')
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;

inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink)
  .replace('scheme', inline._scheme)
  .replace('email', inline._email)
  .getRegex();

inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;

inline.tag = edit(inline.tag)
  .replace('comment', inline._comment)
  .replace('attribute', inline._attribute)
  .getRegex();

inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;

inline.link = edit(inline.link)
  .replace('label', inline._label)
  .replace('href', inline._href)
  .replace('title', inline._title)
  .getRegex();

inline.reflink = edit(inline.reflink)
  .replace('label', inline._label)
  .replace('ref', block._label)
  .getRegex();

inline.nolink = edit(inline.nolink)
  .replace('ref', block._label)
  .getRegex();

inline.reflinkSearch = edit(inline.reflinkSearch, 'g')
  .replace('reflink', inline.reflink)
  .replace('nolink', inline.nolink)
  .getRegex();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/)
    .replace('label', inline._label)
    .getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace('label', inline._label)
    .getRegex()
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});

inline.gfm.url = edit(inline.gfm.url, 'i')
  .replace('email', inline.gfm._extended_email)
  .getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text)
    .replace('\\b_', '\\b_| {2,}\\n')
    .replace(/\{2,\}/g, '*')
    .getRegex()
});

/**
 * smartypants text replacement
 * @param {string} text
 */
function smartypants(text) {
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
}

/**
 * mangle email addresses
 * @param {string} text
 */
function mangle(text) {
  let out = '',
    i,
    ch;

  const l = text.length;
  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
}

/**
 * Block Lexer
 */
class Lexer {
  constructor(options) {
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };

    const rules = {
      block: block.normal,
      inline: inline.normal
    };

    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }

  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }

  /**
   * Static Lex Method
   */
  static lex(src, options) {
    const lexer = new Lexer(options);
    return lexer.lex(src);
  }

  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options) {
    const lexer = new Lexer(options);
    return lexer.inlineTokens(src);
  }

  /**
   * Preprocessing
   */
  lex(src) {
    src = src
      .replace(/\r\n|\r/g, '\n');

    this.blockTokens(src, this.tokens);

    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }

    return this.tokens;
  }

  /**
   * Lexing
   */
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, '    ').replace(/^ +$/gm, '');
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + '    '.repeat(tabs.length);
      });
    }

    let token, lastToken, cutSrc, lastParagraphClipped;

    while (src) {
      if (this.options.extensions
        && this.options.extensions.block
        && this.options.extensions.block.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
        continue;
      }

      // newline
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          // if there's a single \n as a spacer, it's terminating the last line,
          // so move it there so that we don't get unecessary paragraph tags
          tokens[tokens.length - 1].raw += '\n';
        } else {
          tokens.push(token);
        }
        continue;
      }

      // code
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        // An indented code block cannot interrupt a paragraph.
        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // fences
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // heading
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // hr
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // blockquote
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // list
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // html
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // def
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }

      // table (gfm)
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // lheading
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // top-level paragraph
      // prevent paragraph consuming extensions by clipping 'src' to extension start
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === 'number' && tempStart >= 0) { startIndex = Math.min(startIndex, tempStart); }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === 'paragraph') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = (cutSrc.length !== src.length);
        src = src.substring(token.raw.length);
        continue;
      }

      // text
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      if (src) {
        const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }

    this.state.top = true;
    return tokens;
  }

  inline(src, tokens = []) {
    this.inlineQueue.push({ src, tokens });
    return tokens;
  }

  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;

    // String with links masked to avoid interference with em and strong
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;

    // Mask out reflinks
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    // Mask out other blocks
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }

    // Mask out escaped em & strong delimiters
    while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    }

    while (src) {
      if (!keepPrevChar) {
        prevChar = '';
      }
      keepPrevChar = false;

      // extensions
      if (this.options.extensions
        && this.options.extensions.inline
        && this.options.extensions.inline.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
        continue;
      }

      // escape
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // tag
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // link
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // reflink, nolink
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // em & strong
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // code
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // br
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // del (gfm)
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // autolink
      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // url (gfm)
      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // text
      // prevent inlineText consuming extensions by clipping 'src' to extension start
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === 'number' && tempStart >= 0) { startIndex = Math.min(startIndex, tempStart); }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== '_') { // Track prevChar before string of ____ started
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      if (src) {
        const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }

    return tokens;
  }
}

/**
 * Renderer
 */
class Renderer {
  constructor(options) {
    this.options = options || defaults;
  }

  code(code, infostring, escaped) {
    const lang = (infostring || '').match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }

    code = code.replace(/\n$/, '') + '\n';

    if (!lang) {
      return '<pre><code>'
        + (escaped ? code : escape(code, true))
        + '</code></pre>\n';
    }

    return '<pre><code class="'
      + this.options.langPrefix
      + escape(lang, true)
      + '">'
      + (escaped ? code : escape(code, true))
      + '</code></pre>\n';
  }

  /**
   * @param {string} quote
   */
  blockquote(quote) {
    return `<blockquote>\n${quote}</blockquote>\n`;
  }

  html(html) {
    return html;
  }

  /**
   * @param {string} text
   * @param {string} level
   * @param {string} raw
   * @param {any} slugger
   */
  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      const id = this.options.headerPrefix + slugger.slug(raw);
      return `<h${level} id="${id}">${text}</h${level}>\n`;
    }

    // ignore IDs
    return `<h${level}>${text}</h${level}>\n`;
  }

  hr() {
    return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
  }

  list(body, ordered, start) {
    const type = ordered ? 'ol' : 'ul',
      startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
    return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
  }

  /**
   * @param {string} text
   */
  listitem(text) {
    return `<li>${text}</li>\n`;
  }

  checkbox(checked) {
    return '<input '
      + (checked ? 'checked="" ' : '')
      + 'disabled="" type="checkbox"'
      + (this.options.xhtml ? ' /' : '')
      + '> ';
  }

  /**
   * @param {string} text
   */
  paragraph(text) {
    return `<p>${text}</p>\n`;
  }

  /**
   * @param {string} header
   * @param {string} body
   */
  table(header, body) {
    if (body) body = `<tbody>${body}</tbody>`;

    return '<table>\n'
      + '<thead>\n'
      + header
      + '</thead>\n'
      + body
      + '</table>\n';
  }

  /**
   * @param {string} content
   */
  tablerow(content) {
    return `<tr>\n${content}</tr>\n`;
  }

  tablecell(content, flags) {
    const type = flags.header ? 'th' : 'td';
    const tag = flags.align
      ? `<${type} align="${flags.align}">`
      : `<${type}>`;
    return tag + content + `</${type}>\n`;
  }

  /**
   * span level renderer
   * @param {string} text
   */
  strong(text) {
    return `<strong>${text}</strong>`;
  }

  /**
   * @param {string} text
   */
  em(text) {
    return `<em>${text}</em>`;
  }

  /**
   * @param {string} text
   */
  codespan(text) {
    return `<code>${text}</code>`;
  }

  br() {
    return this.options.xhtml ? '<br/>' : '<br>';
  }

  /**
   * @param {string} text
   */
  del(text) {
    return `<del>${text}</del>`;
  }

  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<a href="' + escape(href) + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += '>' + text + '</a>';
    return out;
  }

  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }

    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += this.options.xhtml ? '/>' : '>';
    return out;
  }

  text(text) {
    return text;
  }
}

/**
 * TextRenderer
 * returns only the textual part of the token
 */
class TextRenderer {
  // no need for block level renderers
  strong(text) {
    return text;
  }

  em(text) {
    return text;
  }

  codespan(text) {
    return text;
  }

  del(text) {
    return text;
  }

  html(text) {
    return text;
  }

  text(text) {
    return text;
  }

  link(href, title, text) {
    return '' + text;
  }

  image(href, title, text) {
    return '' + text;
  }

  br() {
    return '';
  }
}

/**
 * Slugger generates header id
 */
class Slugger {
  constructor() {
    this.seen = {};
  }

  /**
   * @param {string} value
   */
  serialize(value) {
    return value
      .toLowerCase()
      .trim()
      // remove html tags
      .replace(/<[!\/a-z].*?>/ig, '')
      // remove unwanted chars
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
      .replace(/\s/g, '-');
  }

  /**
   * Finds the next safe (unique) slug to use
   * @param {string} originalSlug
   * @param {boolean} isDryRun
   */
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug;
    let occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do {
        occurenceAccumulator++;
        slug = originalSlug + '-' + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }
    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }
    return slug;
  }

  /**
   * Convert string to unique id
   * @param {object} [options]
   * @param {boolean} [options.dryrun] Generates the next unique slug without
   * updating the internal accumulator.
   */
  slug(value, options = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options.dryrun);
  }
}

/**
 * Parsing & Compiling
 */
class Parser {
  constructor(options) {
    this.options = options || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }

  /**
   * Static Parse Method
   */
  static parse(tokens, options) {
    const parser = new Parser(options);
    return parser.parse(tokens);
  }

  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options) {
    const parser = new Parser(options);
    return parser.parseInline(tokens);
  }

  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    let out = '',
      i,
      j,
      k,
      l2,
      l3,
      row,
      cell,
      header,
      body,
      token,
      ordered,
      start,
      loose,
      itemBody,
      item,
      checked,
      task,
      checkbox,
      ret;

    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];

      // Run any renderer extensions
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }

      switch (token.type) {
        case 'space': {
          continue;
        }
        case 'hr': {
          out += this.renderer.hr();
          continue;
        }
        case 'heading': {
          out += this.renderer.heading(
            this.parseInline(token.tokens),
            token.depth,
            unescape(this.parseInline(token.tokens, this.textRenderer)),
            this.slugger);
          continue;
        }
        case 'code': {
          out += this.renderer.code(token.text,
            token.lang,
            token.escaped);
          continue;
        }
        case 'table': {
          header = '';

          // header
          cell = '';
          l2 = token.header.length;
          for (j = 0; j < l2; j++) {
            cell += this.renderer.tablecell(
              this.parseInline(token.header[j].tokens),
              { header: true, align: token.align[j] }
            );
          }
          header += this.renderer.tablerow(cell);

          body = '';
          l2 = token.rows.length;
          for (j = 0; j < l2; j++) {
            row = token.rows[j];

            cell = '';
            l3 = row.length;
            for (k = 0; k < l3; k++) {
              cell += this.renderer.tablecell(
                this.parseInline(row[k].tokens),
                { header: false, align: token.align[k] }
              );
            }

            body += this.renderer.tablerow(cell);
          }
          out += this.renderer.table(header, body);
          continue;
        }
        case 'blockquote': {
          body = this.parse(token.tokens);
          out += this.renderer.blockquote(body);
          continue;
        }
        case 'list': {
          ordered = token.ordered;
          start = token.start;
          loose = token.loose;
          l2 = token.items.length;

          body = '';
          for (j = 0; j < l2; j++) {
            item = token.items[j];
            checked = item.checked;
            task = item.task;

            itemBody = '';
            if (item.task) {
              checkbox = this.renderer.checkbox(checked);
              if (loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                  item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
                  if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                    item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                  }
                } else {
                  item.tokens.unshift({
                    type: 'text',
                    text: checkbox
                  });
                }
              } else {
                itemBody += checkbox;
              }
            }

            itemBody += this.parse(item.tokens, loose);
            body += this.renderer.listitem(itemBody, task, checked);
          }

          out += this.renderer.list(body, ordered, start);
          continue;
        }
        case 'html': {
          // TODO parse inline content if parameter markdown=1
          out += this.renderer.html(token.text);
          continue;
        }
        case 'paragraph': {
          out += this.renderer.paragraph(this.parseInline(token.tokens));
          continue;
        }
        case 'text': {
          body = token.tokens ? this.parseInline(token.tokens) : token.text;
          while (i + 1 < l && tokens[i + 1].type === 'text') {
            token = tokens[++i];
            body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
          }
          out += top ? this.renderer.paragraph(body) : body;
          continue;
        }

        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }

    return out;
  }

  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = '',
      i,
      token,
      ret;

    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];

      // Run any renderer extensions
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }

      switch (token.type) {
        case 'escape': {
          out += renderer.text(token.text);
          break;
        }
        case 'html': {
          out += renderer.html(token.text);
          break;
        }
        case 'link': {
          out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
          break;
        }
        case 'image': {
          out += renderer.image(token.href, token.title, token.text);
          break;
        }
        case 'strong': {
          out += renderer.strong(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'em': {
          out += renderer.em(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'codespan': {
          out += renderer.codespan(token.text);
          break;
        }
        case 'br': {
          out += renderer.br();
          break;
        }
        case 'del': {
          out += renderer.del(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'text': {
          out += renderer.text(token.text);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
}

/**
 * Marked
 */
function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  if (typeof opt === 'function') {
    callback = opt;
    opt = null;
  }

  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);

  if (callback) {
    const highlight = opt.highlight;
    let tokens;

    try {
      tokens = Lexer.lex(src, opt);
    } catch (e) {
      return callback(e);
    }

    const done = function(err) {
      let out;

      if (!err) {
        try {
          if (opt.walkTokens) {
            marked.walkTokens(tokens, opt.walkTokens);
          }
          out = Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!tokens.length) return done();

    let pending = 0;
    marked.walkTokens(tokens, function(token) {
      if (token.type === 'code') {
        pending++;
        setTimeout(() => {
          highlight(token.text, token.lang, function(err, code) {
            if (err) {
              return done(err);
            }
            if (code != null && code !== token.text) {
              token.text = code;
              token.escaped = true;
            }

            pending--;
            if (pending === 0) {
              done();
            }
          });
        }, 0);
      }
    });

    if (pending === 0) {
      done();
    }

    return;
  }

  try {
    const tokens = Lexer.lex(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return Parser.parse(tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if (opt.silent) {
      return '<p>An error occurred:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  changeDefaults(marked.defaults);
  return marked;
};

marked.getDefaults = getDefaults;

marked.defaults = defaults;

/**
 * Use Extension
 */

marked.use = function(...args) {
  const opts = merge({}, ...args);
  const extensions = marked.defaults.extensions || { renderers: {}, childTokens: {} };
  let hasExtensions;

  args.forEach((pack) => {
    // ==-- Parse "addon" extensions --== //
    if (pack.extensions) {
      hasExtensions = true;
      pack.extensions.forEach((ext) => {
        if (!ext.name) {
          throw new Error('extension name required');
        }
        if (ext.renderer) { // Renderer extensions
          const prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;
          if (prevRenderer) {
            // Replace extension with func to run new extension but fall back if false
            extensions.renderers[ext.name] = function(...args) {
              let ret = ext.renderer.apply(this, args);
              if (ret === false) {
                ret = prevRenderer.apply(this, args);
              }
              return ret;
            };
          } else {
            extensions.renderers[ext.name] = ext.renderer;
          }
        }
        if (ext.tokenizer) { // Tokenizer Extensions
          if (!ext.level || (ext.level !== 'block' && ext.level !== 'inline')) {
            throw new Error("extension level must be 'block' or 'inline'");
          }
          if (extensions[ext.level]) {
            extensions[ext.level].unshift(ext.tokenizer);
          } else {
            extensions[ext.level] = [ext.tokenizer];
          }
          if (ext.start) { // Function to check for start of token
            if (ext.level === 'block') {
              if (extensions.startBlock) {
                extensions.startBlock.push(ext.start);
              } else {
                extensions.startBlock = [ext.start];
              }
            } else if (ext.level === 'inline') {
              if (extensions.startInline) {
                extensions.startInline.push(ext.start);
              } else {
                extensions.startInline = [ext.start];
              }
            }
          }
        }
        if (ext.childTokens) { // Child tokens to be visited by walkTokens
          extensions.childTokens[ext.name] = ext.childTokens;
        }
      });
    }

    // ==-- Parse "overwrite" extensions --== //
    if (pack.renderer) {
      const renderer = marked.defaults.renderer || new Renderer();
      for (const prop in pack.renderer) {
        const prevRenderer = renderer[prop];
        // Replace renderer with func to run extension, but fall back if false
        renderer[prop] = (...args) => {
          let ret = pack.renderer[prop].apply(renderer, args);
          if (ret === false) {
            ret = prevRenderer.apply(renderer, args);
          }
          return ret;
        };
      }
      opts.renderer = renderer;
    }
    if (pack.tokenizer) {
      const tokenizer = marked.defaults.tokenizer || new Tokenizer();
      for (const prop in pack.tokenizer) {
        const prevTokenizer = tokenizer[prop];
        // Replace tokenizer with func to run extension, but fall back if false
        tokenizer[prop] = (...args) => {
          let ret = pack.tokenizer[prop].apply(tokenizer, args);
          if (ret === false) {
            ret = prevTokenizer.apply(tokenizer, args);
          }
          return ret;
        };
      }
      opts.tokenizer = tokenizer;
    }

    // ==-- Parse WalkTokens extensions --== //
    if (pack.walkTokens) {
      const walkTokens = marked.defaults.walkTokens;
      opts.walkTokens = function(token) {
        pack.walkTokens.call(this, token);
        if (walkTokens) {
          walkTokens.call(this, token);
        }
      };
    }

    if (hasExtensions) {
      opts.extensions = extensions;
    }

    marked.setOptions(opts);
  });
};

/**
 * Run callback for every token
 */

marked.walkTokens = function(tokens, callback) {
  for (const token of tokens) {
    callback.call(marked, token);
    switch (token.type) {
      case 'table': {
        for (const cell of token.header) {
          marked.walkTokens(cell.tokens, callback);
        }
        for (const row of token.rows) {
          for (const cell of row) {
            marked.walkTokens(cell.tokens, callback);
          }
        }
        break;
      }
      case 'list': {
        marked.walkTokens(token.items, callback);
        break;
      }
      default: {
        if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) { // Walk any extensions
          marked.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
            marked.walkTokens(token[childTokens], callback);
          });
        } else if (token.tokens) {
          marked.walkTokens(token.tokens, callback);
        }
      }
    }
  }
};

/**
 * Parse Inline
 * @param {string} src
 */
marked.parseInline = function(src, opt) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked.parseInline(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked.parseInline(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);

  try {
    const tokens = Lexer.lexInline(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return Parser.parseInline(tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if (opt.silent) {
      return '<p>An error occurred:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
};

/**
 * Expose
 */
marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.parse = marked;

marked.options;
marked.setOptions;
marked.use;
marked.walkTokens;
marked.parseInline;
Parser.parse;
Lexer.lex;

const footnoteRegex = /\[\^[^\]]*\]/g;
const highlightRegex = /==([^=]*)==|\^\^([^\^]*)\^\^/g;
function htmlDecode(str) {
    if (str.length === 0) {
        return "";
    }
    return str.replace(/&(#[0-9]*|amp|lt|gt|nbsp|quot|copy|trade);/g, (_, code)=>{
        switch(code){
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "nbsp":
                return " ";
            case "quot":
                return '"';
            case "copy":
                return "©";
            case "trade":
                return "™";
            default:
                return String.fromCharCode(code.substring(1));
        }
    });
}
const renderer = {
    // Block level renderers.
    code: (code)=>code,
    blockquote: (quote)=>quote,
    html: (html)=>html,
    heading: (text, level, raw)=>text,
    hr: ()=>"",
    list: (body, ordered, start)=>`${ordered ? `${start}. ` : ""}${body}`,
    listitem: (text)=>text,
    checkbox: ()=>"",
    paragraph: (text)=>text,
    table: ()=>"",
    tablerow: ()=>"",
    tablecell: ()=>"",
    // Inline level renderers.
    strong: (text)=>text,
    em: (text)=>text,
    codespan: (code)=>code,
    br: ()=>"",
    del: (text)=>text,
    link: (href, title, text)=>text,
    image: (href, title, text)=>text,
    text: (text)=>text.startsWith("[^") && text.endsWith("]") ? "" : htmlDecode(text)
};
const tokenizer = {
    inlineText (src) {
        if (footnoteRegex.test(src)) {
            const text = src.replace(footnoteRegex, "");
            return {
                type: "text",
                raw: src,
                text
            };
        }
        return false;
    },
    emStrong (src) {
        if (highlightRegex.test(src)) {
            const text = src.replace(highlightRegex, "$1$2");
            return {
                type: "em",
                raw: src,
                text,
                tokens: this.lexer.inlineTokens(text, [])
            };
        }
        return false;
    }
};
marked.use({
    renderer,
    tokenizer
});
const parse = marked.parse;

const pageAliasRegex = /\[([^\]]*)\]\(([^\)]|\)(?=\)))*\)/g;
async function parseContent(content) {
    // Remove front matter.
    content = content.replace(/---\n(-(?!--)|[^-])*\n---\n?/g, "");
    // Use only the first line.
    content = content.match(/.*/)[0];
    // Remove macro renderers.
    content = content.replace(/(?: |^)\{\{renderer (?:\}[^\}]|[^\}])+\}\}/g, "");
    // Remove properties.
    content = content.replace(/^.+:: .+$/gm, "").trim();
    // Handle page aliases.
    content = content.replace(pageAliasRegex, "$1");
    // Handle markdown.
    content = parse(content);
    // Handle LaTex
    content = content.replaceAll(/(\${1,2})([^\$]+)\1/g, (str, _, expr)=>{
        if (parent.window.katex == null) return expr;
        return parent.window.katex.renderToString(expr, {
            throwOnError: false
        });
    });
    if (!logseq.settings?.showTags) {
        // Remove tags.
        content = content.replace(/(^|\s)#(?!#)((\[\[([^\]]|\](?!\]))+\]\])|\S+)/g, "");
    }
    // Replace block refs with their content.
    let match;
    while((match = /(?:\(\()(?!\()([^\)]+)\)\)/g.exec(content)) != null){
        const start = match.index;
        const end = start + match[0].length;
        const refUUID = match[1];
        try {
            const refBlock = await logseq.Editor.getBlock(refUUID);
            const refFirstLine = refBlock.content.match(/.*/)[0];
            const refContent = await parseContent(refFirstLine);
            content = `${content.substring(0, start)}${refContent}${content.substring(end)}`;
        } catch (err) {
            break;
        }
    }
    // Remove page refs
    content = content.replace(/\[\[([^\]]+)\]\]/g, "$1");
    // Marker conversion
    content = content.replace(/^(TODO|LATER) /, `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" style="display: inline; margin-right: 0.25em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path> </svg>`);
    content = content.replace(/^(DOING|NOW) /, `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" style="display: inline; margin-right: 0.25em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path> <path d="M9 12l2 2l4 -4"></path> </svg>`);
    content = content.replace(/^DONE (.+)$/, `<span class="kef-tocgen-done"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" style="display: inline; margin-right: 0.25em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-2.626 7.293a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor"></path> </svg>$1</span>`);
    return content.trim();
}
const HeadingTypes = {
    // Accepts anything as a heading
    any: "any",
    // Accepts only H1..Hn as headings
    h: "h"
};
const EMBED_REGEX = /^\s*(?:\[\[\.embed(-children)?\]\])?{{embed (\[\[[^\]]+\]\]|\(\([^\)]+\)\))\s*}}/;
function isHeading(block) {
    return /^#+ /.test(block.content) || block.properties?.heading || EMBED_REGEX.test(block.content) || block.page == null;
}
function waitForEl(selector, timeout) {
    const start = Date.now();
    function tryFindEl(resolve) {
        const el = parent.document.querySelector(selector);
        if (el != null) {
            resolve(el);
        } else if (Date.now() - start <= timeout) {
            setTimeout(()=>tryFindEl(resolve), 100);
        } else {
            resolve(null);
        }
    }
    return new Promise(tryFindEl);
}
async function gotoBlock(pageName, block) {
    await expandAncestors(block);
    const mainContentContainer = parent.document.getElementById("main-content-container");
    async function rec(count) {
        logseq.Editor.scrollToBlockInPage(pageName, block.uuid);
        // Avoid infinite loop
        if (count >= (logseq.settings?.maxScrollTryCount ?? 10)) return;
        const blockEl = mainContentContainer.querySelector(`[blockid="${block.uuid}"]`);
        if (blockEl != null) {
            logseq.Editor.scrollToBlockInPage(pageName, block.uuid);
        } else {
            mainContentContainer.scroll({
                top: mainContentContainer.scrollHeight
            });
            await waitMs(300);
            await rec(count + 1);
        }
    }
    await rec(0);
}
async function gotoOffset(container, scrollTop) {
    let count = 0;
    let lastScrollTop = -1;
    while(container.scrollTop !== scrollTop && container.scrollTop !== lastScrollTop){
        // Safe guard
        if ((count++) >= (logseq.settings?.maxScrollTryCount ?? 20)) return;
        lastScrollTop = container.scrollTop;
        container.scrollTop = scrollTop;
        await waitMs(300);
    }
}
async function expandAncestors(block) {
    if (block == null) return;
    while(block.parent && block.parent.name == null){
        const parent = await logseq.Editor.getBlock(block.parent.uuid);
        if (parent["collapsed?"]) {
            await logseq.Editor.setBlockCollapsed(parent.uuid, false);
        }
        block = block.parent;
    }
}

function Arrow({ class: className , style  }) {
    return /*#__PURE__*/ e$1("svg", {
        viewBox: "64 64 896 896",
        focusable: "false",
        "data-icon": "right",
        width: "0.7em",
        height: "0.7em",
        fill: "currentColor",
        "aria-hidden": "true",
        class: className,
        style: {
            display: "inline",
            ...style
        },
        children: /*#__PURE__*/ e$1("path", {
            d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
        })
    });
}

function Block({ block , page , blocksToHighlight , path , setData , refetchData ,  }) {
    const goTo = T$1((e)=>{
        if (e.shiftKey) {
            logseq.Editor.openInRightSidebar(page.uuid);
        } else {
            gotoBlock(page.name, block.name != null && block.children[0] ? block.children[0] : block);
        }
    }, [
        page,
        block
    ]);
    const goInto = T$1((e)=>{
        if (e.shiftKey) {
            logseq.Editor.openInRightSidebar(block.uuid);
        } else {
            if (block.name) {
                logseq.Editor.scrollToBlockInPage(block.name);
            } else {
                logseq.Editor.scrollToBlockInPage(block.uuid);
            }
        }
    }, [
        block
    ]);
    const toggleCollapsed = T$1((e)=>{
        if (e.altKey) {
            setData((data)=>{
                const newData = {
                    ...data
                };
                const node = fromPath(newData, path);
                setCollapsed$1(node, !node.collapsed);
                return newData;
            });
        } else {
            setData((data)=>{
                const newData = {
                    ...data
                };
                const node = fromPath(newData, path);
                node.collapsed = !node.collapsed;
                return newData;
            });
        }
    }, []);
    const toggleCollapseChildren = T$1(()=>{
        setData((data)=>{
            const newData = {
                ...data
            };
            const node = fromPath(newData, path);
            if (node.children.some((child)=>child.children.length > 0 && child.collapsed)) {
                for (const child of node.children){
                    child.collapsed = false;
                }
            } else {
                for (const child of node.children){
                    child.collapsed = true;
                }
            }
            return newData;
        });
    }, []);
    function onDragStart(e) {
        e.stopPropagation();
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", block.uuid);
        const clone = e.target.cloneNode(true);
        clone.id = "kef-tocgen-drag-shadow";
        clone.style.width = "fit-content";
        clone.style.background = "#fff";
        clone.style.transform = "translateZ(-99999px)";
        parent.document.body.appendChild(clone);
        e.dataTransfer.setDragImage(clone, 0, 0);
        const appContainer = parent.document.getElementById("app-container");
        appContainer.classList.add("kef-tocgen-dragging");
    }
    function onDragEnter(e) {
        e.stopPropagation();
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        e.target.style.borderTopColor = "var(--ls-alink-color)";
    }
    function onDragLeave(e) {
        e.stopPropagation();
        e.preventDefault();
        e.target.style.borderTopColor = "";
    }
    async function onDrop(e) {
        e.stopPropagation();
        e.preventDefault();
        e.target.style.borderTopColor = "";
        const srcUUID = e.dataTransfer.getData("text/plain");
        const destUUID = e.target.dataset.uuid;
        if (srcUUID === destUUID) return;
        if (e.target.classList.contains("kef-tocgen-drag-childholder")) {
            await logseq.Editor.moveBlock(srcUUID, destUUID, {
                children: true
            });
            await refetchData();
        } else if (e.target.classList.contains("kef-tocgen-drag-bottomholder")) {
            await logseq.Editor.moveBlock(srcUUID, destUUID);
            await refetchData();
        } else {
            await logseq.Editor.moveBlock(srcUUID, destUUID, {
                before: true
            });
            await refetchData();
        }
    }
    function onDragEnd(e) {
        e.stopPropagation();
        e.preventDefault();
        const appContainer = parent.document.getElementById("app-container");
        appContainer.classList.remove("kef-tocgen-dragging");
        const shadowEl = parent.document.getElementById("kef-tocgen-drag-shadow");
        shadowEl.remove();
    }
    return /*#__PURE__*/ e$1("div", {
        class: "kef-tocgen-block-container",
        onMouseDown: (e)=>{
            // HACK: prevent dragdrop being prevented because of ancestor's
            // `preventDefault()` call.
            e.stopPropagation();
        },
        draggable: true,
        onDragStart: onDragStart,
        onDragEnd: onDragEnd,
        children: [
            /*#__PURE__*/ e$1("div", {
                class: cls("kef-tocgen-block", blocksToHighlight?.has(block.id) && "kef-tocgen-active-block"),
                "data-uuid": block.embeddingUUID ?? block.uuid,
                "data-level": path.length,
                onDragEnter: onDragEnter,
                onDragLeave: onDragLeave,
                onDrop: onDrop,
                children: [
                    /*#__PURE__*/ e$1("button", {
                        class: "kef-tocgen-arrow",
                        onClick: toggleCollapsed,
                        children: /*#__PURE__*/ e$1(Arrow, {
                            class: block.children.length === 0 && "kef-tocgen-arrow-hidden",
                            style: {
                                transform: block.collapsed ? null : "rotate(90deg)"
                            }
                        })
                    }),
                    /*#__PURE__*/ e$1("div", {
                        children: [
                            /*#__PURE__*/ e$1("span", {
                                class: "kef-tocgen-into inline",
                                "data-ref": block.uuid,
                                onClick: goInto,
                                dangerouslySetInnerHTML: {
                                    __html: block.content
                                }
                            }),
                            !logseq.settings?.noPageJump && /*#__PURE__*/ e$1("button", {
                                class: "kef-tocgen-to",
                                onClick: goTo,
                                children: "\uEA0C"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ e$1("div", {
                class: "kef-tocgen-drag-childholder",
                "data-uuid": block.uuid,
                onDragEnter: onDragEnter,
                onDragLeave: onDragLeave,
                onDrop: onDrop
            }),
            !block.collapsed && block.children.length > 0 && /*#__PURE__*/ e$1(d$1, {
                children: /*#__PURE__*/ e$1("div", {
                    class: "kef-tocgen-block-children",
                    children: [
                        /*#__PURE__*/ e$1("div", {
                            className: "kef-tocgen-block-collapse",
                            onClick: toggleCollapseChildren
                        }),
                        block.children.map((subBlock, i)=>/*#__PURE__*/ e$1(Block, {
                                block: subBlock,
                                page: page,
                                blocksToHighlight: blocksToHighlight,
                                path: [
                                    ...path,
                                    i
                                ],
                                setData: setData,
                                refetchData: refetchData
                            }, subBlock.id)),
                        /*#__PURE__*/ e$1("div", {
                            class: "kef-tocgen-drag-bottomholder",
                            "data-uuid": block.children[block.children.length - 1].embeddingUUID ?? block.children[block.children.length - 1].uuid,
                            onDragEnter: onDragEnter,
                            onDragLeave: onDragLeave,
                            onDrop: onDrop
                        })
                    ]
                })
            })
        ]
    });
}function fromPath(root, path) {
    let ret = root;
    for (const index of path){
        ret = ret.children[index];
    }
    return ret;
}
function setCollapsed$1(node, value) {
    node.collapsed = value;
    for (const child of node.children){
        setCollapsed$1(child, value);
    }
}

function ExpandAllIcon({ class: className , style , onClick  }) {
    return /*#__PURE__*/ e$1("svg", {
        t: "1665833282119",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "7291",
        fill: "currentColor",
        class: cls("kef-tocgen-icon-expand", className),
        style: {
            display: "inline",
            ...style
        },
        onClick: onClick,
        children: [
            /*#__PURE__*/ e$1("path", {
                d: "M194.72 204.8l44.096-44.768 308.576 313.12-44.064 44.768zM194.72 521.216l44-44.864 308.576 313.12-44.064 44.768z",
                "p-id": "7292"
            }),
            /*#__PURE__*/ e$1("path", {
                d: "M767.616 160.064l44.096 44.768-308.608 313.12-44.064-44.768zM767.648 476.48l44.032 44.736-308.576 313.12-44.096-44.768z",
                "p-id": "7293"
            })
        ]
    });
}

function CollapseAllIcon({ style , ...attrs }) {
    return /*#__PURE__*/ e$1(ExpandAllIcon, {
        ...attrs,
        style: {
            transform: "rotate(180deg) translateY(1px)",
            ...style
        }
    });
}

function DeleteIcon({ class: className , style , onClick  }) {
    return /*#__PURE__*/ e$1("svg", {
        t: "1647046677613",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "1257",
        fill: "currentColor",
        class: cls("kef-tocgen-icon-edit", className),
        style: {
            display: "inline",
            ...style
        },
        onClick: onClick,
        children: [
            /*#__PURE__*/ e$1("path", {
                d: "M725.333333 469.333333c18.986667-27.733333 33.834667-42.666667 42.666667-42.666666 27.818667 0 42.666667 14.933333 42.666667 42.666666v384c0 49.578667-34.901333 85.333333-85.333334 85.333334h-426.666666c-50.389333 0-85.333333-35.754667-85.333334-85.333334v-384c0-27.733333 14.890667-42.666667 42.666667-42.666666 8.874667 0 23.722667 14.933333 42.666667 42.666666v384c-18.944 12.970667-13.482667 18.56 0 0h426.666666c13.482667 18.56 18.986667 12.970667 0 0v-384zM213.333333 341.333333c-28.032 0-42.666667-19.072-42.666666-42.666666 0-23.552 14.634667-42.666667 42.666666-42.666667h597.333334c28.032 0 42.666667 19.114667 42.666666 42.666667 0 23.594667-14.634667 42.666667-42.666666 42.666666h-597.333334z",
                "p-id": "1258"
            }),
            /*#__PURE__*/ e$1("path", {
                d: "M384 426.666667m42.666667 0l0 0q42.666667 0 42.666666 42.666666l0 256q0 42.666667-42.666666 42.666667l0 0q-42.666667 0-42.666667-42.666667l0-256q0-42.666667 42.666667-42.666666Z",
                "p-id": "1259"
            }),
            /*#__PURE__*/ e$1("path", {
                d: "M554.666667 426.666667m42.666666 0l0 0q42.666667 0 42.666667 42.666666l0 256q0 42.666667-42.666667 42.666667l0 0q-42.666667 0-42.666666-42.666667l0-256q0-42.666667 42.666666-42.666666Z",
                "p-id": "1260"
            }),
            /*#__PURE__*/ e$1("path", {
                d: "M426.666667 213.333333c-27.818667 0-42.666667-19.072-42.666667-42.666666 0-23.552 14.848-42.666667 42.666667-42.666667h170.666666c27.861333 0 42.666667 19.114667 42.666667 42.666667 0 23.594667-14.805333 42.666667-42.666667 42.666666h-170.666666z",
                "p-id": "1261"
            })
        ]
    });
}

function EditIcon({ class: className , style , onClick  }) {
    return /*#__PURE__*/ e$1("svg", {
        stroke: "currentColor",
        fill: "none",
        viewBox: "0 0 24 24",
        class: cls("kef-tocgen-icon-edit", className),
        style: {
            display: "inline",
            ...style
        },
        onClick: onClick,
        children: /*#__PURE__*/ e$1("path", {
            d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
            "stroke-width": "2",
            "stroke-linejoin": "round",
            "stroke-linecap": "round"
        })
    });
}

function TocGen({ slot: slot1 , uuid , root , height , levels , headingType: headingType1 , blocksToHighlight , pushRoot , removeRoots ,  }) {
    const [data1, setData] = y();
    const [page1, setPage] = y();
    const constructData = T$1(async (src, level, maxLevel, expansionLevel, headingType, collapsings, slot)=>{
        if (level > maxLevel) return null;
        const content = src.page == null ? src.originalName ?? src.name : await parseContent(src.content);
        if (level > 0 && !isValid(src, content, headingType)) return null;
        const node = {
            id: src.id,
            uuid: src.uuid,
            name: src.name,
            content,
            collapsed: collapsings[src.id] ?? level >= expansionLevel,
            children: []
        };
        const embedMatch = src.content?.match(EMBED_REGEX);
        if (embedMatch) {
            const [, childrenFlag, idStr] = embedMatch;
            const isPage = idStr.startsWith("[[");
            const id = idStr.substring(2, idStr.length - 2);
            const embedded = isPage ? await (async ()=>{
                const page = await logseq.Editor.getPage(id);
                page.children = await logseq.Editor.getPageBlocksTree(page.name);
                return page;
            })() : await logseq.Editor.getBlock(id, {
                includeChildren: true
            });
            pushRoot(slot, {
                id: embedded.id,
                page: embedded.page ?? embedded
            });
            if (childrenFlag) {
                const children = (await Promise.all(embedded.children.map((child)=>constructData(child, level, maxLevel, expansionLevel, headingType, collapsings, slot)))).filter((x)=>x != null);
                for (const child2 of children){
                    child2.parent = node;
                }
                return children;
            } else {
                const child = await constructData(embedded, level, maxLevel, expansionLevel, headingType, collapsings, slot);
                if (child != null) {
                    child.embeddingUUID = src.uuid;
                    child.parent = node;
                }
                return child;
            }
        }
        for (const child of src.children){
            const ret = await constructData(child, level + 1, maxLevel, expansionLevel, headingType, collapsings, slot);
            if (ret != null) {
                node.children.push(...Array.isArray(ret) ? ret : [
                    ret
                ]);
            }
        }
        for (const child1 of node.children){
            child1.parent = node;
        }
        return node;
    }, []);
    const refetchData = T$1(async ()=>{
        removeRoots(slot1);
        const expansionLevel = +(logseq.settings?.defaultExpansionLevel ?? 1);
        root.children = root.page == null ? await logseq.Editor.getPageBlocksTree(root.name) : (await logseq.Editor.getBlock(root.id, {
            includeChildren: true
        })).children;
        const collapsings = {};
        if (data1 != null) {
            toCollapsingMap(collapsings, data1);
        }
        setData(await constructData(root, 0, levels, expansionLevel, headingType1, collapsings, slot1));
    }, [
        root,
        slot1,
        data1
    ]);
    _(()=>{
        (async ()=>{
            setPage(root.page == null ? root : await logseq.Editor.getPage(root.page.id));
            await refetchData();
        })();
    }, [
        root,
        slot1
    ]);
    const goTo = T$1((e)=>{
        if (e.shiftKey) {
            logseq.Editor.openInRightSidebar(root.uuid);
        } else {
            if (root.page == null) {
                logseq.Editor.scrollToBlockInPage(root.name);
            } else {
                logseq.Editor.scrollToBlockInPage(root.uuid);
            }
        }
    }, [
        root
    ]);
    const toggleCollapsed = T$1(()=>{
        setData((data)=>{
            const newData = {
                ...data
            };
            newData.collapsed = !newData.collapsed;
            return newData;
        });
    }, []);
    const toggleCollapseChildren = T$1(()=>{
        setData((data)=>{
            const newData = {
                ...data
            };
            if (newData.children.some((child)=>child.children.length > 0 && child.collapsed)) {
                for (const child of newData.children){
                    child.collapsed = false;
                }
            } else {
                for (const child of newData.children){
                    child.collapsed = true;
                }
            }
            return newData;
        });
    }, []);
    const expandAll = T$1(()=>{
        setData((data)=>{
            const newData = {
                ...data
            };
            const rootCollapsed = newData.collapsed;
            setCollapsed(newData, false);
            newData.collapsed = rootCollapsed;
            return newData;
        });
    }, []);
    const collapseAll = T$1(()=>{
        setData((data)=>{
            const newData = {
                ...data
            };
            const rootCollapsed = newData.collapsed;
            setCollapsed(newData, true);
            newData.collapsed = rootCollapsed;
            return newData;
        });
    }, []);
    const editBlock = T$1(()=>logseq.Editor.editBlock(uuid), [
        uuid
    ]);
    const deleteBlock = T$1(()=>logseq.Editor.removeBlock(uuid), [
        uuid
    ]);
    if (data1 == null || page1 == null) return null;
    return /*#__PURE__*/ e$1("div", {
        class: "kef-tocgen-container",
        style: height == null ? undefined : {
            maxHeight: height,
            overflowY: "auto",
            overscrollBehavior: "contain"
        },
        children: [
            /*#__PURE__*/ e$1("div", {
                class: cls("kef-tocgen-page", (blocksToHighlight == null || blocksToHighlight.has(data1.id)) && "kef-tocgen-active-block"),
                children: [
                    /*#__PURE__*/ e$1("button", {
                        class: "kef-tocgen-arrow",
                        onClick: toggleCollapsed,
                        children: /*#__PURE__*/ e$1(Arrow, {
                            style: {
                                transform: data1.collapsed ? null : "rotate(90deg)"
                            }
                        })
                    }),
                    /*#__PURE__*/ e$1("div", {
                        children: [
                            /*#__PURE__*/ e$1("span", {
                                class: cls("inline", root.page == null ? "page" : "block"),
                                "data-ref": root.page == null ? root.name : root.uuid,
                                onClick: goTo,
                                dangerouslySetInnerHTML: {
                                    __html: data1.content
                                }
                            }),
                            /*#__PURE__*/ e$1("button", {
                                style: {
                                    marginLeft: "6px"
                                },
                                title: t$1("Expand All"),
                                onClick: expandAll,
                                children: /*#__PURE__*/ e$1(ExpandAllIcon, {})
                            }),
                            /*#__PURE__*/ e$1("button", {
                                title: t$1("Collapse All"),
                                onClick: collapseAll,
                                children: /*#__PURE__*/ e$1(CollapseAllIcon, {})
                            }),
                            /*#__PURE__*/ e$1("button", {
                                title: t$1("Edit"),
                                onClick: editBlock,
                                children: /*#__PURE__*/ e$1(EditIcon, {})
                            }),
                            /*#__PURE__*/ e$1("button", {
                                title: t$1("Delete"),
                                onClick: deleteBlock,
                                children: /*#__PURE__*/ e$1(DeleteIcon, {})
                            })
                        ]
                    })
                ]
            }),
            !data1.collapsed && data1.children.length > 0 && /*#__PURE__*/ e$1("div", {
                className: "kef-tocgen-block-children",
                children: [
                    /*#__PURE__*/ e$1("div", {
                        className: "kef-tocgen-block-collapse",
                        onClick: toggleCollapseChildren
                    }),
                    data1.children.map((block, i)=>/*#__PURE__*/ e$1(Block, {
                            block: block,
                            page: page1,
                            blocksToHighlight: blocksToHighlight,
                            path: [
                                i
                            ],
                            setData: setData,
                            refetchData: refetchData
                        }, block.id))
                ]
            })
        ]
    });
}function isValid(block, content, headingType) {
    return block.properties?.toc !== "no" && content && !/^\s*{{(?!embed )/.test(content) && (headingType !== HeadingTypes.h || isHeading(block));
}
function setCollapsed(node, value) {
    node.collapsed = value;
    for (const child of node.children){
        setCollapsed(child, value);
    }
}
function toCollapsingMap(map, node) {
    map[node.id] = node.collapsed;
    for (const child of node.children){
        toCollapsingMap(map, child);
    }
}

var Edit = "编辑";
var Delete = "删除";
var zhCN = {
	"No active page": "无活动页面",
	"Back to Top": "回到顶部",
	"Go Down": "去底部",
	"It defines how many levels a TOC contains by default if not specified when the TOC is created.": "默认创建目录的级数，创建目录时没有指定级数时会使用此设置。",
	"It defines to which level the TOC is expanded to by default.": "默认目录展开至几级。",
	"It defines what kind of blocks can be recognized as a heading. \"any\" means that any block will do；\"h\" means that only H1-Hn blocks are accepted as headings.": "默认识别的标题类型。可以指定\"any\"，代表任何块都可作为标题识别；\"h\"代表仅 H1-Hn 块可作为标题识别。",
	"It defines whether or not to show tags in TOC.": "是否要在TOC中显示标签。",
	"You can use this setting to disable the \"Back to Top\" functionality.": "如果不想要“滚动回页面顶部”这个功能的话可以通过这个设置关闭。",
	"You can use this setting to disable the \"Go Down\" functionality.": "如果不想要“去页面底部”这个功能的话可以通过这个设置关闭。",
	"Set this to true and you will not see the \"page\" link in TOC.": "设置为true在目录中就不会有\"页面\"链接了。",
	"Defines where to scroll to when you open a page. 'top' goes to the top of the page, 'last' goes to the position where you last leave the page.": "设置切换页面时滚动到哪个位置。'top' 会回到页面顶部， 'last' 是回到最后一次离开时的位置。",
	"Heading type must be \"any\" or \"h\"!": "标题类型需为 any 或 h！",
	"Page/Block not found!": "页面/块不存在！",
	"Expand All": "展开全部",
	"Collapse All": "收起全部",
	Edit: Edit,
	Delete: Delete,
	"Open TOC": "打开 TOC",
	"No page detected.": "未检测到页面。",
	"Specify a maximum number of times to scroll down to load lazy content.": "指定懒加载内容时的最大向下滚动次数。",
	"It defines a shortcut to open a TOC in the Contents page for the current page.": "设置一个快捷键，为当前页面打开在Contents页面打开一个目录。"
};

const TB_ICON = `<svg t="1675661268312" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1525" width="200" height="200"><path d="M128 384l597.333333 0 0-85.333333-597.333333 0 0 85.333333zM128 554.666667l597.333333 0 0-85.333333-597.333333 0 0 85.333333zM128 725.333333l597.333333 0 0-85.333333-597.333333 0 0 85.333333zM810.666667 725.333333l85.333333 0 0-85.333333-85.333333 0 0 85.333333zM810.666667 298.666667l0 85.333333 85.333333 0 0-85.333333-85.333333 0zM810.666667 554.666667l85.333333 0 0-85.333333-85.333333 0 0 85.333333z" p-id="1526"></path></svg>`;
const BACK_TOP_ICON = `<svg t="1641276288794" class="kef-tocgen-icon-backtop" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4076" width="200" height="200"><path d="M526.848 202.24c-4.096-4.096-9.216-6.144-14.848-6.144s-11.264 2.048-14.848 6.144L342.016 356.864c-8.192 8.192-8.192 21.504 0 30.208 8.192 8.192 21.504 8.192 30.208 0L512 247.296l139.776 139.776c4.096 4.096 9.728 6.144 14.848 6.144 5.632 0 10.752-2.048 14.848-6.144 8.192-8.192 8.192-21.504 0-30.208L526.848 202.24zM116.224 595.968h90.624v231.936h42.496V595.968h90.624v-42.496H115.712v42.496z m458.24-42.496h-112.64c-13.824 0-27.136 5.12-37.376 15.36s-15.36 24.064-15.36 37.376v168.448c0 13.824 5.12 27.136 15.36 37.376s24.064 15.36 37.376 15.36h112.64c13.824 0 27.136-5.12 37.376-15.36s15.36-24.064 15.36-37.376V606.208c0-13.824-5.12-27.136-15.36-37.376s-23.552-15.36-37.376-15.36z m10.752 221.696c0 2.048-0.512 5.12-3.072 7.68s-5.632 3.072-7.68 3.072h-112.64c-2.048 0-5.12-0.512-7.68-3.072s-3.072-5.632-3.072-7.68V606.72c0-2.048 0.512-5.12 3.072-7.68s5.632-3.072 7.68-3.072h112.64c2.048 0 5.12 0.512 7.68 3.072s3.072 5.632 3.072 7.68v168.448z m307.2-205.824c-10.24-10.24-24.064-15.36-37.376-15.36H709.632v274.432h42.496v-120.32H855.04c13.824 0 27.136-5.12 37.376-15.36s15.36-24.064 15.36-37.376v-48.128c0-14.336-5.12-27.648-15.36-37.888z m-27.136 84.992c0 2.048-0.512 5.12-3.072 7.68s-5.632 3.072-7.68 3.072H751.104v-69.12H855.04c2.048 0 5.12 0.512 7.68 3.072s3.072 5.632 3.072 7.68v47.616h-0.512z" p-id="4077"></path></svg>`;
const GO_DOWN_ICON = `<svg t="1651059361900" class="kef-tocgen-icon-godown" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12219" width="200" height="200"><path d="M830.24 340.688l11.328 11.312a16 16 0 0 1 0 22.624L530.448 685.76a16 16 0 0 1-22.64 0L196.688 374.624a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l288.496 288.496 288.512-288.496a16 16 0 0 1 22.624 0z" p-id="12220"></path></svg>`;
const ICON_TRANSITION_DURATION = 200;
const CURRENT = "*";
const SIDEBAR_CONTENTS_SELECTOR = ".sidebar-item div.contents";
const macroObservers = {};
const intersectionObservers = {};
const routeOffHooks = {};
let resizeObserver = null;
// A map of all roots to observe to for a given slot.
const embedRoots = {};
let routeOff;
let lastPageID;
let lastScrollTop = 0;
const backtopScrollHandler = debounce((e)=>{
    const scrollTop = e.target.scrollTop;
    const backtop = parent.document.querySelector(".kef-tocgen-backtop");
    if (scrollTop >= 300) {
        if (backtop.style.display !== "block") {
            backtop.style.display = "block";
            requestAnimationFrame(()=>{
                backtop.style.opacity = 0.7;
            });
        }
    } else {
        if (backtop.style.display === "block") {
            backtop.style.opacity = 0;
            setTimeout(()=>{
                backtop.style.display = "";
            }, ICON_TRANSITION_DURATION);
        }
    }
}, 50);
const godownScrollHandler = debounce((e)=>{
    const scrollHeight = e.target.scrollHeight;
    const scrollTop = e.target.scrollTop;
    const godown = parent.document.querySelector(".kef-tocgen-godown");
    if (scrollTop + e.target.clientHeight + 300 <= scrollHeight) {
        if (godown.style.display !== "block") {
            godown.style.display = "block";
            requestAnimationFrame(()=>{
                godown.style.opacity = 0.7;
            });
        }
    } else {
        if (godown.style.display === "block") {
            godown.style.opacity = 0;
            setTimeout(()=>{
                godown.style.display = "";
            }, ICON_TRANSITION_DURATION);
        }
    }
}, 50);
async function main() {
    await setup({
        builtinTranslations: {
            "zh-CN": zhCN
        }
    });
    logseq.provideStyle(`
    .kef-tocgen-dragging .kef-tocgen-block-container * {
      pointer-events: none;
    }
    .kef-tocgen-page {
      line-height: 2;
      display: flex;
      align-items: flex-start;
      font-weight: 600;
    }
    .kef-tocgen-page:hover > div > .inline {
      cursor: pointer;
      color: var(--ls-link-ref-text-color);
    }
    .kef-tocgen-block-children {
      margin-left: 14px;
      position: relative;
    }
    .kef-tocgen-block-collapse {
      z-index: 1;
      position: absolute;
      top: 5px;
      left: -10px;
      width: 4px;
      height: calc(100% - 10px);
      border-left: 1px solid var(--ls-guideline-color);
      cursor: pointer;
    }
    .kef-tocgen-block-collapse:hover {
      border-left: 2px solid var(--ls-primary-text-color);
      left: -10px;
      border-radius: 2px;
    }
    .kef-tocgen-block {
      display: flex;
      align-items: flex-start;
      pointer-events: auto !important;
      border-top: 2px solid transparent;
      margin-bottom: -2px;
    }
    .kef-tocgen-block[data-level="1"] {
      font-weight: 600;
    }
    .kef-tocgen-active-block {
      color: var(--ls-link-text-color);
    }
    .kef-tocgen-into {
      cursor: pointer;
    }
    .kef-tocgen-into:hover {
      color: var(--ls-link-ref-text-color);
    }
    .kef-tocgen-to {
      font-family: 'tabler-icons';
      font-size: 0.8em;
      margin-left: 6px;
      color: var(--ls-icon-color);
    }
    .kef-tocgen-to:hover {
      color: var(--ls-link-ref-text-color);
    }
    .kef-tocgen-arrow {
      padding-right: 4px;
      margin-right: 3px;
    }
    .kef-tocgen-arrow:hover {
      color: var(--ls-link-ref-text-color);
    }
    .kef-tocgen-arrow-hidden {
      visibility: hidden;
    }
    .kef-tocgen-noactivepage::before {
      content: "${t$1("No active page")}";
    }
    .kef-tocgen-icon-expand {
      width: 1em;
      height: 1em;
      transform: translateY(-1px);
    }
    .kef-tocgen-icon-edit {
      width: 0.9em;
      height: 0.9em;
      transform: translateY(-1px);
      margin-left: 2px;
    }
    .kef-tocgen-drag-childholder {
      pointer-events: auto !important;
      height: 0;
      border-top: 2px solid transparent;
      padding-bottom: 1px;
      margin-left: 19px;
    }
    .kef-tocgen-drag-bottomholder {
      pointer-events: auto !important;
      height: 0;
      border-top: 2px solid transparent;
    }
    .kef-tocgen-done {
      opacity: 0.7;
    }

    .kef-tocgen-backtop {
      position: fixed;
      left: 0;
      bottom: 95px;
      will-change: transform;
      background: var(--ls-secondary-background-color);
      border-radius: 50%;
      display: none;
      opacity: 0;
      transition: opacity ${ICON_TRANSITION_DURATION}ms ease-in-out;
      z-index: var(--ls-z-index-level-1);
    }
    .kef-tocgen-backtop:hover {
      opacity: 1 !important;
      box-shadow: 0px 2px 4px 0px #ccc;
    }
    .kef-tocgen-icon-backtop {
      width: 35px;
      height: 35px;
      fill: var(--ls-primary-text-color);
      padding: 4px;
    }
    .kef-tocgen-godown {
      position: fixed;
      left: 0;
      bottom: 55px;
      will-change: transform;
      background: var(--ls-secondary-background-color);
      border-radius: 50%;
      display: none;
      opacity: 0;
      transition: opacity ${ICON_TRANSITION_DURATION}ms ease-in-out;
      z-index: var(--ls-z-index-level-1);
    }
    .kef-tocgen-godown:hover {
      opacity: 1 !important;
      box-shadow: 0px 2px 4px 0px #ccc;
    }
    .kef-tocgen-icon-godown {
      width: 35px;
      height: 35px;
      fill: var(--ls-primary-text-color);
      padding: 4px;
    }

    .kef-tocgen-tb-icon {
      display: flex;
      width: 32px;
      height: 32px;
      border-radius: 4px;
      justify-content: center;
      align-items: center;
      color: var(--ls-header-button-background);
    }
    .kef-tocgen-tb-icon svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }
    .kef-tocgen-tb-icon:hover {
      background: var(--ls-tertiary-background-color);
    }
  `);
    logseq.App.onMacroRendererSlotted(tocRenderer);
    logseq.Editor.registerSlashCommand("Table of Contents", async ()=>{
        await logseq.Editor.insertAtEditingCursor("{{renderer :tocgen2}}");
    // NOTE: Leave this cursor moving code for future reference.
    // const input = parent.document.activeElement
    // const pos = input.selectionStart - 2
    // input.setSelectionRange(pos, pos)
    });
    logseq.App.registerPageMenuItem(t$1("Open TOC"), async ({ page  })=>openPageTOC(page));
    logseq.App.registerUIItem("toolbar", {
        key: t$1("open-toc"),
        template: `<a class="kef-tocgen-tb-icon" data-on-click="openTOC" title="${t$1("Open TOC")}">${TB_ICON}</a>`
    });
    logseq.App.registerCommandPalette({
        key: "open-toc",
        label: t$1("Open TOC"),
        ...logseq.settings?.openShortcut ? {
            keybinding: {
                binding: logseq.settings.openShortcut
            }
        } : {}
    }, openTOC);
    parent.document.getElementById("main-container");
    const mainContentContainer = parent.document.getElementById("main-content-container");
    if (!logseq.settings?.hideBackTop) {
        logseq.provideUI({
            key: "kef-tocgen-backtop",
            path: "#app-container",
            template: `<a title="${t$1("Back to Top")}" class="kef-tocgen-backtop" data-on-click="backtop">${BACK_TOP_ICON}</a>`
        });
        // Let backtop element get generated first.
        setTimeout(()=>{
            const backtop = parent.document.querySelector(".kef-tocgen-backtop");
            const contentEl = parent.document.querySelector(".cp__sidebar-main-content > div:first-child");
            if (contentEl) {
                resizeObserver = new ResizeObserver(()=>{
                    requestAnimationFrame(()=>{
                        const contentElRect = contentEl.getBoundingClientRect();
                        const mainContentContainerRect = mainContentContainer.getBoundingClientRect();
                        backtop.style.transform = `translateX(${contentElRect.right + 57 < mainContentContainerRect.right ? contentElRect.right + 20 : mainContentContainerRect.right - 57}px)`;
                    });
                });
                resizeObserver.observe(mainContentContainer);
                resizeObserver.observe(contentEl);
            }
            mainContentContainer.addEventListener("scroll", backtopScrollHandler);
        }, 0);
    }
    if (!logseq.settings?.hideGoDown) {
        logseq.provideUI({
            key: "kef-tocgen-godown",
            path: "#app-container",
            template: `<a title="${t$1("Go Down")}" class="kef-tocgen-godown" data-on-click="godown">${GO_DOWN_ICON}</a>`
        });
        // Let godown element get generated first.
        setTimeout(()=>{
            const godown = parent.document.querySelector(".kef-tocgen-godown");
            const contentEl = parent.document.querySelector(".cp__sidebar-main-content > div:first-child");
            if (contentEl) {
                resizeObserver = new ResizeObserver(()=>{
                    requestAnimationFrame(()=>{
                        const contentElRect = contentEl.getBoundingClientRect();
                        const mainContentContainerRect = mainContentContainer.getBoundingClientRect();
                        godown.style.transform = `translateX(${contentElRect.right + 57 < mainContentContainerRect.right ? contentElRect.right + 20 : mainContentContainerRect.right - 57}px)`;
                    });
                });
                resizeObserver.observe(mainContentContainer);
                resizeObserver.observe(contentEl);
            }
            mainContentContainer.addEventListener("scroll", godownScrollHandler);
        }, 0);
    }
    mainContentContainer.addEventListener("scroll", onScroll, {
        passive: true
    });
    routeOff = logseq.App.onRouteChanged(async ({ template , parameters: { query  }  })=>{
        if (lastPageID) {
            parent.sessionStorage.setItem(`kef-toc-offset-${lastPageID}`, lastScrollTop);
        }
        lastPageID = null;
        if (template !== "/" && template !== "/page/:name" || query.anchor && query.anchor.startsWith("block-content-") && query.anchor !== "block-content-editor") return;
        if (logseq.settings?.pageScrollBehavior === "top") {
            setTimeout(()=>{
                mainContentContainer.scrollTop = 0;
            }, 100);
        } else {
            const id = template === "/" ? "journals" : (await logseq.Editor.getCurrentPage())?.uuid;
            if (!id) return;
            lastPageID = id;
            setTimeout(()=>{
                const offset = parent.sessionStorage.getItem(`kef-toc-offset-${id}`) ?? 0;
                gotoOffset(mainContentContainer, offset);
            }, 100);
        }
    });
    logseq.beforeunload(()=>{
        routeOff();
        mainContentContainer.removeEventListener("scroll", onScroll, {
            passive: true
        });
        for (const off of Object.values(routeOffHooks)){
            off?.();
        }
        for (const observer of Object.values(macroObservers)){
            observer?.disconnect();
        }
        for (const observer1 of Object.values(intersectionObservers)){
            observer1?.disconnect();
        }
        mainContentContainer.removeEventListener("scroll", backtopScrollHandler);
        mainContentContainer.removeEventListener("scroll", godownScrollHandler);
        resizeObserver?.disconnect();
    });
    logseq.useSettingsSchema([
        {
            key: "defaultLevels",
            type: "number",
            default: 6,
            description: t$1("It defines how many levels a TOC contains by default if not specified when the TOC is created.")
        },
        {
            key: "defaultExpansionLevel",
            type: "number",
            default: 1,
            description: t$1("It defines to which level the TOC is expanded to by default.")
        },
        {
            key: "defaultHeadingType",
            type: "enum",
            enumChoices: [
                "any",
                "h"
            ],
            enumPicker: "select",
            default: "h",
            description: t$1('It defines what kind of blocks can be recognized as a heading. "any" means that any block will do；"h" means that only H1-Hn blocks are accepted as headings.')
        },
        {
            key: "showTags",
            type: "boolean",
            default: false,
            description: t$1("It defines whether or not to show tags in TOC.")
        },
        {
            key: "openShortcut",
            type: "string",
            default: "",
            description: t$1("It defines a shortcut to open a TOC in the Contents page for the current page.")
        },
        {
            key: "hideBackTop",
            type: "boolean",
            default: false,
            description: t$1('You can use this setting to disable the "Back to Top" functionality.')
        },
        {
            key: "hideGoDown",
            type: "boolean",
            default: false,
            description: t$1('You can use this setting to disable the "Go Down" functionality.')
        },
        {
            key: "noPageJump",
            type: "boolean",
            default: false,
            description: t$1('Set this to true and you will not see the "page" link in TOC.')
        },
        {
            key: "pageScrollBehavior",
            type: "enum",
            enumPicker: "select",
            enumChoices: [
                "top",
                "last"
            ],
            default: "top",
            description: t$1("Defines where to scroll to when you open a page. 'top' goes to the top of the page, 'last' goes to the position where you last leave the page.")
        },
        {
            key: "maxScrollTryCount",
            type: "number",
            default: 20,
            description: t$1("Specify a maximum number of times to scroll down to load lazy content.")
        }, 
    ]);
    console.log("#tocgen loaded");
}
async function tocRenderer({ slot , payload: { arguments: args , uuid  }  }) {
    const type = args[0]?.trim();
    if (type !== ":tocgen" && type !== ":tocgen2") return;
    const slotEl = parent.document.getElementById(slot);
    if (!slotEl) return;
    const renderered = slotEl.childElementCount > 0;
    if (renderered) return;
    const nameArg = !args[1] ? "" : args[1].trim();
    const isBlock = nameArg?.startsWith("((");
    const name = nameArg === CURRENT ? await getCurrentPageName() : (isBlock ? nameArg?.replace(/^\(\((.*)\)\)\s*$/, "$1") : nameArg?.replace(/^\[\[(.*)\]\]\s*$/, "$1")) || (await logseq.Editor.getPage((await logseq.Editor.getBlock(uuid)).page.id)).name;
    const trimmedHeight = args[2]?.trim();
    const height = type === ":tocgen" ? null : !trimmedHeight || trimmedHeight === "auto" ? null : trimmedHeight;
    const levelsIndex = type === ":tocgen" ? 2 : 3;
    const levels = !args[levelsIndex] ? logseq.settings?.defaultLevels ?? 6 : Math.max(1, +args[levelsIndex] || 1);
    const headingTypeIndex = type === ":tocgen" ? 3 : 4;
    const headingType = !args[headingTypeIndex] ? logseq.settings?.defaultHeadingType ?? "h" : args[headingTypeIndex].trim();
    const id = `kef-toc-${slot}`;
    if (HeadingTypes[headingType] == null) {
        logseq.provideUI({
            key: `error-${slot}`,
            slot,
            template: `<div id="${id}" style="color:#f00">[${t$1('Heading type must be "any" or "h"!')}]</div>`,
            reset: true
        });
        return;
    }
    slotEl.style.width = "100%";
    const root = name == null ? null : isBlock ? await logseq.Editor.getBlock(name) : await logseq.Editor.getPage(name);
    if (name != null && root == null) {
        logseq.provideUI({
            key: `error-${slot}`,
            slot,
            template: `<div id="${id}" style="color:#f00">[${t$1("Page/Block not found!")}]</div>`,
            reset: true
        });
        return;
    }
    logseq.provideUI({
        key: `toc-${slot}`,
        slot,
        template: `<div id="${id}" style="width: 100%"></div>`,
        reset: true,
        style: {
            cursor: "default",
            flex: "1"
        }
    });
    // Let div root element get generated first.
    setTimeout(async ()=>{
        if (root != null) {
            await observeAndRender(id, root, height, levels, headingType, uuid);
        }
        if (nameArg === CURRENT) {
            observeRoute(id, height, levels, headingType, uuid);
            if (name == null) {
                renderNoActivePage(id);
            }
        }
    }, 0);
}
function pushRoot(slot, embedRoot) {
    if (embedRoots[slot] == null) {
        embedRoots[slot] = [];
    }
    if (embedRoots[slot].every((r)=>r.id !== embedRoot.id)) {
        embedRoots[slot].push(embedRoot);
    }
}
function removeRoots(slot) {
    if (embedRoots[slot] == null) return;
    embedRoots[slot] = undefined;
}
async function renderTOC(id, root, height, levels, headingType, uuid) {
    const el = parent.document.getElementById(id);
    if (el == null) return;
    const blocksToHighlight = await findBlocksToHighlight(levels, headingType);
    S$1(/*#__PURE__*/ e$1(TocGen, {
        slot: id,
        uuid: uuid,
        root: {
            ...root
        },
        height: height,
        levels: levels,
        headingType: headingType,
        blocksToHighlight: blocksToHighlight,
        pushRoot: pushRoot,
        removeRoots: removeRoots
    }), el);
}
function renderNoActivePage(id) {
    const rootEl = parent.document.getElementById(id);
    if (rootEl) {
        S$1(/*#__PURE__*/ e$1("div", {
            class: "kef-tocgen-noactivepage"
        }), rootEl);
    }
}
async function observeAndRender(id, root, height, levels, headingType, uuid) {
    const rootEl = parent.document.getElementById(id);
    async function renderIfPageBlock(node) {
        const roots = [
            root,
            ...embedRoots[id] ?? []
        ];
        while(true){
            const blockEl = node?.closest("[blockid]");
            if (blockEl == null) break;
            const block = await logseq.Editor.getBlock(blockEl.getAttribute("blockid"));
            if (block == null) break;
            for (const r of roots){
                if (r.page == null && block.page?.id === r.id || r.page != null && block.id === r.id) {
                    await renderTOC(id, root, height, levels, headingType, uuid);
                    return;
                }
            }
            if (roots.length === 1 && root.page == null && !blockEl.dataset.embed) break;
            node = blockEl.parentElement;
        }
    }
    if (macroObservers[id] == null) {
        const observer = new MutationObserver(async (mutationList)=>{
            let block = null;
            if (rootEl == null || !rootEl.isConnected) {
                observer.disconnect();
                macroObservers[id] = undefined;
                intersectionObservers[id]?.disconnect();
                intersectionObservers[id] = undefined;
                return;
            }
            loop: for (const mutation of mutationList){
                for (const node of mutation.addedNodes){
                    if (node.className === "flex flex-row" || node.className === "block-children-container flex" || node.classList?.contains("block-editor") || node.classList?.contains("ls-block")) {
                        block = node;
                        break loop;
                    }
                }
            }
            if (block != null) {
                await renderIfPageBlock(block);
            }
            if (height != null && intersectionObservers[id] != null) {
                for (const mutation of mutationList){
                    for (const node of mutation.addedNodes){
                        if (node.querySelectorAll) {
                            const intersectionTargets = node.querySelectorAll(".block-content-inner");
                            for (const target of intersectionTargets){
                                intersectionObservers[id].observe(target);
                            }
                        }
                    }
                    for (const node1 of mutation.removedNodes){
                        if (node1.querySelectorAll) {
                            const intersectionTargets = node1.querySelectorAll(".block-content-inner");
                            for (const target of intersectionTargets){
                                intersectionObservers[id].unobserve(target);
                            }
                        }
                    }
                }
            }
        });
        macroObservers[id] = observer;
        observer.observe(parent.document.body, {
            subtree: true,
            childList: true
        });
    }
    if (height != null && intersectionObservers[id] == null) {
        const root = parent.document.getElementById("main-content-container");
        const observer = new IntersectionObserver((entries)=>{
            for (const entry of entries){
                if (entry.isIntersecting) {
                    const el = entry.target.closest("[blockid]");
                    const tocItemNode = parent.document.querySelector(`#${id} [data-ref="${el.getAttribute("blockid")}"]`);
                    if (tocItemNode) {
                        tocItemNode.scrollIntoView({
                            block: "nearest"
                        });
                    }
                }
            }
        }, {
            root,
            rootMargin: "0px",
            threshold: 1
        });
        intersectionObservers[id] = observer;
        const targets = root.querySelectorAll(".block-content-inner");
        for (const target of targets){
            observer.observe(target);
        }
    }
    await renderTOC(id, root, height, levels, headingType, uuid);
}
function observeRoute(id, height, levels, headingType, uuid, name) {
    if (routeOffHooks[id] == null) {
        routeOffHooks[id] = logseq.App.onRouteChanged(async ({ template  })=>{
            const rootEl = parent.document.getElementById(id);
            if (rootEl == null || !rootEl.isConnected) {
                routeOffHooks[id]?.();
                routeOffHooks[id] = undefined;
                return;
            }
            macroObservers[id]?.disconnect();
            macroObservers[id] = undefined;
            intersectionObservers[id]?.disconnect();
            intersectionObservers[id] = undefined;
            if (template === "/page/:name") {
                let root = await logseq.Editor.getCurrentPage();
                if (root == null) {
                    renderNoActivePage(id);
                    return;
                }
                if (root.page != null) {
                    root = await logseq.Editor.getPage(root.page.id);
                }
                await observeAndRender(id, root, height, levels, headingType, uuid);
            } else {
                renderNoActivePage(id);
            }
        });
    }
}
async function findBlocksToHighlight(levels, headingType) {
    const nodes = [];
    let node2 = parent.document.activeElement;
    while(true){
        const blockEl = node2?.closest("[blockid],.embed-page");
        if (blockEl == null) break;
        const block = blockEl.classList.contains("embed-page") ? await retrievePageBlock(blockEl) : await logseq.Editor.getBlock(blockEl.getAttribute("blockid"));
        if (block == null) break;
        if (!EMBED_REGEX.test(block.content ?? "")) {
            nodes.unshift(block);
        }
        node2 = blockEl.parentElement;
    }
    if (nodes.length > 0) {
        let block = nodes.shift();
        while(block != null){
            nodes.unshift(block);
            block = block.parent && (block.parent.id === block.page?.id ? await logseq.Editor.getPage(block.page.id) : await logseq.Editor.getBlock(block.parent.id));
        }
    }
    if (nodes.length <= 1) return null;
    let index = nodes.length - 1 <= levels ? nodes.length - 1 : levels;
    while(headingType === HeadingTypes.h && index >= 0 && !isHeading(nodes[index])){
        index--;
    }
    return index < 0 ? null : new Set(nodes.slice(0, index + 1).map((node)=>node.id));
}
async function retrievePageBlock(pageEl) {
    const dataRefEl = pageEl.querySelector(".embed-header [data-ref]");
    if (dataRefEl == null) return null;
    return await logseq.Editor.getPage(dataRefEl.dataset.ref);
}
async function getCurrentPageName() {
    let page = await logseq.Editor.getCurrentPage();
    if (page?.page != null) {
        page = await logseq.Editor.getPage(page.page.id);
    }
    return page?.name;
}
async function openPageTOC(pageName) {
    const sidebarBlocks = await logseq.App.getStateFromStore("sidebar/blocks");
    if (sidebarBlocks.every(([, , type])=>type !== "contents")) {
        await logseq.App.invokeExternalCommand("logseq.ui/toggle-contents");
    }
    let contentsEl = parent.document.querySelector(SIDEBAR_CONTENTS_SELECTOR);
    if (contentsEl == null) {
        // HACK: wait until content is loaded.
        contentsEl = await waitForEl(SIDEBAR_CONTENTS_SELECTOR, 5000);
        if (contentsEl) {
            await waitMs(300);
        }
    }
    await logseq.Editor.appendBlockInPage("contents", contentsEl?.clientHeight + 135 < parent.window.innerHeight ? `{{renderer :tocgen2, [[${pageName}]], calc(100vh - ${contentsEl.clientHeight + 135}px)}}` : `{{renderer :tocgen2, [[${pageName}]]}}`);
    // HACK: exitEditingMode does not work if called immediately after appending.
    await waitMs(50);
    await logseq.Editor.exitEditingMode();
}
async function openTOC() {
    const pageName = await getCurrentPageName();
    if (pageName) {
        openPageTOC(pageName);
    } else {
        logseq.UI.showMsg(t$1("No page detected.", "warn"));
    }
}
function onScroll(e) {
    lastScrollTop = e.target.scrollTop;
}
const model = {
    backtop () {
        const mainContentContainer = parent.document.getElementById("main-content-container");
        mainContentContainer.scroll({
            top: 0
        });
    },
    godown () {
        const mainContentContainer = parent.document.getElementById("main-content-container");
        mainContentContainer.scroll({
            top: mainContentContainer.scrollHeight
        });
    },
    openTOC
};
logseq.ready(model, main).catch(console.error);
