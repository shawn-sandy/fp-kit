import { c, a, b } from './chunk-PCDUGD3C.js'
import j from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'

var oo = j.forwardRef((a$1, c$1) => {
    var f = a$1,
      {
        as: r,
        renderStyles: l = !0,
        styles: s,
        children: p,
        defaultStyles: i,
      } = f,
      m = c(f, ['as', 'renderStyles', 'styles', 'children', 'defaultStyles'])
    let d = r || 'div',
      $ = l ? a(a({}, i), s) : {}
    return jsx(d, b(a({ ref: c$1, style: $ }, m), { children: p }))
  }),
  Y = oo
var to = { display: 'inline-flex', alignItems: 'center', width: 'auto' },
  M = (f) => {
    var d = f,
      {
        fill: r = 'currentColor',
        strokeColor: l,
        styles: s,
        size: p,
        role: i = 'img',
        alt: m,
        children: c$1,
      } = d,
      a$1 = c(d, [
        'fill',
        'strokeColor',
        'styles',
        'size',
        'role',
        'alt',
        'children',
      ])
    return jsx(
      'svg',
      b(
        a(
          {
            height: p,
            width: p,
            viewBox: '0 0 24 24',
            xmlns: 'http://www.w3.org/2000/svg',
            style: s,
            role: i,
            'aria-label': m,
          },
          a$1,
        ),
        { children: c$1 },
      ),
    )
  },
  t = M
M.displayName = 'Svg'
M.styles = to
var lo = b(a({}, t.styles), { fill: 'none', stroke: 'currentColor' }),
  N = (a$1 = {}) => {
    var f = a$1,
      {
        strokeColor: r = 'currentColor',
        fill: l = 'none',
        size: s = 16,
        styles: p,
        role: i = 'img',
        alt: m = 'Code icon',
      } = f,
      c$1 = c(f, ['strokeColor', 'fill', 'size', 'styles', 'role', 'alt'])
    return jsx(
      t,
      b(a({ size: s, role: i, alt: m, styles: p }, c$1), {
        children: jsxs('g', {
          fill: l,
          stroke: r,
          strokeLinecap: 'square',
          strokeLinejoin: 'miter',
          strokeMiterlimit: '10',
          strokeWidth: '2',
          children: [
            jsx('rect', {
              height: '22',
              width: '18',
              fill: 'none',
              stroke: r,
              x: '3',
              y: '1',
            }),
            jsx('polyline', { fill: 'none', points: '9 9 6 12 9 15' }),
            jsx('polyline', { fill: 'none', points: '15 15 18 12 15 9' }),
          ],
        }),
      }),
    )
  }
N.styles = lo
var _ = b(a({}, t.styles), { fill: 'currentColor', stroke: 'none' }),
  k = (a$1) => {
    var f = a$1,
      {
        strokeColor: r = 'currentColor',
        fill: l = 'none',
        size: s = 16,
        styles: p = _,
        role: i = 'img',
        alt: m = 'Home icon',
      } = f,
      c$1 = c(f, ['strokeColor', 'fill', 'size', 'styles', 'role', 'alt'])
    return jsx(
      t,
      b(a({ size: s, styles: p, role: i, alt: m }, c$1), {
        children: jsx('g', {
          fill: l,
          stroke: r,
          strokeLinecap: 'square',
          strokeLinejoin: 'miter',
          strokeMiterlimit: '10',
          strokeWidth: '2',
          children: jsx('polygon', {
            fill: 'none',
            points: '12 2 2 10 2 23 9 23 9 16 15 16 15 23 22 23 22 10 12 2',
            stroke: r,
          }),
        }),
      }),
    )
  }
