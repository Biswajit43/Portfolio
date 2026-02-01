import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '../Constants'

const usewindowstore = create(immer((set) => ({
    window: WINDOW_CONFIG,
    nextzindex: INITIAL_Z_INDEX + 1,
    openwindow: (windowkey, data = null) => set((state) => {
        //access the window
        const win = state.window[windowkey];
        if(!win) return;
        win.isOpen = true;
        win.zIndex = state.nextzindex;
        win.data = data ?? win.data;
        state.nextzindex++;
    }),
    closewindow: (windowkey) => set((state) => {
        console.log("CLOSE CLICKED");
         const win = state.window[windowkey];
         if(!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;

    }),
    focuswindow: (windowkey) => set((state) => {

        const win = state.window[windowkey];
        if(!win) return;
        win.isOpen = true;
        win.zIndex = state.nextzindex++;
        

    })
})))

export default usewindowstore;
