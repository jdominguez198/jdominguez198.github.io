(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,3,6,8],{379:function(t,e,n){var content=n(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("55796fbd",content,!0,{sourceMap:!1})},380:function(t,e,n){var content=n(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("994b1712",content,!0,{sourceMap:!1})},381:function(t,e,n){var content=n(392);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("b3d37040",content,!0,{sourceMap:!1})},382:function(t,e,n){var content=n(394);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("4c731a3c",content,!0,{sourceMap:!1})},387:function(t,e,n){"use strict";n(379)},388:function(t,e,n){var l=n(57)(!1);l.push([t.i,'.about-me__description{font-family:"Roboto",sans-serif;font-weight:300;font-size:18px;white-space:pre-line}.about-me__highlights{display:flex;flex-direction:column}.about-me__highlights ul{display:grid;grid-template-columns:1fr;grid-row-gap:20px;row-gap:20px;list-style:none;margin:0;padding:0}.about-me__highlights ul li{margin:0;padding:0;font-weight:100}.about-me__highlights ul li strong{font-weight:400;color:var(--text-color-highlight-primary);margin:0 10px 0 0}@media (min-width:768px){.about-me__highlights ul{grid-template-columns:1fr 1fr 1fr}}',""]),t.exports=l},389:function(t,e,n){"use strict";n(380)},390:function(t,e,n){var l=n(57)(!1);l.push([t.i,'.timeline__list{display:flex;flex-direction:column;list-style:none;padding:0 10px;margin:0}.event{position:relative;padding:10px 15px 10px 25px;margin:0}.event__line{position:absolute;top:0;left:0;bottom:0;border-left:1px solid var(--text-color-highlight-primary)}.event__line:before{position:absolute;top:13px;left:-9px;content:" ";height:15px;width:15px;border:1px solid var(--text-color-highlight-primary);border-radius:15px;background:var(--background-color-inner-primary);transition:all .25s ease-in-out}.event__date{position:absolute;top:13px;left:25px;white-space:nowrap;font-size:12px;font-weight:100}.event__title{position:relative;font-weight:400;margin:25px 0 0}.event__subtitle{font-weight:100;font-size:14px;color:var(--text-color-highlight-primary)}.event__content{font-family:"Roboto",sans-serif;font-weight:300;font-size:18px}.event:hover{cursor:pointer}.event:hover .event__line:before{background:var(--text-color-highlight-primary)}.child-event{display:flex;flex-direction:column;margin:10px 0}.child-event__title{font-weight:300;color:var(--text-color-highlight-primary)}.child-event__subtitle{font-weight:100;font-size:14px}.child-event__extra{display:flex;flex-direction:column;padding:5px 0}.child-event__content{padding:10px 0;font-family:"Roboto",sans-serif;font-weight:300;font-size:18px;white-space:pre-line}@media (min-width:768px){.event{padding:10px 15px 10px 150px}.event__line{left:130px}.event__date{left:-140px}.event__title{margin:0}}',""]),t.exports=l},391:function(t,e,n){"use strict";n(381)},392:function(t,e,n){var l=n(57)(!1);l.push([t.i,'.stack{display:flex;flex:0;flex-direction:row;align-items:center;background:#444;padding:5px 10px;margin:0 0 5px;border-radius:5px}.stack-container{display:flex;flex-direction:row;flex-wrap:wrap}.stack__icon{color:var(--text-color-highlight-primary)}.stack__label{font-size:12px;font-family:"Roboto",sans-serif;font-weight:300;margin:0 0 0 5px;white-space:nowrap}.stack+.stack{margin:0 0 5px 5px}',""]),t.exports=l},393:function(t,e,n){"use strict";n(382)},394:function(t,e,n){var l=n(57)(!1);l.push([t.i,".certificates__list{display:grid;grid-template-columns:1fr}.certificate{display:flex;flex-direction:column;border:1px solid #444;border-radius:10px;margin:0 0 20px}.certificate__title{font-weight:300;padding:10px 15px;background:#444;border-top-left-radius:10px;border-top-right-radius:10px}.certificate__subtitle{font-weight:300;font-size:14px;padding:10px 15px}.certificate__date{font-weight:100;font-size:12px;padding:10px 15px;text-align:right}@media (min-width:768px){.certificates__list{grid-template-columns:1fr 1fr;grid-column-gap:20px}}",""]),t.exports=l},400:function(t,e,n){"use strict";n.r(e);var l=n(0).a.extend({props:{description:{type:String,required:!0},highlights:{type:Array,default:function(){return[]}}}}),c=(n(387),n(34)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-me"},[n("p",{staticClass:"about-me__description"},[t._v(t._s(t.description))]),t._v(" "),t.highlights.length>0?n("div",{staticClass:"about-me__highlights"},[n("ul",t._l(t.highlights,(function(e){return n("li",{key:e.label},[n("strong",[n("fa",{attrs:{icon:e.icon}}),t._v(" "+t._s(e.label)+":")],1),t._v(t._s(e.value))])})),0)]):t._e()])}),[],!1,null,null,null);e.default=component.exports},401:function(t,e,n){"use strict";n.r(e);var l=n(0).a.extend({props:{items:{type:Array,required:!0}}}),c=(n(389),n(34)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timeline"},[n("ul",{staticClass:"timeline__list"},t._l(t.items,(function(e){return n("li",{key:e.date+"_"+e.title,staticClass:"timeline__item"},[n("div",{staticClass:"event"},[n("div",{staticClass:"event__line"},[n("div",{staticClass:"event__date"},[t._v(t._s(e.date))])]),t._v(" "),n("div",{staticClass:"event__title"},[t._v(t._s(e.title))]),t._v(" "),e.subtitle?n("div",{staticClass:"event__subtitle"},[t._v(t._s(e.subtitle))]):t._e(),t._v(" "),e.description?n("div",{staticClass:"event__content"},[n("p",[t._v(t._s(e.description))])]):t._e(),t._v(" "),e.children&&e.children.length&&e.children.length>0?n("div",{staticClass:"event__children"},t._l(e.children,(function(e){return n("div",{key:e.title+"_"+e.subtitle,staticClass:"child-event"},[n("div",{staticClass:"child-event__title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"child-event__subtitle"},[t._v(t._s(e.subtitle))]),t._v(" "),n("div",{staticClass:"child-event__extra"},[t._t("child-event-extra",null,null,{child:e})],2),t._v(" "),n("div",{staticClass:"child-event__content"},[t._v(t._s(e.description))])])})),0):t._e()])])})),0)])}),[],!1,null,null,null);e.default=component.exports},402:function(t,e,n){"use strict";n.r(e);var l=n(0).a.extend({props:{items:{type:Array,required:!0}}}),c=(n(391),n(34)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stack-container"},t._l(t.items,(function(e){return n("div",{key:e.label,staticClass:"stack"},[e.icon?n("fa",{staticClass:"stack__icon",attrs:{icon:["fab",e.icon]}}):t._e(),t._v(" "),n("span",{staticClass:"stack__label"},[t._v(t._s(e.label))])],1)})),0)}),[],!1,null,null,null);e.default=component.exports},403:function(t,e,n){"use strict";n.r(e);var l=n(0).a.extend({props:{items:{type:Array,required:!0}}}),c=(n(393),n(34)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"certificates"},[n("div",{staticClass:"certificates__list"},t._l(t.items,(function(e){return n("div",{key:e.title,staticClass:"certificate"},[n("div",{staticClass:"certificate__title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"certificate__subtitle"},[t._v(t._s(e.subtitle))]),t._v(" "),n("div",{staticClass:"certificate__date"},[t._v(t._s(e.date))])])})),0)])}),[],!1,null,null,null);e.default=component.exports},408:function(t,e,n){"use strict";n.r(e);var l=n(4),c=(n(19),n(39),n(35),n(0)),o=(n(47),function(content){var t=content.about_me_title,e=content.about_me_title_icon,n=content.about_me_description,l=content.about_me_highlights,c=content.education_title,o=content.education_title_icon,r=content.education_timeline,d=content.experience_title,_=content.experience_title_icon,f=content.experience_timeline,h=content.certificates_title,v=content.certificates_title_icon,x=content.certificates_items;return{aboutMeTitle:t,aboutMeTitleIcon:e,aboutMeDescription:n,aboutMeHighlights:l,educationTitle:c,educationTitleIcon:o,educationTimeline:r[0].content.map((function(t){return{id:t._uid,date:t.date,title:t.title,subtitle:t.subtitle}})),experienceTitle:d,experienceTitleIcon:_,experienceTimeline:f[0].content.map((function(t){return{id:t._uid,date:t.date,title:t.title,children:t.children.map((function(t){return{id:t._uid,title:t.title,subtitle:t.subtitle,description:t.description,stack:t.extra.map((function(t){return{id:t._uid,label:t.label,icon:t.icon}}))}}))}})),certificatesTitle:h,certificatesTitleIcon:v,certificatesItems:x.map((function(t){return{id:t._uid,title:t.title,subtitle:t.subtitle,date:t.date}}))}}),r=c.a.extend({asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query._storyblok||t.isDev?"draft":"published",e.prev=1,e.next=4,t.app.$storyapi.get("cdn/stories/resume",{version:n,language:t.app.i18n.locale});case 4:return l=e.sent,c=o(l.data.story.content),e.abrupt("return",{pageEditable:{content:{_editable:l.data.story.content._editable}},pageID:l.data.story.id,aboutMe:{title:c.aboutMeTitle,titleIcon:c.aboutMeTitleIcon,description:c.aboutMeDescription,highlights:c.aboutMeHighlights},education:{title:c.educationTitle,titleIcon:c.educationTitleIcon,timeline:c.educationTimeline},experience:{title:c.experienceTitle,titleIcon:c.experienceTitleIcon,timeline:c.experienceTimeline},certificates:{title:c.certificatesTitle,titleIcon:c.certificatesTitleIcon,items:c.certificatesItems}});case 9:e.prev=9,e.t0=e.catch(1),console.error("SBERROR: ",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},data:function(){return{pageID:null,pageEditable:null,aboutMe:{title:"",titleIcon:null,description:"",highlights:[]},education:{title:"",titleIcon:null,timeline:[]},experience:{title:"",titleIcon:null,timeline:[]},certificates:{title:"",titleIcon:null,items:[]}}},mounted:function(){var t=this;"published"!==(this.$route.query._storyblok||this.isDev?"draft":"published")&&this.$storybridge((function(){(new StoryblokBridge).on(["input","published","change"],(function(e){if("input"===e.action){if(e.story.id===t.pageID){var n=o(e.story.content);t.aboutMe.title=n.aboutMeTitle,t.aboutMe.titleIcon=n.aboutMeTitleIcon,t.aboutMe.description=n.aboutMeDescription,t.aboutMe.highlights=n.aboutMeHighlights,t.education.title=n.educationTitle,t.education.titleIcon=n.educationTitleIcon,t.education.timeline=n.educationTimeline,t.experience.title=n.experienceTitle,t.experience.titleIcon=n.experienceTitleIcon,t.experience.timeline=n.experienceTimeline,t.certificates.title=n.certificatesTitle,t.certificates.titleIcon=n.certificatesTitleIcon,t.certificates.items=n.certificatesItems}}else t.$nuxt.$router.go({path:t.$nuxt.$router.currentRoute,force:!0})}))}),(function(t){console.error(t)}))}}),d=n(34),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"content__wrapper box-container"},[n("section",{staticClass:"section section__about-me"},[n("h3",{staticClass:"section__title"},[t.aboutMe.titleIcon?n("fa",{attrs:{icon:["fas",t.aboutMe.titleIcon]}}):t._e(),t._v("\n        "+t._s(t.aboutMe.title)+"\n      ")],1),t._v(" "),n("AboutMe",{attrs:{description:t.aboutMe.description,highlights:t.aboutMe.highlights}})],1),t._v(" "),n("section",{staticClass:"section section__education"},[n("h3",{staticClass:"section__title"},[t.education.titleIcon?n("fa",{attrs:{icon:["fas",t.education.titleIcon]}}):t._e(),t._v("\n        "+t._s(t.education.title)+"\n      ")],1),t._v(" "),n("Timeline",{attrs:{items:t.education.timeline}})],1),t._v(" "),n("section",{staticClass:"section section__experience"},[n("h3",{staticClass:"section__title"},[t.experience.titleIcon?n("fa",{attrs:{icon:["fas",t.experience.titleIcon]}}):t._e(),t._v("\n        "+t._s(t.experience.title)+"\n      ")],1),t._v(" "),n("Timeline",{attrs:{items:t.experience.timeline},scopedSlots:t._u([{key:"child-event-extra",fn:function(t){var e=t.child;return[n("Stack",{attrs:{items:e.stack}})]}}])})],1),t._v(" "),n("section",{staticClass:"section section__certificates"},[n("h3",{staticClass:"section__title"},[t.certificates.titleIcon?n("fa",{attrs:{icon:["fas",t.certificates.titleIcon]}}):t._e(),t._v("\n        "+t._s(t.certificates.title)+"\n      ")],1),t._v(" "),n("Certificates",{attrs:{items:t.certificates.items}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AboutMe:n(400).default,Timeline:n(401).default,Stack:n(402).default,Certificates:n(403).default})}}]);