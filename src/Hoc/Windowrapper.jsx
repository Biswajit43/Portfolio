import React, { useLayoutEffect, useRef } from 'react'
import usewindowstore from '../Store/Window';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";


const WindowWrapper = (Component, windowkey) => {
    const Wrapped = (props) => {
        const { focuswindow, window } = usewindowstore();
        const win = window[windowkey];

        if (!win) return null; // 👈 prevents crash

        const { isOpen, zIndex } = win;
        const ref = useRef(null);

        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return;

            el.style.display = "block";

            gsap.fromTo(
                el,
                { scale: 0.8, opacity: 0, y: 40 },
                {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power3.out",
                }
            );
        }, [isOpen]);

        useGSAP(() => {
            const el = ref.current;
            if (!el) return;
            Draggable.create(el, { onPress: () => focuswindow(windowkey) })
        }, [])

        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;

            el.style.display = isOpen ? "block" : "none";
        }, [isOpen]);


        return (
            <section
                id={windowkey}
                ref={ref}
                style={{ zIndex }}
                onClick={() => focuswindow(windowkey)}
            >
                <Component {...props} />
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

    return Wrapped;
};

export default WindowWrapper;
