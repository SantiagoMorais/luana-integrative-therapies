import { createContext, useState } from "react";

interface ITopics {
   equilibriumTopicSelected: string;
   setEquilibriumTopicSelected: React.Dispatch<React.SetStateAction<string>>;
   moonsSecretsTopicSelected: string;
   setMoonsSecretsTopicSelected: React.Dispatch<React.SetStateAction<string>>;
   handleSelectedButton: (
      _buttonType: "posts" | "topics",
      _categoryType: "equilibrium" | "moonsSecrets"
   ) => void;
}

export const TopicsContext = createContext<ITopics>({
   equilibriumTopicSelected: "",
   setEquilibriumTopicSelected: () => {},
   moonsSecretsTopicSelected: "",
   setMoonsSecretsTopicSelected: () => {},
   handleSelectedButton: () => {},
});

interface ITopicsProviderProps {
   children: React.ReactNode;
}

export const TopicsProvider: React.FC<ITopicsProviderProps> = ({
   children,
}) => {
   const [equilibriumTopicSelected, setEquilibriumTopicSelected] =
      useState<string>("");
   const [moonsSecretsTopicSelected, setMoonsSecretsTopicSelected] =
      useState<string>("");

   const handleSelectedButton = (buttonType: string, categoryType: string) => {
      categoryType === "equilibrium"
         ? setEquilibriumTopicSelected(
              buttonType === "posts" ? "posts" : "topics"
           )
         : setMoonsSecretsTopicSelected(
              buttonType === "posts" ? "posts" : "topics"
           );
   };

   return (
      <TopicsContext.Provider
         value={{
            equilibriumTopicSelected,
            setEquilibriumTopicSelected,
            handleSelectedButton,
            moonsSecretsTopicSelected,
            setMoonsSecretsTopicSelected,
         }}
      >
         {children}
      </TopicsContext.Provider>
   );
};
