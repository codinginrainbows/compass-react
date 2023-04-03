import { SubmitButton } from "../../components/button"
import { FormHeader } from "../../components/form-header"
import { FormTitle } from "../../components/form-title"
import { TextField } from "../../components/text-field"
import { TextLink } from "../../components/text-link"

import userIcon from "../../assets/icons/user-icon.svg"
import lockIcon from "../../assets/icons/lock-icon.svg"

import { Controller, useForm } from "react-hook-form"

import { SignInValidationSchema, defaultValues } from "./schema"
import { ErrorMessage } from "../../components/error-message"
import { useState } from "react"
import { ISignIn } from "../../models/sign-in"
import { toast } from "react-toastify"

import * as S from './styles'
import { useAccount } from "../../hooks/account"

function SignInTemplate() {
    const [checkCredentials, setCheckCredentials] = useState(true)

    const { credentials } = useAccount()

    const {
        control,
        handleSubmit,
    } = useForm({
        resolver: SignInValidationSchema,
        defaultValues: defaultValues,
    })

    const handleSubmitForm = ({ user: userTyped, password: passwordTyped }: ISignIn) => {
        if(credentials.user === userTyped && credentials.password === passwordTyped) {
            setCheckCredentials(true)
            toast.success(`${credentials.user} LOGADO COM SUCESSO`)
        } else {
            setCheckCredentials(false)
            toast.error('CREDENCIAIS INVÁLIDAS')
        }
    };

    return (
        <S.Wrapper>
            <S.Content>
                <S.Form onSubmit={handleSubmit(handleSubmitForm)}>
                    <FormHeader title="Olá," subTitle="Para continuar navegando de forma segura, efetue o login" />
                    
                    <FormTitle content="Login" />
                    
                    <Controller
                        name="user"
                        control={control}
                        render={({
                            field: { ref, ...fieldProps },
                            fieldState: { error },
                        }) => (
                            <>
                                <TextField 
                                    {...fieldProps}
                                    content="Usuário" 
                                    type="text" 
                                    icon={userIcon} 
                                    className={error && 'input-invalid'}
                                />
                                {error && (
                                    <>
                                        <ErrorMessage text={error.message}/>
                                        {setCheckCredentials(true)}
                                    </>
                                )}
                            </>
                        )}
                    />
                    
                    <Controller
                        name="password"
                        control={control}
                        render={({
                        field: { ref, ...fieldProps },
                        fieldState: { error },
                    }) => (
                            <>
                                <TextField 
                                    {...fieldProps}
                                    content="Senha" 
                                    type="password" 
                                    icon={lockIcon}
                                    className={error && 'input-invalid'}
                                />
                                {error && (
                                    <>
                                        <ErrorMessage text={error.message}/>
                                        {setCheckCredentials(true)}
                                    </>
                                )}
                            </>
                        )}
                        />

                    {!checkCredentials && <ErrorMessage text='Usuário e/ou Senha inválidos. Por favor, tente novamente!'/>}
                    
                    <SubmitButton content="Logar-se" />
                    
                    <TextLink where="/sign-up" link="Registre-se" textBefore="Novo por aqui?" />
                </S.Form>
            </S.Content>
            <S.BannerCompass />
        </S.Wrapper>
    )
}

export { SignInTemplate }