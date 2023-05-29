import { SignInForm } from '../../organisms/sign-in/sign-in-form'
import * as S from './styles'

function SignInTemplate() {    
    return (
        <S.Wrapper>
            <S.Content>
                <SignInForm />
            </S.Content>
            <S.BannerCompass />
        </S.Wrapper>
    )
}

export { SignInTemplate }