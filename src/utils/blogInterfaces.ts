// Posts interface
export interface IEquilibriumPostNode {
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
   autor: {
      nome: string;
      descricao: string;
      avatar: {
         url: string;
      };
      cro?: number;
   };
}

export interface IEquilibriumPostEdge {
   node: IEquilibriumPostNode;
}

export interface IPageInfo {
   hasNextPage: boolean;
   endCursor: string | null;
}

export interface IEquilibriumPostsConnection {
   pageInfo: IPageInfo;
   edges: IEquilibriumPostEdge[];
}

export interface IEquilibriumPostsData {
   equilibriumPostsConnection: IEquilibriumPostsConnection;
}

export interface IEquilibriumPostById {
   equilibriumPost: IEquilibriumPostNode;
}

// Topics Interface

export interface IEquilibriumTopicNode {
   id: string;
   nome: string;
   descricao: {
      html: string;
   };
   imagem: {
      url: string;
   };
}

export interface IEquilibriumTopicEdge {
   node: IEquilibriumTopicNode;
}

export interface IEquilibriumTopicsConnection {
   pageInfo: IPageInfo;
   edges: IEquilibriumTopicEdge[];
}

export interface IEquilibriumTopicsData {
   equilibriumTopicosConnection: IEquilibriumTopicsConnection;
}
