import {jsx as $iPNDK$jsx} from "react/jsx-runtime";
import "react";



const $8e98cb38c0748b87$var$Button = ({ type: type , children: children , styles: styles , disabled: disabled , classes: classes , onClick: onClick , onMouseOver: onMouseOver , ...props })=>{
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
    /* Returning a button element. */ return /*#__PURE__*/ (0, $iPNDK$jsx)("button", {
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
var $8e98cb38c0748b87$export$2e2bcd8739ae039 = $8e98cb38c0748b87$var$Button;




export {$8e98cb38c0748b87$export$2e2bcd8739ae039 as Button};
//# sourceMappingURL=index.js.map
