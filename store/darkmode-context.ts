'use client'
import { createContext} from "react";
interface d {

    a: boolean;
}

const DarkModeContext = createContext({
  isDarkMode: false
});

export default DarkModeContext;