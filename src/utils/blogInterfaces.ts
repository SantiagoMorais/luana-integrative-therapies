export interface IPost {
    id: string;
    titulo: string;
    subtitulo?: string;
    data: string;
    categoria: {
        nome: string;
    };
    topico: {
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

export interface ITopic {
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

export interface IPostsData {
    posts: IPost[];
}

export interface ITopicsData {
    topicos: ITopic[];
}

export interface IAllData {
    data: {
        posts: IPost[],
        topicos: ITopic[]
    }
}