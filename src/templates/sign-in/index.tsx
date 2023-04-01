import { SubmitButton } from "../../components/button"
import { FormHeader } from "../../components/form-header"
import { FormTitle } from "../../components/form-title"
import { TextField } from "../../components/text-field"
import { TextLink } from "../../components/text-link"

import userIcon from "../../assets/icons/user-icon.svg"
import lockIcon from "../../assets/icons/lock-icon.svg"

import * as S from './styles'

function SignInTemplate() {
    return (
        <S.Wrapper>
            <S.Content>
                <FormHeader title="Olá," subTitle="Para continuar navegando de forma segura, efetue o login" />
                <S.Form>
                    <FormTitle content="Login" />
                    <TextField content="Nome" type="text" icon={userIcon} />
                    <TextField content="Senha" type="password" icon={lockIcon} />
                    <SubmitButton content="Logar-se" />
                </S.Form>
                <TextLink where="/sign-up" link="Registre-se" textBefore="Novo por aqui?" />
            </S.Content>
            <S.BannerCompass />
        </S.Wrapper>
    )
}

export { SignInTemplate }