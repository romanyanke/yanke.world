(this.webpackJsonpyanke=this.webpackJsonpyanke||[]).push([[0],[,,,function(e,t,n){e.exports={root:"Sky_root__2DsMs",Sun:"Sky_Sun__tZySm",Moon:"Sky_Moon__2uzgL",day:"Sky_day__201oV",night:"Sky_night__20jQL"}},function(e,t,n){e.exports={transitions:"src_transitions__39ge9",light:"src_light__2rzMw",dark:"src_dark__gOh--"}},function(e,t,n){e.exports={links:"Links_links__BGYRH",handle:"Links_handle__y7sPk",link:"Links_link__3E7ww"}},,,,function(e,t,n){e.exports={root:"App_root__1Jh3p"}},function(e,t,n){e.exports={root:"Header_root__2R_Rn",theme:"Header_theme__ScR9z"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n(7),l=n.n(c),i=n(9),o=n.n(i),s=n(2),u=n.p+"static/media/romanyanke.145433ea.jpg",f=n.p+"static/media/romanyanke@2x.3ae6282c.jpg",d=n.p+"static/media/romanyanke@3x.5e3761fb.jpg",b=n(1),p=n(3),j=n.n(p);!function(e){e.Sun="\u2600\ufe0f",e.Moon="\ud83c\udf1b"}(r||(r={}));var h="ReactSnap"===navigator.userAgent,O=function(e){var t=e.night,n=Object(b.useState)(""),c=Object(s.a)(n,2),l=c[0],i=c[1];return Object(b.useEffect)((function(){h||i(t?j.a.night:j.a.day)}),[t]),Object(a.jsxs)("div",{"aria-hidden":!0,className:"".concat(j.a.root," ").concat(l),children:[Object(a.jsx)("span",{className:j.a.Sun,children:r.Sun}),Object(a.jsx)("span",{className:j.a.Moon,children:r.Moon})]})},m=n(10),v=n.n(m),y=n(11),g=n(4),x=n.n(g),w=function(){var e=function(){var e=Object(y.a)(),t=!e.error&&e.dark,n=matchMedia("(prefers-color-scheme: dark)"),r=t||n.matches,a=Object(b.useState)(r),c=Object(s.a)(a,2),l=c[0],i=c[1],o=Object(b.useCallback)((function(e){var t=e.matches;i(t)}),[i]),u=Object(b.useCallback)((function(){i(!l)}),[i,l]);return Object(b.useEffect)((function(){return n.addListener(o),function(){n.removeListener(o)}}),[n,o]),Object(b.useEffect)((function(){h||(document.body.classList.add(x.a.transitions),l?(document.body.classList.add(x.a.dark),document.body.classList.remove(x.a.light)):(document.body.classList.add(x.a.light),document.body.classList.remove(x.a.dark)))}),[l]),[l,u]}(),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)("header",{className:v.a.root,onClick:r,children:[Object(a.jsx)("h1",{children:"Roman Yanke"}),Object(a.jsx)("img",{alt:"Roman Yanke",src:u,srcSet:"".concat(f," 2x, ").concat(d," 3x")}),Object(a.jsx)(O,{night:n})]})},k=(n(18),function(e){var t=e.label,n=e.value;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("dt",{children:t}),Object(a.jsx)("dd",{children:n})]})});function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var E=b.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#181616",d:"M10 .4C4.5.4.1 4.8.1 10.3c0 4.4 2.8 8.1 6.8 9.4.5.1.7-.2.7-.5v-1.7c-2.8.6-3.3-1.3-3.3-1.3-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.3-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.7 1 .8-.3 1.7-.4 2.5-.4s1.7.1 2.5.3c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5 3.9-1.3 6.8-5 6.8-9.4-.1-5.4-4.5-9.8-10-9.8z"});function I(e,t){var n=e.title,r=e.titleId,a=S(e,["title","titleId"]);return b.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",ref:t,"aria-labelledby":r},a),n?b.createElement("title",{id:r},n):null,E)}var M=b.forwardRef(I);n.p;function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var L=b.createElement("g",{fill:"#181616"},b.createElement("path",{d:"M10 6.7c-1.8 0-3.3 1.5-3.3 3.3 0 1.8 1.5 3.3 3.3 3.3s3.3-1.5 3.3-3.3c0-1.8-1.5-3.3-3.3-3.3z"}),b.createElement("path",{d:"M19.9 6c0-1.1-.2-1.8-.5-2.4-.3-.6-.6-1.2-1.1-1.7S17.2 1 16.5.7c-.6-.2-1.3-.4-2.4-.5-1-.1-1.4-.1-4.1-.1S7 .2 6 .3C4.9.3 4.2.5 3.6.8c-.7.2-1.2.5-1.8 1.1C1.3 2.4.9 3 .7 3.6.4 4.2.3 5 .2 6 .1 7.1.1 7.4.1 10.1c0 2.7 0 3 .1 4.1 0 1.1.2 1.8.5 2.4.3.6.6 1.2 1.1 1.7.5.5 1.1.9 1.7 1.1.6.2 1.3.4 2.4.5 1.1.1 1.5.1 4.1.1s3 0 4.1-.1c1.1 0 1.8-.2 2.4-.5.6-.3 1.2-.6 1.7-1.1.5-.5.9-1.1 1.1-1.7.2-.6.4-1.3.5-2.4s.1-1.4.1-4.1V6zM10 15.1c-2.8 0-5.1-2.3-5.1-5.1S7.2 4.9 10 4.9s5.1 2.3 5.1 5.1-2.3 5.1-5.1 5.1zm5.3-9.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.6 1.2-1.2 1.2z"}));function z(e,t){var n=e.title,r=e.titleId,a=R(e,["title","titleId"]);return b.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",ref:t,"aria-labelledby":r},a),n?b.createElement("title",{id:r},n):null,L)}var C=b.forwardRef(z);n.p;function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var H=b.createElement("g",{fillRule:"evenodd",clipRule:"evenodd",fill:"#181616"},b.createElement("path",{d:"M10.7 9zM18.4 0H1.6C.8 0 .1.7.1 1.5v17.1c0 .8.7 1.4 1.5 1.4h16.9c.8 0 1.5-.6 1.5-1.4V1.5C19.9.7 19.2 0 18.4 0zM6.1 16.7h-3v-9h3v9zM4.6 6.5c-1 0-1.7-.7-1.7-1.6 0-.9.7-1.6 1.7-1.6s1.7.7 1.7 1.6c0 .9-.6 1.6-1.7 1.6zm12.3 10.2h-3v-4.8c0-1.2-.4-2-1.5-2-.8 0-1.3.6-1.5 1.1-.1.2-.1.5-.1.7v5h-3v-9h3V9c.4-.6 1.1-1.5 2.7-1.5 2 0 3.4 1.3 3.4 4v5.2z"}));function V(e,t){var n=e.title,r=e.titleId,a=B(e,["title","titleId"]);return b.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",ref:t,"aria-labelledby":r},a),n?b.createElement("title",{id:r},n):null,H)}var F=b.forwardRef(V);n.p;function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Y=b.createElement("path",{fill:"#181616",d:"M10 .1C4.5.1.1 4.5.1 10s4.4 9.9 9.9 9.9 9.9-4.4 9.9-9.9S15.5.1 10 .1zm4.9 6.8l-1.6 7.6c-.1.5-.4.7-.9.4l-2.5-1.8-1.2 1.2c-.1.1-.2.2-.5.2s-.3-.1-.4-.4L7 11.3l-2.4-.8c-.6-.1-.6-.4 0-.7l9.5-3.7c.5-.2.9.1.8.8z"});function G(e,t){var n=e.title,r=e.titleId,a=J(e,["title","titleId"]);return b.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",ref:t,"aria-labelledby":r},a),n?b.createElement("title",{id:r},n):null,Y)}var T=b.forwardRef(G);n.p;function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Q(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Z=b.createElement("path",{fill:"#181616",d:"M6.3 18c7.5 0 11.5-6.2 11.5-11.5V6c.8-.6 1.5-1.3 2-2.1-.7.3-1.5.5-2.3.6.9-.5 1.5-1.3 1.8-2.2-.8.5-1.7.8-2.6 1-1.5-1.6-4.1-1.7-5.7-.2-1.1 1-1.5 2.5-1.2 3.9-3.2-.2-6.3-1.8-8.3-4.3C.4 4.6 1 6.9 2.7 8.1c-.6 0-1.3-.2-1.8-.5 0 1.9 1.4 3.6 3.3 4-.6.2-1.2.2-1.8.1.5 1.7 2.1 2.8 3.8 2.8-1.4 1.1-3.2 1.7-5 1.7-.3 0-.6 0-1-.1C2 17.4 4.1 18 6.3 18"});function q(e,t){var n=e.title,r=e.titleId,a=Q(e,["title","titleId"]);return b.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",ref:t,"aria-labelledby":r},a),n?b.createElement("title",{id:r},n):null,Z)}var K=b.forwardRef(q),U=(n.p,{github:M,instagram:C,linkedin:F,telegram:T,twitter:K}),W=n(5),X=n.n(W),$=function(){var e="romanyanke",t=[{url:"https://twitter.com/".concat(e),icon:U.twitter,title:"Twitter"},{url:"https://www.instagram.com/".concat(e),icon:U.instagram,title:"Instagram"},{url:"https://t.me/".concat(e),icon:U.telegram,title:"Telegram"},{url:"https://github.com/".concat(e),icon:U.github,title:"GitHub"},{url:"https://www.linkedin.com/in/".concat(e),icon:U.linkedin,title:"LinkedIn"}];return Object(a.jsxs)("div",{className:X.a.links,children:[Object(a.jsx)("div",{className:X.a.handle,children:e}),t.map((function(e){var t=e.url,n=e.icon,r=e.title;return Object(a.jsx)("a",{href:t,className:X.a.link,title:r,children:Object(a.jsx)(n,{})},t)}))]})},ee=n(8),te=n.n(ee),ne=n(12),re="yanke.ru:pencils",ae=function(){var e=Object(b.useState)(localStorage.getItem(re)||"a collection of pencils"),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(b.useEffect)((function(){return e=n,localStorage.setItem(re,e);var e}),[n]),Object(b.useEffect)((function(){(function(){var e=Object(ne.a)(te.a.mark((function e(){var t,n,a;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://romanyanke.github.io/pencilbox-static/description/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a=n.description,r(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsx)(k,{label:"Hobby",value:Object(a.jsxs)(a.Fragment,{children:["I have ",Object(a.jsx)("a",{href:"https://pencil.yanke.ru/",children:n}),"."]})})},ce=function(){return Object(a.jsx)("article",{children:Object(a.jsxs)("dl",{children:[Object(a.jsx)(k,{label:"Handle",value:Object(a.jsx)($,{})}),Object(a.jsx)(k,{label:"About",value:Object(a.jsxs)(a.Fragment,{children:["Lead Frontend Engineer @",Object(a.jsx)("a",{href:"https://www.simplinic.de/",children:"simplinic"}),"."]})}),Object(a.jsx)(k,{label:"Email",value:Object(a.jsx)("a",{href:"mailto:roman@yanke.ru",children:"roman@yanke.ru"})}),Object(a.jsx)(k,{label:"Location",value:"Saint Petersburg, Russia \ud83c\uddf7\ud83c\uddfa"}),Object(a.jsx)(ae,{})]})})},le=function(){return Object(a.jsxs)("section",{className:o.a.root,children:[Object(a.jsx)(w,{}),Object(a.jsx)(ce,{})]})},ie=document.getElementById("romanyanke");ie&&(ie.hasChildNodes()?l.a.hydrate(Object(a.jsx)(le,{}),ie):l.a.render(Object(a.jsx)(le,{}),ie))}],[[20,1,2]]]);
//# sourceMappingURL=main.f69b2f83.chunk.js.map