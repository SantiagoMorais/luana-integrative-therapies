import { createContext, useState } from "react";

interface ITopicsCarousel {
   topicSelected: string | undefined;
   setTopicSelected: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const TopicsCarouselContext = createContext<ITopicsCarousel>({
   topicSelected: undefined,
   setTopicSelected: () => {},
});

interface ITopicsCarouselProviderProps {
   children: React.ReactNode;
}

export const TopicsCarouselProvider: React.FC<
   ITopicsCarouselProviderProps
> = ({ children }) => {
   const [topicSelected, setTopicSelected] = useState<string | undefined>(undefined);

   return (
      <TopicsCarouselContext.Provider value={{ topicSelected, setTopicSelected }}>
         {children}
      </TopicsCarouselContext.Provider>
   );
};
