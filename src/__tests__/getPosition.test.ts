import { PositionRect } from "../core/Tooltip.types";
import { getPosition } from "../core/getPosition";

describe("getPosition", () => {
    const targetRect: PositionRect = {
        x: 80,
        y: 80,
        width: 35,
        height: 18,
    }

    const tooltipRect: PositionRect = {
        x: 80,
        y: 100,
        width: 95,
        height: 35,
    }

    Object.defineProperty(window, 'innerHeight', { value: 446 })
    Object.defineProperty(window, 'innerWidth', { value: 1680 })

    it("should return correct top position", () => {
        const placement = getPosition(
            "top",
            targetRect,
            tooltipRect
        );

        expect(placement).toEqual({ top: 45, left: 50 })
    });

    it("should return correct right position", () => {
        const placement = getPosition(
            "right",
            targetRect,
            tooltipRect
        );

        expect(placement).toEqual({ top: 71.5, left: 115 })
    });

    it("should return correct bottom position", () => {
        const placement = getPosition(
            "bottom",
            targetRect,
            tooltipRect
        );

        expect(placement).toEqual({ top: 98, left: 50 })
    });

    it("should return correct left position", () => {
        const placement = getPosition(
            "left",
            targetRect,
            tooltipRect
        );

        expect(placement).toEqual({ top: 71.5, left: 115 })
    });
});
