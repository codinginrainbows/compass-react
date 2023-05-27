import { useFetchAPI } from '../../../../hooks/useFetchAPI'
import { IUser } from '../../../../models/user'
import { ProfilePicture } from '../../../atoms/profile-picture'
import { User } from '../../../atoms/user-name'
import { Card } from '../../../molecules/card'
import { Dropdown } from '../../../molecules/dropdown'
import * as S from './styles'

interface IFriends {
    gridPosition: string
}

function Friends({ gridPosition }: IFriends) {
    const { data } = useFetchAPI<IUser[]>('user', 'GET')

    return (
        <S.Wrapper className={gridPosition}>
            <Card>
                <Dropdown header={'Meus Amigos'}>
                    {data?.map((user) => (
                        <S.List key={user.email}>
                            <ProfilePicture imageAdress={'https://loremflickr.com/320/240'} />
                            <User name={user.name} />
                        </S.List>
                    ))}
                </Dropdown>   
            </Card>
        </S.Wrapper>
    ) 
}

export { Friends }