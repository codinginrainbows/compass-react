import { SubmitButton } from "../../components/button"
import { InputField } from "../../components/input-field"
import { InputTitle } from "../../components/input-title"

import userIcon from "../../assets/icons/user-icon.svg"
import lockIcon from "../../assets/icons/lock-icon.svg"

import * as S from './styles'
import { FormHeader } from "../../components/form-header"
import { Link } from "react-router-dom"

function SignInTemplate() {
    return (
        <S.Wrapper>
            <S.Content>
                <FormHeader title="Olá," subTitle="Para continuar navegando de forma segura, efetue o login" />
                <S.Form>
                    <InputTitle content="Login" />
                    <InputField text="Nome" type="text" icon={userIcon} />
                    <InputField text="Senha" type="password" icon={lockIcon} />
                    <SubmitButton title="Logar-se" />
                </S.Form>
                <S.LinkText>
                    Novo por aqui? <Link to="/sign-up">Registre-se</Link>
                </S.LinkText>
            </S.Content>
            <S.BannerCompass />
        </S.Wrapper>
    )
}

export { SignInTemplate }