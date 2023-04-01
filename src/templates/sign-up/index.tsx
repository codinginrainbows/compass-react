import { SubmitButton } from "../../components/button"
import { FormTitle } from "../../components/form-title"
import { TextField } from "../../components/text-field"
import { FormHeader } from "../../components/form-header"
import { TextLink } from "../../components/text-link"

import userIcon from "../../assets/icons/user-icon.svg"
import fingerPrintIcon from "../../assets/icons/finger-print-icon.svg"
import cakeIcon from "../../assets/icons/cake-icon.svg"
import emailIcon from "../../assets/icons/email-icon.svg"
import lockIcon from "../../assets/icons/lock-icon.svg"
import shieldIcon from "../../assets/icons/shield-icon.svg"

import * as S from './styles'

function SignUpTemplate() {
    return (
        <S.Wrapper>
            <S.Content>
                <FormHeader title="Olá," subTitle="Por favor, registre-se para continuar" />
                <S.Form>
                    <FormTitle content="Registro" />
                    <TextField content="Nome" type="text" icon={userIcon} />
                    <TextField content="Usuário" type="text" icon={fingerPrintIcon} />
                    <TextField content="Nascimento" type="text" icon={cakeIcon} />
                    <TextField content="Email" type="text" icon={emailIcon} />
                    <TextField content="Senha" type="password" icon={lockIcon} />
                    <TextField content="Confirmar Senha" type="password" icon={shieldIcon} />
                    <SubmitButton content="Registrar-se" />
                </S.Form>
                <TextLink where="/" link="Faça Login" textBefore="Já possui uma conta?" />
            </S.Content>
            <S.BannerCompass />
        </S.Wrapper>
    )
}

export { SignUpTemplate }