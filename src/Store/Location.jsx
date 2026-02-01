import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "../Constants";

//create use location store
const DEFAULT_LOCATION = locations.work;
const uselocationstore = create(immer((set) => ({
    activelocation: DEFAULT_LOCATION,
    setactivelocation: (location = null) =>
        set((state) => {
            state.activelocation = location;
        }),
    resetactivelocation : () => 
        set((state) => {
            state.activelocation = DEFAULT_LOCATION;
        }),

})))

export default uselocationstore;