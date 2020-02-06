import {
    TooltipPlacement,
    HorizontalPlacement,
    VerticalPlacement,
    PositionRect,
} from './Tooltip.types';

export function getPosition(
    placement: TooltipPlacement,
    targetRect: PositionRect,
    tooltipRect: PositionRect
) {
    if (placement === 'bottom' || placement === 'top') {
        const vertical = getVerticalShift(placement, targetRect, tooltipRect);
        return vertical;
    } else {
        const horizontal = getHorizontalShift(placement, targetRect, tooltipRect);
        return horizontal;
    }
}

function getVerticalShift(
    placement: VerticalPlacement,
    targetRect: PositionRect,
    tooltipRect: PositionRect
) {
    const shift = getTopLeftPoint(targetRect);
    const xShift = targetRect.width / 2 - tooltipRect.width / 2;

    const yBottomShift = targetRect.height - tooltipRect.height + tooltipRect.height;

    const yTopShift = -tooltipRect.height;

    shift.left += xShift;

    if (placement === 'bottom') {
        const tooltipBottom = shift.top + yBottomShift + tooltipRect.height;
        const viewportBottom = window.innerHeight + window.scrollY;

        if (tooltipBottom > viewportBottom) {
            shift.top += yTopShift;
        } else {
            shift.top += yBottomShift;
        }
    } else {
        const tooltipTop = shift.top + yTopShift;
        const viewportTop = window.scrollY;

        if (tooltipTop < viewportTop) {
            shift.top += yBottomShift;
        } else {
            shift.top += yTopShift;
        }
    }

    return shift;
}

function getHorizontalShift(
    placement: HorizontalPlacement,
    targetRect: PositionRect,
    tooltipRect: PositionRect
) {
    const shift = getTopLeftPoint(targetRect);
    const yShift = -(tooltipRect.height / 2) + targetRect.height / 2;
    const xLeftShift = -tooltipRect.width;
    const xRightShift = targetRect.width;

    shift.top += yShift;

    if (placement === 'right') {
        const tooltipRight = shift.left + xRightShift + tooltipRect.width;
        const viewportRight = window.innerWidth + window.scrollX;

        if (tooltipRight > viewportRight) {
            shift.left += xLeftShift;
        } else {
            shift.left += xRightShift;
        }
    } else {
        const tooltipLeft = shift.left - tooltipRect.width;
        const viewportLeft = window.scrollX;

        if (tooltipLeft < viewportLeft) {
            shift.left += xRightShift;
        } else {
            shift.left += xLeftShift;
        }
    }

    return shift;
}

function getTopLeftPoint(targetRect: PositionRect) {
    return {
        top: window.scrollY + targetRect.y,
        left: window.scrollX + targetRect.x,
    };
}
