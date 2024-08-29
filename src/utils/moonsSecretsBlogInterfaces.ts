// Posts interface
export interface IMoonsSecretsPostNode {
   id: string;
   titulo: string;
   subtitulo?: string;
   data: string;
   categoria: {
      nome: string;
   };
   imagem: {
      url: string;
   };
   video?: string;
   texto: {
      html: string;
   };
   autor?: {
      nome: string;
      descricao: string;
      avatar: {
         url: string;
      };
      cro?: number;
   };
}

export interface IMoonsSecretsPostEdge {
   node: IMoonsSecretsPostNode;
}

export interface IPageInfo {
   hasNextPage: boolean;
   endCursor: string | null;
}

export interface IMoonsSecretsPostsConnection {
   pageInfo: IPageInfo;
   edges: IMoonsSecretsPostEdge[];
}

export interface IMoonsSecretsPostsData {
   segredosDaLuaPostsConnection: IMoonsSecretsPostsConnection;
}

export interface IMoonsSecretsPostById {
   segredosDaLuaPost: IMoonsSecretsPostNode;
}

// Topics Interface

export interface IMoonsSecretsTopicNode {
   id: string;
   nome: string;
   descricao: {
      html: string;
   };
   imagem: {
      url: string;
   };
}

export interface IMoonsSecretsTopicEdge {
   node: IMoonsSecretsTopicNode;
}

export interface IMoonsSecretsTopicsConnection {
   pageInfo: IPageInfo;
   edges: IMoonsSecretsTopicEdge[];
}

export interface IMoonsSecretsTopicsData {
   segredosDaLuaTopicosConnection: IMoonsSecretsTopicsConnection;
}
