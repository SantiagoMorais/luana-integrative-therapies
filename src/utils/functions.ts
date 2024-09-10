import { IDefaultTheme, ISectionsTheme, sectionsTheme, theme } from "@styles/theme";
import { Location } from "react-router-dom";

export const handlePageTheme = (
   location: string
): ISectionsTheme | IDefaultTheme => {
   const sectionTheme = sectionsTheme.find(
      (theme) => theme.id === location
   );

   if (location === "equilibrium" || location === "segredos-da-lua") {
      return sectionTheme ?? theme;
   } else return theme;
};

export const locationName = (location: Location) => {
    return location.pathname.slice(1).split("/")[0];
}
