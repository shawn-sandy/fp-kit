(function(o,n){typeof exports=="object"&&typeof module!="undefined"?n(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],n):(o=typeof globalThis!="undefined"?globalThis:o||self,n(o.Link={},o.React))})(this,function(o,n){"use strict";function _(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var c=_(n),p={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=c.default,y=Symbol.for("react.element"),m=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,x=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,f){var r,i={},s=null,l=null;f!==void 0&&(s=""+f),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)v.call(t,r)&&!j.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:y,type:e,key:s,ref:l,props:i,_owner:x.current}}u.Fragment=m,u.jsx=d,u.jsxs=d,p.exports=u;const O=p.exports.jsx,b=({buttonType:e,onClick:t,children:f})=>O("button",{type:e,onClick:t,children:f});o.Button=b,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=index.umd.js.map
