import { createContext, useState } from "react";

interface IPostOrTopic {
   postOrTopicSelected: string;
   setPostOrTopicSelected: React.Dispatch<React.SetStateAction<string>>;
   handleSelectedButton: (
      _buttonType: "posts" | "topics",
      _categoryType: "equilibrium" | "moonsSecrets"
   ) => void;
}

export const PostOrTopicContext = createContext<IPostOrTopic>({
   postOrTopicSelected: "",
   setPostOrTopicSelected: () => {},
   handleSelectedButton: () => {},
});

interface IPostOrTopicProviderProps {
   children: React.ReactNode;
}

export const PostOrTopicProvider: React.FC<IPostOrTopicProviderProps> = ({
   children,
}) => {
   const [postOrTopicSelected, setPostOrTopicSelected] = useState<string>("");

   const handleSelectedButton = (buttonType: string) => {
      setPostOrTopicSelected(buttonType === "posts" ? "posts" : "topics");
   };

   return (
      <PostOrTopicContext.Provider
         value={{
            postOrTopicSelected,
            setPostOrTopicSelected,
            handleSelectedButton,
         }}
      >
         {children}
      </PostOrTopicContext.Provider>
   );
};
