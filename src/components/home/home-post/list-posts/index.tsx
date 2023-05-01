import { ProfilePicture } from '../../../profile-picture'
import { User } from '../../../user-name'
import { Interaction } from '../interactions'
import likesIcon from '../../../../assets/icons/home/posts/likes.svg'
import commentsIcon from '../../../../assets/icons/home/posts/comments.svg'
import shareIcon from '../../../../assets/icons/home/posts/share.svg'
import * as S from './styles'
import { TextLink } from '../../../text-link'
import { useFetchAPI } from '../../../../hooks/useFetchAPI'
import { IUser } from '../../../../models/user'
import { Card } from '../../home-card'

function ListPosts() {
    const { data, state } = useFetchAPI<IUser>('user')  

    
    return (
        <S.Wrapper>
            {data?.users.map((user) => {
                return (
                    <Card key={user.email}>
                    <S.UserInfo>
                        <ProfilePicture imageAdress={'https://picsum.photos/45'} />
                        <S.UserDetails>
                            <User name={user.name} />
                            <S.When>
                                <TextLink textBefore='12 minutos atrás em' where={'/home'} link={'Rio Grande'} />
                            </S.When>
                        </S.UserDetails>
                    </S.UserInfo>
                    <S.Content>
                        <S.Text>{user.email}</S.Text>
                        <S.Image src="https://picsum.photos/200" />
                        {/* <S.Image src="https://thumbs.dreamstime.com/b/professional-development-programmer-working-programming-website-software-coding-technology-writing-codes-data-code-132331729.jpg" /> */}
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
                    </Card>
                )
            })}
        </S.Wrapper>
    ) 
}

export { ListPosts }