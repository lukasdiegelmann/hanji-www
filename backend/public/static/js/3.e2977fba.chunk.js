(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[3],{286:function(e,a,t){"use strict";var n=t(3),o=t(13),c=t(0),i=t(9),r=t(64),s=t(35),_=t(65),d=t(287),l=t.n(d);a.a=function e(a){var t,d,h,p,g,f,j=Object(c.useRef)(null),u=Object(i.f)(),b="".concat(u.pathname,"#").concat(a.children),x=Object(s.a)({heading:{height:"".concat(400/Math.pow(2,a.class),"px")},headingBackground:{filter:"opacity(0%)"},headingText:Object(o.a)({fontSize:"".concat(200/Math.pow(2,a.class),"px"),color:(null===(t=a.options)||void 0===t?void 0:t.backdropped)?"white":"inherit",backgroundColor:(null===(d=a.options)||void 0===d?void 0:d.backdropped)?"#141414":"inherit",borderRadius:(null===(h=a.options)||void 0===h?void 0:h.backdropped)?"1.5%":"0%"},null===(p=a.options)||void 0===p?void 0:p.style)});return Object(_.a)([{ref:j,orientation:{width:1920,height:1080},options:{scalar:1.4},handle:function(e){var t;(null===(t=a.options)||void 0===t?void 0:t.keepSize)||x.set({heading:{height:"".concat(400*e/Math.pow(2,a.class),"px")},headingText:{fontSize:"".concat(200*e/Math.pow(2,a.class),"px")}})}}]),Object(c.useEffect)((function(){var e;"#".concat(a.children)==="".concat(decodeURIComponent(u.hash))&&(null===(e=j.current)||void 0===e||e.scrollIntoView(),x.set([{__id:"0:0",__tOffset:0,headingBackground:{filter:"opacity(80%)"}},{__id:"0:1",__tOffset:1e3,headingBackground:{filter:"opacity(0%)"}}]))}),[a.children,u]),Object(n.jsxs)("div",{ref:j,id:a.children,className:l.a.heading,style:x.get().heading,children:[Object(n.jsx)("div",{className:l.a.heading__background,style:x.get().headingBackground}),Object(n.jsxs)("div",{className:l.a["heading__text-container"],children:[Object(n.jsx)("b",{className:l.a.heading__text,style:x.get().headingText,children:a.children}),(null===(g=a.options)||void 0===g?void 0:g.subtitle)?Object(n.jsx)("div",{className:l.a.heading__subtitle,children:Object(n.jsx)(e,{class:9*a.class,children:a.options.subtitle})}):null]}),(null===(f=a.options)||void 0===f?void 0:f.attachable)?Object(n.jsx)("div",{className:l.a["heading__paragraph-wrapper"],children:Object(n.jsx)(r.a,{to:b,children:Object(n.jsx)("div",{className:l.a["heading__paragraph-container"],children:Object(n.jsx)("b",{className:l.a.heading__paragraph,style:x.get().headingText,children:"\u204b"})})})}):null]})}},287:function(e,a,t){e.exports={heading:"Heading_heading__3B6Q5",heading__background:"Heading_heading__background__3Urdr","heading__text-container":"Heading_heading__text-container__1Mt5W",heading__text:"Heading_heading__text__3A3as","heading__paragraph-wrapper":"Heading_heading__paragraph-wrapper__gZ3ci","heading__paragraph-container":"Heading_heading__paragraph-container__2hVH5",heading__paragraph:"Heading_heading__paragraph__1Y4aB"}},288:function(e,a,t){e.exports={"footer-container":"Footer_footer-container__15gFv","footer-container__border":"Footer_footer-container__border__1UBvl",footer:"Footer_footer__2PtnP","footer__logo-container":"Footer_footer__logo-container__19lA5",footer__logo:"Footer_footer__logo__2g7b7",footer__child:"Footer_footer__child__2XwKq"}},289:function(e,a,t){"use strict";var n=t(3),o=(t(0),t(290)),c=t.n(o);a.a=function(e){return Object(n.jsxs)("div",{className:c.a.pagify,children:[Object(n.jsx)("div",{className:c.a.pagify__content,children:e.children}),Object(n.jsx)("div",{className:c.a.pagify__footer,children:e.footer})]})}},290:function(e,a,t){e.exports={pagify:"Pagify_pagify__37SPA",pagify__content:"Pagify_pagify__content__18ebT",pagify__footer:"Pagify_pagify__footer__3ZNSY"}},291:function(e,a,t){"use strict";var n=t(3),o=(t(0),t(286)),c=t(64),i=t.p+"static/media/logo512.1233e14b.png",r=t(288),s=t.n(r);a.a=function(){return Object(n.jsxs)("div",{className:s.a["footer-container"],children:[Object(n.jsx)("div",{className:s.a["footer-container__border"]}),Object(n.jsxs)("div",{className:s.a.footer,children:[Object(n.jsx)("div",{className:s.a["footer__logo-container"],children:Object(n.jsx)("img",{className:s.a.footer__logo,src:i,alt:"Logo512"})}),[{name:"Contact",entries:[{name:"Imprint",to:"/meta#imprint"}]},{name:"Rights",entries:[{name:"Copyright",to:"/meta#copyright"},{name:"Licenses",to:"/meta#licenses"}]}].map((function(e,a){return Object(n.jsxs)("div",{className:s.a.footer__child,children:[Object(n.jsx)(o.a,{class:2.8,options:{attachable:!0,keepSize:!0,style:{filter:"opacity(90%)"}},children:e.name}),e.entries.map((function(e,a){return Object(n.jsx)("div",{className:s.a.footer__child__entry,children:Object(n.jsx)(c.a,{to:e.to,children:Object(n.jsx)(o.a,{class:2.8,options:{keepSize:!0,style:{filter:"opacity(80%)"}},children:e.name})})},a)}))]},a)}))]})]})}},292:function(e,a,t){"use strict";var n=t(3),o=(t(0),t(293)),c=t.n(o);a.a=function(e){return Object(n.jsx)("div",{className:c.a.flow,children:e.children.map((function(e,a){return Object(n.jsx)("div",{className:c.a.flow__child,children:e},a)}))})}},293:function(e,a,t){e.exports={flow:"Flow_flow__1Hl9D",flow__child:"Flow_flow__child__21WfD"}},294:function(e,a,t){"use strict";var n=t(3),o=t(13),c=t(0),i=t(65),r=t(35),s=t(295),_=t.n(s);a.a=function(e){var a,t=Object(c.useRef)(null),s=Object(r.a)({paragraphText:Object(o.a)({fontSize:"".concat(200/Math.pow(2,e.class),"px")},null===(a=e.options)||void 0===a?void 0:a.style)});return Object(i.a)([{ref:t,orientation:{width:1920,height:1080},handle:function(a){var t;(null===(t=e.options)||void 0===t?void 0:t.keepSize)||s.set({paragraphText:{fontSize:"".concat(200*a/Math.pow(2,e.class),"px")}})}}]),Object(n.jsx)("div",{ref:t,className:_.a.paragraph,children:Object(n.jsx)("p",{className:_.a.paragraph__text,style:s.get().paragraphText,children:e.children})})}},295:function(e,a,t){e.exports={paragraph:"Paragraph_paragraph__3VeV7",paragraph__text:"Paragraph_paragraph__text__283-M"}},296:function(e,a,t){e.exports={docs__entry:"Docs_docs__entry__1TWWP","docs__entry__name-container":"Docs_docs__entry__name-container__3V3wo","docs__entry__desc-container":"Docs_docs__entry__desc-container__1Dh8q","docs__entry__desc__border-container":"Docs_docs__entry__desc__border-container__28v5S"}},299:function(e,a,t){"use strict";t.r(a);var n=t(3),o=(t(0),t(28)),c=t(289),i=t(291),r=t(292),s=t(286),_=t(294),d=t(296),l=t.n(d),h=Object(o.b)((function(e){return{state:{commands:e.skeleton.data.commands}}}));a.default=h((function(e){var a=function(e,a){return Object(n.jsxs)("div",{className:l.a.docs__entry,children:[Object(n.jsx)("div",{className:l.a["docs__entry__name-container"],children:Object(n.jsxs)(_.a,{class:3,options:{keepSize:!0,style:{fontFamily:"Consolas"}},children:["?",Object(n.jsx)("b",{children:e})]})}),Object(n.jsxs)("div",{className:l.a["docs__entry__desc-container"],children:[Object(n.jsx)("div",{className:l.a["docs__entry__desc__border-container"]}),Object(n.jsx)(_.a,{class:3,options:{keepSize:!0,style:{fontFamily:"Source Han Serif Regular"}},children:a})]})]},"".concat(e,"#").concat(Math.random()))};return Object(n.jsxs)(c.a,{footer:Object(n.jsx)(i.a,{}),children:[Object(n.jsx)(s.a,{class:0,children:"Docs"}),Object(n.jsx)(r.a,{children:function(){var t=[];for(var n in e.state.commands){var o=e.state.commands[n];t.push(a(n,o))}return t}()})]})}))}}]);
//# sourceMappingURL=3.e2977fba.chunk.js.map