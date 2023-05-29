import * as S from './styles'
import cameraIcon from '../../../../../assets/icons/home/posts/camera.svg'
import pictureIcon from '../../../../../assets/icons/home/posts/picture.svg'
import fileIcon from '../../../../../assets/icons/home/posts/file.svg'
import locationIcon from '../../../../../assets/icons/home/posts/location.svg'
import smileyFaceIcon from '../../../../../assets/icons/home/posts/smiley.svg'
import { IPost } from '../../../../../models/post'
import { useState } from 'react'
import { useAccount } from '../../../../../hooks/useAccount'
import { ProfilePicture } from '../../../../atoms/profile-picture'
import { Card } from '../../../../molecules/card'
import { newPost as addNewPost } from '../../../../../services/newPost'
import { toast } from 'react-toastify'

interface ICreatePost {
    posts: IPost[]
    state?: string
    handlePosts: React.Dispatch<React.SetStateAction<IPost[]>>
}

function CreatePost({ posts, handlePosts }: ICreatePost) {
    const [postContent, setPostContent] = useState('')
    const [newPost, setNewPost] = useState<IPost>(
        {
            user: '',
            post_date: '',
            description: '',
            likes: 0,
            url_image: '',
        }
    )

    
    const { user } = useAccount()
    
    const handleNewPost = (e: any) => {
        setPostContent(e.target.value)

        setNewPost({
            user: user,
            post_date: String(new Date()),
            description: postContent,
            likes: 0,
            url_image: 'https://source.unsplash.com/random/800x800/?img=1'
        } as IPost)
    }
    
    
    const handleCreatePost = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        try {
            await addNewPost(newPost)
            window.location.reload()
        } catch(err: any) {
            toast.error(err.response.data.message[0])
        }
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
                            value={postContent}
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