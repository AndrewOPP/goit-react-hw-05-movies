"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[590],{590:function(e,t,n){n.r(t),n.d(t,{MYAPI:function(){return d},default:function(){return h}});var r=n(861),a=n(439),c=n(757),i=n.n(c),u=n(243),s=n(87),o=n(184);function l(e){var t=e.movies;return(0,o.jsx)("div",{children:t.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(s.rU,{to:"".concat(e.id),children:e.title?e.title:e.name})},e.id)}))})}var f=n(791),d="48d7bf93e386bf362111f4874b62be4e";function h(){var e=(0,f.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1];return(0,f.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(d));case 3:t=e.sent,c(t.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("ERROR");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"Trending today"}),(0,o.jsx)(l,{movies:n})]})}}}]);
//# sourceMappingURL=590.c099a702.chunk.js.map