import { a } from './chunk-GJWMCDFS.js'
export { a as Box, a as FP, q as Icon, a as Tag } from './chunk-GJWMCDFS.js'
import { c, b, a as a$1 } from './chunk-PCDUGD3C.js'
import { jsx, jsxs, Fragment } from 'react/jsx-runtime'
import Se from 'react'

var ae = {
    paddingInline: 'var(--badge-px, 0.7rem)',
    paddingBlock: 'var(--badge-py, 0.2rem)',
    color: 'var(--badge-cl, black)',
    fontSize: 'var(--badge-fs, 0.8rem)',
    fontWeight: 'var(--badge-fw, normal)',
    fontFamily: 'var(--badge-ff, sans-serif)',
    border: 'var(--badge-brd, none)',
    borderRadius: 'var(--badge-rds, 99rem)',
    backgroundColor: 'var(--badge-bg, "blue")',
    textDecoration: 'var(--badge-decoration, none)',
    textTransform: 'var(--badge-tt, var(--tt))',
  },
  D = (i) => {
    var m = i,
      {
        elm: o = 'span',
        role: t,
        children: r,
        renderStyles: e = !0,
        styles: a$2 = {},
      } = m,
      p = c(m, ['elm', 'role', 'children', 'renderStyles', 'styles'])
    return jsx(a, b(a$1({ as: o, role: t, styles: a$2 }, p), { children: r }))
  }
D.styles = ae
D.displayName = 'Badge'
var se = {
    paddingInline: 'var(--btn-px, 1.4rem)',
    paddingBlock: 'var(--btn-py, 0.8rem)',
    display: 'var(--btn-dsp, inline-flex)',
    placeItems: 'var(--btn-place, center)',
    justifyContent: 'var(--btn-justify, center)',
    cursor: 'var(--btn-cursor, pointer)',
    border: 'var(--btn-border, none)',
    color: 'var(--btn-color, white)',
    backgroundColor: 'var(--btn-bg, royalblue)',
    borderRadius: 'var(--btn-radius, 0.2rem)',
  },
  E = (c$1) => {
    var f = c$1,
      {
        type: o = 'button',
        children: t,
        styles: r,
        disabled: e,
        classes: a,
        pointerDown: p,
        pointerOver: i,
        pointerLeave: m,
      } = f,
      y = c(f, [
        'type',
        'children',
        'styles',
        'disabled',
        'classes',
        'pointerDown',
        'pointerOver',
        'pointerLeave',
      ])
    return jsx(
      'button',
      b(
        a$1(
          {
            type: o,
            onPointerOver: (v) => {
              e || i == null || i(v)
            },
            onPointerDown: (v) => {
              e || p == null || p(v)
            },
            onPointerLeave: (v) => {
              e || m == null || m(v)
            },
            style: r,
            'aria-disabled': e,
          },
          y,
        ),
        { children: t },
      ),
    )
  }
E.styles = se
E.displayName = 'Button'
var pe = {
    padding: 'var(--card-p, 2rem)',
    backgroundColor: 'var(--card-bg, white)',
    boxShadow: 'var(--card-shadow, 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1))',
    borderRadius: 'var(--card-rds, 0.2\xDFrem)',
    border: 'var(--card-brd, none)',
    color: 'var(--card-cl, black)',
  },
  A = (m) => {
    var y = m,
      {
        elm: o = 'div',
        styles: t,
        children: r,
        renderStyles: e = !0,
        dataStyle: a$2,
        id: p,
      } = y,
      i = c(y, ['elm', 'styles', 'children', 'renderStyles', 'dataStyle', 'id'])
    return jsx(
      a,
      b(
        a$1({ as: o, id: p, styles: t, renderStyles: e, 'data-card': a$2 }, i),
        { children: r },
      ),
    )
  }
A.styles = pe
A.displayName = 'Card'
var L = (p) => {
  var i = p,
    { id: o, children: t, modalRef: r, openOnMount: e } = i,
    a$2 = c(i, ['id', 'children', 'modalRef', 'openOnMount'])
  return jsx(
    a,
    b(
      a$1(
        {
          as: 'dialog',
          id: o,
          ref: r,
          open: e,
          onClick: (y) => {
            y.currentTarget === y.target && y.currentTarget.close()
          },
        },
        a$2,
      ),
      { children: t },
    ),
  )
}
L.displayName = 'Dialog'
var me = {
    padding: 'var(--card-p, 1.2rem)',
    backgroundColor: 'var(--card-bg, white)',
  },
  F = (i) => {
    var m = i,
      {
        title: o,
        children: t,
        styles: r,
        renderStyles: e = !0,
        onToggle: a$1,
      } = m
    c(m, ['title', 'children', 'styles', 'renderStyles', 'onToggle'])
    return jsx(a, {
      as: 'details',
      title: o,
      onToggle: (c) => {
        a$1 == null || a$1(c)
      },
      styles: r,
      children: t,
    })
  }
