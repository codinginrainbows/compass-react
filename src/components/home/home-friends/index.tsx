import { Card } from '../home-card'
import { CreatePost } from '../home-post/create-post'
import * as S from './styles'

interface IFriends {
    gridPosition: string
}

function Friends({ gridPosition }: IFriends) {
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

export { Friends }