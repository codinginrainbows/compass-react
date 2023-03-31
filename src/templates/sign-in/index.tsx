import { SubmitButton } from "../../components/button"
import { InputField } from "../../components/input-field"
import { InputTitle } from "../../components/input-title"
import { PageTitle } from "../../components/page-title"

import * as S from './styles'

import BannerCompass from "images/banner-compass.svg"

function SignUpTemplate() {
    return (
        <S.Wrapper>
            <S.Content>
                <S.InfoContainer>
                    <PageTitle content="Olá," />
                    <S.MinorTitle>Por favor, registre-se para continuar</S.MinorTitle>
                </S.InfoContainer>
                <S.Form>
                    <InputTitle content="Register" />
                    <InputField text="Nome" type="text" />
                    <InputField text="Usuário" type="text" />
                    <InputField text="Nascimento" type="text" />
                    <InputField text="Email" type="text" />
                    <InputField text="Senha" type="password" />
                    <InputField text="Confirmar Senha" type="password" />
                    <SubmitButton title="Registrar-se" />
                </S.Form>
                <S.LinkText>
                    Já possui uma conta? <a>Faça Login</a>
                </S.LinkText>
            </S.Content>
            <S.ImageContainer />
        </S.Wrapper>
    )
}

export { SignUpTemplate }