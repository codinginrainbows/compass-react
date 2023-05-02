import { ProfilePicture } from '../profile-picture';
import { User } from '../user-name';
import DropDownIcon from '../../assets/icons/home/dropdown.svg'
import * as S from './styles'
import { useFetchAPI } from '../../hooks/useFetchAPI';
import { IUser } from '../../models/user';
import { useState } from 'react';

function DropDownUsers() {
    const { data } = useFetchAPI<IUser>('user')
    const [show, setShow] = useState(true)

    
    return (
        <S.Wrapper>
            <S.Header onClick={() => setShow(!show)}>
                <S.Title>Meus Amigos</S.Title>
                <S.Icon src={DropDownIcon} 
                    className={show ? 'turnUpsideDown' : ''} 
                />
            </S.Header>
            {show && (
                <S.Content>
                    {data?.users.map((user) => {
                        return (
                            <S.List key={user.email}>
                                <ProfilePicture imageAdress={'https://picsum.photos/45'} />
                                <User name={user.name} />
                            </S.List>
                        )
                    })}
                </S.Content>
            )},
        </S.Wrapper>
    )
}

export { DropDownUsers }