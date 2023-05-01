import { Card } from '../home-card'
import { CreatePost } from './create-post'
import { ListPosts } from './list-posts'
import * as S from './styles'

interface IPosts {
    gridPosition: string
}

function Posts({ gridPosition }: IPosts) {
    return (
        <S.Wrapper className={gridPosition}>
            <Card>
                <CreatePost />    
            </Card>
            <ListPosts />    
        </S.Wrapper>
    ) 
}

export { Posts }