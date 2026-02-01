import { Dock, Navbar, Welcome } from "./Components"
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { Imagekwrapper, Safari, Terminakwrapper, Trashwrapper } from "./Windows/index";

import Resume from "./Windows/Resume";
import Finder from "./Windows/Finder";
import Textwrapper from "./Windows/Text";
import Contactwrapper from "./Windows/Contact";
import Gallerywrapper from "./Windows/Gallery";
import Home from "./Components/Home/Home";



gsap.registerPlugin(Draggable);
function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminakwrapper />
      <Safari />
      <Resume />
      <Finder />
      <Textwrapper />
      <Imagekwrapper />
      <Contactwrapper />
      <Gallerywrapper />
      <Home />
      <Trashwrapper/>
    </>
  )
}

export default App
