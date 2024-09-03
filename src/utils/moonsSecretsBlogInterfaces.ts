// Posts interface
export interface ISegredosDaLuaPostNode {
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

export interface ISegredosDaLuaPostEdge {
   node: ISegredosDaLuaPostNode;
}

export interface IPageInfo {
   hasNextPage: boolean;
   endCursor: string | null;
}

export interface ISegredosDaLuaPostsConnection {
   pageInfo: IPageInfo;
   edges: ISegredosDaLuaPostEdge[];
}

export interface ISegredosDaLuaPostsData {
   segredosDaLuaPostsConnection: ISegredosDaLuaPostsConnection;
}

export interface ISegredosDaLuaPostById {
   segredosDaLuaPost: ISegredosDaLuaPostNode;
}

// Topics Interface

export interface ISegredosDaLuaTopicNode {
   id: string;
   nome: string;
   descricao: {
      html: string;
   };
   imagem: {
      url: string;
   };
}

export interface ISegredosDaLuaTopicEdge {
   node: ISegredosDaLuaTopicNode;
}

export interface ISegredosDaLuaTopicsConnection {
   pageInfo: IPageInfo;
   edges: ISegredosDaLuaTopicEdge[];
}

export interface ISegredosDaLuaTopicsData {
   segredosDaLuaTopicosConnection: ISegredosDaLuaTopicsConnection;
}
