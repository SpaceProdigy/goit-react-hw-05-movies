"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[274],{6600:function(e,t,n){n.d(t,{i:function(){return l}});var o=n(4165),a=n(5861),c=n(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={language:"en-US",api_key:"0fa5d57869c0fc46ab6b2702ad9e66fe"};var l=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){var t,n,a,l,r=arguments;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",n=r.length>1&&void 0!==r[1]?r[1]:"",e.prev=2,e.next=5,c.Z.get("".concat(t).concat(n));case 5:return a=e.sent,l=a.data,e.abrupt("return",l);case 10:throw e.prev=10,e.t0=e.catch(2),console.log(e.t0.message),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}()},5215:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(9439),a=n(2610),c=n(2791),l="ScrollToTop_UpCircleOutlined__UBZot",r=n(184),i=function(){var e=(0,c.useState)(!1),t=(0,o.Z)(e,2),n=t[0],i=t[1],s=function(){var e=window.scrollY;i(e>500)};return(0,c.useEffect)((function(){return window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",s)}}),[]),n&&(0,r.jsx)(a.Z,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:l})}},4368:function(e,t,n){var o=n(3984),a=n(9367),c=(n(2791),n(184));t.Z=function(e){var t=e.rating,n=e.secondaryColor,l=e.numberRating,r=e.style;return 0!==t&&(0,c.jsxs)(o.ZP,{theme:{token:{colorFillContent:n||"grey"}},children:[l&&"".concat(l.toFixed(1)," / 10 "),(0,c.jsx)("br",{}),t&&(0,c.jsx)(a.Z,{defaultValue:t/2,disabled:!0,className:r})]})}},1274:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var o=n(4165),a=n(5861),c=n(9439),l=n(2791),r=n(7689),i=n(1087),s=n(6600),A=n(4298),d=n(4942),g=n(1694),m=n.n(g),u=n(5501),E=n(1113),b=n(635),p=n(1929),v=n(4107),Q=l.createContext({}),f=function(e){return e.children};function h(e){return void 0!==e&&null!==e}var y=function(e){var t,n=e.itemPrefixCls,o=e.component,a=e.span,c=e.className,r=e.style,i=e.labelStyle,s=e.contentStyle,A=e.bordered,g=e.label,u=e.content,E=e.colon,b=o;return A?l.createElement(b,{className:m()((t={},(0,d.Z)(t,"".concat(n,"-item-label"),h(g)),(0,d.Z)(t,"".concat(n,"-item-content"),h(u)),t),c),style:r,colSpan:a},h(g)&&l.createElement("span",{style:i},g),h(u)&&l.createElement("span",{style:s},u)):l.createElement(b,{className:m()("".concat(n,"-item"),c),style:r,colSpan:a},l.createElement("div",{className:"".concat(n,"-item-container")},(g||0===g)&&l.createElement("span",{className:m()("".concat(n,"-item-label"),(0,d.Z)({},"".concat(n,"-item-no-colon"),!E)),style:i},g),(u||0===u)&&l.createElement("span",{className:m()("".concat(n,"-item-content")),style:s},u)))};function x(e,t,n){var o=t.colon,a=t.prefixCls,c=t.bordered,r=n.component,i=n.type,s=n.showLabel,A=n.showContent,d=n.labelStyle,g=n.contentStyle;return e.map((function(e,t){var n=e.props,m=n.label,u=n.children,E=n.prefixCls,b=void 0===E?a:E,p=n.className,v=n.style,Q=n.labelStyle,f=n.contentStyle,h=n.span,x=void 0===h?1:h,B=e.key;return"string"===typeof r?l.createElement(y,{key:"".concat(i,"-").concat(B||t),className:p,style:v,labelStyle:Object.assign(Object.assign({},d),Q),contentStyle:Object.assign(Object.assign({},g),f),span:x,colon:o,component:r,itemPrefixCls:b,bordered:c,label:s?m:null,content:A?u:null}):[l.createElement(y,{key:"label-".concat(B||t),className:p,style:Object.assign(Object.assign(Object.assign({},d),v),Q),span:1,colon:o,component:r[0],itemPrefixCls:b,bordered:c,label:m}),l.createElement(y,{key:"content-".concat(B||t),className:p,style:Object.assign(Object.assign(Object.assign({},g),v),f),span:2*x-1,component:r[1],itemPrefixCls:b,bordered:c,content:u})]}))}var B=function(e){var t=l.useContext(Q),n=e.prefixCls,o=e.vertical,a=e.row,c=e.index,r=e.bordered;return o?l.createElement(l.Fragment,null,l.createElement("tr",{key:"label-".concat(c),className:"".concat(n,"-row")},x(a,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),l.createElement("tr",{key:"content-".concat(c),className:"".concat(n,"-row")},x(a,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):l.createElement("tr",{key:c,className:"".concat(n,"-row")},x(a,e,Object.assign({component:r?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},S=n(7521),Z=n(5564),j=n(9922),C=function(e){var t,n,o=e.componentCls,a=e.extraColor,c=e.itemPaddingBottom,l=e.colonMarginRight,r=e.colonMarginLeft,i=e.titleMarginBottom;return(0,d.Z)({},o,Object.assign(Object.assign(Object.assign({},(0,S.Wf)(e)),function(e){var t,n=e.componentCls,o=e.labelBg;return(0,d.Z)({},"&".concat(n,"-bordered"),(t={},(0,d.Z)(t,"".concat(n,"-view"),{border:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit),"> table":{tableLayout:"auto",borderCollapse:"collapse"}}),(0,d.Z)(t,"".concat(n,"-item-label, ").concat(n,"-item-content"),{padding:"".concat(e.padding,"px ").concat(e.paddingLG,"px"),borderInlineEnd:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit),"&:last-child":{borderInlineEnd:"none"}}),(0,d.Z)(t,"".concat(n,"-item-label"),{color:e.colorTextSecondary,backgroundColor:o,"&::after":{display:"none"}}),(0,d.Z)(t,"".concat(n,"-row"),{borderBottom:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit),"&:last-child":{borderBottom:"none"}}),(0,d.Z)(t,"&".concat(n,"-middle"),(0,d.Z)({},"".concat(n,"-item-label, ").concat(n,"-item-content"),{padding:"".concat(e.paddingSM,"px ").concat(e.paddingLG,"px")})),(0,d.Z)(t,"&".concat(n,"-small"),(0,d.Z)({},"".concat(n,"-item-label, ").concat(n,"-item-content"),{padding:"".concat(e.paddingXS,"px ").concat(e.padding,"px")})),t))}(e)),(n={},(0,d.Z)(n,"&-rtl",{direction:"rtl"}),(0,d.Z)(n,"".concat(o,"-header"),{display:"flex",alignItems:"center",marginBottom:i}),(0,d.Z)(n,"".concat(o,"-title"),Object.assign(Object.assign({},S.vS),{flex:"auto",color:e.colorText,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG})),(0,d.Z)(n,"".concat(o,"-extra"),{marginInlineStart:"auto",color:a,fontSize:e.fontSize}),(0,d.Z)(n,"".concat(o,"-view"),{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}}),(0,d.Z)(n,"".concat(o,"-row"),{"> th, > td":{paddingBottom:c},"&:last-child":{borderBottom:"none"}}),(0,d.Z)(n,"".concat(o,"-item-label"),(0,d.Z)({color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:"".concat(r,"px ").concat(l,"px")}},"&".concat(o,"-item-no-colon::after"),{content:'""'})),(0,d.Z)(n,"".concat(o,"-item-no-label"),{"&::after":{margin:0,content:'""'}}),(0,d.Z)(n,"".concat(o,"-item-content"),{display:"table-cell",flex:1,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"}),(0,d.Z)(n,"".concat(o,"-item"),{paddingBottom:0,verticalAlign:"top","&-container":(t={display:"flex"},(0,d.Z)(t,"".concat(o,"-item-label"),{display:"inline-flex",alignItems:"baseline"}),(0,d.Z)(t,"".concat(o,"-item-content"),{display:"inline-flex",alignItems:"baseline"}),t)}),(0,d.Z)(n,"&-middle",(0,d.Z)({},"".concat(o,"-row"),{"> th, > td":{paddingBottom:e.paddingSM}})),(0,d.Z)(n,"&-small",(0,d.Z)({},"".concat(o,"-row"),{"> th, > td":{paddingBottom:e.paddingXS}})),n)))},N=(0,Z.Z)("Descriptions",(function(e){var t=(0,j.TS)(e,{});return[C(t)]}),(function(e){return{labelBg:e.colorFillAlter,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,extraColor:e.colorText}})),I=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},w={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function k(e,t,n){var o=e;return(void 0===n||n>t)&&(o=(0,E.Tm)(e,{span:t})),o}var J=function(e){var t,n=e.prefixCls,o=e.title,a=e.extra,r=e.column,i=void 0===r?w:r,s=e.colon,A=void 0===s||s,g=e.bordered,E=e.layout,f=e.children,h=e.className,y=e.rootClassName,x=e.style,S=e.size,Z=e.labelStyle,j=e.contentStyle,C=I(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle"]),J=l.useContext(p.E_),R=J.getPrefixCls,M=J.direction,K=J.descriptions,U=R("descriptions",n),z=l.useState({}),O=(0,c.Z)(z,2),L=O[0],P=O[1],T=function(e,t){if("number"===typeof e)return e;if("object"===typeof e)for(var n=0;n<b.c.length;n++){var o=b.c[n];if(t[o]&&void 0!==e[o])return e[o]||w[o]}return 3}(i,L),H=(0,v.Z)(S),Y=N(U),D=(0,c.Z)(Y,2),F=D[0],G=D[1],X=(0,b.Z)();l.useEffect((function(){var e=X.subscribe((function(e){"object"===typeof i&&P(e)}));return function(){X.unsubscribe(e)}}),[]);var _=function(e,t){var n=(0,u.Z)(e).filter((function(e){return e})),o=[],a=[],c=t;return n.forEach((function(e,l){var r,i=null===(r=e.props)||void 0===r?void 0:r.span,s=i||1;if(l===n.length-1)return a.push(k(e,c,i)),void o.push(a);s<c?(c-=s,a.push(e)):(a.push(k(e,c,s)),o.push(a),c=t,a=[])})),o}(f,T),q=l.useMemo((function(){return{labelStyle:Z,contentStyle:j}}),[Z,j]);return F(l.createElement(Q.Provider,{value:q},l.createElement("div",Object.assign({className:m()(U,null===K||void 0===K?void 0:K.className,(t={},(0,d.Z)(t,"".concat(U,"-").concat(H),H&&"default"!==H),(0,d.Z)(t,"".concat(U,"-bordered"),!!g),(0,d.Z)(t,"".concat(U,"-rtl"),"rtl"===M),t),h,y,G),style:Object.assign(Object.assign({},null===K||void 0===K?void 0:K.style),x)},C),(o||a)&&l.createElement("div",{className:"".concat(U,"-header")},o&&l.createElement("div",{className:"".concat(U,"-title")},o),a&&l.createElement("div",{className:"".concat(U,"-extra")},a)),l.createElement("div",{className:"".concat(U,"-view")},l.createElement("table",null,l.createElement("tbody",null,_.map((function(e,t){return l.createElement(B,{key:t,index:t,colon:A,prefixCls:U,vertical:"vertical"===E,bordered:g,row:e})}))))))))};J.Item=f;var R=J,M=n(7309),K="MovieDetails_title__cUGs9",U="MovieDetails_wrapper__YMWLn",z="MovieDetails_table__uyGXm",O="MovieDetails_stars__u-dkN",L="MovieDetails_button__uXZxd",P="MovieDetails_movieCol__Irau7",T="MovieDetails_wrapperTitle__kxb1f",H="MovieDetails_btn__7L5IF",Y=n(4368),D=n(5215),F=n(9256),G=n(4596),X=n(184),_=function(){var e,t,n=(0,l.useState)([]),d=(0,c.Z)(n,2),g=d[0],m=d[1],u=(0,l.useState)(!0),E=(0,c.Z)(u,2),b=E[0],p=E[1],v=(0,l.useState)(null),Q=(0,c.Z)(v,2),f=Q[0],h=Q[1],y=(0,r.UO)().movieId,x=(0,r.TH)(),B=(0,l.useRef)(null!==(e=null===(t=x.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),S=(0,l.useCallback)((0,a.Z)((0,o.Z)().mark((function e(){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p(!0),h(null),e.prev=2,y){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,(0,s.i)("movie/",y);case 7:t=e.sent,m(t),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0),h(e.t0);case 15:return e.prev=15,p(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[2,11,15,18]])}))),[y]);(0,l.useEffect)((function(){S()}),[S]);var Z=g.poster_path,j=void 0===Z?"":Z,C=g.title,N=void 0===C?"":C,I=g.name,w=void 0===I?"":I,k=g.overview,J=void 0===k?"":k,_=g.genres,q=void 0===_?"":_,W=g.release_date,V=void 0===W?"":W,$=g.status,ee=void 0===$?"":$,te=g.runtime,ne=void 0===te?"":te,oe=g.vote_average,ae=void 0===oe?0:oe;return f?(0,X.jsx)(F.Z,{}):(0,X.jsxs)(X.Fragment,{children:[b?(0,X.jsx)(G.Z,{}):(0,X.jsxs)("div",{className:U,children:[j?(0,X.jsx)(A.Z,{title:"Image"+N,className:P,src:"https://image.tmdb.org/t/p/w500/".concat(j)}):(0,X.jsx)(A.Z,{title:"Image 'No poster'",loading:"lazy",width:320,src:"error",fallback:"data:image/png;base64,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"}),(0,X.jsxs)(R,{className:z,title:(0,X.jsxs)("div",{className:T,children:[(0,X.jsx)(i.rU,{to:B.current,children:(0,X.jsx)(M.ZP,{className:H,type:"primary",children:"Back"})}),(0,X.jsx)("h2",{className:K,children:"More details"})]}),bordered:!0,column:1,children:[(0,X.jsx)(R.Item,{label:"Title",children:N||w}),(0,X.jsx)(R.Item,{label:"Rating",children:(0,X.jsx)(Y.Z,{rating:ae,secondaryColor:"grey",numberRating:ae,style:O})}),(0,X.jsx)(R.Item,{label:"Data release",children:V}),(0,X.jsx)(R.Item,{label:"Genres",children:q.length>0&&q.map((function(e){return(0,X.jsx)("li",{children:e.name},e.id)}))}),(0,X.jsx)(R.Item,{label:"Status",children:ee}),(0,X.jsxs)(R.Item,{label:"Runtime",children:[ne," min"]}),(0,X.jsx)(R.Item,{label:"Overview",children:J}),(0,X.jsx)(R.Item,{children:(0,X.jsxs)("div",{className:L,children:[(0,X.jsx)(i.rU,{to:"cast",children:(0,X.jsx)(M.ZP,{className:H,type:"primary",children:"Cast"})}),(0,X.jsx)(i.rU,{to:"reviews",children:(0,X.jsx)(M.ZP,{className:H,type:"primary",children:"Reviews"})})]})})]})]}),(0,X.jsx)(l.Suspense,{fallback:(0,X.jsx)(G.Z,{}),children:(0,X.jsx)(r.j3,{})}),(0,X.jsx)(D.Z,{})]})}}}]);
//# sourceMappingURL=274.d06551be.chunk.js.map