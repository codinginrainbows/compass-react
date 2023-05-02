interface IComment {
    user: string
    comment: string
}

interface Post {
    user: string,
    post_date: string,
    description: string,
    likes: number,
    comments: IComment[]
}

export interface IPost {
    posts: Post[]
}
