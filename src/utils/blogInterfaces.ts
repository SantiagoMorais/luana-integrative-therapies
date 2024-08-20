// Posts interface
export interface IPost {
    id: string;
    titulo: string;
    subtitulo?: string;
    data: string;
    categoria: {
        nome: string;
    };
    topico: {
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

export interface ITopicNode {
    id: string,
    nome: string,
    descricao: {
        html: string
    },
    imagem: {
        url: string
    },
    categoria: {
        id: string,
        nome: string
    }
}

export interface ITopicEdge {
    node: ITopicNode
}

export interface IPageInfo {
    hasNextPage: boolean,
    endCursor: string | null
}

export interface ITopicsConnection {
    pageInfo: IPageInfo,
    edges: ITopicEdge[]
}

export interface ITopicsData {
    topicosConnection: ITopicsConnection
}