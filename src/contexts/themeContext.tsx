// ThemeContext.tsx
import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ITheme, sectionsTheme } from "@styles/theme";

export const ThemeContext = createContext<ITheme | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
   children,
}) => {
   const location = useLocation();
   const locationName = location.pathname.slice(1).split("/")[0];
   const [theme, setTheme] = useState<ITheme>(
      sectionsTheme.find((theme) => theme.id === "default")!
   );

   useEffect(() => {
      const newTheme =
         sectionsTheme.find((theme) => theme.id === locationName) ||
         sectionsTheme.find((theme) => theme.id === "default");
      setTheme(newTheme!);
   }, [location, locationName]);

   return (
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
   );
};
