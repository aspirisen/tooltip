import React from "react";

export type UseClientRect<T extends HTMLElement> = [(DOMRect | undefined), React.RefObject<T>];

export function useClientRect<T extends HTMLElement>(deps?: React.DependencyList): UseClientRect<T> {
    const ref = React.createRef<T>();

    const [rect, setRect] = React.useState<DOMRect | undefined>(
        undefined
    );

    React.useEffect(() => {
        setRect(ref.current?.getBoundingClientRect());
    }, deps);

    return [rect, ref]
}
