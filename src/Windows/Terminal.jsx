import React from 'react'
import Windowrapper from '../Hoc/Windowrapper'
import { techStack } from '../Constants';
import { Check, Flag } from 'lucide-react';
import Windowcontrol from '../Components/Windowcontrol/Windowcontrol';

const Terminal = () => {
    return (
        <>
            <div id='window-header'>
                <Windowcontrol target="terminal" />
                <h2>Tech stack</h2>
            </div>
            <div className="techstack">
                <p>
                    <span className="font-bold">@Biswajit</span> %show your stack
                </p>

                <div className="label">
                    <p className="w-32">Category</p>
                    <p>Technology</p>
                </div>

                {/* Listing all tech stack */}
                <div className="content">
                    {techStack.map(({ category, items }, index) => (
                        <ul key={index}>
                            <li className="flex gap-4 items-start">
                                <Check className="check mt-1" size={20} />

                                <div className="check w-32 font-semibold">
                                    {category}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {items.map((it, i) => (
                                        <span key={i}>
                                            {it}
                                            {i < items.length - 1 ? "," : ""}
                                        </span>
                                    ))}
                                </div>
                            </li>
                        </ul>
                    ))}
                </div>

                <div className='footnote'>
                    <p>
                        <Check size={20} />
                        5 of 5 stack loaded successfully (100%)
                    </p>
                </div>
                <p className='flex gap-5'>
                    <Flag size={20} /> Render time : 5s
                </p>
            </div>

        </>

    )
}

const Terminakwrapper = Windowrapper(Terminal, "terminal");

export default Terminakwrapper;
