import React from 'react'
import { locations } from '../../Constants'
import clsx from 'clsx';
import uselocationstore from '../../Store/Location';
import usewindowstore from '../../Store/Window';
import { useGSAP } from '@gsap/react';
import { Draggable } from 'gsap/all';

const Home = () => {
    useGSAP(() => {
        Draggable.create(".folder")
    })
    const { activelocation, setactivelocation } = uselocationstore();
    const { openwindow } = usewindowstore();
    const openItem = (item) => {
        if (item.kind === "folder") {
            setactivelocation(item);
            return openwindow("finder")
        }
    }
    const projects = locations.work?.children;
    return (
        <div>
            {projects.map((item) => (
                <ul
                    key={item.id}
                    className={clsx("group folder", item.windowPosition)}
                    onClick={() => openItem(item)}
                >
                    <img src={item.icon} alt={item.name} />
                    <p className='text-white'>{item.name}</p>
                </ul>
            ))}
        </div>
    )
}

export default Home
