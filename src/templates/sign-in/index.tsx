import { SubmitButton } from "../../components/button"
import { FormHeader } from "../../components/form-header"
import { FormTitle } from "../../components/form-title"
import { TextField } from "../../components/text-field"
import { TextLink } from "../../components/text-link"

import userIcon from "../../assets/icons/user-icon.svg"
import lockIcon from "../../assets/icons/lock-icon.svg"

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form"
import { SignInValidationSchema } from "./schema"

import * as S from './styles'

function SignInTemplate() {
    const { register, handleSubmit, formState:{ errors } } = useForm({resolver: yupResolver(SignInValidationSchema)});
  
    return (
        <S.Wrapper>
            <S.Content>
                <FormHeader title="Olá," subTitle="Para continuar navegando de forma segura, efetue o login" />
                <S.Form>
                    <FormTitle content="Login" />
                    <TextField 
                        {...register("user")}
                        content="Usuário" 
                        type="text" 
                        icon={userIcon} 
                    />
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