F.styles = me
F.displayName = 'Details'
var ye = {
    listStyle: 'none',
    justifyContent: 'var(--summary-justify, space-between)',
    color: 'var(--summary-color, currentColor)',
    cursor: 'var(--detail-cursor, pointer)',
  },
  N = (a$2) => {
    var p = a$2,
      { children: o, styles: t, renderStyles: r = !0 } = p,
      e = c(p, ['children', 'styles', 'renderStyles'])
    return jsx(a, b(a$1({ as: 'summary', styles: t }, e), { children: o }))
  }
N.styles = ye
N.displayName = 'Summary'
var ue = {
    display: 'flex',
    placeContent: 'flex-start',
    placeItems: 'center',
    gap: '.7rem',
    border: 'var(--summary-border, solid 1px #ccc)',
    transition: 'all 0.2s ease',
    backgroundColor: 'var(--summary-bg, whitesmoke)',
    padding: 'var(--details-pd, 1.2rem)',
    minWidth: 'var(--summary-min-w, 80vw)',
    maxWidth: 'var(--summary-min-w, 80vw)',
  },
  M = (i) => {
    var m = i,
      {
        styles: o,
        children: t,
        summary: r,
        toggle: e,
        renderStyles: a = !0,
      } = m,
      p = c(m, ['styles', 'children', 'summary', 'toggle', 'renderStyles'])
    return jsxs(
      F,
      b(a$1({ styles: o, onToggle: e }, p), {
        children: [jsx(N, { children: r }), t],
      }),
    )
  }
M.styles = ue
M.Summary = N
M.Details = F
M.displayName = 'Dropdown'
var xe = {},
  O = (p) => {
    var i = p,
      { labelFor: o, styles: t, label: r, children: e } = i
    c(i, ['labelFor', 'styles', 'label', 'children'])
    return jsxs(a, {
      as: 'div',
      styles: t,
      'data-style': 'fields',
      children: [jsx('label', { htmlFor: o, children: r }), e],
    })
  }
O.styles = xe
O.displayName = 'Field'
var V = (e) => {
    var a$2 = e,
      { children: o, styles: t = {} } = a$2,
      r = c(a$2, ['children', 'styles'])
    return jsx(
      a,
      b(a$1({ as: 'header' }, r), {
        styles: t,
        children: jsx(a, { as: 'section', children: o }),
      }),
    )
  },
  X = (e) => {
    var a$2 = e,
      { children: o, styles: t = {} } = a$2,
      r = c(a$2, ['children', 'styles'])
    return jsx(a, b(a$1({ as: 'main', styles: t }, r), { children: o }))
  },
  _ = (e) => {
    var a$2 = e,
      { children: o, styles: t = {} } = a$2,
      r = c(a$2, ['children', 'styles'])
    return jsx(
      a,
      b(a$1({ as: 'footer', styles: t }, r), {
        children: jsx(a, {
          as: 'section',
          children: o || 'Copyright \xA9 2022',
        }),
      }),
    )
  },
  G = (e) => {
    var a$2 = e,
      { children: o, styles: t = {} } = a$2,
      r = c(a$2, ['children', 'styles'])
    return jsx(
      a,
      b(a$1({ as: 'aside', styles: t }, r), {
        children: jsx(a, { as: 'section', children: o }),
      }),
    )
  },
  Q = (e) => {
    var a$2 = e,
      { children: o, styles: t = {} } = a$2,
      r = c(a$2, ['children', 'styles'])
    return jsx(a, b(a$1({ as: 'section', styles: t }, r), { children: o }))
  },
  U = (e) => {
    var a$2 = e,
      { children: o, styles: t = {} } = a$2,
      r = c(a$2, ['children', 'styles'])
    return jsx(a, b(a$1({ as: 'article', styles: t }, r), { children: o }))
  }
