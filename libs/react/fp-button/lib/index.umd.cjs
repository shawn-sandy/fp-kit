var $988mA$reactjsxruntime = require("react/jsx-runtime");
require("react");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Button", () => $1ecc807e51b7789c$export$2e2bcd8739ae039);


const $1ecc807e51b7789c$var$Button = ({ type: type , children: children , styles: styles , disabled: disabled , classes: classes , onClick: onClick , onMouseOver: onMouseOver , ...props })=>{
    const defStyles = {
        paddingInline: "var(--btn-px, 1.4rem)",
        paddingBlock: "var(--btn-py, 0.8rem)",
        display: "var(--btn-dsp, inline-flex)",
        placeItems: "var(--btn-place, center)",
        justifyContent: "var(--btn-justify, center)",
        cursor: "var(--btn-cursor, pointer)",
        border: "var(--btn-border, none)"
    };
    /**
  * If the button is not disabled, then call the onClick function
  */ const handleClick = (e)=>{
        if (!disabled) onClick?.(e);
    };
    /**
 * A function that returns a function.
 */ const handleMouseOver = (e)=>{
        onMouseOver?.(e);
    };
    /* Returning a button element. */ return /*#__PURE__*/ (0, $988mA$reactjsxruntime.jsx)("button", {
        type: type,
        onClick: handleClick,
        onMouseOver: handleMouseOver,
        style: {
            ...defStyles,
            ...styles
        },
        "aria-disabled": disabled,
        ...props,
        children: children
    });
};
var $1ecc807e51b7789c$export$2e2bcd8739ae039 = $1ecc807e51b7789c$var$Button;




//# sourceMappingURL=index.umd.cjs.map
