(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{204:function(t,e,r){var content=r(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("7388ab72",content,!0,{sourceMap:!1})},227:function(t,e,r){"use strict";var n={data:function(){return{drawer:!1,icons:["mdi-github","mdi-linkedin","mdi-twitter"]}}},o=r(83),c=r(120),l=r.n(c),d=r(351),v=r(352),f=r(357),h=r(160),x=r(137),_=r(358),m=r(353),w=r(354),V=r(340),k=r(228),C=r(355),y=r(356),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-navigation-drawer",{staticClass:"pt-4",attrs:{app:"","mini-variant":"",fixed:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-avatar",{staticClass:"d-block text-center mx-auto mb-9",attrs:{color:"grey darken-1",size:36}},[r("v-img",{attrs:{src:"https://avatars.githubusercontent.com/u/9919359?v=4"}})],1),t._v(" "),r("v-avatar",{staticClass:"d-block text-center mx-auto mb-9",attrs:{color:"grey lighten-1",size:20}})],1),t._v(" "),r("v-main",[r("v-container",[r("Nuxt")],1),t._v(" "),r("v-footer",{attrs:{dark:"",padless:""}},[r("v-card",{staticClass:"lighten-1 white--text text-center",attrs:{flat:"",tile:"",width:"100%"}},[r("v-card-text",t._l(t.icons,(function(e){return r("v-btn",{key:e,staticClass:"mx-4 white--text",attrs:{icon:""}},[r("v-icon",{attrs:{size:"24px"}},[t._v("\n              "+t._s(e)+"\n            ")])],1)})),1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{staticClass:"white--text"},[t._v("\n          "+t._s((new Date).getFullYear())+" — "),r("strong",[t._v("Jesús Domínguez")])])],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:d.a,VAvatar:v.a,VBtn:f.a,VCard:h.a,VCardText:x.a,VContainer:_.a,VDivider:m.a,VFooter:w.a,VIcon:V.a,VImg:k.a,VMain:C.a,VNavigationDrawer:y.a})},234:function(t,e,r){r(235),t.exports=r(236)},262:function(t,e,r){"use strict";r(204)},263:function(t,e,r){var n=r(20)(!1);n.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=n},68:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(262),r(83)),c=r(120),l=r.n(c),d=r(351),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[234,5,2,6]]]);