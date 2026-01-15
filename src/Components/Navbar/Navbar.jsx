import React from "react";
import { navicon, navobj } from "../../Constants";
import dayjs from "dayjs";


const Navbar = () => {
    const now = new Date();

    return (
        <nav className="flex justify-between p-4">

            <ul className="flex gap-4">
                <img src="/public/images/logo.svg"/>
                <span><b>Biswajit's Portfolio</b></span>
                {navobj.map((it, index) => (
                    <li key={index}>{it.name}</li>
                ))}
            </ul>

            <ul className="flex items-center gap-3">
                {navicon.map((it, index) => (
                    <li key={index}>
                        <img src={it.imglink} alt="nav icon" />
                    </li>
                ))}
                <time>{dayjs().format("ddd, MMM D · h:mm A")}</time>
                
            </ul>
        </nav>
    );
};

export default Navbar;
