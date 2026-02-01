import React from 'react'
import WindowWrapper from '../Hoc/Windowrapper'
import Windowcontrol from '../Components/Windowcontrol/Windowcontrol'
import { gallery } from '../Constants'
import usewindowstore from '../Store/Window'

const Gallery = () => {
    const { openwindow } = usewindowstore();
    
    const openitem = (img) => {
        const imageData = {
            name: 'Gallery Image',
            imageUrl: img,
            subtitle: 'View',
            description: 'Gallery Image'
        };
        openwindow("imgfile", imageData);
    }
    
    return (
        <div>
            <div id="window-header">
                <Windowcontrol target="photos" />
                <h2>Gallery</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 p-4">
                {gallery.map(({ id, img, size }) => (
                    <div
                        key={id}
                        className={`overflow-hidden rounded-xl cursor-pointer
        ${size === "large" ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}
      `}
                    >
                        <img onClick={() => openitem(img)}
                            src={img}
                            alt="Gallery"
                            className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}
const Gallerywrapper = WindowWrapper(Gallery, "photos")
export default Gallerywrapper;