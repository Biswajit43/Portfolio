import React from "react";
import { navLinks, navIcons } from "../../Constants";
import dayjs from "dayjs";
import usewindowstore from "../../Store/Window";


const Navbar = () => {
    const now = new Date();
    const { closewindow, openwindow, window } = usewindowstore();

    return (
        <nav className="flex justify-between p-4">
            <ul className="flex gap-4">
                <img src="/images/logo.svg" />
                <span><b>Biswajit's Portfolio</b></span>
                {navLinks.map((it, index) => {
                    const isOpen = window[it.type]?.isOpen;
                    return (
                        <a><li key={index} onClick={() => isOpen ? closewindow(it.type) : openwindow(it.type)}
                        >{it.name}</li></a>
                    )
                })}
            </ul>

            <ul className="flex items-center gap-3">
                {navIcons.map((it, index) => (
                    <li key={index}>
                        <img src={it.img} alt="nav icon" />
                    </li>
                ))}
                <time>{dayjs().format("ddd, MMM D · h:mm A")}</time>

            </ul>
        </nav>
    );
};

export default Navbar;
