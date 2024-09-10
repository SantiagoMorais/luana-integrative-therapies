import { ThemeContext } from "@contexts/themeContext";
import { ITheme } from "@styles/theme";
import { useContext } from "react";

export const useThemeContext = (): ITheme => {
   const context = useContext(ThemeContext);
   if (context === undefined) {
      throw new Error("useThemeContext must be used within a ThemeProvider");
   }
   return context;
};
