(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{210:function(t,e,o){"use strict";var n=o(1),r=o(211);n.a.use(r.a),e.a=function(t){var e=t.app,n=t.store;e.i18n=new r.a({locale:n.state.locale,fallbackLocale:"zh",messages:{zh:o(488)}})}},212:function(t,e,o){"use strict";var n={install:function(t){t.prototype.$bus=new t}};o(1).a.use(n)},213:function(t,e,o){"use strict";var i,s,n,r,a,c;i=window,s=document,n="script",r="ga",i.GoogleAnalyticsObject=r,i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date,a=s.createElement(n),c=s.getElementsByTagName(n)[0],a.async=1,a.src="https://www.google-analytics.com/analytics.js",c.parentNode.insertBefore(a,c),ga("create","UA-XXXXXXXXX-X","auto"),e.a=function(t){var e=t.app.router;t.store;e.afterEach((function(t,e){ga("set","page",t.fullPath),ga("send","pageview")}))}},214:function(t,e,o){"use strict";o(39),o(26),o(54),o(60);e.a=function(t){var e=t.app,o=t.store;e.router.beforeEach((function(t,n,r){var c=null,l=localStorage.getItem("locale");if(l)c=l;else{var _=navigator.language.replace("-","_").toLowerCase().split("_")[0];c=e.i18n.availableLocales.includes(_)?_:e.i18n.fallbackLocale,localStorage.setItem("locale",c)}o.commit("SET_LANG",c),e.i18n.locale=o.state.locale;var d=!1,f=localStorage.getItem("dark");f?d=f:localStorage.setItem("dark",d),o.commit("SET_DARK",d),r()}))}},274:function(t,e,o){},279:function(t,e,o){},305:function(t,e,o){"use strict";var n=o(500),r=o(509),c=o(502),l=o(306),_=o(505),d=o(501),f=o(506),v=o(204),h=o(165),m=o(202),w=o(128),k=o(203),y=o(61),x=o(504),$=o(507),S=o(503),E=o(300),N=o(508),T=o(69),A={data:function(){return{icons:{apps:T.b,code_tags:T.f,brightness:T.c,translate:T.p,github:T.h,newspaper:T.i,alpha_b_box:T.a,play_list_star:T.k,account:T.g},drawer:!1,fixed:!1}},computed:{current_locale:function(){return this.$i18n.locale}},mounted:function(){this.$vuetify.theme.dark="true"===this.$store.state.dark,window.innerWidth>=1024&&(this.drawer=!0)},methods:{switch_dark:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,this.$store.commit("SET_DARK",this.$vuetify.theme.dark)},switch_lang:function(t){console.log("switching to "+t),this.$store.commit("SET_LANG",t),this.$i18n.locale=t}},head:function(){return{htmlAttrs:{lang:this.current_locale}}}},I=(o(404),o(102)),component=Object(I.a)(A,(function(){var t=this,e=t._self._c;return e(n.a,[e($.a,{staticClass:"elevation-3",attrs:{"mobile-breakpoint":1024,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(m.a,{staticStyle:{"padding-top":"0"}},[e(w.a,{attrs:{to:"/",router:"",exact:"",dense:""}},[e(k.a,[e(v.a,[t._v(t._s(t.icons.apps))])],1),t._v(" "),e(y.a,[e(y.b,[t._v(t._s(t.$t("site.index")))])],1)],1),t._v(" "),t._l(t.$t("navigator.items"),(function(o,i){return e(w.a,{key:i,attrs:{href:o.to,target:"_blank",rel:"noreferrer",router:"",exact:"",dense:""}},[e(k.a,[e(h.a,{staticStyle:{width:"24px"},attrs:{src:o.icon}})],1),t._v(" "),e(y.a,[e(y.b,[t._v(t._s(o.title))])],1)],1)}))],2),t._v(" "),e(d.a),t._v(" "),e(m.a,[e(w.a,{attrs:{dense:"",to:"/about",router:"",exact:""}},[e(k.a,[e(v.a,[t._v(t._s(t.icons.code_tags))])],1),t._v(" "),e(y.a,[e(y.b,[t._v(t._s(t.$t("site.about")))])],1)],1)],1)],1),t._v(" "),e(r.a,{staticClass:"primary white--text",attrs:{dense:"",app:""}},[e(c.a,{staticClass:"white--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),e(E.a,[t._v(t._s(t.$t("site.title")))]),t._v(" "),e(h.a,{staticStyle:{"max-width":"24px","margin-left":"6px"},attrs:{src:"/icon.png"}}),t._v(" "),e(S.a),t._v(" "),e(N.a,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(o){var n=o.on;return[e(l.a,t._g({staticClass:"white--text",attrs:{icon:""},on:{click:function(e){return t.switch_dark()}}},n),[e(v.a,[t._v(t._s(t.icons.brightness))])],1)]}}])},[t._v(" "),e("span",[t._v(t._s(t.$t("site.switch_dark_mode")))])])],1),t._v(" "),e(x.a,[e(_.a,{staticClass:"page"},[e("nuxt")],1),t._v(" "),e(f.a,{staticClass:"footer",attrs:{fixed:!1}},[e("div",[e("div",{staticStyle:{"vertical-align":"middle"}},[e("span",[t._v("© "+t._s((new Date).getFullYear())+" ")]),t._v(" "),e("span",[e("a",{attrs:{href:t.$t("site.footer.author_link"),target:"_blank",rel:"noreferrer"}},[t._v("\n              "+t._s(t.$t("site.footer.author"))+"\n            ")])]),t._v(" "),"no_display"===t.$t("site.footer.repo_link")?e(l.a,{staticStyle:{"vertical-align":"middle"},attrs:{icon:"",href:t.$t("site.footer.repo_link"),target:"_blank",rel:"noreferrer"}},[e(v.a,[t._v(t._s(t.icons.github))])],1):t._e()],1),t._v(" "),e("div",[e("p",[t._v(t._s(t.$t("site.footer.content")))])])])])],1)],1)}),[],!1,null,null,null);e.a=component.exports},314:function(t,e,o){t.exports=o(315)},374:function(t,e,o){"use strict";o(274)},404:function(t,e,o){"use strict";o(279)},405:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return n})),o.d(e,"mutations",(function(){return r}));o(39),o(54);var n=function(){return{locales:["en","ja","zh"],locale:"zh",dark:!1}},r={SET_LANG:function(t,e){t.locales.includes(e)&&(t.locale=e,localStorage.setItem("locale",t.locale))},SET_DARK:function(t,e){t.dark=e,localStorage.setItem("dark",t.dark)}}},488:function(t){t.exports=JSON.parse('{"site":{"title":"【魯尼按鈕】","description":"就只是個犬天使按鈕網站","keywords":"VTuber VoiceButton 祈iruni 魯尼","url":"https://iruni.natsumoe.com","social_image":"","index":"首頁","links":"友情鏈接","about":"關於","switch_dark_mode":"夜間模式開關","footer":{"author":"夏目","author_link":"https://beta.natsumoe.com","repo_link":"https://github.com/kujyonatsume/iruni","content":"本站為愛好者作品，和祈Iruni跟子午計畫沒有關聯，其餘資訊請查看\\"關於\\"頁面"}},"control":{"self":"播放控制","pick_one":"幫我選一個","stop":"停止","enabled":"開啟","disabled":"關閉","overlap":"重疊播放","random":"隨機播放","repeat":"洗腦循環","full_name":"魯尼","overlap_title":"魯尼"},"navigator":{"items":[{"icon":"/img/twitch-fill.svg","title":"Twitch","to":"https://www.twitch.tv/iruni_ianvs"},{"icon":"/img/youtube-fill.svg","title":"YouTube","to":"https://www.youtube.com/@IruniIanvs"},{"icon":"/img/twitter-fill.svg","title":"Twitter","to":"https://x.com/iruni_ianvs"},{"icon":"/img/facebook-fill.svg","title":"Facebook","to":"https://www.facebook.com/iruniianvs"},{"icon":"/img/instagram-fill.svg","title":"Instagram","to":"https://www.instagram.com/iruni_ianvs"}]}}')},81:function(t,e,o){"use strict";var n=o(500),r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(o(374),o(102)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e(n.a,[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"39ae9f7d",null);e.a=component.exports}},[[314,4,1,5]]]);