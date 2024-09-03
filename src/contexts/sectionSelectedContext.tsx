import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface ISectionSelected {
   sectionSelected: string;
}

export const SectionSelectedContext = createContext<ISectionSelected>({
   sectionSelected: "",
});

interface ISectionSelectedProviderProps {
   children: React.ReactNode;
}

export const SectionSelectedProvider: React.FC<ISectionSelectedProviderProps> = ({
   children,
}) => {
   const location = useLocation();
   const locationPath = location.pathname.slice(1);
   const locationName = locationPath.split("/")[0];

   const [sectionSelected, setSectionSelected] = useState<string>(
      locationName === "equilibrium"
         ? "equilibrium"
         : locationName === "segredos-da-lua"
         ? "moonsSecrets"
         : ""
   );

   useEffect(() => {
      const newSection =
         locationName === "equilibrium"
            ? "equilibrium"
            : locationName === "segredos-da-lua"
            ? "moonsSecrets"
            : "";

      setSectionSelected(newSection);
   }, [locationName]);

   return (
      <SectionSelectedContext.Provider value={{ sectionSelected }}>
         {children}
      </SectionSelectedContext.Provider>
   );
};
