import { SignUpForm } from '../../organisms/sign-up/sign-up-form'
import * as S from './styles'

function SignUpTemplate() {
    return (
        <S.Wrapper>
            <S.Content>
                <SignUpForm />
            </S.Content>
            <S.BannerCompass />
        </S.Wrapper>
    )
}

export { SignUpTemplate }
