export type VerticalPlacement = "top" | "bottom";
export type HorizontalPlacement = "right" | "left";
export type TooltipPlacement = VerticalPlacement | HorizontalPlacement;

export type PositionRect = Pick<DOMRect, 'width' | 'height' | 'x' | 'y'>;
