import { SubmitButton } from "../../components/button"
import { InputField } from "../../components/input-field"
import { InputTitle } from "../../components/input-title"
import { PageTitle } from "../../components/page-title"

import userIcon from "../../assets/icons/user-icon.svg"
import lockIcon from "../../assets/icons/lock-icon.svg"

import * as S from './styles'

function SignInTemplate() {
    return (
        <S.Wrapper>
            <S.Content>
                <S.InfoContainer>
                    <PageTitle content="Olá," />
                    <S.MinorTitle>Para continuar navegando de forma segura, efetue o login</S.MinorTitle>
                </S.InfoContainer>
                <S.Form>
                    <InputTitle content="Login" />
                    <InputField text="Nome" type="text" icon={userIcon} />
                    <InputField text="Senha" type="password" icon={lockIcon} />
                    <SubmitButton title="Logar-se" />
                </S.Form>
                <S.LinkText>
                    Novo por aqui? <a href="/">Registre-se</a>
                </S.LinkText>
            </S.Content>
            <S.BannerCompass />
        </S.Wrapper>
    )
}

export { SignInTemplate }