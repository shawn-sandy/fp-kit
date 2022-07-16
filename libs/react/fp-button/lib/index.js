import Te from "react";
var Oe = { exports: {} }, A = {};
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var _e;
function or() {
  if (_e)
    return A;
  _e = 1;
  var _ = Te, T = Symbol.for("react.element"), j = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, k = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(h, l, O) {
    var v, p = {}, S = null, $ = null;
    O !== void 0 && (S = "" + O), l.key !== void 0 && (S = "" + l.key), l.ref !== void 0 && ($ = l.ref);
    for (v in l)
      g.call(l, v) && !R.hasOwnProperty(v) && (p[v] = l[v]);
    if (h && h.defaultProps)
      for (v in l = h.defaultProps, l)
        p[v] === void 0 && (p[v] = l[v]);
    return { $$typeof: T, type: h, key: S, ref: $, props: p, _owner: k.current };
  }
  return A.Fragment = j, A.jsx = y, A.jsxs = y, A;
}
var I = {};
/**
* @license React
* react-jsx-runtime.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Re;
function ur() {
  return Re || (Re = 1, process.env.NODE_ENV !== "production" && function() {
    var _ = Te, T = Symbol.for("react.element"), j = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), h = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), H = Symbol.iterator, Se = "@@iterator";
    function Ce(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = H && e[H] || e[Se];
      return typeof r == "function" ? r : null;
    }
    var P = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Pe("error", e, t);
      }
    }
    function Pe(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var we = !1, xe = !1, je = !1, ke = !1, De = !1, X;
    X = Symbol.for("react.module.reference");
    function Fe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === R || De || e === k || e === O || e === v || ke || e === $ || we || xe || je || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === p || e.$$typeof === y || e.$$typeof === h || e.$$typeof === l || e.$$typeof === X || e.getModuleId !== void 0));
    }
    function Ae(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function Z(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case j:
          return "Portal";
        case R:
          return "Profiler";
        case k:
          return "StrictMode";
        case O:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var r = e;
            return Z(r) + ".Consumer";
          case y:
            var t = e;
            return Z(t._context) + ".Provider";
          case l:
            return Ae(e, e.render, "ForwardRef");
          case p:
            var n = e.displayName || null;
            return n !== null ? n : E(e.type) || "Memo";
          case S: {
            var o = e, u = o._payload, i = o._init;
            try {
              return E(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, D = 0, Q, ee, re, te, ne, ae, ie;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function Ie() {
      {
        if (D === 0) {
          Q = console.log, ee = console.info, re = console.warn, te = console.error, ne = console.group, ae = console.groupCollapsed, ie = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: oe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function $e() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: Q
            }),
            info: C({}, e, {
              value: ee
            }),
            warn: C({}, e, {
              value: re
            }),
            error: C({}, e, {
              value: te
            }),
            group: C({}, e, {
              value: ne
            }),
            groupCollapsed: C({}, e, {
              value: ae
            }),
            groupEnd: C({}, e, {
              value: ie
            })
          });
        }
        D < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = P.ReactCurrentDispatcher, M;
    function W(e, r, t) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            M = n && n[1] || "";
          }
        return `
` + M + e;
      }
    }
    var B = !1, Y;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new We();
    }
    function ue(e, r) {
      if (!e || B)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = U.current, U.current = null, Ie();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (m) {
              n = m;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (m) {
              n = m;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (m) {
            n = m;
          }
          e();
        }
      } catch (m) {
        if (m && n && typeof m.stack == "string") {
          for (var a = m.stack.split(`
`), d = n.stack.split(`
`), s = a.length - 1, f = d.length - 1; s >= 1 && f >= 0 && a[s] !== d[f]; )
            f--;
          for (; s >= 1 && f >= 0; s--, f--)
            if (a[s] !== d[f]) {
              if (s !== 1 || f !== 1)
                do
                  if (s--, f--, f < 0 || a[s] !== d[f]) {
                    var b = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, b), b;
                  }
                while (s >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        B = !1, U.current = u, $e(), Error.prepareStackTrace = o;
      }
      var x = e ? e.displayName || e.name : "", me = x ? W(x) : "";
      return typeof e == "function" && Y.set(e, me), me;
    }
    function Ye(e, r, t) {
      return ue(e, !1);
    }
    function Le(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ue(e, Le(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case O:
          return W("Suspense");
        case v:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Ye(e.render);
          case p:
            return L(e.type, r, t);
          case S: {
            var n = e, o = n._payload, u = n._init;
            try {
              return L(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, se = {}, fe = P.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        fe.setExtraStackFrame(t);
      } else
        fe.setExtraStackFrame(null);
    }
    function Ne(e, r, t, n, o) {
      {
        var u = Function.call.bind(N);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (V(o), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), V(null)), a instanceof Error && !(a.message in se) && (se[a.message] = !0, V(o), c("Failed %s type: %s", t, a.message), V(null));
          }
      }
    }
    var Ve = Array.isArray;
    function q(e) {
      return Ve(e);
    }
    function Ue(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Me(e) {
      try {
        return le(e), !1;
      } catch {
        return !0;
      }
    }
    function le(e) {
      return "" + e;
    }
    function ce(e) {
      if (Me(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ue(e)), le(e);
    }
    var F = P.ReactCurrentOwner, Be = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, de, ve, J;
    J = {};
    function qe(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Je(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ge(e, r) {
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var t = E(F.current.type);
        J[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(F.current.type), e.ref), J[t] = !0);
      }
    }
    function ze(e, r) {
      {
        var t = function() {
          de || (de = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          ve || (ve = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var He = function(e, r, t, n, o, u, i) {
      var a = {
        $$typeof: T,
        type: e,
        key: r,
        ref: t,
        props: i,
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Xe(e, r, t, n, o) {
      {
        var u, i = {}, a = null, d = null;
        t !== void 0 && (ce(t), a = "" + t), Je(r) && (ce(r.key), a = "" + r.key), qe(r) && (d = r.ref, Ge(r, o));
        for (u in r)
          N.call(r, u) && !Be.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || d) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && ze(i, f), d && Ke(i, f);
        }
        return He(e, a, d, o, n, F.current, i);
      }
    }
    var G = P.ReactCurrentOwner, pe = P.ReactDebugCurrentFrame;
    function w(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === T;
    }
    function be() {
      {
        if (G.current) {
          var e = E(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ze(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var ge = {};
    function Qe(e) {
      {
        var r = be();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ye(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = Qe(r);
        if (ge[t])
          return;
        ge[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + E(e._owner.type) + "."), w(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), w(null);
      }
    }
    function he(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            K(n) && ye(n, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = Ce(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              K(i.value) && ye(i.value, r);
        }
      }
    }
    function er(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || r.$$typeof === p))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = E(r);
          Ne(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var o = E(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            w(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), w(null);
            break;
          }
        }
        e.ref !== null && (w(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), w(null));
      }
    }
    function Ee(e, r, t, n, o, u) {
      {
        var i = Fe(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = Ze(o);
          d ? a += d : a += be();
          var s;
          e === null ? s = "null" : q(e) ? s = "array" : e !== void 0 && e.$$typeof === T ? (s = "<" + (E(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var f = Xe(e, r, t, o, u);
        if (f == null)
          return f;
        if (i) {
          var b = r.children;
          if (b !== void 0)
            if (n)
              if (q(b)) {
                for (var x = 0; x < b.length; x++)
                  he(b[x], e);
                Object.freeze && Object.freeze(b);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              he(b, e);
        }
        return e === g ? rr(f) : er(f), f;
      }
    }
    function tr(e, r, t) {
      return Ee(e, r, t, !0);
    }
    function nr(e, r, t) {
      return Ee(e, r, t, !1);
    }
    var ar = nr, ir = tr;
    I.Fragment = g, I.jsx = ar, I.jsxs = ir;
  }()), I;
}
(function(_) {
  process.env.NODE_ENV === "production" ? _.exports = or() : _.exports = ur();
})(Oe);
const sr = Oe.exports.jsx, lr = ({
  type: _,
  children: T,
  styles: j,
  disabled: g,
  classes: k,
  onClick: R,
  onMouseOver: y,
  ...h
}) => /* @__PURE__ */ sr("button", {
  type: _,
  onClick: (p) => {
    g || R == null || R(p);
  },
  onMouseOver: (p) => {
    y == null || y(p);
  },
  style: {
    ...{
      paddingInline: "var(--btn-px, 1.4rem)",
      paddingBlock: "var(--btn-py, 0.8rem)",
      display: "var(--btn-dsp, inline-flex)",
      placeItems: "var(--btn-place, center)",
      justifyContent: "var(--btn-justify, center)",
      cursor: "var(--btn-cursor, pointer)",
      border: "var(--btn-border, none)"
    },
    ...j
  },
  "aria-disabled": g,
  ...h,
  children: T
});
export {
  lr as Button
};
//# sourceMappingURL=index.js.map
