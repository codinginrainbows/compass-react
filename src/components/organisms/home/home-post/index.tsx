import { useEffect, useState } from 'react'
import { CreatePost } from './create-post'
import { ListPosts } from './list-posts'
import * as S from './styles'
import { IPost } from '../../../../models/post'
import { useFetchAPI } from '../../../../hooks/useFetchAPI'
import { IComment } from '../../../../models/comments'

interface IPosts {
    gridPosition: string
}

function Posts({ gridPosition }: IPosts) {
    const { data: postsData } = useFetchAPI<IPost[]>('posts')
    const { data: commentsData } = useFetchAPI<IComment[]>('comments')
    const [posts, setPosts] = useState<IPost[]>()
    const [comments, setComments] = useState<IComment[]>()

    useEffect(() => {
        setPosts(postsData as IPost[])
        setComments(commentsData as IComment[])
    }, [postsData, commentsData])

    return (
        <S.Wrapper className={gridPosition}>
            <CreatePost posts={posts as IPost[]} handlePosts={setPosts as React.Dispatch<React.SetStateAction<IPost[]>>} />    
            <ListPosts comments={comments as IComment[]} posts={posts as IPost[]} />    
        </S.Wrapper>
    ) 
}

export { Posts }