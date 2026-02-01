import React from 'react'
import Windowcontrol from '../Components/Windowcontrol/Windowcontrol'
import WindowWrapper from '../Hoc/Windowrapper'
import usewindowstore from '../Store/Window'

const Image = () => {
    const { window } = usewindowstore();
    const data = window.imgfile?.data;

    if (!data) return null;

    const { name, imageUrl, subtitle, description } = data;

    return (
        <>
            <div id="window-header">
                <Windowcontrol target="imgfile" />
                <h2>{name || 'Image Viewer'}</h2>
            </div>

            <div className="p-5 bg-white">
                {imageUrl ? (
                    <div className="w-full">
                        <img
                            src={imageUrl}
                            alt={name}
                            className="w-full h-auto max-h-[70vh] object-contain rounded"
                        />
                    </div>
                ) : null}
            </div>

        </>
    )
}

const Imagekwrapper = WindowWrapper(Image, "imgfile");
export default Imagekwrapper;
