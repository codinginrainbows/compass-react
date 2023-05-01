import { ProfilePicture } from '../../../profile-picture'
import { User } from '../../../user-name'
import { Interaction } from '../interactions'
import likesIcon from '../../../../assets/icons/home/posts/likes.svg'
import commentsIcon from '../../../../assets/icons/home/posts/comments.svg'
import shareIcon from '../../../../assets/icons/home/posts/share.svg'
import cameraIcon from '../../../../assets/icons/home/posts/camera.svg'
import pictureIcon from '../../../../assets/icons/home/posts/picture.svg'
import fileIcon from '../../../../assets/icons/home/posts/file.svg'
import locationIcon from '../../../../assets/icons/home/posts/location.svg'
import smileyFaceIcon from '../../../../assets/icons/home/posts/smiley.svg'
import * as S from './styles'
import { TextLink } from '../../../text-link'
import { Text } from '../../../text'
import { useFetchAPI } from '../../../../hooks/useFetchAPI'
import { IUser } from '../../../../models/user'
import { Card } from '../../home-card'
import { Separator } from '../../../separator'
import { IPost } from '../../../../models/post'

function ListPosts() {
    const { data, state } = useFetchAPI<IPost>('user/post')  
    
    return (
        <S.Wrapper>
            {data?.posts.map((post) => {
                return (
                    <Card key={post.description}>
                        <S.UserInfo>
                            <ProfilePicture imageAdress={'https://picsum.photos/45'} />
                            <S.UserDetails>
                                <User name={post.user} />
                                <S.When>
                                    <TextLink textBefore='12 minutos atrás em' where={'/home'} link={'Rio Grande'} />
                                </S.When>
                            </S.UserDetails>
                        </S.UserInfo>
                        <S.Content>
                            <S.Text>{post.description}</S.Text>
                            <S.Image src="https://picsum.photos/200" />
                            <S.Actions>
                                <S.Amount>
                                    <Interaction type="Curtiu" icon={likesIcon} amount="254"/>
                                    <S.HowMany>7.2k</S.HowMany>
                                </S.Amount>
                                <S.Amount>
                                    <Interaction type="Comentários" icon={commentsIcon} amount="1834"/>
                                    <S.HowMany>174</S.HowMany>
                                </S.Amount>
                                <Interaction type="Compartilhar" icon={shareIcon} />
                            </S.Actions>
                        </S.Content>
                        <S.CommentsContainer>
                            <S.InputContainer>
                                <ProfilePicture imageAdress='https://picsum.photos/45' />
                                <S.IconsContainer>
                                    <S.Input placeholder='No que você está pensando?'/>
                                    <S.Icon src={cameraIcon} />
                                    <S.Icon src={pictureIcon} />
                                    <S.Icon src={fileIcon} />
                                    <S.Icon src={locationIcon} />
                                    <S.Icon src={smileyFaceIcon} />
                                </S.IconsContainer>
                            </S.InputContainer>
                        <Text content="Todos os comentários"/>
                        <S.UserComments>
                            <S.Comment>
                                <ProfilePicture imageAdress='https://picsum.photos/45' />
                                <User name={`${post.user}: `}/>
                                <Text content={`A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em `}  />
                            </S.Comment>
                            <S.ShowAllContainer>
                                <Separator />
                                <TextLink where={'/home'} link={'Ver todos os comentários'}/>
                            </S.ShowAllContainer>
                        </S.UserComments>
                        </S.CommentsContainer>

                    </Card>
                )
            })}
        </S.Wrapper>
    ) 
}

export { ListPosts }