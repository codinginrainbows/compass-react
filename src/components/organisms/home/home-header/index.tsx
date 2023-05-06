import * as S from './styles'
import HomeIcon from '../../../../assets/icons/home/home.svg'
import { ProfilePicture } from '../../../atoms/profile-picture'
import { useAccount } from '../../../../hooks/useAccount'

interface IHeader {
    gridPosition: string
}

function Header({ gridPosition }: IHeader) {
    const { name: nameFromStorage } = useAccount()

    return (
        <S.Wrapper className={gridPosition}>
            <S.HomeInfoContainer>
                <S.HomeIcon src={HomeIcon} />
                <S.HomeText>Home</S.HomeText>
            </S.HomeInfoContainer>
            <S.HomeInfoContainer>
                <S.HomeText>{nameFromStorage}</S.HomeText>
                <ProfilePicture imageAdress='https://picsum.photos/45' />
            </S.HomeInfoContainer>
        </S.Wrapper>
    ) 
}

export { Header }