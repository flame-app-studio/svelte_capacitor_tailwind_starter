import{S as E,i as I,s as T,e as g,a as $,b as k,n as A,d as x,I as F,m as fe,c as L,f as C,t as d,g as h,h as S,j as y,k as b,l as W,o as B,p as N,q as z,r as ce,u as ue,v as me,L as pe,w as G,x as P,y as R,z as O,A as j,R as _e,C as $e,B as J,D as de,G as ge,E as Y,F as Q,H as U,J as K,K as V}from"./vendor.ff80953a.js";const he=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function l(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=l(r);fetch(r.href,n)}};he();function be(s){let e;return{c(){e=g("aside"),e.innerHTML=`<i class="centered-flex not-italic text-sm">Crafted with \u2764\uFE0F by Jean-Baptiste Thery | Flame App</i> 

	<a href="https://flameapp.fr/" target="_blank" rel="noopener">www.flameapp.fr</a>`,$(e,"class","flex flex-col items-center text-gray-600 dark:text-white")},m(l,t){k(l,e,t)},p:A,i:A,o:A,d(l){l&&x(e)}}}class ve extends E{constructor(e){super();I(this,e,null,be,T,{})}}function X(s){let e,l;return e=new F({props:{path:ce,color:s[1]}}),{c(){L(e.$$.fragment)},m(t,r){C(e,t,r),l=!0},p(t,r){const n={};r&2&&(n.color=t[1]),e.$set(n)},i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),l=!1},d(t){S(e,t)}}}function Z(s){let e,l;return e=new F({props:{path:ue,color:s[1]}}),{c(){L(e.$$.fragment)},m(t,r){C(e,t,r),l=!0},p(t,r){const n={};r&2&&(n.color=t[1]),e.$set(n)},i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),l=!1},d(t){S(e,t)}}}function ke(s){let e,l,t,r,n,o,m,i;l=new F({props:{path:fe,color:s[1]}});let f=!s[0]&&X(s),a=s[0]&&Z(s);return{c(){e=g("a"),L(l.$$.fragment),t=y(),r=g("button"),f&&f.c(),n=y(),a&&a.c(),$(e,"class","mx-5"),$(e,"href","https://github.com/flameapp-io/svelte-capacitor-tailwind-starter"),$(e,"target","_blank"),$(e,"rel","noopener"),$(r,"class","mx-5")},m(p,_){k(p,e,_),C(l,e,null),k(p,t,_),k(p,r,_),f&&f.m(r,null),b(r,n),a&&a.m(r,null),o=!0,m||(i=W(r,"click",s[2]),m=!0)},p(p,[_]){const w={};_&2&&(w.color=p[1]),l.$set(w),p[0]?f&&(B(),h(f,1,1,()=>{f=null}),N()):f?(f.p(p,_),_&1&&d(f,1)):(f=X(p),f.c(),d(f,1),f.m(r,n)),p[0]?a?(a.p(p,_),_&1&&d(a,1)):(a=Z(p),a.c(),d(a,1),a.m(r,null)):a&&(B(),h(a,1,1,()=>{a=null}),N())},i(p){o||(d(l.$$.fragment,p),d(f),d(a),o=!0)},o(p){h(l.$$.fragment,p),h(f),h(a),o=!1},d(p){p&&x(e),S(l),p&&x(t),p&&x(r),f&&f.d(),a&&a.d(),m=!1,i()}}}function xe(s,e,l){let t=!1,r="black";z(()=>{const o=localStorage.getItem("dark");(!o||o==="true")&&(l(0,t=!0),l(1,r="white"),document.documentElement.classList.toggle("dark"))});function n(){l(0,t=!t),document.documentElement.classList.toggle("dark"),t?(localStorage.setItem("dark","true"),l(1,r="white")):(l(1,r="black"),localStorage.setItem("dark","false"))}return[t,r,n]}class we extends E{constructor(e){super();I(this,e,xe,ke,T,{})}}function ee(s,e,l){const t=s.slice();return t[1]=e[l],t}function ye(s){let e=s[1].name+"",l;return{c(){l=G(e)},m(t,r){k(t,l,r)},p:A,d(t){t&&x(l)}}}function te(s){let e,l;return e=new pe({props:{to:s[1].url,class:"mx-5",$$slots:{default:[ye]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(t,r){C(e,t,r),l=!0},p(t,r){const n={};r&16&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),l=!1},d(t){S(e,t)}}}function Le(s){let e,l,t,r,n=s[0],o=[];for(let i=0;i<n.length;i+=1)o[i]=te(ee(s,n,i));const m=i=>h(o[i],1,1,()=>{o[i]=null});return t=new we({}),{c(){e=g("nav");for(let i=0;i<o.length;i+=1)o[i].c();l=y(),L(t.$$.fragment),$(e,"class","flex items-center")},m(i,f){k(i,e,f);for(let a=0;a<o.length;a+=1)o[a].m(e,null);b(e,l),C(t,e,null),r=!0},p(i,[f]){if(f&1){n=i[0];let a;for(a=0;a<n.length;a+=1){const p=ee(i,n,a);o[a]?(o[a].p(p,f),d(o[a],1)):(o[a]=te(p),o[a].c(),d(o[a],1),o[a].m(e,l))}for(B(),a=n.length;a<o.length;a+=1)m(a);N()}},i(i){if(!r){for(let f=0;f<n.length;f+=1)d(o[f]);d(t.$$.fragment,i),r=!0}},o(i){o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)h(o[f]);h(t.$$.fragment,i),r=!1},d(i){i&&x(e),me(o,i),S(t)}}}function Ce(s){return[[{name:"Home",url:"/"},{name:"Example",url:"example"}]]}class Se extends E{constructor(e){super();I(this,e,Ce,Le,T,{})}}function Ae(s){let e,l;const t=s[1].default,r=P(t,s,s[0],null);return{c(){e=g("div"),r&&r.c(),$(e,"class","safe-area relative flex flex-1 svelte-qwvio")},m(n,o){k(n,e,o),r&&r.m(e,null),l=!0},p(n,[o]){r&&r.p&&(!l||o&1)&&R(r,t,n,n[0],l?j(t,n[0],o,null):O(n[0]),null)},i(n){l||(d(r,n),l=!0)},o(n){h(r,n),l=!1},d(n){n&&x(e),r&&r.d(n)}}}function Ee(s,e,l){let{$$slots:t={},$$scope:r}=e;return s.$$set=n=>{"$$scope"in n&&l(0,r=n.$$scope)},[r,t]}class Ie extends E{constructor(e){super();I(this,e,Ee,Ae,T,{})}}const Te=s=>({}),le=s=>({}),Ge=s=>({}),re=s=>({}),He=s=>({}),ne=s=>({});function Me(s){let e,l,t,r,n,o,m,i;const f=s[2].header,a=P(f,s,s[3],ne),p=s[2].main,_=P(p,s,s[3],re),w=s[2].footer,u=P(w,s,s[3],le);return{c(){e=g("header"),a&&a.c(),t=y(),r=g("main"),_&&_.c(),n=y(),o=g("footer"),u&&u.c(),$(e,"class",l="absolute "+(s[1]?"top-0":"top-5")+" left-0 right-0 flex centered-flex"),$(r,"class","min-w-full min-h-full px-4 centered-flex"),$(o,"class",m="absolute "+(s[1]?"bottom-2":"bottom-5")+" left-0 right-0 flex centered-flex")},m(c,v){k(c,e,v),a&&a.m(e,null),k(c,t,v),k(c,r,v),_&&_.m(r,null),k(c,n,v),k(c,o,v),u&&u.m(o,null),i=!0},p(c,v){a&&a.p&&(!i||v&8)&&R(a,f,c,c[3],i?j(f,c[3],v,He):O(c[3]),ne),(!i||v&2&&l!==(l="absolute "+(c[1]?"top-0":"top-5")+" left-0 right-0 flex centered-flex"))&&$(e,"class",l),_&&_.p&&(!i||v&8)&&R(_,p,c,c[3],i?j(p,c[3],v,Ge):O(c[3]),re),u&&u.p&&(!i||v&8)&&R(u,w,c,c[3],i?j(w,c[3],v,Te):O(c[3]),le),(!i||v&2&&m!==(m="absolute "+(c[1]?"bottom-2":"bottom-5")+" left-0 right-0 flex centered-flex"))&&$(o,"class",m)},i(c){i||(d(a,c),d(_,c),d(u,c),i=!0)},o(c){h(a,c),h(_,c),h(u,c),i=!1},d(c){c&&x(e),a&&a.d(c),c&&x(t),c&&x(r),_&&_.d(c),c&&x(n),c&&x(o),u&&u.d(c)}}}function qe(s){let e,l;return e=new Ie({props:{$$slots:{default:[Me]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(t,r){C(e,t,r),l=!0},p(t,r){const n={};r&10&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),l=!1},d(t){S(e,t)}}}function Be(s){let e,l;return e=new _e({props:{url:s[0],$$slots:{default:[qe]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(t,r){C(e,t,r),l=!0},p(t,[r]){const n={};r&1&&(n.url=t[0]),r&10&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),l=!1},d(t){S(e,t)}}}function Ne(s,e,l){let{$$slots:t={},$$scope:r}=e,{url:n=""}=e,o=!1;return z(()=>{$e.getPlatform()!=="web"&&l(1,o=!0)}),s.$$set=m=>{"url"in m&&l(0,n=m.url),"$$scope"in m&&l(3,r=m.$$scope)},[n,o,t,r]}class Pe extends E{constructor(e){super();I(this,e,Ne,Be,T,{url:0})}}function Re(s){let e,l,t,r;return{c(){e=g("button"),l=G(s[0]),$(e,"class","bg-gray-900 text-gray-200 rounded-3xl py-3 my-2 outline-none border-none focus:outline-none hover:transition-all duration-200 ease-in-out hover:scale-105")},m(n,o){k(n,e,o),b(e,l),t||(r=W(e,"click",s[1]),t=!0)},p(n,[o]){o&1&&J(l,n[0])},i:A,o:A,d(n){n&&x(e),t=!1,r()}}}function Oe(s,e,l){let{text:t}=e;function r(n){de.call(this,s,n)}return s.$$set=n=>{"text"in n&&l(0,t=n.text)},[t,r]}class se extends E{constructor(e){super();I(this,e,Oe,Re,T,{text:0})}}function oe(s){var _,w;let e,l,t,r,n=((_=s[0])==null?void 0:_.coords.latitude)+"",o,m,i,f,a=((w=s[0])==null?void 0:w.coords.longitude)+"",p;return{c(){e=g("h3"),e.textContent="Your location is :",l=y(),t=g("p"),r=G("Latitude: "),o=G(n),m=y(),i=g("p"),f=G("Longitude: "),p=G(a),$(e,"class","mb-2 sm:text-2xl")},m(u,c){k(u,e,c),k(u,l,c),k(u,t,c),b(t,r),b(t,o),k(u,m,c),k(u,i,c),b(i,f),b(i,p)},p(u,c){var v,H;c&1&&n!==(n=((v=u[0])==null?void 0:v.coords.latitude)+"")&&J(o,n),c&1&&a!==(a=((H=u[0])==null?void 0:H.coords.longitude)+"")&&J(p,a)},d(u){u&&x(e),u&&x(l),u&&x(t),u&&x(m),u&&x(i)}}}function ae(s){let e;return{c(){e=g("i"),e.textContent="Loading ...",$(e,"class","animate-pulse")},m(l,t){k(l,e,t)},d(l){l&&x(e)}}}function je(s){let e,l;return e=new se({props:{text:"Get Current Location"}}),e.$on("click",s[2]),{c(){L(e.$$.fragment)},m(t,r){C(e,t,r),l=!0},p:A,i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),l=!1},d(t){S(e,t)}}}function De(s){let e,l;return e=new se({props:{text:"Reset"}}),e.$on("click",s[3]),{c(){L(e.$$.fragment)},m(t,r){C(e,t,r),l=!0},p:A,i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),l=!1},d(t){S(e,t)}}}function Fe(s){let e,l,t,r,n,o,m,i,f=s[0]&&oe(s),a=s[1]&&ae();const p=[De,je],_=[];function w(u,c){return u[0]?0:1}return o=w(s),m=_[o]=p[o](s),{c(){e=g("div"),f&&f.c(),l=y(),a&&a.c(),t=y(),r=y(),n=g("div"),m.c(),$(e,"class","my-10"),$(n,"class","flex flex-col justify-center")},m(u,c){k(u,e,c),f&&f.m(e,null),b(e,l),a&&a.m(e,null),b(e,t),k(u,r,c),k(u,n,c),_[o].m(n,null),i=!0},p(u,[c]){u[0]?f?f.p(u,c):(f=oe(u),f.c(),f.m(e,l)):f&&(f.d(1),f=null),u[1]?a||(a=ae(),a.c(),a.m(e,t)):a&&(a.d(1),a=null);let v=o;o=w(u),o===v?_[o].p(u,c):(B(),h(_[v],1,1,()=>{_[v]=null}),N(),m=_[o],m?m.p(u,c):(m=_[o]=p[o](u),m.c()),d(m,1),m.m(n,null))},i(u){i||(d(m),i=!0)},o(u){h(m),i=!1},d(u){u&&x(e),f&&f.d(),a&&a.d(),u&&x(r),u&&x(n),_[o].d()}}}function Je(s,e,l){let t=null,r=!1;async function n(){try{l(1,r=!0);const m=await ge.getCurrentPosition();l(0,t=m)}catch(m){m=!0,console.log(m)}finally{l(1,r=!1)}}function o(){l(0,t=null)}return[t,r,n,o]}class Ke extends E{constructor(e){super();I(this,e,Je,Fe,T,{})}}function We(s){let e,l,t,r,n,o,m,i,f;return m=new Ke({}),{c(){e=g("article"),l=g("section"),l.innerHTML='<h1 class="text-4xl sm:text-5xl md:text-6xl">Geolocation</h1>',t=y(),r=g("div"),n=y(),o=g("section"),L(m.$$.fragment),$(r,"class","my-3"),$(e,"class","text-center")},m(a,p){k(a,e,p),b(e,l),b(e,t),b(e,r),b(e,n),b(e,o),C(m,o,null),f=!0},p:A,i(a){f||(d(m.$$.fragment,a),i||Y(()=>{i=Q(e,U,{y:200,duration:350}),i.start()}),f=!0)},o(a){h(m.$$.fragment,a),f=!1},d(a){a&&x(e),S(m)}}}class ze extends E{constructor(e){super();I(this,e,null,We,T,{})}}var Ye="/assets/capacitor-logo.e241c22f.png",Qe="/assets/flame-app-logo-light.5ee3d738.png",Ue="/assets/svelte.d72399d3.png";function Ve(s){let e,l,t,r,n,o,m,i,f,a,p,_,w,u,c,v,H,M,D;return{c(){e=g("article"),l=g("section"),t=g("img"),n=y(),o=g("div"),m=y(),i=g("img"),a=y(),p=g("div"),_=y(),w=g("img"),c=y(),v=g("div"),H=y(),M=g("section"),M.innerHTML=`<h1 class="text-4xl sm:text-5xl md:text-6xl">Svelte Capacitor Starter</h1> 

		<div class="my-2"></div> 

		<h2 class="text-lg sm:text-xl text-gray-600">Create lightning fast cross-platform apps !</h2>`,K(t.src,r=Qe)||$(t,"src",r),$(t,"alt","Capacitor logo"),$(t,"class","w-14 bg-black"),$(o,"class","mx-3"),K(i.src,f=Ue)||$(i,"src",f),$(i,"alt","Svelte Logo"),$(i,"class","w-20 animate-bounce"),$(p,"class","mx-3"),K(w.src,u=Ye)||$(w,"src",u),$(w,"alt","Capacitor logo"),$(w,"class","w-14"),$(l,"class","centered-flex"),$(v,"class","my-3"),$(M,"class","centered-flex flex-col text-center"),$(e,"class","-mt-10")},m(q,ie){k(q,e,ie),b(e,l),b(l,t),b(l,n),b(l,o),b(l,m),b(l,i),b(l,a),b(l,p),b(l,_),b(l,w),b(e,c),b(e,v),b(e,H),b(e,M)},p:A,i(q){D||Y(()=>{D=Q(e,U,{y:200,duration:350}),D.start()})},o:A,d(q){q&&x(e)}}}class Xe extends E{constructor(e){super();I(this,e,null,Ve,T,{})}}function Ze(s){let e,l,t,r;return e=new V({props:{path:"/",component:Xe}}),t=new V({props:{path:"example",component:ze}}),{c(){L(e.$$.fragment),l=y(),L(t.$$.fragment)},m(n,o){C(e,n,o),k(n,l,o),C(t,n,o),r=!0},p:A,i(n){r||(d(e.$$.fragment,n),d(t.$$.fragment,n),r=!0)},o(n){h(e.$$.fragment,n),h(t.$$.fragment,n),r=!1},d(n){S(e,n),n&&x(l),S(t,n)}}}class et extends E{constructor(e){super();I(this,e,null,Ze,T,{})}}function tt(s){let e,l;return e=new Se({}),{c(){L(e.$$.fragment)},m(t,r){C(e,t,r),l=!0},i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),l=!1},d(t){S(e,t)}}}function lt(s){let e,l;return e=new et({}),{c(){L(e.$$.fragment)},m(t,r){C(e,t,r),l=!0},i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),l=!1},d(t){S(e,t)}}}function rt(s){let e,l;return e=new ve({}),{c(){L(e.$$.fragment)},m(t,r){C(e,t,r),l=!0},i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),l=!1},d(t){S(e,t)}}}function nt(s){let e,l;return e=new Pe({props:{$$slots:{footer:[rt],main:[lt],header:[tt]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},m(t,r){C(e,t,r),l=!0},p(t,[r]){const n={};r&1&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),l=!1},d(t){S(e,t)}}}class st extends E{constructor(e){super();I(this,e,null,nt,T,{})}}new st({target:document.getElementById("app")});