import { IThemeContextType, ThemeContext } from "@contexts/themeContext";
import { useContext } from "react";

export const useThemeContext = (): IThemeContextType => {
   const context = useContext(ThemeContext);
   if (context === undefined) {
      throw new Error("useThemeContext must be used within a ThemeProvider");
   }
   return context;
};
