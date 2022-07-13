(function(r,s){typeof exports=="object"&&typeof module!="undefined"?s(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],s):(r=typeof globalThis!="undefined"?globalThis:r||self,s(r.Link={},r.React))})(this,function(r,s){"use strict";function p(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var c=p(s),d={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=c.default,_=Symbol.for("react.element"),v=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,m=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function a(t,e,f){var n,o={},l=null,i=null;f!==void 0&&(l=""+f),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(i=e.ref);for(n in e)b.call(e,n)&&!x.hasOwnProperty(n)&&(o[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)o[n]===void 0&&(o[n]=e[n]);return{$$typeof:_,type:t,key:l,ref:i,props:o,_owner:m.current}}u.Fragment=v,u.jsx=a,u.jsxs=a,d.exports=u;const j=d.exports.jsx,O=({buttonType:t,onClick:e,children:f,styles:n,disabled:o,classes:l,mouseOver:i,...h})=>j("button",{type:t,onClick:()=>{o||e&&e()},onMouseOver:()=>{i&&i()},style:{...{paddingInline:"var(--btn-px, 1.4rem)",paddingBlock:"var(--btn-py, 0.8rem)",display:"var(--btn-dsp, inline-flex)",placeItems:"var(--btn-place, center)",justifyContent:"var(--btn-justify, center)",cursor:"var(--btn-cursor, pointer)"},...n},"aria-disabled":o,...h,children:f});r.Button=O,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=index.umd.js.map