k.displayName = 'Home'
k.styles = _
var io = b(a({}, t.styles), { fill: 'currentColor' }),
  P = (m) => {
    var c$1 = m,
      {
        fill: r = 'currentColor',
        size: l = 24,
        role: s = 'img',
        alt: p = 'Add icon',
      } = c$1,
      i = c(c$1, ['fill', 'size', 'role', 'alt'])
    return jsx(
      t,
      b(a({ size: l, role: s, alt: p }, i), {
        children: jsx('g', {
          fill: r,
          children: jsx('path', {
            d: 'M17,11h-4V7c0-.553-.447-1-1-1s-1,.447-1,1v4H7c-.553,0-1,.447-1,1s.447,1,1,1h4v4c0,.553,.447,1,1,1s1-.447,1-1v-4h4c.553,0,1-.447,1-1s-.447-1-1-1Z',
            fill: r,
          }),
        }),
      }),
    )
  }
P.styles = io
P.displayName = 'Add'
var no = a({}, t.styles),
  u = (a$1) => {
    var f = a$1,
      {
        strokeColor: r = 'currentColor',
        fill: l = 'currentColor',
        size: s = 16,
        styles: p,
        role: i = 'img',
        alt: m = 'Arrow pointing left',
      } = f,
      c$1 = c(f, ['strokeColor', 'fill', 'size', 'styles', 'role', 'alt'])
    return jsx(
      t,
      b(a({ size: s, styles: p, role: i }, c$1), {
        alt: m,
        children: jsxs('g', {
          fill: l,
          strokeMiterlimit: '10',
          children: [
            jsx('line', {
              fill: 'none',
              stroke: r,
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeWidth: '2',
              x1: '22',
              x2: '2',
              y1: '12',
              y2: '12',
            }),
            jsx('polyline', {
              fill: 'none',
              points: '9,19 2,12 9,5 ',
              stroke: r,
              strokeLinecap: 'square',
              strokeLinejoin: 'miter',
              strokeWidth: '2',
            }),
          ],
        }),
      }),
    )
  }
u.styles = no
u.displayName = 'ArrowLeft'
var mo = a({}, t.styles),
  C = (c$1) => {
    var a$1 = c$1,
      {
        size: r = 16,
        strokeColor: l = 'currentcolor',
        styles: s,
        role: p = 'img',
        alt: i = 'Chat icon',
      } = a$1,
      m = c(a$1, ['size', 'strokeColor', 'styles', 'role', 'alt'])
    return jsx(
      t,
      b(a({ size: r, styles: s, role: p, alt: i }, m), {
        children: jsx('g', {
          fill: l,
          strokeMiterlimit: '10',
          children: jsx('path', {
            d: 'M21,2H3c-1.105,0-2,.895-2,2V15c0,1.105,.895,2,2,2h5l4,5,4-5h5c1.105,0,2-.895,2-2V4c0-1.105-.895-2-2-2Z',
            fill: 'none',
            stroke: l,
            strokeLinecap: 'square',
            strokeLinejoin: 'miter',
            strokeWidth: '2',
          }),
        }),
      }),
    )
  }
C.styles = mo
C.displayName = 'Chat'
var ao = a({}, t.styles),
  x = (a$1) => {
    var f = a$1,
      {
        fill: r = 'currentColor',
        strokeColor: l,
        styles: s,
        size: p = 16,
        role: i = 'img',
        alt: m = 'Down icon',
      } = f,
      c$1 = c(f, ['fill', 'strokeColor', 'styles', 'size', 'role', 'alt'])
    return jsx(
      t,
      b(a({ size: p, role: i, styles: s, alt: m }, c$1), {
        children: jsxs('g', {
          fill: r,
          strokeMiterlimit: '10',
          children: [
            jsx('line', {
              fill: 'none',
              stroke: r,
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeWidth: '2',
              x1: '12',
              x2: '12',
              y1: '2',
              y2: '22',
            }),
            jsx('polyline', {
              fill: 'none',
              points: '19,15 12,22 5,15 ',
              stroke: r,
              strokeLinecap: 'square',
              strokeLinejoin: 'miter',
              strokeWidth: '2',
            }),
          ],
        }),
      }),
    )
  }
