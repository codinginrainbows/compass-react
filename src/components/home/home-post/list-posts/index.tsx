import { ProfilePicture } from '../../../profile-picture'
import { User } from '../../../user-name'
import { Interaction } from '../interactions'
import likesIcon from '../../../../assets/icons/home/posts/likes.svg'
import commentsIcon from '../../../../assets/icons/home/posts/comments.svg'
import shareIcon from '../../../../assets/icons/home/posts/share.svg'
import cameraIcon from '../../../../assets/icons/home/posts/camera.svg'
import clockIcon from '../../../../assets/icons/home/posts/clock.svg'
import pictureIcon from '../../../../assets/icons/home/posts/picture.svg'
import fileIcon from '../../../../assets/icons/home/posts/file.svg'
import locationIcon from '../../../../assets/icons/home/posts/location.svg'
import smileyFaceIcon from '../../../../assets/icons/home/posts/smiley.svg'
import * as S from './styles'
import { TextLink } from '../../../text-link'
import { Text } from '../../../text'
import { Card } from '../../home-card'
import { Separator } from '../../../separator'
import { IPost } from '../../../../models/post'

interface IListPosts {
    posts: IPost[]
}

function ListPosts({ posts }: IListPosts) {
    return (
        <S.Wrapper>
            {posts?.map((post: IPost) => {
                return (
                    <Card key={`${post.description} ${Math.floor(Math.random() * 100000)}`}>
                        <S.UserInfo>
                            <ProfilePicture imageAdress={'https://picsum.photos/45'} />
                            <S.UserDetails>
                                <User name={post.user} />
                                <S.When>
                                    <S.Icon src={clockIcon} />
                                    <TextLink textBefore={`${post.post_date} em `} where={'/home'} link={'Rio Grande'} />
                                </S.When>
                            </S.UserDetails>
                        </S.UserInfo>
                        <S.Content>
                            <S.Text>{post.description}</S.Text>
                            {post.url_imagem && <S.Image src={post.url_imagem} />}
                            <S.Actions>
                                <S.Amount>
                                    <Interaction type="Curtiu" icon={likesIcon} />
                                    <S.HowMany>{post.likes}</S.HowMany>
                                </S.Amount>
                                <S.Amount>
                                    <Interaction type="Comentários" icon={commentsIcon} />
                                    <S.HowMany>{post.comments?.length ? post.comments?.length : '0'}</S.HowMany>
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
                            <S.UserComments>
                                {post.comments?.length ? 
                                <>
                                    <S.AllComments>Todos os comentários</S.AllComments>
                                    {post.comments?.map((comment) => {
                                        return (
                                            <S.Comment key={`${comment.comment} ${Math.floor(Math.random() * 100000)}`}>
                                                <ProfilePicture imageAdress='https://picsum.photos/45' />
                                                <User name={`${comment.user}: `}/>
                                                <Text content={comment.comment}  />
                                            </S.Comment>
                                        )
                                    })}
                                    <S.ShowAllContainer>
                                        <Separator />
                                        <TextLink where={'/home'} link={'Ver todos os comentários'}/>
                                    </S.ShowAllContainer>
                                </>
                                : <Text content={'Ninguém comentou ainda'} />}
                            </S.UserComments>
                        </S.CommentsContainer>

                    </Card>
                )
            })}
        </S.Wrapper>
    ) 
}

export { ListPosts }