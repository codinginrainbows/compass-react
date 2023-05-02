interface IComment {
    user: string
    comment: string
}

export interface IPost {
    user: string,
    post_date: string,
    description: string,
    likes: number,
    comments: IComment[]
    url_imagem: string
}