x.styles = ao
x.displayName = 'ArrowDown'
var fo = b(a({}, t.styles), { fill: 'none', stroke: 'currentColor' }),
  h = (a$1) => {
    var f = a$1,
      {
        fill: r = 'currentColor',
        strokeColor: l = 'currentColor',
        styles: s,
        size: p = 16,
        role: i = 'img',
        alt: m = 'Up arrow icon',
      } = f,
      c$1 = c(f, ['fill', 'strokeColor', 'styles', 'size', 'role', 'alt'])
    return jsx(
      t,
      b(a({ size: p, styles: s, role: i, alt: m }, c$1), {
        children: jsxs('g', {
          fill: 'none',
          stroke: l,
          strokeLinecap: 'square',
          strokeLinejoin: 'miter',
          strokeMiterlimit: '10',
          strokeWidth: '2',
          children: [
            jsx('line', {
              fill: 'none',
              strokeLinecap: 'butt',
              x1: '12',
              x2: '12',
              y1: '22',
              y2: '2',
            }),
            jsx('polyline', {
              fill: 'none',
              points: '5,9 12,2 19,9 ',
              stroke: l,
            }),
          ],
        }),
      }),
    )
  }
h.displayName = 'ArrowUp'
h.style = fo
b(a({}, t.styles), { fill: 'currentColor' })
var F = (a$1) => {
  var f = a$1,
    {
      size: r = 16,
      fill: l = 'currentColor',
      strokeColor: s = 'currentColor',
      styles: p,
      role: i = 'img',
      alt: m = 'Right arrow icon',
    } = f,
    c$1 = c(f, ['size', 'fill', 'strokeColor', 'styles', 'role', 'alt'])
  return jsx(
    t,
    b(a({ size: r, styles: p, role: i, alt: m }, c$1), {
      children: jsxs('g', {
        fill: l,
        stroke: s,
        strokeLinecap: 'square',
        strokeLinejoin: 'miter',
        strokeMiterlimit: '10',
        strokeWidth: '2',
        children: [
          jsx('line', {
            fill: 'none',
            strokeLinecap: 'butt',
            x1: '2',
            x2: '22',
            y1: '12',
            y2: '12',
          }),
          jsx('polyline', {
            fill: 'none',
            points: '15,5 22,12 15,19 ',
            stroke: s,
          }),
        ],
      }),
    }),
  )
}
F.displayName = 'ArrowRight'
var ko = b(a({}, t.styles), { fill: 'none', stroke: 'currentColor' }),
  S = (a$1) => {
    var f = a$1,
      {
        size: r = 16,
        fill: l = 'none',
        strokeColor: s = 'currentColor',
        styles: p,
        alt: i = 'User Icon',
        role: m,
      } = f,
      c$1 = c(f, ['size', 'fill', 'strokeColor', 'styles', 'alt', 'role'])
    return jsx(
      t,
      b(a({ size: r, role: m, alt: i, styles: p }, c$1), {
        children: jsxs('g', {
          fill: l,
          stroke: s,
          strokeLinecap: 'square',
          strokeLinejoin: 'miter',
          strokeMiterlimit: '10',
          strokeWidth: '2',
          children: [
            jsx('circle', { cx: '12', cy: '5.5', fill: 'none', r: '4.5' }),
            jsx('path', {
              d: 'M12,14c-4.971,0-9,4.029-9,9H21c0-4.971-4.029-9-9-9Z',
              fill: 'none',
              stroke: s,
            }),
          ],
        }),
      }),
    )
  }
S.styles = ko
S.displayName = 'User'
var uo = { fill: 'currentColor' },
  R = (c$1) => {
    var a$1 = c$1,
      {
        size: r = 16,
        fill: l = 'currentColor',
        styles: s,
        role: p = 'img',
        alt: i = 'Right arrow icon',
      } = a$1,
      m = c(a$1, ['size', 'fill', 'styles', 'role', 'alt'])
    return jsx(
      t,
      b(a({ size: r, alt: i, styles: s, role: p }, m), {
        children: jsx('g', {
          fill: l,
          children: jsx('path', {
            d: 'M7,23a1,1,0,0,1-.707-1.707L15.586,12,6.293,2.707A1,1,0,0,1,7.707,1.293l10,10a1,1,0,0,1,0,1.414l-10,10A1,1,0,0,1,7,23Z',
            fill: l,
          }),
        }),
      }),
    )
  }
