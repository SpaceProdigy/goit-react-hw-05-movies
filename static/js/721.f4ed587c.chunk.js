"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[721],{2721:function(e,t,n){n.d(t,{ZP:function(){return B}});var r=n(2106),o=n(808),a=n(1534),c=n(2638),i=n(2791),s=(0,i.createContext)(void 0),l=n(6238),u=Object.assign({},l.Z.Modal);function d(e){u=e?Object.assign(Object.assign({},u),e):Object.assign({},l.Z.Modal)}var p=n(2588);var f=function(e){var t=e.locale,n=void 0===t?{}:t,r=e.children;e._ANT_MARK__;i.useEffect((function(){return d(n&&n.Modal),function(){d()}}),[n]);var o=i.useMemo((function(){return Object.assign(Object.assign({},n),{exist:!0})}),[n]);return i.createElement(p.Z.Provider,{value:o},r)},v=n(9831),m=n(7219),g=n(1929),b=n(3742),h=n(9391),y=n(4937),C=n(5561),O="-ant-".concat(Date.now(),"-").concat(Math.random());function j(e,t){var n=function(e,t){var n={},r=function(e,t){var n=e.clone();return(n=(null===t||void 0===t?void 0:t(n))||n).toRgbString()},o=function(e,t){var o=new h.C(e),a=(0,b.R_)(o.toRgbString());n["".concat(t,"-color")]=r(o),n["".concat(t,"-color-disabled")]=a[1],n["".concat(t,"-color-hover")]=a[4],n["".concat(t,"-color-active")]=a[6],n["".concat(t,"-color-outline")]=o.clone().setAlpha(.2).toRgbString(),n["".concat(t,"-color-deprecated-bg")]=a[0],n["".concat(t,"-color-deprecated-border")]=a[2]};if(t.primaryColor){o(t.primaryColor,"primary");var a=new h.C(t.primaryColor),c=(0,b.R_)(a.toRgbString());c.forEach((function(e,t){n["primary-".concat(t+1)]=e})),n["primary-color-deprecated-l-35"]=r(a,(function(e){return e.lighten(35)})),n["primary-color-deprecated-l-20"]=r(a,(function(e){return e.lighten(20)})),n["primary-color-deprecated-t-20"]=r(a,(function(e){return e.tint(20)})),n["primary-color-deprecated-t-50"]=r(a,(function(e){return e.tint(50)})),n["primary-color-deprecated-f-12"]=r(a,(function(e){return e.setAlpha(.12*e.getAlpha())}));var i=new h.C(c[0]);n["primary-color-active-deprecated-f-30"]=r(i,(function(e){return e.setAlpha(.3*e.getAlpha())})),n["primary-color-active-deprecated-d-02"]=r(i,(function(e){return e.darken(2)}))}t.successColor&&o(t.successColor,"success"),t.warningColor&&o(t.warningColor,"warning"),t.errorColor&&o(t.errorColor,"error"),t.infoColor&&o(t.infoColor,"info");var s=Object.keys(n).map((function(t){return"--".concat(e,"-").concat(t,": ").concat(n[t],";")}));return"\n  :root {\n    ".concat(s.join("\n"),"\n  }\n  ").trim()}(e,t);(0,y.Z)()&&(0,C.hq)(n,"".concat(O,"-dynamic-theme"))}var k=n(9125),x=n(1815);var P=function(){return{componentDisabled:(0,i.useContext)(k.Z),componentSize:(0,i.useContext)(x.Z)}},Z=n(2034);var w=n(9439),E=n(8568),M=n(3918);function _(e){var t=e.children,n=(0,M.Z)(),r=(0,w.Z)(n,2)[1].motion,o=i.useRef(!1);return o.current=o.current||!1===r,o.current?i.createElement(E.zt,{motion:r},t):t}var S,A=n(4942),R=n(7521),z=function(e,t){var n=(0,M.Z)(),o=(0,w.Z)(n,2),a=o[0],c=o[1];return(0,r.xy)({theme:a,token:c,hashId:"",path:["ant-design-icons",e],nonce:function(){return null===t||void 0===t?void 0:t.nonce}},(function(){return[(0,A.Z)({},".".concat(e),Object.assign(Object.assign({},(0,R.Ro)()),(0,A.Z)({},".".concat(e," .").concat(e,"-icon"),{display:"block"})))]}))},I=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},T=["getTargetContainer","getPopupContainer","renderEmpty","pageHeader","input","pagination","form","select","button"];function W(){return S||"ant"}var D=function(e){var t=e.children,n=e.csp,u=e.autoInsertSpaceInButton,d=e.alert,p=e.anchor,b=e.form,h=e.locale,y=e.componentSize,C=e.direction,O=e.space,j=e.virtual,P=e.dropdownMatchSelectWidth,w=e.popupMatchSelectWidth,E=e.popupOverflow,M=e.legacyLocale,S=e.parentContext,A=e.iconPrefixCls,R=e.theme,W=e.componentDisabled,D=e.segmented,q=e.statistic,B=e.spin,F=e.calendar,K=e.carousel,L=e.cascader,N=e.collapse,V=e.typography,G=e.checkbox,H=e.descriptions,J=e.divider,Q=e.drawer,U=e.skeleton,X=e.steps,Y=e.image,$=e.layout,ee=e.list,te=e.mentions,ne=e.modal,re=e.progress,oe=e.result,ae=e.slider,ce=e.breadcrumb,ie=e.menu,se=e.pagination,le=e.input,ue=e.empty,de=e.badge,pe=e.radio,fe=e.rate,ve=e.switch,me=e.transfer,ge=e.avatar,be=e.message,he=e.tag,ye=e.table,Ce=e.card,Oe=e.tabs,je=e.timeline,ke=e.timePicker,xe=e.upload,Pe=e.notification,Ze=e.tree,we=e.colorPicker,Ee=e.datePicker;var Me=i.useCallback((function(t,n){var r=e.prefixCls;if(n)return n;var o=r||S.getPrefixCls("");return t?"".concat(o,"-").concat(t):o}),[S.getPrefixCls,e.prefixCls]),_e=A||S.iconPrefixCls||g.oR,Se=_e!==S.iconPrefixCls,Ae=n||S.csp,Re=z(_e,Ae),ze=function(e,t){var n=e||{},r=!1!==n.inherit&&t?t:v.u_;return(0,a.Z)((function(){if(!e)return t;var o=Object.assign({},r.components);return Object.keys(e.components||{}).forEach((function(t){o[t]=Object.assign(Object.assign({},o[t]),e.components[t])})),Object.assign(Object.assign(Object.assign({},r),n),{token:Object.assign(Object.assign({},r.token),n.token),components:o})}),[n,r],(function(e,t){return e.some((function(e,n){var r=t[n];return!(0,Z.Z)(e,r,!0)}))}))}(R,S.theme);var Ie={csp:Ae,autoInsertSpaceInButton:u,alert:d,anchor:p,locale:h||M,direction:C,space:O,virtual:j,popupMatchSelectWidth:null!==w&&void 0!==w?w:P,popupOverflow:E,getPrefixCls:Me,iconPrefixCls:_e,theme:ze,segmented:D,statistic:q,spin:B,calendar:F,carousel:K,cascader:L,collapse:N,typography:V,checkbox:G,descriptions:H,divider:J,drawer:Q,skeleton:U,steps:X,image:Y,input:le,layout:$,list:ee,mentions:te,modal:ne,progress:re,result:oe,slider:ae,breadcrumb:ce,menu:ie,pagination:se,empty:ue,badge:de,radio:pe,rate:fe,switch:ve,transfer:me,avatar:ge,message:be,tag:he,table:ye,card:Ce,tabs:Oe,timeline:je,timePicker:ke,upload:xe,notification:Pe,tree:Ze,colorPicker:we,datePicker:Ee},Te=Object.assign({},S);Object.keys(Ie).forEach((function(e){void 0!==Ie[e]&&(Te[e]=Ie[e])})),T.forEach((function(t){var n=e[t];n&&(Te[t]=n)}));var We=(0,a.Z)((function(){return Te}),Te,(function(e,t){var n=Object.keys(e),r=Object.keys(t);return n.length!==r.length||n.some((function(n){return e[n]!==t[n]}))})),De=i.useMemo((function(){return{prefixCls:_e,csp:Ae}}),[_e,Ae]),qe=Se?Re(t):t,Be=i.useMemo((function(){var e,t,n,r;return(0,c.T)((null===(e=l.Z.Form)||void 0===e?void 0:e.defaultValidateMessages)||{},(null===(n=null===(t=We.locale)||void 0===t?void 0:t.Form)||void 0===n?void 0:n.defaultValidateMessages)||{},(null===(r=We.form)||void 0===r?void 0:r.validateMessages)||{},(null===b||void 0===b?void 0:b.validateMessages)||{})}),[We,null===b||void 0===b?void 0:b.validateMessages]);Object.keys(Be).length>0&&(qe=i.createElement(s.Provider,{value:Be},t)),h&&(qe=i.createElement(f,{locale:h,_ANT_MARK__:"internalMark"},qe)),(_e||Ae)&&(qe=i.createElement(o.Z.Provider,{value:De},qe)),y&&(qe=i.createElement(x.q,{size:y},qe)),qe=i.createElement(_,null,qe);var Fe=i.useMemo((function(){var e=ze||{},t=e.algorithm,n=e.token,o=I(e,["algorithm","token"]),a=t&&(!Array.isArray(t)||t.length>0)?(0,r.jG)(t):void 0;return Object.assign(Object.assign({},o),{theme:a,token:Object.assign(Object.assign({},m.Z),n)})}),[ze]);return R&&(qe=i.createElement(v.Mj.Provider,{value:Fe},qe)),void 0!==W&&(qe=i.createElement(k.n,{disabled:W},qe)),i.createElement(g.E_.Provider,{value:We},qe)},q=function(e){var t=i.useContext(g.E_),n=i.useContext(p.Z);return i.createElement(D,Object.assign({parentContext:t,legacyLocale:n},e))};q.ConfigContext=g.E_,q.SizeContext=x.Z,q.config=function(e){var t=e.prefixCls,n=e.iconPrefixCls,r=e.theme;void 0!==t&&(S=t),void 0!==n&&n,r&&(!function(e){return Object.keys(e).some((function(e){return e.endsWith("Color")}))}(r)?r:j(W(),r))},q.useConfig=P,Object.defineProperty(q,"SizeContext",{get:function(){return x.Z}});var B=q}}]);
//# sourceMappingURL=721.f4ed587c.chunk.js.map