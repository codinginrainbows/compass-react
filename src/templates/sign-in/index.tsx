import { InputField } from "../../components/input-field"

import * as S from './styles'

import BannerCompass from "images/banner-compass.svg"

function SignUpTemplate() {
    return (
        <S.Wrapper>
            <S.FormContainer>
                <S.Title>Olá,</S.Title>
                <S.MinorTitle>Por favor, registre-se para continuar</S.MinorTitle>
                <S.Form>
                    <InputField text="Nome" type="text" />
                    <InputField text="Usuário" type="text" />
                    <InputField text="Nascimento" type="text" />
                    <InputField text="Email" type="text" />
                    <InputField text="Senha" type="text" />
                    <InputField text="Confirmar Senha" type="text" />
                </S.Form>
                <S.LinkText>
                    Já possui uma conta? <a>Faça Login</a>
                </S.LinkText>
            </S.FormContainer>
            <S.ImageContainer />
        </S.Wrapper>
    )
}

export { SignUpTemplate }