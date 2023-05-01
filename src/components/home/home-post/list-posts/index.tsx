import { Card } from '../../home-card'
import { CreatePost } from '../create-post'
import * as S from './styles'

interface IPost {
    gridPosition: string
}

function Post({ gridPosition }: IPost) {
    return (
        <S.Wrapper className={gridPosition}>
            <Card>
                <CreatePost />    
            </Card>
            <Card>
                <CreatePost />    
            </Card>
            <Card>
                <CreatePost />    
            </Card>
            <Card>
                <CreatePost />    
            </Card>
        </S.Wrapper>
    ) 
}

export { Post }