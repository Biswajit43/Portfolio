import React from 'react'
import Windowcontrol from '../Components/Windowcontrol/Windowcontrol'
import WindowWrapper from '../Hoc/Windowrapper'
import { socials } from '../Constants'

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <Windowcontrol target="contact" />
                <h2>Contact me</h2>
            </div>

            <div className="flex flex-col items-center justify-center py-8 px-6">
                {/* Profile Image */}
                <div className="mb-8">
                    <img
                        className='rounded-full w-32 h-32 object-cover shadow-lg border-4 border-purple-500'
                        src='public/images/Biswajit_1.jpg'
                        alt='Biswajit'
                    />
                </div>

                {/* Heading */}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Let's Connect</h3>
                <p className="text-gray-600 text-center mb-8 max-w-md">
                    Feel free to reach out to me via any of my social profiles. I'd love to connect with you!
                </p>
                {/* Social Links */}
                <div className="flex flex-wrap gap-4 justify-center">
                    {socials.map(({ id, text, icon, bg, link }) => (
                        <a
                            key={id}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                            title={text}
                        >
                            <div
                                style={{ backgroundColor: bg }}
                                className="flex items-center gap-2 px-5 py-3 rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer"
                            >
                                <img
                                    src={icon}
                                    alt={text}
                                    className="rounded-full size-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125"
                                />
                                <span className="text-sm font-semibold hidden sm:inline">{text}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

        </>
    )
}
const Contactwrapper = WindowWrapper(Contact, "contact")
export default Contactwrapper;
