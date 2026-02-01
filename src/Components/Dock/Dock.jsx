import React, { useRef } from 'react'
import { dockApps } from '../../Constants';
import { Tooltip } from 'react-tooltip';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import usewindowstore from '../../Store/Window';

const Dock = () => {
    const dockref = useRef(null);
    const { openwindow, closewindow, focuswindow, window } = usewindowstore();

    useGSAP(() => {
        const dock = dockref.current;
        if (!dock) return;

        const icons = dock.querySelectorAll(".dock-icon");

        const animateIcons = (mouseX) => {
            const { left } = dock.getBoundingClientRect();

            icons.forEach((icon) => {
                const { left: iconLeft, width } = icon.getBoundingClientRect();
                const center = iconLeft - left + width / 2;
                const distance = Math.abs(mouseX - center);

                const intensity = Math.exp(-(distance ** 2) / 200);

                gsap.to(icon, {
                    scale: 1 + 0.25 * intensity,
                    y: -15 * intensity,
                    duration: 0.2,
                    ease: "power1.out",
                });
            });
        };

        const handleMouseMove = (e) => {
            const { left } = dock.getBoundingClientRect();
            animateIcons(e.clientX - left);
        };

        const resetIcons = () => {
            icons.forEach((icon) => {
                gsap.to(icon, {
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power1.out",
                });
            });
        };

        dock.addEventListener("mousemove", handleMouseMove);
        dock.addEventListener("mouseleave", resetIcons);

        return () => {
            dock.removeEventListener("mousemove", handleMouseMove);
            dock.removeEventListener("mouseleave", resetIcons);
        };
    }, []);

    const toggleApp = (app) => {
        if (!app.canOpen) return;
        const win = window[app.id];
        if (win.isOpen) {
            closewindow(app.id);
        }
        else openwindow(app.id);

        console.log(window);
    }

    return (
        <div id="dock">
            <div className="dock-container" ref={dockref}>
                {dockApps.map(({ id, name, icon, canOpen }) => (
                    <div key={id} className='relative flex justify-center'>
                        <button type='button' className='dock-icon'
                            data-tooltip-id="dock-tooltip"
                            data-tooltip-content={name}
                            aria-label={name}
                            disabled={!canOpen}
                            onClick={() => toggleApp({ id, canOpen })}>
                            <img loading='lazy' className={canOpen ? "" : "opacity-60"} src={`/images/${icon}`} />
                        </button>
                    </div>
                ))}
                <Tooltip id='dock-tooltip' place='top' className='tooltip' />
            </div>
        </div>
    )
}

export default Dock
