import * as S from './styles'

interface IProfilePicture {
    imageAdress: string
}

function ProfilePicture({ imageAdress }: IProfilePicture) {
    return (
        <S.Wrapper>
            <S.Picture src={imageAdress} alt="Profile Picture" />
        </S.Wrapper>
    ) 
}

export { ProfilePicture }