R.displayName = 'Right'
R.styles = uo
var Co = b(a({}, t.styles), { fill: 'currentColor' }),
  v = (c$1) => {
    var a$1 = c$1,
      {
        fill: r = 'currentColor',
        size: l = 16,
        styles: s,
        role: p = 'img',
        alt: i = 'Left arrow icon',
      } = a$1,
      m = c(a$1, ['fill', 'size', 'styles', 'role', 'alt'])
    return jsx(
      t,
      b(a({ size: l, styles: s, alt: i, role: p }, m), {
        children: jsx('g', {
          fill: r,
          children: jsx('path', {
            d: 'M17,23a1,1,0,0,1-.707-.293l-10-10a1,1,0,0,1,0-1.414l10-10a1,1,0,0,1,1.414,1.414L8.414,12l9.293,9.293A1,1,0,0,1,17,23Z',
            fill: r,
          }),
        }),
      }),
    )
  }
v.displayName = 'Left'
v.styles = Co
var xo = { fill: 'currentColor' },
  w = (c$1) => {
    var a$1 = c$1,
      {
        size: r = 24,
        fill: l = 'currentColor',
        styles: s,
        role: p = 'img',
        alt: i = 'Minus icon',
      } = a$1,
      m = c(a$1, ['size', 'fill', 'styles', 'role', 'alt'])
    return jsx(
      t,
      b(a({ size: r, styles: s, role: p, alt: i }, m), {
        children: jsx('g', {
          fill: l,
          children: jsx('path', {
            d: 'M17,11H7c-.553,0-1,.447-1,1s.447,1,1,1h10c.553,0,1-.447,1-1s-.447-1-1-1Z',
            fill: l,
          }),
        }),
      }),
    )
  }
w.displayName = 'Minus'
w.styles = xo
var ho = { fill: 'currenStyle' },
  I = (c$1) => {
    var a$1 = c$1,
      {
        size: r = 16,
        fill: l = 'currentColor',
        styles: s,
        role: p = 'img',
        alt: i = 'Remove icon',
      } = a$1,
      m = c(a$1, ['size', 'fill', 'styles', 'role', 'alt'])
    return jsx(
      t,
      b(a({ size: r, alt: i, styles: s, role: p }, m), {
        children: jsx('g', {
          fill: l,
          children: jsx('path', {
            d: 'M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z',
            fill: l,
          }),
        }),
      }),
    )
  }
I.displayName = 'Remove'
I.styles = ho
var So = b(a({}, t.styles), { stroke: 'currentColor' }),
  L = (c$1) => {
    var a$1 = c$1,
      {
        size: r = 16,
        strokeColor: l = 'currentColor',
        styles: s,
        role: p = 'img',
        alt: i = 'Copy icon',
      } = a$1,
      m = c(a$1, ['size', 'strokeColor', 'styles', 'role', 'alt'])
    return jsx(
      t,
      b(a({ size: r, styles: s, role: p, alt: i }, m), {
        children: jsxs('g', {
          fill: 'none',
          stroke: l,
          strokeLinecap: 'square',
          strokeLinejoin: 'miter',
          strokeMiterlimit: '10',
          strokeWidth: '2',
          children: [
            jsx('polyline', {
              fill: 'none',
              points: '8 19 2 19 2 1 17 1 17 6',
              stroke: l,
            }),
            jsx('rect', {
              height: '13',
              width: '10',
              fill: 'none',
              x: '12',
              y: '10',
            }),
          ],
        }),
      }),
    )
  }
