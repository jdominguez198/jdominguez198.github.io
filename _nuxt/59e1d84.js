(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{183:function(o,t,n){var content=n(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,n(56).default)("45dec061",content,!0,{sourceMap:!1})},184:function(o,t,n){var content=n(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,n(56).default)("7ba68c38",content,!0,{sourceMap:!1})},185:function(o,t,n){var content=n(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,n(56).default)("270ad1ff",content,!0,{sourceMap:!1})},200:function(o,t,n){"use strict";t.a={navigation:{resume:"Resume",whatIDo:"What I Do",contact:"Contact"},contact:{title:"Contact me!",description:"Are you a <strong>Recruiter</strong> and you think I can fit on a position you're promoting? Are you a <strong>Developer</strong> and want to collaborate with me on a some exciting project? Have you any <strong>suggestions</strong> to improve my site?<br><br>Well, you can contact me in any of the social networks or just send me a message using the following form:",form:{name:{label:"Your Name",placeholder:"Type your full name",errorMessage:"You should type your full contact name, please!"},email:{label:"Your Email",placeholder:"Type yor email address",errorMessage:"If you don't type your email address, how I will reply you?"},message:{label:"Type your message",placeholder:"Type your detailed message",errorMessage:"No message? Really? Come on, don't be so shy..."},submit:{label:"Submit message"}},recaptchaError:"There was an error with ReCaptcha. Reload the site and try again",recaptchaPolicy:"* This site is protected by reCAPTCHA and the Google {0} and {1} apply.",recaptchaPolicyPrivacyLink:"Privacy Policy",recaptchaPolicyTermsLink:"Terms of Service",response:{ok:"Your message has been sent successfully. Thank you!",ko:"There was an error sending your message. Could you please try again?",error:"There was an error sending your message. Could you please try again?"}}}},204:function(o,t,n){"use strict";var e=n(4),f=(n(18),n(33),n(0)),r=(n(41),n(69),n(43),function(o){var t=o.data.story.content.content[0],n=t.name,e=t.role,f=t.avatar,r=t.social_links,l=t._editable;return{name:n,role:e,avatar:f.filename.replace("//a.storyblok.com/","//img2.storyblok.com/220x0/"),socialLinks:r.map((function(o){return{label:o.label,icon:["fab",o.icon],link:o.url.url}})),_editable:l}}),l=f.a.extend({fetch:function(){var o=this;return Object(e.a)(regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.$route.query._storyblok||o.isDev?"draft":"published",t.prev=1,t.next=4,o.$storyapi.get("cdn/stories/header",{version:n,language:o.$i18n.locale});case 4:e=t.sent,o.pageEditable={content:{_editable:e.data.story.content._editable}},o.pageID=e.data.story.id,o.setContent(r(e)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.error("SBERROR: ",t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))()},computed:{links:function(){return[{label:this.$t("navigation.resume"),link:"/"},{label:this.$t("navigation.whatIDo"),link:"/what-i-do"},{label:this.$t("navigation.contact"),link:"/contact"}]},languages:function(){return this.$i18n.locales}},data:function(){return{isMenuOpen:!1,pageEditable:{content:{}},pageID:null,contentEditable:{content:{}},name:"",role:"",avatar:"",socialLinks:[]}},mounted:function(){var o=this;"published"!==(this.$route.query._storyblok||this.isDev?"draft":"published")&&this.$storybridge((function(){(new StoryblokBridge).on(["input","published","change"],(function(t){"input"===t.action?t.story.id===o.pageID&&o.setContent(r({data:t})):o.$nuxt.$router.go({path:o.$nuxt.$router.currentRoute,force:!0})}))}),(function(o){console.error(o)}))},methods:{toggleMenu:function(){document.body.classList.toggle("nav__open"),this.isMenuOpen=!this.isMenuOpen},setContent:function(data){this.name=data.name,this.role=data.role,this.avatar=data.avatar,this.socialLinks=data.socialLinks,this.contentEditable={content:{_editable:data._editable}}},handleNavigationClick:function(){this.isMenuOpen&&this.toggleMenu()}}}),c=n(32),component=Object(c.a)(l,(function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",{directives:[{name:"editable",rawName:"v-editable",value:o.pageEditable,expression:"pageEditable"}],staticClass:"page-container"},[n("div",{staticClass:"header__toggle",on:{click:o.toggleMenu}},[n("fa",{attrs:{icon:["fas","bars"]}})],1),o._v(" "),n("header",{staticClass:"header"},[n("div",{staticClass:"header__close",on:{click:o.toggleMenu}},[n("fa",{attrs:{icon:["fas","times"]}})],1),o._v(" "),n("Profile",{directives:[{name:"editable",rawName:"v-editable",value:o.contentEditable,expression:"contentEditable"}],attrs:{name:o.name,role:o.role,avatar:o.avatar,"social-links":o.socialLinks}}),o._v(" "),n("Navigation",{attrs:{links:o.links,languages:o.languages},on:{"click:link":o.handleNavigationClick}}),o._v(" "),n("Copyright")],1),o._v(" "),n("Nuxt",{attrs:{name:"header"}}),o._v(" "),n("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{Profile:n(369).default,Navigation:n(370).default,Copyright:n(371).default})},207:function(o,t,n){n(208),o.exports=n(209)},251:function(o,t,n){var content=n(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,n(56).default)("3a3e17a0",content,!0,{sourceMap:!1})},252:function(o,t,n){var e=n(55)(!1);e.push([o.i,':root{--background-color-primary:#0e0f10;--background-color-inner-primary:#070708;--text-color-primary:#fff;--text-color-highlight-primary:#25ca7f}body{margin:0;padding:0;font-family:"Roboto Mono",sans-serif;background:#0e0f10;background:var(--background-color-primary);color:#fff;color:var(--text-color-primary);scroll-behavior:smooth}#__layout,#__nuxt,body,html{position:relative;height:100vh;min-height:100%}.header{position:fixed;top:0;bottom:0;left:-100vw;width:100vw;display:flex;flex-direction:column;justify-content:space-between;background:#0e0f10;background:var(--background-color-primary);z-index:9;transition:left .2s ease-in-out}.header__toggle{position:fixed;bottom:20px;right:20px;background:#070708;background:var(--background-color-inner-primary);border:1px solid #fff;border:1px solid var(--text-color-primary);border-radius:5px;padding:5px 10px;font-size:20px;z-index:2}.header__close{position:absolute;top:10px;right:20px;font-size:20px}.nav__open{overflow-y:hidden}.nav__open .header{left:0}@media (min-width:768px){.header{left:0;width:400px}.header__close,.header__toggle{display:none}}.page-container{display:flex;flex-direction:column}.content{padding:40px 20px;margin:0}.content__wrapper{display:grid;grid-row-gap:40px;row-gap:40px;grid-column-gap:20px;-moz-column-gap:20px;column-gap:20px}.section__title{margin:0 0 20px;padding:0}.section__description{font-family:"Roboto",sans-serif;font-weight:300;font-size:18px;margin:0;padding:10px 0}.section__description strong{color:#25ca7f;color:var(--text-color-highlight-primary)}.section__hint{font-size:12px}.section__hint a{text-decoration:none;color:#fff;color:var(--text-color-primary)}@media (min-width:768px){.content{margin:0 0 0 400px}}',""]),o.exports=e},253:function(o,t,n){var content=n(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,n(56).default)("c3ae2b30",content,!0,{sourceMap:!1})},254:function(o,t,n){var e=n(55),f=n(255),r=n(256),l=n(257),c=n(258),d=n(259),U=n(260),m=n(261),y=n(262),w=n(263),h=n(264),x=n(265),_=n(266),v=n(267),R=n(268),k=n(269),M=n(270),C=n(271),$=n(272),E=n(273),z=n(274),L=n(275),N=n(276),I=n(277),T=n(278),P=n(279),j=n(280),D=n(281),O=n(282),S=n(283),A=n(284),Y=n(285),B=n(286),J=n(287),H=n(288),W=n(289),F=n(290),G=n(291),K=n(292),Q=n(293),V=n(294),X=n(295),Z=n(296),oo=n(297),to=n(298),no=n(299),eo=n(300),ao=n(301),fo=n(302),io=n(303),ro=n(304),lo=n(305),so=n(306),co=n(307),po=e(!1),uo=f(r),Uo=f(l),mo=f(c),go=f(d),yo=f(U),bo=f(m),wo=f(y),ho=f(w),xo=f(h),_o=f(x),vo=f(_),Ro=f(v),ko=f(R),Mo=f(k),Co=f(M),$o=f(C),Eo=f($),zo=f(E),Lo=f(z),No=f(L),Io=f(N),To=f(I),Po=f(T),jo=f(P),Do=f(j),Oo=f(D),So=f(O),qo=f(S),Ao=f(A),Yo=f(Y),Bo=f(B),Jo=f(J),Ho=f(H),Wo=f(W),Fo=f(F),Go=f(G),Ko=f(K),Qo=f(Q),Vo=f(V),Xo=f(X),Zo=f(Z),ot=f(oo),tt=f(to),nt=f(no),et=f(eo),at=f(ao),ft=f(fo),it=f(io),lt=f(ro),st=f(lo),ct=f(so),pt=f(co);po.push([o.i,'@font-face{font-family:"Roboto";font-style:normal;font-weight:100;font-display:swap;src:url('+uo+') format("woff2");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:"Roboto";font-style:normal;font-weight:100;font-display:swap;src:url('+Uo+') format("woff2");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:"Roboto";font-style:normal;font-weight:100;font-display:swap;src:url('+mo+') format("woff2");unicode-range:U+1f??}@font-face{font-family:"Roboto";font-style:normal;font-weight:100;font-display:swap;src:url('+go+') format("woff2");unicode-range:U+0370-03ff}@font-face{font-family:"Roboto";font-style:normal;font-weight:100;font-display:swap;src:url('+yo+') format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01a0-01a1,U+01af-01b0,U+1ea0-1ef9,U+20ab}@font-face{font-family:"Roboto";font-style:normal;font-weight:100;font-display:swap;src:url('+bo+') format("woff2");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:"Roboto";font-style:normal;font-weight:100;font-display:swap;src:url('+wo+') format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:"Roboto";font-style:normal;font-weight:300;font-display:swap;src:url('+ho+') format("woff2");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:"Roboto";font-style:normal;font-weight:300;font-display:swap;src:url('+xo+') format("woff2");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:"Roboto";font-style:normal;font-weight:300;font-display:swap;src:url('+_o+') format("woff2");unicode-range:U+1f??}@font-face{font-family:"Roboto";font-style:normal;font-weight:300;font-display:swap;src:url('+vo+') format("woff2");unicode-range:U+0370-03ff}@font-face{font-family:"Roboto";font-style:normal;font-weight:300;font-display:swap;src:url('+Ro+') format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01a0-01a1,U+01af-01b0,U+1ea0-1ef9,U+20ab}@font-face{font-family:"Roboto";font-style:normal;font-weight:300;font-display:swap;src:url('+ko+') format("woff2");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:"Roboto";font-style:normal;font-weight:300;font-display:swap;src:url('+Mo+') format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:"Roboto";font-style:normal;font-weight:400;font-display:swap;src:url('+Co+') format("woff2");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:"Roboto";font-style:normal;font-weight:400;font-display:swap;src:url('+$o+') format("woff2");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:"Roboto";font-style:normal;font-weight:400;font-display:swap;src:url('+Eo+') format("woff2");unicode-range:U+1f??}@font-face{font-family:"Roboto";font-style:normal;font-weight:400;font-display:swap;src:url('+zo+') format("woff2");unicode-range:U+0370-03ff}@font-face{font-family:"Roboto";font-style:normal;font-weight:400;font-display:swap;src:url('+Lo+') format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01a0-01a1,U+01af-01b0,U+1ea0-1ef9,U+20ab}@font-face{font-family:"Roboto";font-style:normal;font-weight:400;font-display:swap;src:url('+No+') format("woff2");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:"Roboto";font-style:normal;font-weight:400;font-display:swap;src:url('+Io+') format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:"Roboto";font-style:normal;font-weight:700;font-display:swap;src:url('+To+') format("woff2");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:"Roboto";font-style:normal;font-weight:700;font-display:swap;src:url('+Po+') format("woff2");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:"Roboto";font-style:normal;font-weight:700;font-display:swap;src:url('+jo+') format("woff2");unicode-range:U+1f??}@font-face{font-family:"Roboto";font-style:normal;font-weight:700;font-display:swap;src:url('+Do+') format("woff2");unicode-range:U+0370-03ff}@font-face{font-family:"Roboto";font-style:normal;font-weight:700;font-display:swap;src:url('+Oo+') format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01a0-01a1,U+01af-01b0,U+1ea0-1ef9,U+20ab}@font-face{font-family:"Roboto";font-style:normal;font-weight:700;font-display:swap;src:url('+So+') format("woff2");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:"Roboto";font-style:normal;font-weight:700;font-display:swap;src:url('+qo+') format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:"Roboto Mono";font-style:normal;font-weight:100;font-display:swap;src:url('+Ao+') format("woff2");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:"Roboto Mono";font-style:normal;font-weight:100;font-display:swap;src:url('+Yo+') format("woff2");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:"Roboto Mono";font-style:normal;font-weight:100;font-display:swap;src:url('+Bo+') format("woff2");unicode-range:U+0370-03ff}@font-face{font-family:"Roboto Mono";font-style:normal;font-weight:100;font-display:swap;src:url('+Jo+') format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01a0-01a1,U+01af-01b0,U+1ea0-1ef9,U+20ab}@font-face{font-family:"Roboto Mono";font-style:normal;font-weight:100;font-display:swap;src:url('+Ho+') format("woff2");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:"Roboto Mono";font-style:normal;font-weight:100;font-display:swap;src:url('+Wo+') format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:"Roboto Mono";font-style:normal;font-weight:300;font-display:swap;src:url('+Fo+') format("woff2");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:"Roboto Mono";font-style:normal;font-weight:300;font-display:swap;src:url('+Go+') format("woff2");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:"Roboto Mono";font-style:normal;font-weight:300;font-display:swap;src:url('+Ko+') format("woff2");unicode-range:U+0370-03ff}@font-face{font-family:"Roboto Mono";font-style:normal;font-weight:300;font-display:swap;src:url('+Qo+') format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01a0-01a1,U+01af-01b0,U+1ea0-1ef9,U+20ab}@font-face{font-family:"Roboto Mono";font-style:normal;font-weight:300;font-display:swap;src:url('+Vo+') format("woff2");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:"Roboto Mono";font-style:normal;font-weight:300;font-display:swap;src:url('+Xo+') format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:"Roboto Mono";font-style:normal;font-weight:400;font-display:swap;src:url('+Zo+') format("woff2");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:"Roboto Mono";font-style:normal;font-weight:400;font-display:swap;src:url('+ot+') format("woff2");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:"Roboto Mono";font-style:normal;font-weight:400;font-display:swap;src:url('+tt+') format("woff2");unicode-range:U+0370-03ff}@font-face{font-family:"Roboto Mono";font-style:normal;font-weight:400;font-display:swap;src:url('+nt+') format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01a0-01a1,U+01af-01b0,U+1ea0-1ef9,U+20ab}@font-face{font-family:"Roboto Mono";font-style:normal;font-weight:400;font-display:swap;src:url('+et+') format("woff2");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:"Roboto Mono";font-style:normal;font-weight:400;font-display:swap;src:url('+at+') format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:"Roboto Mono";font-style:normal;font-weight:700;font-display:swap;src:url('+ft+') format("woff2");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:"Roboto Mono";font-style:normal;font-weight:700;font-display:swap;src:url('+it+') format("woff2");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:"Roboto Mono";font-style:normal;font-weight:700;font-display:swap;src:url('+lt+') format("woff2");unicode-range:U+0370-03ff}@font-face{font-family:"Roboto Mono";font-style:normal;font-weight:700;font-display:swap;src:url('+st+') format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01a0-01a1,U+01af-01b0,U+1ea0-1ef9,U+20ab}@font-face{font-family:"Roboto Mono";font-style:normal;font-weight:700;font-display:swap;src:url('+ct+') format("woff2");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:"Roboto Mono";font-style:normal;font-weight:700;font-display:swap;src:url('+pt+') format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}',""]),o.exports=po},256:function(o,t,n){o.exports=n.p+"fonts/Roboto-100-cyrillic-ext1.093374a.woff2"},257:function(o,t,n){o.exports=n.p+"fonts/Roboto-100-cyrillic2.43054aa.woff2"},258:function(o,t,n){o.exports=n.p+"fonts/Roboto-100-greek-ext3.39f6384.woff2"},259:function(o,t,n){o.exports=n.p+"fonts/Roboto-100-greek4.85ac611.woff2"},260:function(o,t,n){o.exports=n.p+"fonts/Roboto-100-vietnamese5.3931483.woff2"},261:function(o,t,n){o.exports=n.p+"fonts/Roboto-100-latin-ext6.26d59b6.woff2"},262:function(o,t,n){o.exports=n.p+"fonts/Roboto-100-latin7.25385d9.woff2"},263:function(o,t,n){o.exports=n.p+"fonts/Roboto-300-cyrillic-ext8.12d3704.woff2"},264:function(o,t,n){o.exports=n.p+"fonts/Roboto-300-cyrillic9.48e4b37.woff2"},265:function(o,t,n){o.exports=n.p+"fonts/Roboto-300-greek-ext10.04e0583.woff2"},266:function(o,t,n){o.exports=n.p+"fonts/Roboto-300-greek11.7c6b44c.woff2"},267:function(o,t,n){o.exports=n.p+"fonts/Roboto-300-vietnamese12.af9afdc.woff2"},268:function(o,t,n){o.exports=n.p+"fonts/Roboto-300-latin-ext13.a29236e.woff2"},269:function(o,t,n){o.exports=n.p+"fonts/Roboto-300-latin14.0109a2a.woff2"},270:function(o,t,n){o.exports=n.p+"fonts/Roboto-400-cyrillic-ext15.493afe7.woff2"},271:function(o,t,n){o.exports=n.p+"fonts/Roboto-400-cyrillic16.5e49381.woff2"},272:function(o,t,n){o.exports=n.p+"fonts/Roboto-400-greek-ext17.bb723e8.woff2"},273:function(o,t,n){o.exports=n.p+"fonts/Roboto-400-greek18.1cbfc63.woff2"},274:function(o,t,n){o.exports=n.p+"fonts/Roboto-400-vietnamese19.c0bec65.woff2"},275:function(o,t,n){o.exports=n.p+"fonts/Roboto-400-latin-ext20.c3dcdbd.woff2"},276:function(o,t,n){o.exports=n.p+"fonts/Roboto-400-latin21.4673b45.woff2"},277:function(o,t,n){o.exports=n.p+"fonts/Roboto-700-cyrillic-ext22.b816cda.woff2"},278:function(o,t,n){o.exports=n.p+"fonts/Roboto-700-cyrillic23.0334efc.woff2"},279:function(o,t,n){o.exports=n.p+"fonts/Roboto-700-greek-ext24.9674bc0.woff2"},280:function(o,t,n){o.exports=n.p+"fonts/Roboto-700-greek25.3292e83.woff2"},281:function(o,t,n){o.exports=n.p+"fonts/Roboto-700-vietnamese26.3096f18.woff2"},282:function(o,t,n){o.exports=n.p+"fonts/Roboto-700-latin-ext27.bcf37d6.woff2"},283:function(o,t,n){o.exports=n.p+"fonts/Roboto-700-latin28.0682ca7.woff2"},284:function(o,t,n){o.exports=n.p+"fonts/Roboto_Mono-100-cyrillic-ext29.6ab4180.woff2"},285:function(o,t,n){o.exports=n.p+"fonts/Roboto_Mono-100-cyrillic30.c331f15.woff2"},286:function(o,t,n){o.exports=n.p+"fonts/Roboto_Mono-100-greek31.48cd096.woff2"},287:function(o,t,n){o.exports=n.p+"fonts/Roboto_Mono-100-vietnamese32.2f4115e.woff2"},288:function(o,t,n){o.exports=n.p+"fonts/Roboto_Mono-100-latin-ext33.e25edac.woff2"},289:function(o,t,n){o.exports=n.p+"fonts/Roboto_Mono-100-latin34.683f4ea.woff2"},290:function(o,t,n){o.exports=n.p+"fonts/Roboto_Mono-300-cyrillic-ext35.6ab4180.woff2"},291:function(o,t,n){o.exports=n.p+"fonts/Roboto_Mono-300-cyrillic36.c331f15.woff2"},292:function(o,t,n){o.exports=n.p+"fonts/Roboto_Mono-300-greek37.48cd096.woff2"},293:function(o,t,n){o.exports=n.p+"fonts/Roboto_Mono-300-vietnamese38.2f4115e.woff2"},294:function(o,t,n){o.exports=n.p+"fonts/Roboto_Mono-300-latin-ext39.e25edac.woff2"},295:function(o,t,n){o.exports=n.p+"fonts/Roboto_Mono-300-latin40.683f4ea.woff2"},296:function(o,t,n){o.exports=n.p+"fonts/Roboto_Mono-400-cyrillic-ext41.6ab4180.woff2"},297:function(o,t,n){o.exports=n.p+"fonts/Roboto_Mono-400-cyrillic42.c331f15.woff2"},298:function(o,t,n){o.exports=n.p+"fonts/Roboto_Mono-400-greek43.48cd096.woff2"},299:function(o,t,n){o.exports=n.p+"fonts/Roboto_Mono-400-vietnamese44.2f4115e.woff2"},300:function(o,t,n){o.exports=n.p+"fonts/Roboto_Mono-400-latin-ext45.e25edac.woff2"},301:function(o,t,n){o.exports=n.p+"fonts/Roboto_Mono-400-latin46.683f4ea.woff2"},302:function(o,t,n){o.exports=n.p+"fonts/Roboto_Mono-700-cyrillic-ext47.6ab4180.woff2"},303:function(o,t,n){o.exports=n.p+"fonts/Roboto_Mono-700-cyrillic48.c331f15.woff2"},304:function(o,t,n){o.exports=n.p+"fonts/Roboto_Mono-700-greek49.48cd096.woff2"},305:function(o,t,n){o.exports=n.p+"fonts/Roboto_Mono-700-vietnamese50.2f4115e.woff2"},306:function(o,t,n){o.exports=n.p+"fonts/Roboto_Mono-700-latin-ext51.e25edac.woff2"},307:function(o,t,n){o.exports=n.p+"fonts/Roboto_Mono-700-latin52.683f4ea.woff2"},308:function(o,t,n){"use strict";n(183)},309:function(o,t,n){var e=n(55)(!1);e.push([o.i,".my-profile{display:flex;flex-direction:column}.my-profile__avatar{display:flex;justify-content:center;padding:40px 0;margin:0 0 20px}.my-profile__avatar img{width:120px;height:auto;border:1px solid transparent;border-radius:100%}.my-profile__role{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 20px;margin:0 0 20px}.my-profile__name,.my-profile__role-name{margin:0;padding:0}.my-profile__name{font-size:20px}.my-profile__role-name{color:var(--text-color-highlight-primary);font-size:14px;font-weight:300}.my-profile__social{display:flex;flex-direction:column;align-items:center}.my-profile__social-list{display:flex;flex-direction:row;list-style:none;margin:0;padding:0}.my-profile__social-item{margin:0;padding:0 10px}.my-profile__social-item a{font-size:28px;color:var(--text-color-primary)}@media (min-width:768px){.my-profile__avatar img{width:200px}.my-profile__role{font-size:32px}.my-profile__role-name{font-size:18px}}",""]),o.exports=e},310:function(o,t,n){"use strict";n(184)},311:function(o,t,n){var e=n(55)(!1);e.push([o.i,".navigation{display:flex;flex-direction:column;align-items:center}.navigation__sections{list-style:none;margin:0;padding:0}.navigation__section-item{margin:0;padding:5px 0}.navigation__section-item a{text-decoration:none;color:var(--text-color-primary);font-size:14px}.navigation__section-item a.active,.navigation__section-item a.nuxt-link-exact-active{color:var(--text-color-highlight-primary)}.navigation__languages{display:flex;flex-direction:row;list-style:none;margin:0;padding:10px 0}.navigation__language-item{padding:0 5px}.navigation__language-item img{width:28px;height:auto;border:1px solid transparent}.navigation__language-item>.active img,.navigation__language-item>.nuxt-link-exact-active img{border:1px solid var(--text-color-highlight-primary)}",""]),o.exports=e},312:function(o,t,n){"use strict";n(185)},313:function(o,t,n){var e=n(55)(!1);e.push([o.i,".copyright{display:flex;flex-direction:column;align-items:center}.copyright__text{font-size:12px;font-weight:100}",""]),o.exports=e},323:function(o,t){},369:function(o,t,n){"use strict";n.r(t);var e=n(0).a.extend({props:{name:{type:String,required:!0},role:{type:String,required:!0},avatar:{type:String,required:!0},socialLinks:{type:Array,default:function(){return[]}}}}),f=(n(308),n(32)),component=Object(f.a)(e,(function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",{staticClass:"my-profile"},[n("div",{staticClass:"my-profile__avatar"},[n("img",{attrs:{src:o.avatar,alt:o.name,title:o.name}})]),o._v(" "),n("div",{staticClass:"my-profile__role"},[n("h1",{staticClass:"my-profile__name"},[o._v(o._s(o.name))]),o._v(" "),n("h2",{staticClass:"my-profile__role-name"},[o._v(o._s(o.role))])]),o._v(" "),n("div",{staticClass:"my-profile__social"},[n("ul",{staticClass:"my-profile__social-list"},o._l(o.socialLinks,(function(o){return n("li",{key:o.label,staticClass:"my-profile__social-item"},[n("a",{attrs:{href:o.link,target:"_blank",rel:"noopener"}},[n("fa",{attrs:{icon:o.icon}})],1)])})),0)])])}),[],!1,null,null,null);t.default=component.exports},370:function(o,t,n){"use strict";n.r(t);var e=n(0).a.extend({props:{links:{type:Array,required:!0},languages:{type:Array,required:!0}},methods:{handleClickItem:function(o){this.$emit("click:link",o)}}}),f=(n(310),n(32)),component=Object(f.a)(e,(function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",{staticClass:"navigation"},[n("ul",{staticClass:"navigation__sections"},o._l(o.links,(function(link){return n("li",{key:link.label,staticClass:"navigation__section-item",on:{click:o.handleClickItem}},[n("NuxtLink",{attrs:{to:o.localePath(link.link)}},[o._v(o._s(link.label))])],1)})),0),o._v(" "),n("ul",{staticClass:"navigation__languages"},o._l(o.languages,(function(t){return n("li",{key:t.label,staticClass:"navigation__language-item",on:{click:o.handleClickItem}},[n("NuxtLink",{attrs:{to:o.switchLocalePath(t.code)}},[n("img",{attrs:{src:t.flag,alt:t.name,title:t.name}})])],1)})),0)])}),[],!1,null,null,null);t.default=component.exports},371:function(o,t,n){"use strict";n.r(t);var e=n(0).a.extend({data:function(){return{copyright:"© ".concat((new Date).getFullYear()," - Made with NuxtJS + StoryBlok")}}}),f=(n(312),n(32)),component=Object(f.a)(e,(function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",{staticClass:"copyright"},[n("p",{staticClass:"copyright__text"},[o._v(o._s(o.copyright))])])}),[],!1,null,null,null);t.default=component.exports}},[[207,13,1,14]]]);