// Posts interface
export interface IPost {
    id: string;
    titulo: string;
    subtitulo?: string;
    data: string;
    categoria: {
        nome: string;
    };
    equilibriumTopico: {
        id: string,
        nome: string,
    };
    imagem: {
        url: string;
    };
    video?: string;
    texto: {
        html: string
    },
    autor: {
        nome: string;
        descricao: string;
        avatar: {
            url: string;
        };
        cro?: number;
    };
}

export interface IPostsData {
    posts: IPost[];
}


// Topics Interface

export interface IEquilibriumTopicNode {
    id: string,
    nome: string,
    descricao: {
        html: string
    },
    imagem: {
        url: string
    }
}

export interface IEquilibriumTopicEdge {
    node: IEquilibriumTopicNode
}

export interface IPageInfo {
    hasNextPage: boolean,
    endCursor: string | null
}

export interface IEquilibriumTopicsConnection {
    pageInfo: IPageInfo,
    edges: IEquilibriumTopicEdge[]
}

export interface IEquilibriumTopicsData {
    equilibriumTopicosConnection: IEquilibriumTopicsConnection
}