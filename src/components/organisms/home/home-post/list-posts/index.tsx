import { Interaction } from '../interactions'
import likesIcon from '../../../../../assets/icons/home/posts/likes.svg'
import commentsIcon from '../../../../../assets/icons/home/posts/comments.svg'
import shareIcon from '../../../../../assets/icons/home/posts/share.svg'
import cameraIcon from '../../../../../assets/icons/home/posts/camera.svg'
import clockIcon from '../../../../../assets/icons/home/posts/clock.svg'
import pictureIcon from '../../../../../assets/icons/home/posts/picture.svg'
import fileIcon from '../../../../../assets/icons/home/posts/file.svg'
import locationIcon from '../../../../../assets/icons/home/posts/location.svg'
import smileyFaceIcon from '../../../../../assets/icons/home/posts/smiley.svg'
import * as S from './styles'
import { IPost } from '../../../../../models/post'
import { Card } from '../../../../molecules/card'
import { ProfilePicture } from '../../../../atoms/profile-picture'
import { User } from '../../../../atoms/user-name'
import { TextLink } from '../../../../atoms/text-link'
import { Text } from '../../../../atoms/text'
import { Separator } from '../../../../atoms/separator'
import { IComment } from '../../../../../models/comments'
import { useState } from 'react'
import { useAccount } from '../../../../../hooks/useAccount'
import { newComment as addNewComment } from '../../../../../services/newComment'
import { format } from 'date-fns'
import { toast } from 'react-toastify'

interface IListPosts {
    posts: IPost[]
    comments: IComment[]
}

function ListPosts({ posts, comments }: IListPosts) {
    const [commentContent, setCommentContent] = useState('')
    const [newComment, setNewComment] = useState<IComment>(
        {
            post_id: '',
            user: '',
            comment: '',
        }
    )

    const { user } = useAccount()
    
    const handleNewComment = (e: any) => {
        setCommentContent(e.target.value)

        setNewComment({
            post_id: '',
            user: '',
            comment: '',
        } as IComment)
    }
    
    
    const handlePostComment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        try {
            await addNewComment(newComment)
            window.location.reload()
        } catch(err: any) {
            toast.error(err.response.data.message[0])
        }
    }
    
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
                                    <TextLink textBefore={`${format(new Date(post.post_date), 'dd/mm/yyy')} em `} where={'/home'} link={'Rio Grande'} />
                                </S.When>
                            </S.UserDetails>
                        </S.UserInfo>
                        <S.Content>
                            <S.Text>{post.description}</S.Text>
                            {post.url_image && <S.Image src={post.url_image} alt='Erro ao carregar imagem'/>}
                            <S.Actions>
                                <S.Amount>
                                    <Interaction type="Curtiu" icon={likesIcon} />
                                    <S.HowMany>{post.likes}</S.HowMany>
                                </S.Amount>
                                <S.Amount>
                                    <Interaction type="Comentários" icon={commentsIcon} />
                                    {comments?.map((comment) => {
                                        return (
                                            <>
                                                {post._id === comment.post_id ? (    
                                                    <S.HowMany>{comments?.length && comments?.length}</S.HowMany>
                                                ) : '0'}
                                            </>
                                        )
                                    })}
                                </S.Amount>
                                <Interaction type="Compartilhar" icon={shareIcon} />
                            </S.Actions>
                        </S.Content>
                        <S.CommentsContainer>
                            <S.InputContainer>
                                <ProfilePicture imageAdress='https://picsum.photos/45' />
                                <S.IconsContainer>
                                    <S.Input placeholder='No que você está pensando?' />
                                    <S.Icon src={cameraIcon} />
                                    <S.Icon src={pictureIcon} />
                                    <S.Icon src={fileIcon} />
                                    <S.Icon src={locationIcon} />
                                    <S.Icon src={smileyFaceIcon} />
                                </S.IconsContainer>
                            </S.InputContainer>
                            <S.UserComments>
                                {comments?.length ? 
                                <>
                                    <S.AllComments>Todos os comentários</S.AllComments>
                                    {comments?.map((comment) => {
                                        return (
                                            <>
                                                {post._id === comment.post_id && (
                                                    <S.Comment key={`${comment.comment} ${Math.floor(Math.random() * 100000)}`}>
                                                        <ProfilePicture imageAdress='https://picsum.photos/45' />
                                                        <User name={`${comment.user}: `}/>
                                                        <Text content={comment.comment}  />
                                                    </S.Comment>
                                                )}
                                            </>
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
            }).reverse()}
        </S.Wrapper>
    ) 
}

export { ListPosts }