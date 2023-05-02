import { ProfilePicture } from '../../../profile-picture'
import * as S from './styles'
import cameraIcon from '../../../../assets/icons/home/posts/camera.svg'
import pictureIcon from '../../../../assets/icons/home/posts/picture.svg'
import fileIcon from '../../../../assets/icons/home/posts/file.svg'
import locationIcon from '../../../../assets/icons/home/posts/location.svg'
import smileyFaceIcon from '../../../../assets/icons/home/posts/smiley.svg'
import { Card } from '../../home-card'
import { IPost } from '../../../../models/post'
import { useState } from 'react'
import { useAccount } from '../../../../hooks/useAccount'

interface ICreatePost {
    posts: IPost[]
    state?: string
    handlePosts: React.Dispatch<React.SetStateAction<IPost[]>>
}

function CreatePost({ posts, handlePosts }: ICreatePost) {
    const [newPost, setNewPost] = useState<IPost[]>(
        [
            {
                user: '',
                post_date: '',
                description: '',
                likes: 0,
                comments: [
                    {
                        user: '',
                        comment: ''
                    },
                ],
                url_imagem: '',
            }
        ],
    )

    const { user } = useAccount()

    const handleNewPost = (e: any) => {
        setNewPost([{
            user: user,
            post_date: String(new Date()),
            description: e.target.value,
            likes: Math.floor(Math.random() * 100),
            comments: [
                {
                    user: 'gabrielgarcia',
                    comment: 'PARABÉNS POR POSTAR NA REDE!!!!!!'
                },
            ],
            url_imagem: 'https://i.kym-cdn.com/photos/images/facebook/002/515/832/ee7.jpg',
            // url_imagem: 'https://loremflickr.com/320/240',
        }] as IPost[])
    }
    
    const handleCreatePost = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        handlePosts([newPost[0], ...posts] as IPost[])
    }

    return (
        <S.Wrapper>
            <Card>
                <S.Form onSubmit={handleCreatePost}>
                    <S.InputContainer>
                        <ProfilePicture imageAdress='https://picsum.photos/45' />
                        <S.Input 
                            placeholder="No que você está pensando?"
                            onChange={handleNewPost}
                        />
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
                    </S.Form>
            </Card>
        </S.Wrapper>
    )
}

export { CreatePost }