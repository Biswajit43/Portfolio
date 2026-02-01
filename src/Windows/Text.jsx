import React from 'react'
import Windowcontrol from '../Components/Windowcontrol/Windowcontrol'
import WindowWrapper from '../Hoc/Windowrapper'
import usewindowstore from '../Store/Window'

const Text = () => {
    const { window } = usewindowstore();
    const data = window.txtfile?.data;

    if (!data) return null;

    const { name, image, subtitle, description } = data;

    return (
        <>
            <div id="window-header">
                <Windowcontrol target="txtfile" />
                <h2>{name || 'Text File'}</h2>
            </div>
            <div className="text-file-container" style={{
                display: 'flex',
                flexDirection: 'column',
                height: '500px',
                padding: '20px',
                overflow: 'auto',

                backgroundColor: '#fff'
            }}>
                {image && (
                    <img
                        src={image}
                        alt={name}
                        style={{
                            height: "400px",
                            Width: '100%',
                            marginBottom: '20px',
                            borderRadius: '8px'
                        }}
                    />
                )}
                {subtitle && (
                    <h3 style={{ marginBottom: '15px', fontSize: '18px', color: '#666' }}>
                        {subtitle}
                    </h3>
                )}
                {description && Array.isArray(description) && (
                    <div>
                        {description.map((paragraph, index) => (
                            <p
                                key={index}
                                style={{
                                    marginBottom: '15px',
                                    lineHeight: '1.6',
                                    color: '#333'
                                }}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

const Txtkwrapper = WindowWrapper(Text, "txtfile");
export default Txtkwrapper;
