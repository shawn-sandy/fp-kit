(function(n,o){typeof exports=="object"&&typeof module!="undefined"?o(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],o):(n=typeof globalThis!="undefined"?globalThis:n||self,o(n.Link={},n.React))})(this,function(n,o){"use strict";function a(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var c=a(o),p={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=c.default,_=Symbol.for("react.element"),v=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,b=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,f){var r,s={},i=null,l=null;f!==void 0&&(i=""+f),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)m.call(t,r)&&!x.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:_,type:e,key:i,ref:l,props:s,_owner:b.current}}u.Fragment=v,u.jsx=d,u.jsxs=d,p.exports=u;const j=p.exports.jsx,O=({buttonType:e,onClick:t,children:f,styles:r,classes:s,...i})=>j("button",{type:e,onClick:t,style:{...{paddingInline:"var(--btn-px, 1.4rem)",paddingBlock:"var(--btn-py, 0.8rem)",display:"var(--btn-dsp, inline-flex)",placeItems:"var(--btn-place, center)",justifyContent:"var(--btn-justify, center)",cursor:"var(--btn-cursor, pointer)"},...r},...i,children:f});n.Button=O,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=index.umd.js.map
