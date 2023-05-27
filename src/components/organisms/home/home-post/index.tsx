import { useEffect, useState } from 'react'
import { CreatePost } from './create-post'
import { ListPosts } from './list-posts'
import * as S from './styles'
import { IPost } from '../../../../models/post'
import { useFetchAPI } from '../../../../hooks/useFetchAPI'

interface IPosts {
    gridPosition: string
}

function Posts({ gridPosition }: IPosts) {
    const { data: postsData } = useFetchAPI<IPost[]>('user/post', 'GET')
    const [data, setData] = useState<IPost[]>()

    useEffect(() => {
        setData(postsData as IPost[])
    }, [postsData])

    return (
        <S.Wrapper className={gridPosition}>
            <CreatePost posts={data as IPost[]} handlePosts={setData as React.Dispatch<React.SetStateAction<IPost[]>>} />    
            <ListPosts posts={data as IPost[]} />    
        </S.Wrapper>
    ) 
}

export { Posts }