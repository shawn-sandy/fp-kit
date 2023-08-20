type Position = {
    /**
     * @description This is the top position of the popover.
     * @default 0
     */
    top: number;
    /**
     * @description This is the left position of the popover.
     * @default 0
     */
    left: number;
};
/**
 * @description This is the hook to show/hide the popover.
 * @param elementRef - This is the ref of the element on which the popover should be shown.
 * @param hoverRef - This is the ref of the element on which the popover should be shown.
 * @param spacing - This is the spacing between the element and the popover.
 * @example - const { isVisible, popoverPosition, handlePointerEvent, handlePointerLeave } = usePopover(hoverRef, popOverRef, 1)
 * @returns - This is the object of the following properties.
 * @returns - isVisible - This is the boolean value to show/hide the popover.
 * @returns - popoverPosition - This is the position of the popover.
 * @returns - handlePointerEvent - This is the function to handle the pointer event.
 * @returns - handlePointerLeave - This is the function to handle the pointer leave event.
 */
declare const usePopover: (elementRef: React.RefObject<HTMLElement>, hoverRef: React.RefObject<HTMLElement>, spacing?: number) => {
    isVisible: boolean;
    popoverPosition: Position;
    handlePointerEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handlePointerLeave: () => void;
};

export { usePopover };
