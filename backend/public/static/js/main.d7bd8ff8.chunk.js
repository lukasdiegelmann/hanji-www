(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,n){e.exports={"hover-button":"HoverButton_hover-button__3bQSk","hover-button__text-container":"HoverButton_hover-button__text-container__2MP4Z","hover-button__text":"HoverButton_hover-button__text__1B2Yv","hover-button__title-container":"HoverButton_hover-button__title-container__3TChg","hover-button__title":"HoverButton_hover-button__title__1apMK","hover-button__click-container":"HoverButton_hover-button__click-container__2e_Q4","hover-button__click__door":"HoverButton_hover-button__click__door__3LgYV"}},285:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),o=n.n(r),c=n(47),i=n.n(c),s=n(29),l=Object(s.b)({name:"navbarIndicator",initialState:{isLoading:!1},reducers:{setIsLoading:function(e,t){var n=t.payload;e.isLoading=n}}}),u=n(37),d=Object(s.b)({name:"skeleton",initialState:{data:{commands:{}}},reducers:{updateCommands:function(e,t){var n=t.payload;e.data.commands=n}}}),f=Object(s.a)({reducer:{navbarIndicator:l.reducer,player:u.a.reducer,skeleton:d.reducer}}),b=n(28);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=n(36),v=n(9),h=n(13),m=n(89),p=n.n(m),j=n(35),O=n(65),x=n(25),g=n.n(x),y=Object(v.g)((function(e){var t,n,o,c,i=Object(r.useRef)(null),s=Object(j.a)({hoverButton:{cursor:(null===(t=e.appearance)||void 0===t?void 0:t.crosshaired)?"crosshair":"default",backgroundColor:(null===(n=e.appearance)||void 0===n?void 0:n.inverted)?"white":"#141414"},hoverButtonText:{fontSize:"0px",textDecoration:"".concat((null===(o=e.appearance)||void 0===o?void 0:o.underlined)?"underline":"none"),letterSpacing:"0px",marginRight:"0px",color:(null===(c=e.appearance)||void 0===c?void 0:c.inverted)?"#141414":"white"},hoverButtonTitle:{filter:"opacity(0%)",fontSize:"0px"},hoverButtonClickLeft:{transform:"translate3d(calc(-100% - 1px), 0, 0)"},hoverButtonClickRight:{transform:"translate3d(calc(100% + 1px), 0, 0)"}}),l=Object(r.useCallback)((function(){s.set([{__id:"0:0",__tOffset:0,hoverButtonClickLeft:{transform:"translate3d(-49%, 0, 0)"},hoverButtonClickRight:{transform:"translate3d(49%, 0, 0)"}},{__id:"0:1",__tOffset:700,hoverButtonTitle:{filter:"opacity(100%)"}},{__id:"0:2",__tOffset:600,__middleware:function(){e.to&&e.history.push(e.to)},hoverButtonTitle:{filter:"opacity(0%)"}},{__id:"0:3",__tOffset:400,hoverButtonClickLeft:{transform:"translate3d(calc(-100% - 1px), 0, 0)"},hoverButtonClickRight:{transform:"translate3d(calc(100% + 1px), 0, 0)"}}],{isSafe:!0})}),[s,e.history,e.to]);return Object(O.a)([{ref:i,orientation:{width:1920,height:1080},options:{scalar:80},handle:function(t){var n;s.set({hoverButtonText:{fontSize:"".concat(t,"px"),letterSpacing:(null===(n=e.appearance)||void 0===n?void 0:n.letterspacing)?"".concat(.7*t,"px"):"0px",marginRight:"-".concat(.7*t,"px")}})}},{ref:i,orientation:{width:1920,height:1080},options:{scalar:140},handle:function(e){s.set({hoverButtonTitle:{fontSize:"".concat(e,"px")}})}}]),Object(r.useEffect)((function(){return function(){s.clear("0")}}),[]),Object(a.jsxs)("div",{ref:i,className:g.a["hover-button"],style:s.get().hoverButton,onClick:l,children:[Object(a.jsx)("div",{className:g.a["hover-button__text-container"],children:Object(a.jsx)("b",{className:g.a["hover-button__text"],style:s.get().hoverButtonText,children:e.text})}),Object(a.jsx)("div",{className:g.a["hover-button__title-container"],children:Object(a.jsx)("b",{className:g.a["hover-button__title"],style:s.get().hoverButtonTitle,children:e.title})}),Object(a.jsxs)("div",{className:g.a["hover-button__click-container"],children:[Object(a.jsx)("div",{className:g.a["hover-button__click__door"],style:s.get().hoverButtonClickLeft}),Object(a.jsx)("div",{className:g.a["hover-button__click__door"],style:s.get().hoverButtonClickRight})]})]})})),k=n(90),w=n(51),I=n.n(w),N=function(e){return Object(a.jsxs)("div",{className:I.a.message,children:[Object(a.jsx)(p.a,{id:I.a.message__particles,options:k}),e.content?Object(a.jsx)("div",{className:I.a.message__content,children:Object(a.jsx)(y,Object(h.a)(Object(h.a)({},e.content),{},{appearance:{letterspacing:!0}}))}):null]})},C=n(21),T=n.n(C),S=n(59),B=n(91),z=n(26),M=function(e){return Object(a.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"".concat(e.size,"px"),width:"".concat(e.size,"px"),border:"".concat(e.size/18,"px black solid"),backgroundColor:"white"},children:Object(a.jsx)("b",{style:{fontSize:"".concat(e.size/1.8,"px"),fontFamily:"Source Han Serif Heavy"},children:"\u30dc"})})},R=n(50),E=n(92),P=n.n(E),A=function(e){var t=new Image;return new Promise((function(n){t.onload=function(){return n(t)},t.src=e}))},L=function(){var e=Object(S.a)(T.a.mark((function e(t,n){var r,o,c,i;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.width=200,t.height=200,r=t.getContext("2d"),o='\n    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">\n        <foreignObject width="100%" height="100%">\n            <div xmlns="http://www.w3.org/1999/xhtml">'.concat(Object(B.renderToStaticMarkup)(Object(a.jsx)(n,{})),"</div>\n        </foreignObject>\n    </svg>"),c="data:image/svg+xml;charset=utf8,".concat(encodeURIComponent(o)),e.next=7,A(c);case 7:i=e.sent,null===r||void 0===r||r.drawImage(i,0,0);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),D=Object(b.b)((function(e){return{isLoading:e.navbarIndicator.isLoading}}))((function(e){var t=Object(R.a)(),n=Object(r.useRef)(null),o=Object(r.useCallback)(Object(S.a)(T.a.mark((function r(){var o,c,i,s,l,u,d,f,b,_,v,h;return T.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n.current){r.next=29;break}return o=n.current.clientWidth,c=n.current.clientHeight,i=new z.g,(s=new z.h({alpha:!0,antialias:!0})).setSize(o,c),s.setPixelRatio(window.devicePixelRatio),n.current.appendChild(s.domElement),90,l=o/c,.1,1e3,(u=new z.e(90,l,.1,1e3)).position.z=5,(d=new z.f(16777215,1,200)).position.set(10,10,10),i.add(d),f=document.createElement("canvas"),r.next=20,L(f,(function(){return Object(a.jsx)(M,{size:180})}));case 20:return b=new z.b(f),_=new z.a(3,3,3),v=new z.d({map:b}),h=new z.c(_,v),i.add(h),function t(){requestAnimationFrame(t),e.isLoading?(h.rotation.x+=Math.PI/100,h.rotation.y+=Math.PI/100):(h.rotation.x+=Math.PI/380,h.rotation.y+=Math.PI/380),s.render(i,u)}(),t.add((function(){s.domElement.remove()})),r.abrupt("return",{renderer:s,camera:u});case 29:case"end":return r.stop()}}),r)}))),[e.isLoading,t]),c=Object(r.useCallback)((function(e){return function(){if(n.current){var t=n.current.clientWidth,a=n.current.clientHeight;e.renderer.setSize(t,a),e.camera.aspect=t/a,e.camera.updateProjectionMatrix()}}}),[]);return Object(r.useEffect)((function(){return o().then((function(e){if(e){var n=c(e);window.addEventListener("resize",n),t.add((function(){return window.removeEventListener("resize",n)}))}})),t.exec}),[o,t,c]),Object(a.jsx)("div",{ref:n,className:P.a["navbar-indicator"]})})),H=n(64),V=n(34),q=n.n(V),J=function(){var e=Object(j.a)({navbarChildren:{transform:"translate3d(0, 100%, 0)"},navbarIndicator:{transform:"translate3d(0, 0, 0)"}}),t=Object(r.useMemo)((function(){return[{text:"docs",title:"\u672c",to:"/docs"},{text:"setup",title:"\u5099",to:"/setup"},{text:"contribute",title:"\u8cc7",to:"/contribute"}]}),[]);return Object(a.jsxs)("div",{className:q.a.navbar,onMouseEnter:function(){e.set({navbarChildren:{transform:"translate3d(0, 0, 0)"},navbarIndicator:{transform:"translate3d(0, -100%, 0)"}})},onMouseLeave:function(){e.set({navbarChildren:{transform:"translate3d(0, 100%, 0)"},navbarIndicator:{transform:"translate3d(0, 0, 0)"}})},children:[Object(a.jsx)("div",{className:q.a.navbar__indicator,style:e.get().navbarIndicator,children:Object(a.jsx)(D,{})}),Object(a.jsx)("div",{className:q.a.navbar__children,style:e.get().navbarChildren,children:t.map((function(e,t){return Object(a.jsx)("div",{className:q.a.navbar__child,children:Object(a.jsx)("div",{className:q.a.navbar_child_viewport,children:Object(a.jsx)(H.a,Object(h.a)(Object(h.a)({},e),{},{children:Object(a.jsx)(y,Object(h.a)(Object(h.a)({},e),{},{appearance:{crosshaired:!0,letterspacing:!0}}))}))})},t)}))}),Object(a.jsx)("div",{className:q.a.navbar__border})]})},U=n(30),W=n(84),F=n.n(W),Q=n(41),$=n.n(Q),Y=Object(b.b)((function(e){return{state:{instances:e.player.instances}}}),(function(e){return{dispatch:{toggleInstance:function(t){e(u.a.actions.toggleInstance(t))},setInstanceProgress:function(t,n){e(u.a.actions.setInstanceProgress({ID:t,progress:n}))}}}}))((function(e){var t,n=Object(r.useRef)(null),o=Object(r.useState)(),c=Object(U.a)(o,2),i=c[0],s=c[1],l=Object(r.useState)(!0),u=Object(U.a)(l,2),d=u[0],f=u[1],b=Object(j.a)({player:{display:"none",transform:"translate3d(0, -100%, 0)"}}),_=Object(r.useCallback)((function(){for(var t in e.state.instances){var n=Object(h.a)(Object(h.a)({},e.state.instances[t]),{},{ID:t});if(!n.DATA.closed)return n}}),[e.state.instances]);return Object(r.useEffect)((function(){var e=_();e&&s(e)}),[_]),Object(r.useEffect)((function(){i&&b.set([{__id:"0:0",__tOffset:0,__middleware:function(){n.current&&(n.current.seekTo(i.DATA.currentTime),f(!0))},player:{display:"grid"}},{__id:"0:1",__tOffset:100,player:{transform:"translate3d(0, 0, 0)"}}])}),[i]),Object(a.jsxs)("div",{className:$.a.player,style:b.get().player,onClick:function(){b.set([{__id:"1:0",__tOffset:0,player:{transform:"translate3d(0, -100%, 0)"}},{__id:"1:1",__tOffset:500,__middleware:function(){i&&(e.dispatch.toggleInstance(i.ID),e.dispatch.setInstanceProgress(i.ID,n.current.getCurrentTime()),f(!1))},player:{display:"none"}}])},children:[Object(a.jsx)("div",{className:$.a.player__background}),Object(a.jsx)("div",{className:$.a.player__foreground,children:Object(a.jsx)(F.a,{ref:function(e){return n.current=e},className:$.a.player__video,playing:d,muted:!0,url:null!==(t=null===i||void 0===i?void 0:i.URI)&&void 0!==t?t:""})})]})})),K=n(52),Z=n.n(K),G=o.a.lazy((function(){return n.e(7).then(n.bind(null,298))})),X=o.a.lazy((function(){return n.e(3).then(n.bind(null,299))})),ee=o.a.lazy((function(){return n.e(4).then(n.bind(null,303))})),te=o.a.lazy((function(){return n.e(5).then(n.bind(null,300))})),ne=o.a.lazy((function(){return n.e(6).then(n.bind(null,301))})),ae=Object(b.b)(null,(function(e){return{updateCommands:function(t){e(d.actions.updateCommands(t))}}}))((function(e){return Object(r.useEffect)((function(){fetch("http://192.168.178.26:9000/commands").then((function(e){return e.json()})).then((function(t){e.updateCommands(t)}))}),[e]),Object(a.jsx)(_.a,{children:Object(a.jsxs)("div",{className:Z.a.skeleton,children:[Object(a.jsx)("div",{className:Z.a.skeleton__header,children:Object(a.jsx)(J,{})}),Object(a.jsx)("div",{className:Z.a.skeleton__content,children:Object(a.jsx)(r.Suspense,{fallback:Object(a.jsx)(N,{}),children:Object(a.jsxs)(v.c,{children:[Object(a.jsx)(v.a,{exact:!0,path:"/",component:G}),Object(a.jsx)(v.a,{exact:!0,path:"/docs",component:X}),Object(a.jsx)(v.a,{exact:!0,path:"/contribute",component:te}),Object(a.jsx)(v.a,{exact:!0,path:"/setup",component:ee}),Object(a.jsx)(v.a,{exact:!0,path:"/meta",component:ne}),Object(a.jsx)(v.a,{component:function(){return Object(a.jsx)(N,{content:{text:"Not Found",title:"\u7121\u3044",to:"/"}})}})]})})}),Object(a.jsx)(Y,{})]})})}));i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(b.a,{store:f,children:Object(a.jsx)(ae,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},34:function(e,t,n){e.exports={navbar:"Navbar_navbar__7J-Nl",navbar__indicator:"Navbar_navbar__indicator__14Ebe",navbar__border:"Navbar_navbar__border__1MOnl",navbar__children:"Navbar_navbar__children__s_MuB",navbar__child:"Navbar_navbar__child__15MPJ",navbar_child_viewport:"Navbar_navbar_child_viewport__2821w"}},35:function(e,t,n){"use strict";var a=n(63),r=n(5),o=n(13),c=n(30),i=n(40),s=n(0),l=function e(){for(var t={},n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];for(var l=0,u=a;l<u.length;l++){var d=u[l];if(d instanceof Array)t instanceof Array||(t=[]),t=[].concat(Object(i.a)(t),Object(i.a)(d));else if(d instanceof Object)for(var f=0,b=Object.entries(d);f<b.length;f++){var _=Object(c.a)(b[f],2),v=_[0],h=_[1];h instanceof Object&&v in t&&(h=e(t[v],h)),t=Object(o.a)(Object(o.a)({},t),{},Object(r.a)({},v,h))}}return t};t.a=function(e){var t=Object(s.useRef)(e),n=Object(s.useState)(t.current),r=Object(c.a)(n,2),o=r[0],i=r[1],u=Object(s.useRef)({}),d=function(e,t){return t&&!function(e){for(var t in u.current){var n=t.split(":")[0];if(e.match(new RegExp("^".concat(n,":\\d+$"))))return!0}return!1}(e)||!t};return{get:function(){return o},set:function(e,n){if(e instanceof Array){if(d(e[0].__id,null===n||void 0===n?void 0:n.isSafe))for(var r=function(n){var r=e[n.i],o=r.__tOffset,c=r.__id,s=r.__middleware,d=Object(a.a)(r,["__tOffset","__id","__middleware"]);n.k+=o,u.current[c]=setTimeout((function(){"function"===typeof s&&s();var e=l(t.current,d);t.current=e,i(e),delete u.current[c]}),n.k)},o={i:0,k:0};o.i<e.length;o.i++)r(o)}else if(e.__tOffset){if(d(e.__id,null===n||void 0===n?void 0:n.isSafe)){var c=e.__tOffset,s=e.__id,f=e.__middleware,b=Object(a.a)(e,["__tOffset","__id","__middleware"]);u.current[s]=setTimeout((function(){"function"===typeof f&&f();var e=l(t.current,b);t.current=e,i(e),delete u.current[s]}),c)}}else{var _=l(t.current,e);t.current=_,i(_)}},clear:function(e){for(var t in u.current)if(e){if(e.match(/^\d+:\d+$/)&&e===t){clearTimeout(u.current[t]);break}e.match(/^\d+$/)&&e===t.split(":")[0]&&clearTimeout(u.current[t])}else clearTimeout(u.current[t])}}}},37:function(e,t,n){"use strict";var a=n(29),r=Object(a.b)({name:"player",initialState:{instances:{}},reducers:{createInstance:function(e,t){var n=t.payload;e.instances[n]||(e.instances[n]={DATA:{closed:!0,currentTime:0},URI:null})},toggleInstance:function(e,t){var n=t.payload;e.instances[n].DATA.closed=!e.instances[n].DATA.closed},setInstanceURI:function(e,t){var n=t.payload;e.instances[n.ID]&&(e.instances[n.ID].URI=n.URI)},setInstanceProgress:function(e,t){var n=t.payload;e.instances[n.ID]&&(e.instances[n.ID].DATA.currentTime=n.progress)}}});t.a=r},41:function(e,t,n){e.exports={player:"Player_player__1efH7",player__background:"Player_player__background__3ASHH",player__foreground:"Player_player__foreground__3KyMq",player__video:"Player_player__video__3FYub"}},50:function(e,t,n){"use strict";var a=n(40),r=n(0);t.a=function(){var e=Object(r.useRef)([]);return{add:function(t){return e.current=[].concat(Object(a.a)(e.current),[t])},exec:function(){e.current.forEach((function(e){return e()})),e.current=[]}}}},51:function(e,t,n){e.exports={message:"Message_message__1_yGt",message__particles:"Message_message__particles__1fx19",message__content:"Message_message__content__1sZTs"}},52:function(e,t,n){e.exports={skeleton:"Skeleton_skeleton__3FMbl",skeleton__header:"Skeleton_skeleton__header__3kJUS",skeleton__content:"Skeleton_skeleton__content__RewWJ"}},64:function(e,t,n){"use strict";var a=n(3),r=(n(0),n(36)),o=n(93),c=n.n(o);t.a=function(e){return Object(a.jsx)(r.b,{to:e.to,className:c.a["link-mask"],children:e.children})}},65:function(e,t,n){"use strict";var a=n(13),r=n(30),o=n(0),c=n(50);t.a=function(e){var t=Object(c.a)(),n=Object(o.useState)(!1),i=Object(r.a)(n,2),s=i[0],l=i[1],u=Object(o.useCallback)((function(e){var t,n;return{scalar:null!==(t=null===e||void 0===e?void 0:e.scalar)&&void 0!==t?t:1,lessThanOrEqualTo:null!==(n=null===e||void 0===e?void 0:e.lessThanOrEqualTo)&&void 0!==n&&n}}),[]),d=Object(o.useCallback)((function(){e.forEach((function(e){var t=u(e.options);if(e.ref.current){var n,r=e.ref.current.clientWidth/e.orientation.width,o=e.ref.current.clientHeight/e.orientation.height,c=(t.lessThanOrEqualTo?r<=o?r:o:r>=o?r:o)*t.scalar;if(c)e.handle(c,{id:null===(n=e.options)||void 0===n?void 0:n.debug,current:{width:r,height:o},orientation:Object(a.a)({},e.orientation),options:t,result:c})}}))}),[u,e]);Object(o.useEffect)((function(){s||(d(),l(!0));var e=function(){return d()};return window.addEventListener("resize",e),t.add((function(){window.removeEventListener("resize",e)})),t.exec}),[t,d,s])}},90:function(e){e.exports=JSON.parse('{"autoPlay":true,"backgroundMode":{"enable":false,"zIndex":-1},"detectRetina":true,"fpsLimit":144,"infection":{"cure":false,"delay":0,"enable":false,"infections":0,"stages":[]},"interactivity":{"detectsOn":"canvas","events":{"onClick":{"enable":true,"mode":"push"},"onDiv":{"selectors":[],"enable":false,"mode":[],"type":"circle"},"onHover":{"enable":true,"mode":"grab","parallax":{"enable":true,"force":40,"smooth":10}},"resize":true},"modes":{"attract":{"distance":200,"duration":0.4,"speed":1},"bounce":{"distance":200},"bubble":{"distance":400,"duration":2,"opacity":0.8,"size":40},"grab":{"distance":400,"links":{"blink":false,"consent":false,"opacity":1}},"light":{"area":{"gradient":{"start":{"value":"#ffffff"},"stop":{"value":"#000000"}},"radius":1000},"shadow":{"color":{"value":"#000000"},"length":2000}},"push":{"quantity":4},"remove":{"quantity":2},"repulse":{"distance":200,"duration":0.4,"speed":1},"slow":{"factor":3,"radius":200},"trail":{"delay":1,"quantity":1}}},"motion":{"disable":false,"reduce":{"factor":4,"value":false}},"particles":{"bounce":{"horizontal":{"random":{"enable":false,"minimumValue":0.1},"value":1},"vertical":{"random":{"enable":false,"minimumValue":0.1},"value":1}},"collisions":{"bounce":{"horizontal":{"random":{"enable":false,"minimumValue":0.1},"value":1},"vertical":{"random":{"enable":false,"minimumValue":0.1},"value":1}},"enable":false,"mode":"bounce"},"color":{"value":"#000000","animation":{"enable":false,"speed":1,"sync":true}},"life":{"count":0,"delay":{"random":{"enable":false,"minimumValue":0},"value":0,"sync":false},"duration":{"random":{"enable":false,"minimumValue":0.0001},"value":0,"sync":false}},"move":{"angle":{"offset":45,"value":90},"attract":{"enable":false,"rotate":{"x":600,"y":1200}},"direction":"none","distance":0,"enable":true,"gravity":{"acceleration":9.81,"enable":false,"maxSpeed":50},"noise":{"delay":{"random":{"enable":false,"minimumValue":0},"value":0},"enable":false},"outModes":{"default":"out","bottom":"out","left":"out","right":"out","top":"out"},"random":false,"size":false,"speed":2,"straight":false,"trail":{"enable":false,"length":10,"fillColor":{"value":"#000000"}},"vibrate":false,"warp":false},"number":{"density":{"enable":true,"area":800,"factor":1000},"limit":0,"value":50},"reduceDuplicates":false,"shadow":{"blur":0,"color":{"value":"#000000"},"enable":false,"offset":{"x":0,"y":0}},"size":{"random":{"enable":true,"minimumValue":1},"value":5},"stroke":{"width":0,"color":{"value":"#000000","animation":{"enable":false,"speed":1,"sync":true}}}},"pauseOnBlur":true,"pauseOnOutsideViewport":false}')},92:function(e,t,n){e.exports={"navbar-indicator":"NavbarIndicator_navbar-indicator__2WPAQ"}},93:function(e,t,n){e.exports={"link-mask":"LinkMask_link-mask__2Qh1X"}}},[[285,1,2]]]);
//# sourceMappingURL=main.d7bd8ff8.chunk.js.map