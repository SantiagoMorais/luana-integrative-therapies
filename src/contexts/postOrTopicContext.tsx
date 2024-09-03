import { createContext, useState } from "react";

interface IPostOrTopic {
   postOrTopicSelected: "" | "posts" | "topics";
   setPostOrTopicSelected: React.Dispatch<React.SetStateAction<"" | "posts" | "topics">>;
   handleSelectedButton: (_buttonType: "posts" | "topics") => void;
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
   const [postOrTopicSelected, setPostOrTopicSelected] = useState<"" | "posts" | "topics">("");

   const handleSelectedButton = (buttonType: "posts" | "topics") => {
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
