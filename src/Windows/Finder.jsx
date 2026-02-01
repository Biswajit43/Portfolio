import { Search } from 'lucide-react'
import React, { useState } from 'react'
import Windowcontrol from '../Components/Windowcontrol/Windowcontrol'
import WindowWrapper from '../Hoc/Windowrapper'
import { locations } from '../Constants'
import uselocationstore from '../Store/Location'
import clsx from 'clsx'
import usewindowstore from '../Store/Window'

const Finder = () => {
    const { activelocation, setactivelocation } = uselocationstore();
    const { openwindow, closewindow } = usewindowstore();
    const [flag, setflag] = useState(false);
    const openItem = (item) => {
        if (item.fileType === "pdf") {

            return openwindow("resume");
        }
        if (item.kind === "folder") {
            return setactivelocation(item);
        }
        if (["fig", "url"].includes(item.fileType) && item.href)
            return globalThis.window.open(item.href, "_blank");
        
        if (item.fileType === "txt") {
            return openwindow("txtfile", item);
        }
        if (item.fileType === "img") {
            return openwindow("imgfile", item);
        }
    }
    return (
        <>
            <div id="window-header">
                <Windowcontrol target="finder" />
                <Search />
            </div>
            <div className='bg-white flex h-full'>
                <div className='sidebar'>
                    {/* siderbar */}
                    <div>
                        <div>
                            <h2>favourite</h2>
                            <ul>
                                {Object.values(locations).map((location) => (
                                    <li
                                        key={location.id}
                                        onClick={() => setactivelocation(location)}
                                        className={clsx(
                                            "flex items-center gap-2",
                                            location.id === activelocation.id ? "active" : "not-active"
                                        )}
                                    >
                                        <img src={location.icon} alt={location.name} />
                                        {location.name}
                                    </li>
                                ))}
                            </ul>

                        </div>


                        <div>
                            <h2>works</h2>
                            <ul>
                                {locations.work.children.map((child) => (
                                    <li
                                        key={child.id}
                                        onClick={() => setactivelocation(child)}
                                        className={clsx(
                                            child.id === activelocation.id ? "active" : "not-active"
                                        )}
                                    >
                                        <img src={child.icon} alt={child.name} />
                                        {child.name}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="flex-1 relative overflow-hidden">
                    <ul className="content relative w-full h-full">
                        {activelocation?.children?.map((item) => (
                            <li
                                key={item.id}
                                className={clsx("absolute", item.position)}
                                onClick={() => openItem(item)}
                            >
                                <img src={item.icon} alt={item.name} />
                                <p>{item.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </>
    )

}
const Finderwrapper = WindowWrapper(Finder, "finder");
export default Finderwrapper
