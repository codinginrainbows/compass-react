import { ProfilePicture } from '../../../profile-picture'
import * as S from './styles'
import cameraIcon from '../../../../assets/icons/home/posts/camera.svg'
import pictureIcon from '../../../../assets/icons/home/posts/picture.svg'
import fileIcon from '../../../../assets/icons/home/posts/file.svg'
import locationIcon from '../../../../assets/icons/home/posts/location.svg'
import smileyFaceIcon from '../../../../assets/icons/home/posts/smiley.svg'

function CreatePost() {
    return (
        <S.Wrapper>
            <S.InputContainer>
                <ProfilePicture imageAdress='https://picsum.photos/45' />
                <S.Input placeholder='No que você está pensando?'/>
            </S.InputContainer>
            <S.Actions>
                <S.IconsContainer>
                    <S.Icon src={cameraIcon} />
                    <S.Icon src={pictureIcon} />
                    <S.Icon src={fileIcon} />
                    <S.Icon src={locationIcon} />
                    <S.Icon src={smileyFaceIcon} />
                </S.IconsContainer>
                <S.PostButton>Postar</S.PostButton>
            </S.Actions>
        </S.Wrapper>
    )
}

export { CreatePost }