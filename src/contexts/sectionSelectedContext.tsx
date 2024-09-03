import { createContext, useState } from "react";
interface ISectionSelected {
   sectionSelected: "" | "equilibrium" | "segredos-da-lua";
   setSectionSelected: React.Dispatch<React.SetStateAction<"" | "equilibrium" | "segredos-da-lua">>;
}

export const SectionSelectedContext = createContext<ISectionSelected>({
   sectionSelected: "",
   setSectionSelected: () => {},
});

interface ISectionSelectedProviderProps {
   children: React.ReactNode;
}

export const SectionSelectedProvider: React.FC<
   ISectionSelectedProviderProps
> = ({ children }) => {
   const [sectionSelected, setSectionSelected] = useState<"" | "equilibrium" | "segredos-da-lua">("");

   return (
      <SectionSelectedContext.Provider value={{ sectionSelected, setSectionSelected }}>
         {children}
      </SectionSelectedContext.Provider>
   );
};
