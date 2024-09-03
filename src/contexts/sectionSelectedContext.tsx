import { createContext, useState } from "react";
interface ISectionSelected {
   sectionSelected: string;
   setSectionSelected: React.Dispatch<React.SetStateAction<string>>;
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
   const [sectionSelected, setSectionSelected] = useState<string>("");

   return (
      <SectionSelectedContext.Provider value={{ sectionSelected, setSectionSelected }}>
         {children}
      </SectionSelectedContext.Provider>
   );
};
