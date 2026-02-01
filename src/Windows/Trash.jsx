import React from 'react'
import Windowcontrol from '../Components/Windowcontrol/Windowcontrol'
import WindowWrapper from '../Hoc/Windowrapper'

const Trash = () => {
    return (
        <>
            <div
                id="window-header"
                className="flex items-center justify-between h-[50px] px-3 shrink-0"
            >
                <Windowcontrol target="trash" />
                <h2>Trash</h2>
            </div>

        </>
    )
}
const Trashwrapper = WindowWrapper("Trash", Trash);
export default Trashwrapper;
