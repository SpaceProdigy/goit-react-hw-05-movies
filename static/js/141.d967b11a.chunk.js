(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[141],{8497:function(e,t,n){"use strict";n.d(t,{Z:function(){return T}});var o=n(4942),a=n(9439),i=n(3433),r=n(1694),c=n.n(r),l=n(2791);var s=function(){for(var e=arguments,t=Object.assign({},arguments.length<=0?void 0:arguments[0]),n=function(){var n=o<0||e.length<=o?void 0:e[o];n&&Object.keys(n).forEach((function(e){var o=n[e];void 0!==o&&(t[e]=o)}))},o=1;o<arguments.length;o++)n();return t},d=n(635),u=n(1929),p=n(7908),m=n(590),f=n(390),g=n(7652),v=n(4692),y=n(1113),b=n(9752),h=l.createContext({}),x=(h.Consumer,function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n}),Z=function(e,t){var n=e.prefixCls,a=e.children,i=e.actions,r=e.extra,s=e.className,d=e.colStyle,p=x(e,["prefixCls","children","actions","extra","className","colStyle"]),m=(0,l.useContext)(h),f=m.grid,g=m.itemLayout,v=(0,l.useContext)(u.E_).getPrefixCls,Z=v("list",n),S=i&&i.length>0&&l.createElement("ul",{className:"".concat(Z,"-item-action"),key:"actions"},i.map((function(e,t){return l.createElement("li",{key:"".concat(Z,"-item-action-").concat(t)},e,t!==i.length-1&&l.createElement("em",{className:"".concat(Z,"-item-action-split")}))}))),E=f?"div":"li",O=l.createElement(E,Object.assign({},p,f?{}:{ref:t},{className:c()("".concat(Z,"-item"),(0,o.Z)({},"".concat(Z,"-item-no-flex"),!("vertical"===g?r:!function(){var e;return l.Children.forEach(a,(function(t){"string"===typeof t&&(e=!0)})),e&&l.Children.count(a)>1}())),s)}),"vertical"===g&&r?[l.createElement("div",{className:"".concat(Z,"-item-main"),key:"content"},a,S),l.createElement("div",{className:"".concat(Z,"-item-extra"),key:"extra"},r)]:[a,S,(0,y.Tm)(r,{key:"extra"})]);return f?l.createElement(b.Z,{ref:t,flex:1,style:d},O):O},S=(0,l.forwardRef)(Z);S.Meta=function(e){var t=e.prefixCls,n=e.className,o=e.avatar,a=e.title,i=e.description,r=x(e,["prefixCls","className","avatar","title","description"]),s=(0,(0,l.useContext)(u.E_).getPrefixCls)("list",t),d=c()("".concat(s,"-item-meta"),n),p=l.createElement("div",{className:"".concat(s,"-item-meta-content")},a&&l.createElement("h4",{className:"".concat(s,"-item-meta-title")},a),i&&l.createElement("div",{className:"".concat(s,"-item-meta-description")},i));return l.createElement("div",Object.assign({},r,{className:d}),o&&l.createElement("div",{className:"".concat(s,"-item-meta-avatar")},o),(a||i)&&p)};var E=S,O=n(7521),w=n(5564),k=n(9922),C=function(e){var t,n,a=e.listBorderedCls,i=e.componentCls,r=e.paddingLG,c=e.margin,l=e.itemPaddingSM,s=e.itemPaddingLG,d=e.marginLG,u=e.borderRadiusLG;return n={},(0,o.Z)(n,"".concat(a),(t={border:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorBorder),borderRadius:u},(0,o.Z)(t,"".concat(i,"-header,").concat(i,"-footer,").concat(i,"-item"),{paddingInline:r}),(0,o.Z)(t,"".concat(i,"-pagination"),{margin:"".concat(c,"px ").concat(d,"px")}),t)),(0,o.Z)(n,"".concat(a).concat(i,"-sm"),(0,o.Z)({},"".concat(i,"-item,").concat(i,"-header,").concat(i,"-footer"),{padding:l})),(0,o.Z)(n,"".concat(a).concat(i,"-lg"),(0,o.Z)({},"".concat(i,"-item,").concat(i,"-header,").concat(i,"-footer"),{padding:s})),n},j=function(e){var t,n,a,i,r=e.componentCls,c=e.screenSM,l=e.screenMD,s=e.marginLG,d=e.marginSM,u=e.margin;return i={},(0,o.Z)(i,"@media screen and (max-width:".concat(l,")"),(t={},(0,o.Z)(t,"".concat(r),(0,o.Z)({},"".concat(r,"-item"),(0,o.Z)({},"".concat(r,"-item-action"),{marginInlineStart:s}))),(0,o.Z)(t,"".concat(r,"-vertical"),(0,o.Z)({},"".concat(r,"-item"),(0,o.Z)({},"".concat(r,"-item-extra"),{marginInlineStart:s}))),t)),(0,o.Z)(i,"@media screen and (max-width: ".concat(c,")"),(a={},(0,o.Z)(a,"".concat(r),(0,o.Z)({},"".concat(r,"-item"),(0,o.Z)({flexWrap:"wrap"},"".concat(r,"-action"),{marginInlineStart:d}))),(0,o.Z)(a,"".concat(r,"-vertical"),(0,o.Z)({},"".concat(r,"-item"),(n={flexWrap:"wrap-reverse"},(0,o.Z)(n,"".concat(r,"-item-main"),{minWidth:e.contentWidth}),(0,o.Z)(n,"".concat(r,"-item-extra"),{margin:"auto auto ".concat(u,"px")}),n))),a)),i},z=function(e){var t,n,a,i,r,c,l=e.componentCls,s=e.antCls,d=e.controlHeight,u=e.minHeight,p=e.paddingSM,m=e.marginLG,f=e.padding,g=e.itemPadding,v=e.colorPrimary,y=e.itemPaddingSM,b=e.itemPaddingLG,h=e.paddingXS,x=e.margin,Z=e.colorText,S=e.colorTextDescription,E=e.motionDurationSlow,w=e.lineWidth,k=e.headerBg,C=e.footerBg,j=e.emptyTextPadding,z=e.metaMarginBottom,M=e.avatarMarginRight,P=e.titleMarginBottom,N=e.descriptionFontSize,T={};return["start","center","end"].forEach((function(e){T["&-align-".concat(e)]={textAlign:e}})),c={},(0,o.Z)(c,"".concat(l),Object.assign(Object.assign({},(0,O.Wf)(e)),(i={position:"relative","*":{outline:"none"}},(0,o.Z)(i,"".concat(l,"-header"),{background:k}),(0,o.Z)(i,"".concat(l,"-footer"),{background:C}),(0,o.Z)(i,"".concat(l,"-header, ").concat(l,"-footer"),{paddingBlock:p}),(0,o.Z)(i,"".concat(l,"-pagination"),Object.assign(Object.assign({marginBlockStart:m},T),(0,o.Z)({},"".concat(s,"-pagination-options"),{textAlign:"start"}))),(0,o.Z)(i,"".concat(l,"-spin"),{minHeight:u,textAlign:"center"}),(0,o.Z)(i,"".concat(l,"-items"),{margin:0,padding:0,listStyle:"none"}),(0,o.Z)(i,"".concat(l,"-item"),(a={display:"flex",alignItems:"center",justifyContent:"space-between",padding:g,color:Z},(0,o.Z)(a,"".concat(l,"-item-meta"),(t={display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%"},(0,o.Z)(t,"".concat(l,"-item-meta-avatar"),{marginInlineEnd:M}),(0,o.Z)(t,"".concat(l,"-item-meta-content"),{flex:"1 0",width:0,color:Z}),(0,o.Z)(t,"".concat(l,"-item-meta-title"),{margin:"0 0 ".concat(e.marginXXS,"px 0"),color:Z,fontSize:e.fontSize,lineHeight:e.lineHeight,"> a":(0,o.Z)({color:Z,transition:"all ".concat(E)},"&:hover",{color:v})}),(0,o.Z)(t,"".concat(l,"-item-meta-description"),{color:S,fontSize:N,lineHeight:e.lineHeight}),t)),(0,o.Z)(a,"".concat(l,"-item-action"),(n={flex:"0 0 auto",marginInlineStart:e.marginXXL,padding:0,fontSize:0,listStyle:"none"},(0,o.Z)(n,"& > li",(0,o.Z)({position:"relative",display:"inline-block",padding:"0 ".concat(h,"px"),color:S,fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"center"},"&:first-child",{paddingInlineStart:0})),(0,o.Z)(n,"".concat(l,"-item-action-split"),{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:w,height:Math.ceil(e.fontSize*e.lineHeight)-2*e.marginXXS,transform:"translateY(-50%)",backgroundColor:e.colorSplit}),n)),a)),(0,o.Z)(i,"".concat(l,"-empty"),{padding:"".concat(f,"px 0"),color:S,fontSize:e.fontSizeSM,textAlign:"center"}),(0,o.Z)(i,"".concat(l,"-empty-text"),{padding:j,color:e.colorTextDisabled,fontSize:e.fontSize,textAlign:"center"}),(0,o.Z)(i,"".concat(l,"-item-no-flex"),{display:"block"}),i))),(0,o.Z)(c,"".concat(l,"-grid ").concat(s,"-col > ").concat(l,"-item"),{display:"block",maxWidth:"100%",marginBlockEnd:x,paddingBlock:0,borderBlockEnd:"none"}),(0,o.Z)(c,"".concat(l,"-vertical ").concat(l,"-item"),(r={alignItems:"initial"},(0,o.Z)(r,"".concat(l,"-item-main"),{display:"block",flex:1}),(0,o.Z)(r,"".concat(l,"-item-extra"),{marginInlineStart:m}),(0,o.Z)(r,"".concat(l,"-item-meta"),(0,o.Z)({marginBlockEnd:z},"".concat(l,"-item-meta-title"),{marginBlockStart:0,marginBlockEnd:P,color:Z,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG})),(0,o.Z)(r,"".concat(l,"-item-action"),{marginBlockStart:f,marginInlineStart:"auto","> li":(0,o.Z)({padding:"0 ".concat(f,"px")},"&:first-child",{paddingInlineStart:0})}),r)),(0,o.Z)(c,"".concat(l,"-split ").concat(l,"-item"),(0,o.Z)({borderBlockEnd:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit)},"&:last-child",{borderBlockEnd:"none"})),(0,o.Z)(c,"".concat(l,"-split ").concat(l,"-header"),{borderBlockEnd:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit)}),(0,o.Z)(c,"".concat(l,"-split").concat(l,"-empty ").concat(l,"-footer"),{borderTop:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit)}),(0,o.Z)(c,"".concat(l,"-loading ").concat(l,"-spin-nested-loading"),{minHeight:d}),(0,o.Z)(c,"".concat(l,"-split").concat(l,"-something-after-last-item ").concat(s,"-spin-container > ").concat(l,"-items > ").concat(l,"-item:last-child"),{borderBlockEnd:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit)}),(0,o.Z)(c,"".concat(l,"-lg ").concat(l,"-item"),{padding:b}),(0,o.Z)(c,"".concat(l,"-sm ").concat(l,"-item"),{padding:y}),(0,o.Z)(c,"".concat(l,":not(").concat(l,"-vertical)"),(0,o.Z)({},"".concat(l,"-item-no-flex"),(0,o.Z)({},"".concat(l,"-item-action"),{float:"right"}))),c},M=(0,w.Z)("List",(function(e){var t=(0,k.TS)(e,{listBorderedCls:"".concat(e.componentCls,"-bordered"),minHeight:e.controlHeightLG});return[z(t),C(t),j(t)]}),(function(e){return{contentWidth:220,itemPadding:"".concat(e.paddingContentVertical,"px 0"),itemPaddingSM:"".concat(e.paddingContentVerticalSM,"px ").concat(e.paddingContentHorizontal,"px"),itemPaddingLG:"".concat(e.paddingContentVerticalLG,"px ").concat(e.paddingContentHorizontalLG,"px"),headerBg:"transparent",footerBg:"transparent",emptyTextPadding:e.padding,metaMarginBottom:e.padding,avatarMarginRight:e.padding,titleMarginBottom:e.paddingSM,descriptionFontSize:e.fontSize}})),P=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};function N(e){var t,n,r=e.pagination,y=void 0!==r&&r,b=e.prefixCls,x=e.bordered,Z=void 0!==x&&x,S=e.split,E=void 0===S||S,O=e.className,w=e.rootClassName,k=e.style,C=e.children,j=e.itemLayout,z=e.loadMore,N=e.grid,T=e.dataSource,I=void 0===T?[]:T,B=e.size,R=e.header,H=e.footer,D=e.loading,L=void 0!==D&&D,W=e.rowKey,A=e.renderItem,F=e.locale,G=P(e,["pagination","prefixCls","bordered","split","className","rootClassName","style","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),X=y&&"object"===typeof y?y:{},V=l.useState(X.defaultCurrent||1),K=(0,a.Z)(V,2),_=K[0],U=K[1],q=l.useState(X.defaultPageSize||10),Q=(0,a.Z)(q,2),J=Q[0],Y=Q[1],$=l.useContext(u.E_),ee=$.getPrefixCls,te=$.renderEmpty,ne=$.direction,oe=$.list,ae=function(e){return function(t,n){U(t),Y(n),y&&y[e]&&y[e](t,n)}},ie=ae("onChange"),re=ae("onShowSizeChange"),ce=ee("list",b),le=M(ce),se=(0,a.Z)(le,2),de=se[0],ue=se[1],pe=L;"boolean"===typeof pe&&(pe={spinning:pe});var me=pe&&pe.spinning,fe="";switch(B){case"large":fe="lg";break;case"small":fe="sm"}var ge=c()(ce,(t={},(0,o.Z)(t,"".concat(ce,"-vertical"),"vertical"===j),(0,o.Z)(t,"".concat(ce,"-").concat(fe),fe),(0,o.Z)(t,"".concat(ce,"-split"),E),(0,o.Z)(t,"".concat(ce,"-bordered"),Z),(0,o.Z)(t,"".concat(ce,"-loading"),me),(0,o.Z)(t,"".concat(ce,"-grid"),!!N),(0,o.Z)(t,"".concat(ce,"-something-after-last-item"),!!(z||y||H)),(0,o.Z)(t,"".concat(ce,"-rtl"),"rtl"===ne),t),null===oe||void 0===oe?void 0:oe.className,O,w,ue),ve=s({current:1,total:0},{total:I.length,current:_,pageSize:J},y||{}),ye=Math.ceil(ve.total/ve.pageSize);ve.current>ye&&(ve.current=ye);var be=y?l.createElement("div",{className:c()("".concat(ce,"-pagination"),"".concat(ce,"-pagination-align-").concat(null!==(n=null===ve||void 0===ve?void 0:ve.align)&&void 0!==n?n:"end"))},l.createElement(g.Z,Object.assign({},ve,{onChange:ie,onShowSizeChange:re}))):null,he=(0,i.Z)(I);y&&I.length>(ve.current-1)*ve.pageSize&&(he=(0,i.Z)(I).splice((ve.current-1)*ve.pageSize,ve.pageSize));var xe=Object.keys(N||{}).some((function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)})),Ze=(0,f.Z)(xe),Se=l.useMemo((function(){for(var e=0;e<d.c.length;e+=1){var t=d.c[e];if(Ze[t])return t}}),[Ze]),Ee=l.useMemo((function(){if(N){var e=Se&&N[Se]?N[Se]:N.column;return e?{width:"".concat(100/e,"%"),maxWidth:"".concat(100/e,"%")}:void 0}}),[null===N||void 0===N?void 0:N.column,Se]),Oe=me&&l.createElement("div",{style:{minHeight:53}});if(he.length>0){var we=he.map((function(e,t){return function(e,t){return A?((n="function"===typeof W?W(e):W?e[W]:e.key)||(n="list-item-".concat(t)),l.createElement(l.Fragment,{key:n},A(e,t))):null;var n}(e,t)}));Oe=N?l.createElement(m.Z,{gutter:N.gutter},l.Children.map(we,(function(e){return l.createElement("div",{key:null===e||void 0===e?void 0:e.key,style:Ee},e)}))):l.createElement("ul",{className:"".concat(ce,"-items")},we)}else C||me||(Oe=l.createElement("div",{className:"".concat(ce,"-empty-text")},F&&F.emptyText||(null===te||void 0===te?void 0:te("List"))||l.createElement(p.Z,{componentName:"List"})));var ke=ve.position||"bottom",Ce=l.useMemo((function(){return{grid:N,itemLayout:j}}),[JSON.stringify(N),j]);return de(l.createElement(h.Provider,{value:Ce},l.createElement("div",Object.assign({style:Object.assign(Object.assign({},null===oe||void 0===oe?void 0:oe.style),k),className:ge},G),("top"===ke||"both"===ke)&&be,R&&l.createElement("div",{className:"".concat(ce,"-header")},R),l.createElement(v.Z,Object.assign({},pe),Oe,C),H&&l.createElement("div",{className:"".concat(ce,"-footer")},H),z||("bottom"===ke||"both"===ke)&&be)))}N.Item=E;var T=N},650:function(e,t,n){"use strict";n.d(t,{Z:function(){return be}});var o=n(2791),a=n(4942),i=n(9439),r=n(7575),c=n(7462),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},s=n(4291),d=function(e,t){return o.createElement(s.Z,(0,c.Z)({},e,{ref:t,icon:l}))};var u=o.forwardRef(d),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},m=function(e,t){return o.createElement(s.Z,(0,c.Z)({},e,{ref:t,icon:p}))};var f=o.forwardRef(m),g=n(1694),v=n.n(g),y=n(6998),b=n.n(y),h=n(8829),x=n(5501),Z=n(1605),S=n(5179),E=n(1818),O=n(8834),w=n(4937),k=function(e){if((0,w.Z)()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],n=window.document.documentElement;return t.some((function(e){return e in n.style}))}return!1};function C(e,t){return Array.isArray(e)||void 0===t?k(e):function(e,t){if(!k(e))return!1;var n=document.createElement("div"),o=n.style[e];return n.style[e]=t,n.style[e]!==o}(e,t)}var j=n(1354),z=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},M={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},P=o.forwardRef((function(e,t){var n=e.style,a=e.noStyle,i=e.disabled,r=z(e,["style","noStyle","disabled"]),c={};return a||(c=Object.assign({},M)),i&&(c.pointerEvents="none"),c=Object.assign(Object.assign({},c),n),o.createElement("div",Object.assign({role:"button",tabIndex:0,ref:t},r,{onKeyDown:function(e){e.keyCode===j.Z.ENTER&&e.preventDefault()},onKeyUp:function(t){var n=t.keyCode,o=e.onClick;n===j.Z.ENTER&&o&&o()},style:c}))})),N=P,T=n(1929),I=n(4e3),B=n(5136),R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},H=function(e,t){return o.createElement(s.Z,(0,c.Z)({},e,{ref:t,icon:R}))};var D=o.forwardRef(H),L=n(1113),W=n(6641),A=function(e){return{color:e.colorLink,textDecoration:"none",outline:"none",cursor:"pointer",transition:"color ".concat(e.motionDurationSlow),"&:focus, &:hover":{color:e.colorLinkHover},"&:active":{color:e.colorLinkActive}}},F=n(5564),G=n(3742),X=n(6264),V=function(e){var t,n,o=e.componentCls,i=e.titleMarginTop;return(0,a.Z)({},o,Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign((t={color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight},(0,a.Z)(t,"&".concat(o,"-secondary"),{color:e.colorTextDescription}),(0,a.Z)(t,"&".concat(o,"-success"),{color:e.colorSuccess}),(0,a.Z)(t,"&".concat(o,"-warning"),{color:e.colorWarning}),(0,a.Z)(t,"&".concat(o,"-danger"),{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}}),(0,a.Z)(t,"&".concat(o,"-disabled"),{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"}),(0,a.Z)(t,"\n        div&,\n        p\n      ",{marginBottom:"1em"}),t),function(e){var t={};return[1,2,3,4,5].forEach((function(n){t["\n      h".concat(n,"&,\n      div&-h").concat(n,",\n      div&-h").concat(n," > textarea,\n      h").concat(n,"\n    ")]=function(e,t,n,o){return{marginBottom:o.titleMarginBottom,color:n,fontWeight:o.fontWeightStrong,fontSize:e,lineHeight:t}}(e["fontSizeHeading".concat(n)],e["lineHeightHeading".concat(n)],e.colorTextHeading,e)})),t}(e)),(n={},(0,a.Z)(n,"\n      & + h1".concat(o,",\n      & + h2").concat(o,",\n      & + h3").concat(o,",\n      & + h4").concat(o,",\n      & + h5").concat(o,"\n      "),{marginTop:i}),(0,a.Z)(n,"\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5",(0,a.Z)({},"\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ",{marginTop:i})),n)),function(e){return{code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:G.EV[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}}(e)),function(e){var t=e.componentCls;return{"a&, a":Object.assign(Object.assign({},A(e)),(0,a.Z)({textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration}},"&[disabled], &".concat(t,"-disabled"),{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}))}}(e)),(0,a.Z)({},"\n        ".concat(o,"-expand,\n        ").concat(o,"-edit,\n        ").concat(o,"-copy\n      "),Object.assign(Object.assign({},A(e)),{marginInlineStart:e.marginXXS}))),function(e){var t,n=e.componentCls,o=(0,X.e5)(e).inputPaddingVertical+1;return{"&-edit-content":(t={position:"relative","div&":{insetInlineStart:-e.paddingSM,marginTop:-o,marginBottom:"calc(1em - ".concat(o,"px)")}},(0,a.Z)(t,"".concat(n,"-edit-content-confirm"),{position:"absolute",insetInlineEnd:e.marginXS+2,insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"}),(0,a.Z)(t,"textarea",{margin:"0!important",MozTransition:"none",height:"1em"}),t)}}(e)),function(e){return{"&-copy-success":(0,a.Z)({},"\n    &,\n    &:hover,\n    &:focus",{color:e.colorSuccess})}}(e)),function(){var e;return e={},(0,a.Z)(e,"\n  a&-ellipsis,\n  span&-ellipsis\n  ",{display:"inline-block",maxWidth:"100%"}),(0,a.Z)(e,"&-single-line",{whiteSpace:"nowrap"}),(0,a.Z)(e,"&-ellipsis-single-line",{overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"}}),(0,a.Z)(e,"&-ellipsis-multiple-line",{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}),e}()),{"&-rtl":{direction:"rtl"}}))},K=(0,F.Z)("Typography",(function(e){return[V(e)]}),(function(){return{titleMarginTop:"1.2em",titleMarginBottom:"0.5em"}})),_=function(e){var t=e.prefixCls,n=e["aria-label"],r=e.className,c=e.style,l=e.direction,s=e.maxLength,d=e.autoSize,u=void 0===d||d,p=e.value,m=e.onSave,f=e.onCancel,g=e.onEnd,y=e.component,b=e.enterIcon,h=void 0===b?o.createElement(D,null):b,x=o.useRef(null),Z=o.useRef(!1),S=o.useRef(),E=o.useState(p),O=(0,i.Z)(E,2),w=O[0],k=O[1];o.useEffect((function(){k(p)}),[p]),o.useEffect((function(){if(x.current&&x.current.resizableTextArea){var e=x.current.resizableTextArea.textArea;e.focus();var t=e.value.length;e.setSelectionRange(t,t)}}),[]);var C=function(){m(w.trim())},z=y?"".concat(t,"-").concat(y):"",M=K(t),P=(0,i.Z)(M,2),N=P[0],T=P[1],I=v()(t,"".concat(t,"-edit-content"),(0,a.Z)({},"".concat(t,"-rtl"),"rtl"===l),r,z,T);return N(o.createElement("div",{className:I,style:c},o.createElement(W.Z,{ref:x,maxLength:s,value:w,onChange:function(e){var t=e.target;k(t.value.replace(/[\n\r]/g,""))},onKeyDown:function(e){var t=e.keyCode;Z.current||(S.current=t)},onKeyUp:function(e){var t=e.keyCode,n=e.ctrlKey,o=e.altKey,a=e.metaKey,i=e.shiftKey;S.current!==t||Z.current||n||o||a||i||(t===j.Z.ENTER?(C(),null===g||void 0===g||g()):t===j.Z.ESC&&f())},onCompositionStart:function(){Z.current=!0},onCompositionEnd:function(){Z.current=!1},onBlur:function(){C()},"aria-label":n,rows:1,autoSize:u}),null!==h?(0,L.Tm)(h,{className:"".concat(t,"-edit-content-confirm")}):null))},U=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},q=o.forwardRef((function(e,t){var n=e.prefixCls,r=e.component,c=void 0===r?"article":r,l=e.className,s=e.rootClassName,d=e.setContentRef,u=e.children,p=e.direction,m=e.style,f=U(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction","style"]),g=o.useContext(T.E_),y=g.getPrefixCls,b=g.direction,h=g.typography,x=null!==p&&void 0!==p?p:b,Z=t;d&&(Z=(0,O.sQ)(t,d));var S=y("typography",n),E=K(S),w=(0,i.Z)(E,2),k=w[0],C=w[1],j=v()(S,null===h||void 0===h?void 0:h.className,(0,a.Z)({},"".concat(S,"-rtl"),"rtl"===x),l,s,C),z=Object.assign(Object.assign({},null===h||void 0===h?void 0:h.style),m);return k(o.createElement(c,Object.assign({className:j,style:z,ref:Z},f),u))}));var Q=q;function J(e,t){return o.useMemo((function(){var n=!!e;return[n,Object.assign(Object.assign({},t),n&&"object"===typeof e?e:null)]}),[e])}var Y=function(e,t){var n=o.useRef(!1);o.useEffect((function(){n.current?e():n.current=!0}),t)};function $(e){var t=typeof e;return"string"===t||"number"===t}function ee(e,t){for(var n=0,o=[],a=0;a<e.length;a+=1){if(n===t)return o;var i=e[a],r=n+($(i)?String(i).length:1);if(r>t){var c=t-n;return o.push(String(i).slice(0,c)),o}o.push(i),n=r}return e}var te=function(e){var t=e.enabledMeasure,n=e.children,a=e.text,r=e.width,c=e.fontSize,l=e.rows,s=e.onEllipsis,d=o.useState([0,0,0]),u=(0,i.Z)(d,2),p=(0,i.Z)(u[0],3),m=p[0],f=p[1],g=p[2],v=u[1],y=o.useState(0),b=(0,i.Z)(y,2),h=b[0],S=b[1],E=o.useState(0),O=(0,i.Z)(E,2),w=O[0],k=O[1],C=o.useRef(null),j=o.useRef(null),z=o.useMemo((function(){return(0,x.Z)(a)}),[a]),M=o.useMemo((function(){return function(e){var t=0;return e.forEach((function(e){$(e)?t+=String(e).length:t+=1})),t}(z)}),[z]),P=o.useMemo((function(){return t&&3===h?n(ee(z,f),f<M):n(z,!1)}),[t,h,n,z,f,M]);(0,Z.Z)((function(){t&&r&&c&&M&&(S(1),v([0,Math.ceil(M/2),M]))}),[t,r,c,a,M,l]),(0,Z.Z)((function(){var e;1===h&&k((null===(e=C.current)||void 0===e?void 0:e.offsetHeight)||0)}),[h]),(0,Z.Z)((function(){var e,t;if(w)if(1===h)((null===(e=j.current)||void 0===e?void 0:e.offsetHeight)||0)<=l*w?(S(4),s(!1)):S(2);else if(2===h)if(m!==g){var n=(null===(t=j.current)||void 0===t?void 0:t.offsetHeight)||0,o=m,a=g;m===g-1?a=m:n<=l*w?o=f:a=f;var i=Math.ceil((o+a)/2);v([o,i,a])}else S(3),s(!0)}),[h,m,g,l,w]);var N={width:r,whiteSpace:"normal",margin:0,padding:0},T=function(e,t,n){return o.createElement("span",{"aria-hidden":!0,ref:t,style:Object.assign({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:2*Math.floor(c/2)},n)},e)};return o.createElement(o.Fragment,null,P,t&&3!==h&&4!==h&&o.createElement(o.Fragment,null,T("lg",C,{wordBreak:"keep-all",whiteSpace:"nowrap"}),1===h?T(n(z,!1),j,N):function(e,t){var o=ee(z,e);return T(n(o,!0),t,N)}(f,j)))};var ne=function(e){var t=e.enabledEllipsis,n=e.isEllipsis,a=e.children,i=e.tooltipProps;return(null===i||void 0===i?void 0:i.title)&&t?o.createElement(B.Z,Object.assign({open:!!n&&void 0},i),a):a},oe=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};function ae(e,t,n){return!0===e||void 0===e?t:e||n&&t}function ie(e){return!1===e?[!1,!1]:Array.isArray(e)?e:[e]}var re=o.forwardRef((function(e,t){var n,c,l,s=e.prefixCls,d=e.className,p=e.style,m=e.type,g=e.disabled,y=e.children,w=e.ellipsis,k=e.editable,j=e.copyable,z=e.component,M=e.title,P=oe(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),R=o.useContext(T.E_),H=R.getPrefixCls,D=R.direction,L=(0,I.Z)("Text"),W=(0,i.Z)(L,1)[0],A=o.useRef(null),F=o.useRef(null),G=H("typography",s),X=(0,E.Z)(P,["mark","code","delete","underline","strong","keyboard","italic"]),V=J(k),K=(0,i.Z)(V,2),U=K[0],q=K[1],$=(0,S.Z)(!1,{value:q.editing}),ee=(0,i.Z)($,2),re=ee[0],ce=ee[1],le=q.triggerType,se=void 0===le?["icon"]:le,de=function(e){var t;e&&(null===(t=q.onStart)||void 0===t||t.call(q)),ce(e)};Y((function(){var e;re||null===(e=F.current)||void 0===e||e.focus()}),[re]);var ue=function(e){null===e||void 0===e||e.preventDefault(),de(!0)},pe=J(j),me=(0,i.Z)(pe,2),fe=me[0],ge=me[1],ve=o.useState(!1),ye=(0,i.Z)(ve,2),be=ye[0],he=ye[1],xe=o.useRef(null),Ze={};ge.format&&(Ze.format=ge.format);var Se=function(){xe.current&&clearTimeout(xe.current)},Ee=function(e){var t;null===e||void 0===e||e.preventDefault(),null===e||void 0===e||e.stopPropagation(),b()(ge.text||String(y)||"",Ze),he(!0),Se(),xe.current=setTimeout((function(){he(!1)}),3e3),null===(t=ge.onCopy)||void 0===t||t.call(ge,e)};o.useEffect((function(){return Se}),[]);var Oe=o.useState(!1),we=(0,i.Z)(Oe,2),ke=we[0],Ce=we[1],je=o.useState(!1),ze=(0,i.Z)(je,2),Me=ze[0],Pe=ze[1],Ne=o.useState(!1),Te=(0,i.Z)(Ne,2),Ie=Te[0],Be=Te[1],Re=o.useState(!1),He=(0,i.Z)(Re,2),De=He[0],Le=He[1],We=o.useState(!1),Ae=(0,i.Z)(We,2),Fe=Ae[0],Ge=Ae[1],Xe=o.useState(!0),Ve=(0,i.Z)(Xe,2),Ke=Ve[0],_e=Ve[1],Ue=J(w,{expandable:!1}),qe=(0,i.Z)(Ue,2),Qe=qe[0],Je=qe[1],Ye=Qe&&!Ie,$e=Je.rows,et=void 0===$e?1:$e,tt=o.useMemo((function(){return!Ye||void 0!==Je.suffix||Je.onEllipsis||Je.expandable||U||fe}),[Ye,Je,U,fe]);(0,Z.Z)((function(){Qe&&!tt&&(Ce(C("webkitLineClamp")),Pe(C("textOverflow")))}),[tt,Qe]);var nt=o.useMemo((function(){return!tt&&(1===et?Me:ke)}),[tt,Me,ke]),ot=Ye&&(nt?Fe:De),at=Ye&&1===et&&nt,it=Ye&&et>1&&nt,rt=function(e){var t;Be(!0),null===(t=Je.onExpand)||void 0===t||t.call(Je,e)},ct=o.useState(0),lt=(0,i.Z)(ct,2),st=lt[0],dt=lt[1],ut=o.useState(0),pt=(0,i.Z)(ut,2),mt=pt[0],ft=pt[1],gt=function(e){var t;Le(e),De!==e&&(null===(t=Je.onEllipsis)||void 0===t||t.call(Je,e))};o.useEffect((function(){var e=A.current;if(Qe&&nt&&e){var t=it?e.offsetHeight<e.scrollHeight:e.offsetWidth<e.scrollWidth;Fe!==t&&Ge(t)}}),[Qe,nt,y,it,Ke]),o.useEffect((function(){var e=A.current;if("undefined"!==typeof IntersectionObserver&&e&&nt&&Ye){var t=new IntersectionObserver((function(){_e(!!e.offsetParent)}));return t.observe(e),function(){t.disconnect()}}}),[nt,Ye]);var vt={};vt=!0===Je.tooltip?{title:null!==(n=q.text)&&void 0!==n?n:y}:o.isValidElement(Je.tooltip)?{title:Je.tooltip}:"object"===typeof Je.tooltip?Object.assign({title:null!==(c=q.text)&&void 0!==c?c:y},Je.tooltip):{title:Je.tooltip};var yt=o.useMemo((function(){var e=function(e){return["string","number"].includes(typeof e)};if(Qe&&!nt)return e(q.text)?q.text:e(y)?y:e(M)?M:e(vt.title)?vt.title:void 0}),[Qe,nt,M,vt.title,ot]);if(re)return o.createElement(_,{value:null!==(l=q.text)&&void 0!==l?l:"string"===typeof y?y:"",onSave:function(e){var t;null===(t=q.onChange)||void 0===t||t.call(q,e),de(!1)},onCancel:function(){var e;null===(e=q.onCancel)||void 0===e||e.call(q),de(!1)},onEnd:q.onEnd,prefixCls:G,className:d,style:p,direction:D,component:z,maxLength:q.maxLength,autoSize:q.autoSize,enterIcon:q.enterIcon});var bt=function(){var e,t=Je.expandable,n=Je.symbol;return t?(e=n||(null===W||void 0===W?void 0:W.expand),o.createElement("a",{key:"expand",className:"".concat(G,"-expand"),onClick:rt,"aria-label":null===W||void 0===W?void 0:W.expand},e)):null},ht=function(){if(U){var e=q.icon,t=q.tooltip,n=(0,x.Z)(t)[0]||(null===W||void 0===W?void 0:W.edit),a="string"===typeof n?n:"";return se.includes("icon")?o.createElement(B.Z,{key:"edit",title:!1===t?"":n},o.createElement(N,{ref:F,className:"".concat(G,"-edit"),onClick:ue,"aria-label":a},e||o.createElement(f,{role:"button"}))):null}},xt=function(){if(fe){var e=ge.tooltips,t=ge.icon,n=ie(e),a=ie(t),i=be?ae(n[1],null===W||void 0===W?void 0:W.copied):ae(n[0],null===W||void 0===W?void 0:W.copy),c=be?null===W||void 0===W?void 0:W.copied:null===W||void 0===W?void 0:W.copy,l="string"===typeof i?i:c;return o.createElement(B.Z,{key:"copy",title:i},o.createElement(N,{className:v()("".concat(G,"-copy"),be&&"".concat(G,"-copy-success")),onClick:Ee,"aria-label":l},be?ae(a[1],o.createElement(r.Z,null),!0):ae(a[0],o.createElement(u,null),!0)))}};return o.createElement(h.Z,{onResize:function(e,t){var n,o=e.offsetWidth;dt(o),ft(parseInt(null===(n=window.getComputedStyle)||void 0===n?void 0:n.call(window,t).fontSize,10)||0)},disabled:!Ye||nt},(function(n){var i;return o.createElement(ne,{tooltipProps:vt,enabledEllipsis:Ye,isEllipsis:ot},o.createElement(Q,Object.assign({className:v()((i={},(0,a.Z)(i,"".concat(G,"-").concat(m),m),(0,a.Z)(i,"".concat(G,"-disabled"),g),(0,a.Z)(i,"".concat(G,"-ellipsis"),Qe),(0,a.Z)(i,"".concat(G,"-single-line"),Ye&&1===et),(0,a.Z)(i,"".concat(G,"-ellipsis-single-line"),at),(0,a.Z)(i,"".concat(G,"-ellipsis-multiple-line"),it),i),d),prefixCls:s,style:Object.assign(Object.assign({},p),{WebkitLineClamp:it?et:void 0}),component:z,ref:(0,O.sQ)(n,A,t),direction:D,onClick:se.includes("text")?ue:void 0,"aria-label":null===yt||void 0===yt?void 0:yt.toString(),title:M},X),o.createElement(te,{enabledMeasure:Ye&&!nt,text:y,rows:et,width:st,fontSize:mt,onEllipsis:gt},(function(t,n){var a=t;t.length&&n&&yt&&(a=o.createElement("span",{key:"show-content","aria-hidden":!0},a));var i=function(e,t){var n=e.mark,a=e.code,i=e.underline,r=e.delete,c=e.strong,l=e.keyboard,s=e.italic,d=t;function u(e,t){t&&(d=o.createElement(e,{},d))}return u("strong",c),u("u",i),u("del",r),u("code",a),u("mark",n),u("kbd",l),u("i",s),d}(e,o.createElement(o.Fragment,null,a,function(e){return[e&&o.createElement("span",{"aria-hidden":!0,key:"ellipsis"},"..."),Je.suffix,(t=e,[t&&bt(),ht(),xt()])];var t}(n)));return i}))))}))})),ce=re,le=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},se=o.forwardRef((function(e,t){var n=e.ellipsis,a=e.rel,i=le(e,["ellipsis","rel"]),r=Object.assign(Object.assign({},i),{rel:void 0===a&&"_blank"===i.target?"noopener noreferrer":a});return delete r.navigate,o.createElement(ce,Object.assign({},r,{ref:t,ellipsis:!!n,component:"a"}))})),de=o.forwardRef((function(e,t){return o.createElement(ce,Object.assign({ref:t},e,{component:"div"}))})),ue=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},pe=function(e,t){var n=e.ellipsis,a=ue(e,["ellipsis"]),i=o.useMemo((function(){return n&&"object"===typeof n?(0,E.Z)(n,["expandable","rows"]):n}),[n]);return o.createElement(ce,Object.assign({ref:t},a,{ellipsis:i,component:"span"}))},me=o.forwardRef(pe),fe=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},ge=[1,2,3,4,5],ve=o.forwardRef((function(e,t){var n,a=e.level,i=void 0===a?1:a,r=fe(e,["level"]);return n=ge.includes(i)?"h".concat(i):"h1",o.createElement(ce,Object.assign({ref:t},r,{component:n}))})),ye=Q;ye.Text=me,ye.Link=se,ye.Title=ve,ye.Paragraph=de;var be=ye},6998:function(e,t,n){"use strict";var o=n(2458),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,r,c,l,s,d=!1;t||(t={}),n=t.debug||!1;try{if(r=o(),c=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=a[t.format]||a.default;window.clipboardData.setData(i,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(s),c.selectNodeContents(s),l.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(u){n&&console.error("unable to copy using execCommand: ",u),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(u){n&&console.error("unable to copy using clipboardData: ",u),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),s&&document.body.removeChild(s),r()}return d}},2458:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=141.d967b11a.chunk.js.map