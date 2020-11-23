/**
 * Bundle of AWEMA tab-builder transpiled and polyfilled
 * Generated: 2020-11-09 12:23:28
 * Version: 1.1.0
 */

!function(){"use strict";var t=function(t){return"object"==typeof t?null!==t:"function"==typeof t},n=function(n){if(!t(n))throw TypeError(n+" is not an object!");return n},e=function(t){try{return!!t()}catch(t){return!0}},r=!e(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});function i(t,n){return t(n={exports:{}},n.exports),n.exports}var o=i(function(t){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)}),a=o.document,c=t(a)&&t(a.createElement),u=function(t){return c?a.createElement(t):{}},s=!r&&!e(function(){return 7!=Object.defineProperty(u("div"),"a",{get:function(){return 7}}).a}),l=function(n,e){if(!t(n))return n;var r,i;if(e&&"function"==typeof(r=n.toString)&&!t(i=r.call(n)))return i;if("function"==typeof(r=n.valueOf)&&!t(i=r.call(n)))return i;if(!e&&"function"==typeof(r=n.toString)&&!t(i=r.call(n)))return i;throw TypeError("Can't convert object to primitive value")},f=Object.defineProperty,d={f:r?Object.defineProperty:function(t,e,r){if(n(t),e=l(e,!0),n(r),s)try{return f(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},v=d.f,p=Function.prototype,h=/^\s*function ([^ (]*)/;"name"in p||r&&v(p,"name",{configurable:!0,get:function(){try{return(""+this).match(h)[1]}catch(t){return""}}});var g={}.hasOwnProperty,b=function(t,n){return g.call(t,n)},y={}.toString,_=function(t){return y.call(t).slice(8,-1)},m=function(t,n,e){if(function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!")}(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}},w={f:{}.propertyIsEnumerable},x=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},S=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==_(t)?t.split(""):Object(t)},E=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},k=function(t){return S(E(t))},O=Object.getOwnPropertyDescriptor,A={f:r?O:function(t,n){if(t=k(t),n=l(n,!0),s)try{return O(t,n)}catch(t){}if(b(t,n))return x(!w.f.call(t,n),t[n])}},T=function(e,r){if(n(e),!t(r)&&null!==r)throw TypeError(r+": can't set as prototype!")},I={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,e){try{(e=m(Function.call,A.f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,r){return T(t,r),n?t.__proto__=r:e(t,r),t}}({},!1):void 0),check:T}.set,L=Math.ceil,N=Math.floor,R=function(t){return isNaN(t=+t)?0:(t>0?N:L)(t)},C=Math.min,j=function(t){return t>0?C(R(t),9007199254740991):0},$=Math.max,P=Math.min,F=function(t){return function(n,e,r){var i,o=k(n),a=j(o.length),c=function(t,n){return(t=R(t))<0?$(t+n,0):P(t,n)}(r,a);if(t&&e!=e){for(;a>c;)if((i=o[c++])!=i)return!0}else for(;a>c;c++)if((t||c in o)&&o[c]===e)return t||c||0;return!t&&-1}},M=i(function(t){var n=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)}),D=(M.version,i(function(t){var n=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return n[t]||(n[t]=void 0!==e?e:{})})("versions",[]).push({version:M.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),G=0,H=Math.random(),U=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++G+H).toString(36))},V=D("keys"),W=function(t){return V[t]||(V[t]=U(t))},z=F(!1),q=W("IE_PROTO"),B=function(t,n){var e,r=k(t),i=0,o=[];for(e in r)e!=q&&b(r,e)&&o.push(e);for(;n.length>i;)b(r,e=n[i++])&&(~z(o,e)||o.push(e));return o},X="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),Y=X.concat("length","prototype"),J={f:Object.getOwnPropertyNames||function(t){return B(t,Y)}},K=r?function(t,n,e){return d.f(t,n,x(1,e))}:function(t,n,e){return t[n]=e,t},Q=D("native-function-to-string",Function.toString),Z=i(function(t){var n=U("src"),e=(""+Q).split("toString");M.inspectSource=function(t){return Q.call(t)},(t.exports=function(t,r,i,a){var c="function"==typeof i;c&&(b(i,"name")||K(i,"name",r)),t[r]!==i&&(c&&(b(i,n)||K(i,n,t[r]?""+t[r]:e.join(String(r)))),t===o?t[r]=i:a?t[r]?t[r]=i:K(t,r,i):(delete t[r],K(t,r,i)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[n]||Q.call(this)})}),tt=function(t,n,e){var r,i,a,c,u=t&tt.F,s=t&tt.G,l=t&tt.S,f=t&tt.P,d=t&tt.B,v=s?o:l?o[n]||(o[n]={}):(o[n]||{}).prototype,p=s?M:M[n]||(M[n]={}),h=p.prototype||(p.prototype={});for(r in s&&(e=n),e)a=((i=!u&&v&&void 0!==v[r])?v:e)[r],c=d&&i?m(a,o):f&&"function"==typeof a?m(Function.call,a):a,v&&Z(v,r,a,t&tt.U),p[r]!=a&&K(p,r,c),f&&h[r]!=a&&(h[r]=a)};o.core=M,tt.F=1,tt.G=2,tt.S=4,tt.P=8,tt.B=16,tt.W=32,tt.U=64,tt.R=128;var nt=tt,et="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",rt="["+et+"]",it=RegExp("^"+rt+rt+"*"),ot=RegExp(rt+rt+"*$"),at=function(t,n,r){var i={},o=e(function(){return!!et[t]()||"​"!="​"[t]()}),a=i[t]=o?n(ct):et[t];r&&(i[r]=a),nt(nt.P+nt.F*o,"String",i)},ct=at.trim=function(t,n){return t=String(E(t)),1&n&&(t=t.replace(it,"")),2&n&&(t=t.replace(ot,"")),t},ut=at,st=Object.keys||function(t){return B(t,X)},lt=r?Object.defineProperties:function(t,e){n(t);for(var r,i=st(e),o=i.length,a=0;o>a;)d.f(t,r=i[a++],e[r]);return t},ft=o.document,dt=ft&&ft.documentElement,vt=W("IE_PROTO"),pt=function(){},ht=function(){var t,n=u("iframe"),e=X.length;for(n.style.display="none",dt.appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),ht=t.F;e--;)delete ht.prototype[X[e]];return ht()},gt=Object.create||function(t,e){var r;return null!==t?(pt.prototype=n(t),r=new pt,pt.prototype=null,r[vt]=t):r=ht(),void 0===e?r:lt(r,e)},bt=J.f,yt=A.f,_t=d.f,mt=ut.trim,wt=o.Number,xt=wt,St=wt.prototype,Et="Number"==_(gt(St)),kt="trim"in String.prototype,Ot=function(t){var n=l(t,!1);if("string"==typeof n&&n.length>2){var e,r,i,o=(n=kt?n.trim():mt(n,3)).charCodeAt(0);if(43===o||45===o){if(88===(e=n.charCodeAt(2))||120===e)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+n}for(var a,c=n.slice(2),u=0,s=c.length;u<s;u++)if((a=c.charCodeAt(u))<48||a>i)return NaN;return parseInt(c,r)}}return+n};if(!wt(" 0o1")||!wt("0b1")||wt("+0x1")){wt=function(n){var r=arguments.length<1?0:n,i=this;return i instanceof wt&&(Et?e(function(){St.valueOf.call(i)}):"Number"!=_(i))?function(n,e,r){var i,o=e.constructor;return o!==r&&"function"==typeof o&&(i=o.prototype)!==r.prototype&&t(i)&&I&&I(n,i),n}(new xt(Ot(r)),i,wt):Ot(r)};for(var At,Tt=r?bt(xt):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),It=0;Tt.length>It;It++)b(xt,At=Tt[It])&&!b(wt,At)&&_t(wt,At,yt(xt,At));wt.prototype=St,St.constructor=wt,Z(o,"Number",wt)}var Lt=i(function(t){var n=D("wks"),e=o.Symbol,r="function"==typeof e;(t.exports=function(t){return n[t]||(n[t]=r&&e[t]||(r?e:U)("Symbol."+t))}).store=n}),Nt=Lt("unscopables"),Rt=Array.prototype;null==Rt[Nt]&&K(Rt,Nt,{});var Ct=function(t){Rt[Nt][t]=!0},jt=F(!0);nt(nt.P,"Array",{includes:function(t){return jt(this,t,arguments.length>1?arguments[1]:void 0)}}),Ct("includes");var $t=Lt("match"),Pt=function(n,e,r){if(t(i=e)&&(void 0!==(o=i[$t])?o:"RegExp"==_(i)))throw TypeError("String#"+r+" doesn't accept regex!");var i,o;return String(E(n))},Ft=Lt("match");nt(nt.P+nt.F*function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[Ft]=!1,!"/./"[t](n)}catch(t){}}return!0}("includes"),"String",{includes:function(t){return!!~Pt(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}});var Mt=["tb-tab","tb-link"];function Dt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.length?t.filter(function(t){var e=t.componentOptions?t.componentOptions.tag:t.tag;return n.includes(e)}):t}var Gt=0;var Ht=function(t,n,e,r,i,o,a,c,u,s){"boolean"!=typeof a&&(u=c,c=a,a=!1);var l,f="function"==typeof e?e.options:e;if(t&&t.render&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0,i&&(f.functional=!0)),r&&(f._scopeId=r),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},f._ssrRegister=l):n&&(l=a?function(){n.call(this,s(this.$root.$options.shadowRoot))}:function(t){n.call(this,c(t))}),l)if(f.functional){var d=f.render;f.render=function(t,n){return l.call(n),d(t,n)}}else{var v=f.beforeCreate;f.beforeCreate=v?[].concat(v,l):[l]}return e};var Ut=Ht({render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tab-builder"},[e("tab-nav",{attrs:{name:t.name,links:t.links,active:t.active},scopedSlots:t._u([{key:"tab-toggler",fn:function(n){return[t._t("tab-toggler",null,null,n)]}},{key:"tab-hidden",fn:function(n){return[t._t("tab-hidden",null,null,n)]}},{key:"tab-hidden-open",fn:function(n){return[t._t("tab-hidden-open",null,null,n)]}}],null,!0)}),t._v(" "),e("tab-switcher",{attrs:{active:t.activeTab}},[t._t("default")],2)],1)},staticRenderFns:[]},void 0,{name:"tab-builder",props:{name:{type:String,default:function(){return"tab-builder-"+Gt++}},active:{type:Number,default:0}},computed:{activeTab:function(){var t=this.$route.query[this.name];return void 0===t?this.active:+t},links:function(){return Dt(this.$slots.default,Mt).map(function(t){return{name:t.componentOptions.propsData.label,link:t.componentOptions.propsData.url||null}})}}},void 0,!1,void 0,void 0,void 0);var Vt=Ht({},void 0,{name:"tab-switcher",props:{active:{type:Number,default:0}},render:function(t){var n=this;return t("div",{staticClass:"tab-switcher"},[t("transition-group",{props:{tag:"div",name:"tab-transition"}},Dt(this.$slots.default,Mt).map(function(e,r){return t("div",{directives:[{name:"show",rawName:"v-show",value:r==n.active,expression:"i == active"}],staticClass:"tab-switcher__tab",key:r+"child"},e.componentOptions.children)}))])}},void 0,void 0,void 0,void 0,void 0),Wt=function(t){return function(n,e){var r,i,o=String(E(n)),a=R(e),c=o.length;return a<0||a>=c?t?"":void 0:(r=o.charCodeAt(a))<55296||r>56319||a+1===c||(i=o.charCodeAt(a+1))<56320||i>57343?t?o.charAt(a):r:t?o.slice(a,a+2):i-56320+(r-55296<<10)+65536}},zt={},qt=d.f,Bt=Lt("toStringTag"),Xt=function(t,n,e){t&&!b(t=e?t:t.prototype,Bt)&&qt(t,Bt,{configurable:!0,value:n})},Yt={};K(Yt,Lt("iterator"),function(){return this});var Jt=function(t,n,e){t.prototype=gt(Yt,{next:x(1,e)}),Xt(t,n+" Iterator")},Kt=function(t){return Object(E(t))},Qt=W("IE_PROTO"),Zt=Object.prototype,tn=Object.getPrototypeOf||function(t){return t=Kt(t),b(t,Qt)?t[Qt]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Zt:null},nn=Lt("iterator"),en=!([].keys&&"next"in[].keys()),rn=function(){return this},on=Wt(!0);!function(t,n,e,r,i,o,a){Jt(e,n,r);var c,u,s,l=function(t){if(!en&&t in p)return p[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},f=n+" Iterator",d="values"==i,v=!1,p=t.prototype,h=p[nn]||p["@@iterator"]||i&&p[i],g=h||l(i),b=i?d?l("entries"):g:void 0,y="Array"==n&&p.entries||h;if(y&&(s=tn(y.call(new t)))!==Object.prototype&&s.next&&(Xt(s,f,!0),"function"!=typeof s[nn]&&K(s,nn,rn)),d&&h&&"values"!==h.name&&(v=!0,g=function(){return h.call(this)}),(en||v||!p[nn])&&K(p,nn,g),zt[n]=g,zt[f]=rn,i)if(c={values:d?g:l("values"),keys:o?g:l("keys"),entries:b},a)for(u in c)u in p||Z(p,u,c[u]);else nt(nt.P+nt.F*(en||v),n,c)}(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=on(n,e),this._i+=t.length,{value:t,done:!1})});var an=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(e){var o=t.return;throw void 0!==o&&n(o.call(t)),e}},cn=Lt("iterator"),un=Array.prototype,sn=function(t,n,e){n in t?d.f(t,n,x(0,e)):t[n]=e},ln=Lt("toStringTag"),fn="Arguments"==_(function(){return arguments}()),dn=function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),ln))?e:fn?_(n):"Object"==(r=_(n))&&"function"==typeof n.callee?"Arguments":r},vn=Lt("iterator"),pn=M.getIteratorMethod=function(t){if(null!=t)return t[vn]||t["@@iterator"]||zt[dn(t)]},hn=Lt("iterator"),gn=!1;try{[7][hn]().return=function(){gn=!0}}catch(t){}nt(nt.S+nt.F*!function(t,n){if(!n&&!gn)return!1;var e=!1;try{var r=[7],i=r[hn]();i.next=function(){return{done:e=!0}},r[hn]=function(){return i},t(r)}catch(t){}return e}(function(t){}),"Array",{from:function(t){var n,e,r,i,o,a=Kt(t),c="function"==typeof this?this:Array,u=arguments.length,s=u>1?arguments[1]:void 0,l=void 0!==s,f=0,d=pn(a);if(l&&(s=m(s,u>2?arguments[2]:void 0,2)),null!=d&&(c!=Array||(void 0===(o=d)||zt.Array!==o&&un[cn]!==o)))for(i=d.call(a),e=new c;!(r=i.next()).done;f++)sn(e,f,l?an(i,s,[r.value,f],!0):r.value);else for(e=new c(n=j(a.length));n>f;f++)sn(e,f,l?s(a[f],f):a[f]);return e.length=f,e}});var bn=/"/g,yn=function(t,n,e,r){var i=String(E(t)),o="<"+n;return""!==e&&(o+=" "+e+'="'+String(r).replace(bn,"&quot;")+'"'),o+">"+i+"</"+n+">"};!function(t,n){var r={};r[t]=n(yn),nt(nt.P+nt.F*e(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",r)}("link",function(t){return function(n){return t(this,"a","href",n)}});var _n,mn,wn=Wt(!0),xn=function(t,n,e){return n+(e?wn(t,n).length:1)},Sn=RegExp.prototype.exec,En=function(t,n){var e=t.exec;if("function"==typeof e){var r=e.call(t,n);if("object"!=typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==dn(t))throw new TypeError("RegExp#exec called on incompatible receiver");return Sn.call(t,n)},kn=RegExp.prototype.exec,On=String.prototype.replace,An=kn,Tn=(_n=/a/,mn=/b*/g,kn.call(_n,"a"),kn.call(mn,"a"),0!==_n.lastIndex||0!==mn.lastIndex),In=void 0!==/()??/.exec("")[1];(Tn||In)&&(An=function(t){var e,r,i,o,a=this;return In&&(r=new RegExp("^"+a.source+"$(?!\\s)",function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}.call(a))),Tn&&(e=a.lastIndex),i=kn.call(a,t),Tn&&i&&(a.lastIndex=a.global?i.index+i[0].length:e),In&&i&&i.length>1&&On.call(i[0],r,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(i[o]=void 0)}),i});var Ln=An;nt({target:"RegExp",proto:!0,forced:Ln!==/./.exec},{exec:Ln});var Nn=Lt("species"),Rn=!e(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),Cn=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}(),jn=Math.max,$n=Math.min,Pn=Math.floor,Fn=/\$([$&`']|\d\d?|<[^>]*>)/g,Mn=/\$([$&`']|\d\d?)/g;!function(t,n,r){var i=Lt(t),o=!e(function(){var n={};return n[i]=function(){return 7},7!=""[t](n)}),a=o?!e(function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},"split"===t&&(e.constructor={},e.constructor[Nn]=function(){return e}),e[i](""),!n}):void 0;if(!o||!a||"replace"===t&&!Rn||"split"===t&&!Cn){var c=/./[i],u=r(E,i,""[t],function(t,n,e,r,i){return n.exec===Ln?o&&!i?{done:!0,value:c.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),s=u[0],l=u[1];Z(String.prototype,t,s),K(RegExp.prototype,i,2==n?function(t,n){return l.call(t,this,n)}:function(t){return l.call(t,this)})}}("replace",2,function(t,e,r,i){return[function(n,i){var o=t(this),a=null==n?void 0:n[e];return void 0!==a?a.call(n,o,i):r.call(String(o),n,i)},function(t,e){var a=i(r,t,this,e);if(a.done)return a.value;var c=n(t),u=String(this),s="function"==typeof e;s||(e=String(e));var l=c.global;if(l){var f=c.unicode;c.lastIndex=0}for(var d=[];;){var v=En(c,u);if(null===v)break;if(d.push(v),!l)break;""===String(v[0])&&(c.lastIndex=xn(u,j(c.lastIndex),f))}for(var p,h="",g=0,b=0;b<d.length;b++){v=d[b];for(var y=String(v[0]),_=jn($n(R(v.index),u.length),0),m=[],w=1;w<v.length;w++)m.push(void 0===(p=v[w])?p:String(p));var x=v.groups;if(s){var S=[y].concat(m,_,u);void 0!==x&&S.push(x);var E=String(e.apply(void 0,S))}else E=o(y,u,_,m,x,e);_>=g&&(h+=u.slice(g,_)+E,g=_+y.length)}return h+u.slice(g)}];function o(t,n,e,i,o,a){var c=e+t.length,u=i.length,s=Mn;return void 0!==o&&(o=Kt(o),s=Fn),r.call(a,s,function(r,a){var s;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,e);case"'":return n.slice(c);case"<":s=o[a.slice(1,-1)];break;default:var l=+a;if(0===l)return r;if(l>u){var f=Pn(l/10);return 0===f?r:f<=u?void 0===i[f-1]?a.charAt(1):i[f-1]+a.charAt(1):r}s=i[l-1]}return void 0===s?"":s})}});var Dn,Gn,Hn,Un,Vn,Wn,zn,qn,Bn,Xn=Array.isArray||function(t){return"Array"==_(t)},Yn=Lt("species"),Jn=(Hn=1==(Dn=6),Un=2==Dn,Vn=3==Dn,Wn=4==Dn,zn=6==Dn,qn=5==Dn||zn,Bn=Gn||function(n,e){return new(function(n){var e;return Xn(n)&&("function"!=typeof(e=n.constructor)||e!==Array&&!Xn(e.prototype)||(e=void 0),t(e)&&null===(e=e[Yn])&&(e=void 0)),void 0===e?Array:e}(n))(e)},function(t,n,e){for(var r,i,o=Kt(t),a=S(o),c=m(n,e,3),u=j(a.length),s=0,l=Hn?Bn(t,u):Un?Bn(t,0):void 0;u>s;s++)if((qn||s in a)&&(i=c(r=a[s],s,o),Dn))if(Hn)l[s]=i;else if(i)switch(Dn){case 3:return!0;case 5:return r;case 6:return s;case 2:l.push(r)}else if(Wn)return!1;return zn?-1:Vn||Wn?Wn:l}),Kn="findIndex",Qn=!0;Kn in[]&&Array(1)[Kn](function(){Qn=!1}),nt(nt.P+nt.F*Qn,"Array",{findIndex:function(t){return Jn(this,t,arguments.length>1?arguments[1]:void 0)}}),Ct(Kn);var Zn=Ht({render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tab-nav"},[e("div",{ref:"togglers",staticClass:"tab-nav__overflow"},t._l(t.links,function(n,r){return e(n.link?"a":"button",{key:r,tag:"component",staticClass:"tab-nav__toggler",class:{"is-active":r===t.activeTab},style:{visibility:t.hiddenLabels&&t.hiddenLabels.includes(r)?"hidden":"visible"},attrs:{href:n.link},on:{click:function(e){return t.linkClick(e,n,r)}}},[t._t("tab-toggler",[t._v("\n                "+t._s(n.name)+"\n            ")],{item:n,index:r,isActive:r===t.activeTab})],2)}),1),t._v(" "),e("context-menu",{ref:"hiddenToggler",staticClass:"tab-nav__hidden-toggler",class:{"has-active-item":t.hiddenLabels&&t.hiddenLabels.includes(t.activeTab)},style:{visibility:t.hiddenLabels?"visible":"hidden",left:t.hiddenLabels?t.dropdownLeft+"px":null},attrs:{boundary:".tab-nav"}},[e("template",{slot:"toggler"},[t._t(t.togglerLabel,[t._v("\n                "+t._s(t.togglerLabel)+"\n            ")],{name:"tab-hidden-open",items:t.links,hiddenIdx:t.hiddenLabels,activeTab:t.activeTab})],2),t._v(" "),t._l(t.links,function(n,r){return e(n.link?"cm-link":"cm-button",{directives:[{name:"show",rawName:"v-show",value:t.hiddenLabels&&t.hiddenLabels.includes(r),expression:"hiddenLabels && hiddenLabels.includes(i)"}],key:r,tag:"component",class:{"is-active":r===t.activeTab},attrs:{href:n.link},on:{click:function(e){return t.linkClick(e,n,r)}}},[t._t("tab-hidden",[t._v("\n                "+t._s(n.name)+"\n            ")],{item:n,index:r,isActive:r===t.activeTab})],2)})],2)],1)},staticRenderFns:[]},void 0,{name:"tab-nav",props:{name:String,links:{type:Array,required:!0},active:{type:Number,default:function(){var t=this.links.findIndex(function(t){return t.active});return t>-1?t:0}}},data:function(){return{hiddenLabels:null,dropdownLeft:0,current:this.active}},computed:{useRouter:function(){return void 0!==this.name},activeTab:function(){var t=this.$route.query[this.name]||this.current;return t&&+t},togglerLabel:function(){if(!this.hiddenLabels)return"";switch(this.hiddenLabels.length){case this.links.length:return this.links[this.activeTab].label;default:return this.$lang.TABS_HIDDEN_TOGGLER.replace("%s",this.hiddenLabels.length)}}},methods:{linkClick:function(t,n,e){n.link||(t.preventDefault(),t.stopPropagation(),this.useRouter?this.setRouteParam(e):this.current=e)},setRouteParam:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e={};e[this.name]=t,this.$router.$setParam(e,n)},calculateHiddenLabels:function(){for(var t=10,n=0,e=[],r=this.$refs.hiddenToggler.$el,i=this.$refs.togglers.clientWidth-r.clientWidth,o=Array.from(this.$refs.togglers.children),a=0;a<o.length;a++){var c=o[a].offsetWidth;(t+=c)>i?e.push(a):n+=c}this.dropdownLeft=n,this.hiddenLabels=e.length?e:null},debounceCalculateHiddenLabels:function(){clearTimeout(this.__resizeTimeout),this.__resizeTimeout=setTimeout(this.calculateHiddenLabels,100)}},mounted:function(){this.$nextTick(this.calculateHiddenLabels),window.addEventListener("resize",this.debounceCalculateHiddenLabels)},beforeDestroy:function(){window.removeEventListener("resize",this.debounceCalculateHiddenLabels)}},void 0,!1,void 0,void 0,void 0);var te=Ht({render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)},staticRenderFns:[]},void 0,{name:"tb-tab",props:{label:{type:String}}},void 0,!1,void 0,void 0,void 0);var ne=Ht({render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]},void 0,{name:"tb-link",props:{label:String,url:{type:String,required:!0}}},void 0,!1,void 0,void 0,void 0);var ee={installed:!1,install:function(t){this.installed||(this.installed=!0,t.component("tab-builder",Ut),t.component("tab-nav",Zn),t.component("tab-switcher",Vt),t.component("tb-tab",te),t.component("tb-link",ne))}},re={TABS_HIDDEN_TOGGLER:"%s other"},ie={install:function(t){t.lang=re,Vue.use(ee)}};window&&"AWEMA"in window?AWEMA.use(ie):(window.__awema_plugins_stack__=window.__awema_plugins_stack__||[],window.__awema_plugins_stack__.push(ie))}();
