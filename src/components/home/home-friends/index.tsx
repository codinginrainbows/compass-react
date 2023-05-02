import { DropDownUsers } from '../../dropdown-users'
import { Card } from '../home-card'
import * as S from './styles'

interface IFriends {
    gridPosition: string
}

function Friends({ gridPosition }: IFriends) {
    return (
        <S.Wrapper className={gridPosition}>
            <Card>
                <DropDownUsers />   
            </Card>
        </S.Wrapper>
    ) 
}

export { Friends }