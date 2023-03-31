import { SubmitButton } from "../../components/button"
import { InputField } from "../../components/input-field"
import { InputTitle } from "../../components/input-title"

import userIcon from "../../assets/icons/user-icon.svg"
import fingerPrintIcon from "../../assets/icons/finger-print-icon.svg"
import cakeIcon from "../../assets/icons/cake-icon.svg"
import emailIcon from "../../assets/icons/email-icon.svg"
import lockIcon from "../../assets/icons/lock-icon.svg"
import shieldIcon from "../../assets/icons/shield-icon.svg"

import * as S from './styles'
import { FormHeader } from "../../components/form-header"

function SignUpTemplate() {
    return (
        <S.Wrapper>
            <S.Content>
                <FormHeader title="Olá," subTitle="Por favor, registre-se para continuar" />
                <S.Form>
                    <InputTitle content="Registro" />
                    <InputField text="Nome" type="text" icon={userIcon} />
                    <InputField text="Usuário" type="text" icon={fingerPrintIcon} />
                    <InputField text="Nascimento" type="text" icon={cakeIcon} />
                    <InputField text="Email" type="text" icon={emailIcon} />
                    <InputField text="Senha" type="password" icon={lockIcon} />
                    <InputField text="Confirmar Senha" type="password" icon={shieldIcon} />
                    <SubmitButton title="Registrar-se" />
                </S.Form>
                <S.LinkText>
                    Já possui uma conta? <a href="/">Faça Login</a>
                </S.LinkText>
            </S.Content>
            <S.BannerCompass />
        </S.Wrapper>
    )
}

export { SignUpTemplate }