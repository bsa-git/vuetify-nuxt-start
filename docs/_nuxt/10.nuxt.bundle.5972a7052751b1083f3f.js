webpackJsonp([10],{1e3:function(t,e,s){var r=s(97)(s(855),s(1140),null,null);t.exports=r.exports},1093:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-title text-xs-center"},[s("div",{staticClass:"headline"},[t._v(t._s(t.title))]),s("div",{staticClass:"subheading"},[t._v(t._s(t.description))])]),s("carousel-default",{attrs:{theme:t.theme}}),s("carousel-custom-transition",{attrs:{theme:t.theme}}),s("carousel-custom-delimiter",{attrs:{theme:t.theme}})],1)},staticRenderFns:[]}},1140:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[s("v-card",{attrs:{id:"carousel-view-3",hover:"",raised:""}},[s("v-toolbar",{class:t.theme.base,attrs:{dark:""}},[s("v-toolbar-title",[t._v("#3 Custom delimiter")])],1),s("v-card-text",{staticClass:"body-2 secondary--text"},[s("blockquote",[t._v("\n                    You can also change the icon for the carousel delimiter.\n                ")])],1),s("div",{staticClass:"ma-3"},[s("v-carousel",{attrs:{icon:"stop"}},t._l(t.items,function(t,e){return s("v-carousel-item",{key:e,attrs:{src:t.src}})}))],1),s("br")],1)],1)],1)},staticRenderFns:[]}},1154:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[s("v-card",{attrs:{id:"carousel-view-1",hover:"",raised:""}},[s("v-toolbar",{class:t.theme.base,attrs:{dark:""}},[s("v-toolbar-title",[t._v("#1 Default")])],1),s("v-card-text",{staticClass:"body-2 secondary--text"},[s("blockquote",[t._v("\n                    A carousel by default has a slide transition.\n                ")])],1),s("div",{staticClass:"ma-3"},[s("v-carousel",t._l(t.items,function(t,e){return s("v-carousel-item",{key:e,attrs:{src:t.src}})}))],1),s("br")],1)],1)],1)},staticRenderFns:[]}},1198:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[s("v-card",{attrs:{id:"carousel-view-2",hover:"",raised:""}},[s("v-toolbar",{class:t.theme.base,attrs:{dark:""}},[s("v-toolbar-title",[t._v("#2 Custom transition")])],1),s("v-card-text",{staticClass:"body-2 secondary--text"},[s("blockquote",[t._v("\n                    You can also apply your own custom transition.\n                ")])],1),s("div",{staticClass:"ma-3"},[s("v-carousel",t._l(t.items,function(t,e){return s("v-carousel-item",{key:e,attrs:{src:t.src,transition:"v-fade-transition",reverseTransition:"v-fade-transition"}})}))],1),s("br")],1)],1)],1)},staticRenderFns:[]}},1200:function(t,e,s){var r=s(963);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);s(141)("64b97571",r,!0)},1223:function(t,e,s){var r=s(986);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);s(141)("10dc36cb",r,!0)},826:function(t,e,s){s(1200);var r=s(97)(s(941),s(1093),"data-v-121890ff",null);t.exports=r.exports},853:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["theme"],data:function(){return{items:[{src:"/vuetify-nuxt-start/img/doc/carousel/squirrel.jpg"},{src:"/vuetify-nuxt-start/img/doc/carousel/sky.jpg"},{src:"/vuetify-nuxt-start/img/doc/carousel/bird.jpg"},{src:"/vuetify-nuxt-start/img/doc/carousel/planet.jpg"}]}}}},854:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["theme"],data:function(){return{items:[{src:"/vuetify-nuxt-start/img/doc/carousel/squirrel.jpg"},{src:"/vuetify-nuxt-start/img/doc/carousel/sky.jpg"},{src:"/vuetify-nuxt-start/img/doc/carousel/bird.jpg"},{src:"/vuetify-nuxt-start/img/doc/carousel/planet.jpg"}]}}}},855:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["theme"],data:function(){return{items:[{src:"/vuetify-nuxt-start/img/doc/carousel/squirrel.jpg"},{src:"/vuetify-nuxt-start/img/doc/carousel/sky.jpg"},{src:"/vuetify-nuxt-start/img/doc/carousel/bird.jpg"},{src:"/vuetify-nuxt-start/img/doc/carousel/planet.jpg"}]}}}},941:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(75),a=s(998),o=s.n(a),i=s(999),n=s.n(i),c=s(1e3),l=s.n(c);e.default={components:{CarouselDefault:o.a,CarouselCustomTransition:n.a,CarouselCustomDelimiter:l.a},data:function(){return{title:"Components - Carousels",description:'The "v-carousel" component is used to display large numbers of visual content on a rotating timer.'}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description}],link:[]}},fetch:function(t){var e=t.store,s=t.error;try{e.commit("SET_THEME","comp")}catch(t){s(t)}},computed:s.i(r.mapGetters)({theme:"getTheme"})}},963:function(t,e,s){e=t.exports=s(98)(void 0),e.push([t.i,".layout[data-v-121890ff]{margin-bottom:16px}",""])},986:function(t,e,s){e=t.exports=s(98)(void 0),e.push([t.i,"#carousel-view-2 .fade-transition-enter-active[data-v-f97d95c4],#carousel-view-2 .fade-transition-leave-active[data-v-f97d95c4],#carousel-view-2 .fade-transition-leave-to[data-v-f97d95c4]{transition:2s ease-out;position:absolute;top:0;left:0}#carousel-view-2 .fade-transition-enter[data-v-f97d95c4],#carousel-view-2 .fade-transition-leave-to[data-v-f97d95c4],#carousel-view-2 .fade-transition-leave[data-v-f97d95c4]{opacity:0}",""])},998:function(t,e,s){var r=s(97)(s(853),s(1154),null,null);t.exports=r.exports},999:function(t,e,s){s(1223);var r=s(97)(s(854),s(1198),"data-v-f97d95c4",null);t.exports=r.exports}});