V.displayName = 'Header'
X.displayName = 'Main'
_.displayName = 'Footer'
G.displayName = 'Aside'
Q.displayName = 'Section'
U.displayName = 'Article'
var he = {
    maxWidth: 'var(--img-w, 100%)',
    height: 'var(--img-h, auto)',
    objectFit: 'var(--img-obj-fit, cover)',
    objectPosition: 'var(--img-position, center center)',
    aspectRatio: 'var(--img-ratio, auto 2/3)',
    display: 'var(--img-display, initial)',
  },
  K = (b) => {
    var P = b,
      {
        src: o,
        alt: t,
        width: r = 480,
        height: e,
        styles: a$2,
        loading: p = 'lazy',
        placeholder: i = `https://via.placeholder.com/${r}?text=PLACEHOLDER`,
        fetchpriority: m = 'low',
        decoding: y = 'auto',
        imgLoaded: c$1,
        imgError: f,
      } = P,
      u = c(P, [
        'src',
        'alt',
        'width',
        'height',
        'styles',
        'loading',
        'placeholder',
        'fetchpriority',
        'decoding',
        'imgLoaded',
        'imgError',
      ])
    return jsx(
      a,
      a$1(
        {
          as: 'img',
          src: o,
          alt: t,
          width: r,
          height: e || 'auto',
          loading: p,
          style: a$2,
          onError: (x) => {
            if (f) {
              f == null || f(x)
              return
            }
            x.currentTarget.src !== i && (x.currentTarget.src = i)
          },
          onLoad: (x) => {
            c$1 == null || c$1(x)
          },
        },
        u,
      ),
    )
  }
K.styles = he
K.displayName = 'Img'
var Re = { minWidth: 'var(--input-min-w, 60%)' },
  W = (k) => {
    var x = k,
      {
        type: o = 'text',
        name: t,
        value: r,
        placeholder: e,
        id: a$2,
        styles: p,
        classes: i,
        isDisabled: m,
        readonly: y,
        required: c$1,
        inputRef: f,
        inputChange: u,
        inputBlur: b,
        inputDown: P,
      } = x,
      v = c(x, [
        'type',
        'name',
        'value',
        'placeholder',
        'id',
        'styles',
        'classes',
        'isDisabled',
        'readonly',
        'required',
        'inputRef',
        'inputChange',
        'inputBlur',
        'inputDown',
      ])
    return jsx(
      a,
      a$1(
        {
          as: 'input',
          id: a$2,
          type: o,
          placeholder: e,
          className: i,
          styles: p,
          onChange: (C) => {
            u && !m && (u == null || u(C))
          },
          onBlur: (C) => {
            b && !m && (b == null || b(C))
          },
          onKeyDown: (C) => {
            P && !m && (C.preventDefault(), P == null || P(C))
          },
          value: r,
          name: t,
          ref: f,
          'aria-disabled': m,
          'tab-index': m ? -1 : void 0,
          'aria-readonly': y,
          readOnly: y,
        },
        v,
      ),
    )
  }
W.styles = Re
W.displayName = 'Input'
var q = (y) => {
    var c$1 = y,
      {
        href: o,
        target: t,
        rel: r,
        children: e,
        styles: a$2 = {},
        prefetch: p = !0,
        onPointerDown: i,
      } = c$1,
      m = c(c$1, [
        'href',
        'target',
        'rel',
        'children',
        'styles',
        'prefetch',
        'onPointerDown',
      ])
    let f = r
    return (
      t === '_blank' && (f = `noopener noreferrer ${p ? 'prefetch' : ''}`),
      jsx(
        a,
        b(
          a$1(
            {
              as: 'a',
              href: o,
              target: t,
              styles: a$2,
              rel: f,
              onPointerDown: (b) => {
                i && (i == null || i(b))
              },
            },
            m,
          ),
          { children: e != null ? e : 'Link' },
        ),
      )
    )
  },
  Ee = q
