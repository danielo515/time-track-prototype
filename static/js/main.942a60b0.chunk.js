(this["webpackJsonptimer-app-prototype"]=this["webpackJsonptimer-app-prototype"]||[]).push([[0],{46:function(e,a,t){e.exports=t(57)},56:function(e,a,t){},57:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),o=t.n(l),c=t(24),s=t(31),m=t(87),i=t(81),u=t(88),d=t(91),p=t(26),E=t(80),y=t(89),g=t(35),f=t.n(g),b=t(21),h=t.n(b),k=t(22),v=t.n(k),x=t(25),w=t(82),N=t(83),O=t(85),I=t(33),R=t.n(I),j=t(34),B=t.n(j),S=t(84),F=t(59),C=t(86),D=t(3),L=[{name:"First task",lastRun:"1 day ago",total:"3 hours"},{name:"Second task",lastRun:"2 days ago",total:"2 hours"},{name:"Third task",lastRun:"1 day ago",total:"6 hours"},{name:"Fourth task",lastRun:"1 day ago",total:"4 hours"},{name:"A task with a longer name",lastRun:"1 day ago",total:"6 hours"},{name:"Random task",lastRun:"1 day ago",total:"18 minutes"}],P=Object(s.a)((function(e){return{nested:{paddingLeft:e.spacing(4)},taskOverView:{display:"flex"},rightItem:{flex:"0 1 25%",display:"flex",flexDirection:"column",alignItems:"flex-start"},leftItem:{flex:"1 1 auto"}}}));function q(e){var a=e.name,t=e.total,n=e.lastRun,l=P(),o=r.a.useState(!1),s=Object(c.a)(o,2),m=s[0],u=s[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{button:!0,onClick:function(){return u(!m)},className:l.taskOverView},r.a.createElement(E.a,{primary:a,secondary:n,classes:{root:l.leftItem,dense:"rabo"}}),r.a.createElement(E.a,{primary:"Today",secondary:t,className:l.rightItem}),m?r.a.createElement(h.a,null):r.a.createElement(v.a,null)),r.a.createElement(y.a,{in:m,timeout:"auto",unmountOnExit:!0},r.a.createElement(i.a,{component:"div",disablePadding:!0},r.a.createElement(d.a,{button:!0,className:l.nested},r.a.createElement(E.a,{primary:"Started",secondary:"10 May 2018"}),r.a.createElement(E.a,{primary:"Duration",secondary:"5 hours"})))))}var G=Object(s.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper,marginBottom:e.spacing(2),flexGrow:1},paper:{paddingBottom:50},container:{display:"flex",height:"100%"},nested:{paddingLeft:e.spacing(4)},grow:{flexGrow:1},appBar:{top:"auto",bottom:0},list:{},playingIcon:{svg:{fill:x.a.primary}}}}));function J(){var e=G();return r.a.createElement(w.a,{position:"fixed",color:"primary",className:e.appBar},r.a.createElement(N.a,null,r.a.createElement(p.a,{className:Object(D.a)(e.grow,e.text),variant:"h5",gutterBottom:!0},"00:10:55"),r.a.createElement(S.a,{color:"secondary","aria-label":"add",className:e.fabButton},r.a.createElement(R.a,null)),r.a.createElement("div",{className:e.grow}),r.a.createElement(O.a,{color:"inherit"},r.a.createElement(B.a,null))))}t(56);o.a.render(r.a.createElement((function(){var e=G(),a=r.a.useState(!0),t=Object(c.a)(a,2),n=t[0],l=t[1];return r.a.createElement("div",{className:e.container},r.a.createElement(C.a,null),r.a.createElement(F.a,{square:!0,className:Object(D.a)(e.paper,e.grow)},r.a.createElement(i.a,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:r.a.createElement(m.a,{component:"div",id:"nested-list-subheader"},"Nested List Items"),className:e.root},r.a.createElement(d.a,{button:!0,onClick:function(){l(!n)}},r.a.createElement(E.a,{primary:"First task"}),r.a.createElement(u.a,null,r.a.createElement(f.a,{classes:{colorPrimary:e.playingIcon}})),n?r.a.createElement(h.a,null):r.a.createElement(v.a,null)),r.a.createElement(y.a,{in:n,timeout:"auto",unmountOnExit:!0},r.a.createElement(i.a,{component:"div",disablePadding:!0},r.a.createElement(d.a,{button:!0,className:e.nested},r.a.createElement(E.a,{primary:"Started",secondary:"13 may 2019"}),r.a.createElement(E.a,{primary:"Duration",secondary:"5 hours"})))),L.map((function(e){return r.a.createElement(q,Object.assign({},e,{key:e.name}))})))),r.a.createElement(J,null))}),null),document.querySelector("#root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.942a60b0.chunk.js.map