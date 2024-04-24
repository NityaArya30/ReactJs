import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    //variable
    themeMode: "light",
    //methods
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}