q.displayName = 'Link'
var Ne = (i) => {
  var m = i,
    { children: o, classes: t, type: r = 'ul', variant: e, styles: a$2 } = m,
    p = c(m, ['children', 'classes', 'type', 'variant', 'styles'])
  return jsx(
    a,
    b(a$1({ as: r, 'data-variant': e, className: t, style: a$2 }, p), {
      children: o,
    }),
  )
}
var Y = (m) => {
  var y = m,
    {
      openChild: o,
      closeChild: t,
      modalHeader: r,
      modalFooter: e,
      children: a,
      showOpen: p = !1,
    } = y,
    i = c(y, [
      'openChild',
      'closeChild',
      'modalHeader',
      'modalFooter',
      'children',
      'showOpen',
    ])
  let c$1 = Se.useRef(null),
    f = () => {
      c$1.current && (p ? c$1.current.show() : c$1.current.showModal())
    },
    u = () => {
      c$1.current && c$1.current.close()
    }
  return jsxs(Fragment, {
    children: [
      jsx(
        L,
        b(a$1({ modalRef: c$1, openOnMount: p }, i), {
          children: jsxs('section', {
            children: [
              r,
              a,
              e != null
                ? e
                : jsxs('div', {
                    children: [
                      jsx(E, {
                        type: 'button',
                        pointerDown: () => {
                          u()
                        },
                        children: t || 'Close',
                      }),
                      ' ',
                    ],
                  }),
            ],
          }),
        }),
      ),
      !p &&
        jsx(E, { type: 'button', pointerDown: f, children: o || 'Open Modal' }),
    ],
  })
}
Y.displayName = 'Modal'
var H = (r) => {
    var e = r,
      { children: o } = e,
      t = c(e, ['children'])
    return jsx(a, b(a$1({ as: 'caption' }, t), { children: o }))
  },
  I = (r) => {
    var e = r,
      { children: o } = e,
      t = c(e, ['children'])
    return jsx(a, b(a$1({ as: 'thead' }, t), { children: o }))
  },
  S = (r) => {
    var e = r,
      { children: o } = e,
      t = c(e, ['children'])
    return jsx(a, b(a$1({ as: 'tbody' }, t), { children: o }))
  },
  w = (r) => {
    var e = r,
      { children: o } = e,
      t = c(e, ['children'])
    return jsx(a, b(a$1({ as: 'tr' }, t), { children: o }))
  },
  Z = (r) => {
    var e = r,
      { children: o } = e,
      t = c(e, ['children'])
    return jsx(a, b(a$1({ as: 'td' }, t), { children: o }))
  },
  B = (a$2) => {
    var p = a$2,
      { id: o, dataStyle: t, children: r } = p,
      e = c(p, ['id', 'dataStyle', 'children'])
    return jsx(
      a,
      b(a$1({ as: 'section', id: o }, e), {
        'data-style': 'table-wrapper',
        children: jsx('table', { children: r }),
      }),
    )
  }
B.displayName = 'Table'
H.displayName = 'Caption'
I.displayName = 'Thead'
S.displayName = 'Tbody'
w.displayName = 'Tr'
Z.displayName = 'Td'
var j = ({ tblBody: o, tblCaption: t, tblHead: r }) =>
  jsxs(B, {
    children: [
      t && jsx(H, { children: t }),
      jsx(I, { children: jsx(w, { children: r }) }),
      jsx(S, { children: o }),
    ],
  })
j.displayName = 'TBL'
var ee = (p) => {
    var i = p,
      { elm: o = 'p', text: t, styles: r, children: e } = i,
      a$2 = c(i, ['elm', 'text', 'styles', 'children'])
    return jsx(a, b(a$1({ as: o, styles: r }, a$2), { children: e || t }))
  },
  te = (a$2) => {
    var p = a$2,
      { elm: o = 'h3', children: t, styles: r } = p,
      e = c(p, ['elm', 'children', 'styles'])
    return jsx(a, b(a$1({ as: o, styles: r }, e), { children: t }))
  }
ee.displayName = 'Text'
te.displayName = 'Title'
var ke = {},
  oe = (b) => {
    var P = b,
      {
        value: o,
        rows: t,
        cols: r,
        id: e,
        required: a$2,
        disabled: p,
        readonly: i,
        textareaBlur: m,
        textareaChange: y,
        textareaDown: c$1,
        textareaRef: f,
      } = P,
      u = c(P, [
        'value',
        'rows',
        'cols',
        'id',
        'required',
        'disabled',
        'readonly',
        'textareaBlur',
        'textareaChange',
        'textareaDown',
        'textareaRef',
      ])
    let v = (R) => {
        y && !p && y(R)
      },
      k = (R) => {
        m && !p && (m == null || m(R))
      },
      x = (R) => {
        c$1 && !p && (c$1 == null || c$1(R))
      }
    return jsx(
      a,
      a$1(
        {
          as: 'textarea',
          ref: f,
          rows: t,
          cols: r,
          styles: a$1({}, ke),
          'data-style': 'textarea',
          id: e,
          required: a$2,
          value: o,
          'aria-disabled': p,
          readOnly: i,
          onChange: v,
          onBlur: k,
          onKeyDown: x,
        },
        u,
      ),
    )
  }
oe.displayName = 'Textarea'

export {
  U as Article,
  G as Aside,
  D as Badge,
  E as Button,
  H as Caption,
  A as Card,
  L as Dialog,
  M as Dropdown,
  O as Field,
  _ as Footer,
  V as Header,
  K as Img,
  W as Input,
  q as Link,
  Ne as List,
  X as Main,
  Y as Modal,
  Q as Section,
  j as TBL,
  B as Table,
  S as Tbody,
  Z as Td,
  ee as Text,
  oe as Textarea,
  I as Thead,
  te as Title,
  Ee as To,
  w as Tr,
}
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map
