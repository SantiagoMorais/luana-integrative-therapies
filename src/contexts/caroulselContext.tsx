import React, { createContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_EQUILIBRIUM_TOPICS_QUERY } from "@utils/blogAPI";
import { IEquilibriumTopicsData } from "@utils/equilibriumBlogInterfaces";

interface ICarouselContextType {
   currentTopicId: string;
   setCurrentTopicId: React.Dispatch<React.SetStateAction<string>>;
}

export const CarouselContext = createContext<ICarouselContextType>({
   currentTopicId: "",
   setCurrentTopicId: () => {},
});

interface ICaroulselProviderProps {
   children: React.ReactNode;
}

export const CaroulselProvider: React.FC<ICaroulselProviderProps> = ({
   children,
}) => {
   const [currentTopicId, setCurrentTopicId] = useState<string>("");
   const { data, loading, error } = useQuery<IEquilibriumTopicsData>(
      GET_EQUILIBRIUM_TOPICS_QUERY,
      {
         variables: {
            first: 1,
         },
      }
   );

   useEffect(() => {
      if (!loading && !error && data?.equilibriumTopicosConnection.edges) {
         if (
            !currentTopicId &&
            data.equilibriumTopicosConnection.edges.length > 0
         ) {
            const firstTopicId =
               data.equilibriumTopicosConnection.edges[0]?.node.id;
            setCurrentTopicId(firstTopicId);
         } else {
            return;
         }
      }
   }, [data, loading, error, currentTopicId]);

   useEffect(() => {
      window.localStorage.setItem(
         "currentTopicName",
         JSON.stringify(currentTopicId)
      );
   }, [currentTopicId]);

   return (
      <CarouselContext.Provider value={{ currentTopicId, setCurrentTopicId }}>
         {children}
      </CarouselContext.Provider>
   );
};
