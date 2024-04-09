import React, { createContext, useState } from "react";

interface INavBarContextType {
    currentLink: string,
    setCurrentLink: React.Dispatch<React.SetStateAction<string>>;
}

export const NavBarContext = createContext<INavBarContextType>({currentLink: "Home", setCurrentLink: () => {}});

interface INavBarProviderProps {
    children: React.ReactNode,
}

export const NavBarProvider: React.FC<INavBarProviderProps> = ({children}) => {
    const [currentLink, setCurrentLink] = useState<string>("home");
    
    return (
        <NavBarContext.Provider value={{currentLink, setCurrentLink}}>
            {children}
        </NavBarContext.Provider>
    )
}