'use strict';

require('./chunk-77CZU5XZ.cjs');
var react = require('react');

var L=(e,P,n=1)=>{let[h,s]=react.useState(!1),[d,m]=react.useState({top:0,left:0});return {isVisible:h,popoverPosition:d,handlePointerEvent:r=>{var i,c,p;r==null||r.stopPropagation();let t=((i=e.current)==null?void 0:i.offsetHeight)||40;if(e.current){let l=e.current.getBoundingClientRect(),{scrollY:o,scrollX:v,innerHeight:a}=window,u=l.bottom+o+n,b=l.left+v,H=u+t,g=(p=(c=P.current)==null?void 0:c.offsetHeight)!=null?p:t,E=H>o+a?Math.max(o+a-g-t-n,o)-t-n:u;m({top:E,left:b}),s(!0);}},handlePointerLeave:()=>{s(!1);}}};

exports.usePopover = L;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=hooks.cjs.map