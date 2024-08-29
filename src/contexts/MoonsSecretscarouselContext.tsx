import React, { createContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_MOONS_SECRETS_TOPICS_QUERY } from "@utils/blogAPI";
import { IMoonsSecretsTopicsData } from "@utils/moonsSecretsBlogInterfaces";

interface IMoonsSecretsCarouselContextType {
   currentTopicId: string;
   setCurrentTopicId: React.Dispatch<React.SetStateAction<string>>;
}

export const MoonsSecretsCarouselContext =
   createContext<IMoonsSecretsCarouselContextType>({
      currentTopicId: "",
      setCurrentTopicId: () => {},
   });

interface ICarouselProviderProps {
   children: React.ReactNode;
}

export const MoonsSecretsCarouselProvider: React.FC<ICarouselProviderProps> = ({
   children,
}) => {
   const [currentTopicId, setCurrentTopicId] = useState<string>("");
   const { data, loading, error } = useQuery<IMoonsSecretsTopicsData>(
      GET_MOONS_SECRETS_TOPICS_QUERY,
      {
         variables: {
            first: 1,
         },
      }
   );

   useEffect(() => {
      if (!loading && !error && data?.segredosDaLuaTopicosConnection.edges) {
         if (
            !currentTopicId &&
            data.segredosDaLuaTopicosConnection.edges.length > 0
         ) {
            const firstTopicId =
               data.segredosDaLuaTopicosConnection.edges[0]?.node.id;
            setCurrentTopicId(firstTopicId);
         } else {
            return;
         }
      }
   }, [data, loading, error, currentTopicId]);

   return (
      <MoonsSecretsCarouselContext.Provider
         value={{ currentTopicId, setCurrentTopicId }}
      >
         {children}
      </MoonsSecretsCarouselContext.Provider>
   );
};