L.displayName = 'Copy'
L.styles = So
var vo = a({}, t.styles),
  z = (c$1) => {
    var a$1 = c$1,
      {
        size: r = 16,
        fill: l = 'currentColor',
        styles: s,
        role: p = 'img',
        alt: i = 'Up arrow icon',
      } = a$1,
      m = c(a$1, ['size', 'fill', 'styles', 'role', 'alt'])
    return jsx(
      t,
      b(a({ size: r, alt: i, styles: s, role: p }, m), {
        children: jsx('g', {
          fill: l,
          children: jsx('path', {
            d: 'M22,18a1,1,0,0,1-.707-.293L12,8.414,2.707,17.707a1,1,0,0,1-1.414-1.414l10-10a1,1,0,0,1,1.414,0l10,10A1,1,0,0,1,22,18Z',
            fill: l,
          }),
        }),
      }),
    )
  }
z.displayName = 'Up'
z.styles = vo
var wo = a({}, t.styles),
  A = (c$1) => {
    var a$1 = c$1,
      {
        size: r = 16,
        fill: l = 'currentColor',
        styles: s,
        role: p = 'img',
        alt: i = 'Down arrow icon',
      } = a$1,
      m = c(a$1, ['size', 'fill', 'styles', 'role', 'alt'])
    return jsx(
      t,
      b(a({ size: r, alt: i, styles: s, role: p }, m), {
        children: jsx('g', {
          fill: l,
          children: jsx('path', {
            d: 'M12,18a1,1,0,0,1-.707-.293l-10-10A1,1,0,0,1,2.707,6.293L12,15.586l9.293-9.293a1,1,0,1,1,1.414,1.414l-10,10A1,1,0,0,1,12,18Z',
            fill: l,
          }),
        }),
      }),
    )
  }
A.displayName = 'Down'
A.styles = wo
function Q(a$1) {
  var f = a$1,
    {
      size: r = 16,
      fill: l = 'currentColor',
      strokeColor: s = 'currentColor',
      styles: p,
      role: i = 'img',
      alt: m = 'Star icon',
    } = f,
    c$1 = c(f, ['size', 'fill', 'strokeColor', 'styles', 'role', 'alt'])
  return jsx(
    t,
    b(a({ size: r, alt: m, styles: p, role: i }, c$1), {
      children: jsx('g', {
        fill: 'none',
        stroke: s,
        strokeLinecap: 'square',
        strokeLinejoin: 'miter',
        strokeMiterlimit: '10',
        strokeWidth: '2',
        children: jsx('polygon', {
          fill: 'none',
          points:
            '12,2.49 15.09,8.75 22,9.754 17,14.628 18.18,21.51 12,18.262 5.82,21.51 7,14.628 2,9.754 8.91,8.75 ',
          stroke: s,
        }),
      }),
    }),
  )
}
Q.displayName = 'Star'
var Io = {
    display: 'inline-flex',
    direction: 'row',
    gap: '.2rem',
    placeItems: 'center',
    width: 'auto',
  },
  y = (p) => {
    var i = p,
      { children: r, styles: l } = i,
      s = c(i, ['children', 'styles'])
    return jsx(
      Y,
      b(a({ as: 'span', styles: l, 'data-style': 'icons' }, s), {
        children: r,
      }),
    )
  }
y.Add = P
y.ArrowDown = x
y.ArrowLeft = u
y.ArrowRight = F
y.ArrowUp = h
y.Chat = C
y.Code = N
y.Copy = L
y.displayName = 'Icon'
y.Home = k
y.Left = v
y.Minus = w
y.Remove = I
y.Right = R
y.Star = Q
y.styles = Io
y.Up = z
y.Down = A
y.User = S

export {
  Y as a,
  N as b,
  k as c,
  P as d,
  u as e,
  C as f,
  x as g,
  h,
  F as i,
  S as j,
  R as k,
  v as l,
  w as m,
  I as n,
  L as o,
  Io as p,
  y as q,
}
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-GJWMCDFS.js.map
