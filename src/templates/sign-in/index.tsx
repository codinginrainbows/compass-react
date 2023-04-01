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

import * as S from './styles'
import { useState } from "react"

interface ISignIn {
    user: string,
    password: string
}

function SignInTemplate() {
    const [checkCredentials, setCheckCredentials] = useState(false)

    const {
        watch,
        formState: errors,
        control,
        handleSubmit,
    } = useForm({
        resolver: SignInValidationSchema,
        defaultValues: defaultValues,
    })

    const userInputValue = watch('user')
    // const passwordInputValue = watch('password')
  
    const handleSubmitForm = ({user, password}: ISignIn) => {
        if(user !== 'admin' || password !== 'admin') {
            setCheckCredentials(false)
            console.log('CREDENCIAIS INVALIDAS')
        } else {
            setCheckCredentials(true)
            console.log('LOGADO COM SUCESSO')
        }
    };

    return (
        <S.Wrapper>
            <S.Content>
                <FormHeader title="Olá," subTitle="Para continuar navegando de forma segura, efetue o login" />
                <S.Form onSubmit={handleSubmit(handleSubmitForm)}>
                    <>
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
                                {error && <ErrorMessage text={error.message}/>}
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
                                {error && <ErrorMessage text={error.message}/>}
                            </>
                        )}
                    />

                    {!checkCredentials && <ErrorMessage text='Usuário ou senha errados'/>}
                    <SubmitButton content="Logar-se" />
                    </>
                </S.Form>
                <TextLink where="/sign-up" link="Registre-se" textBefore="Novo por aqui?" />
            </S.Content>
            <S.BannerCompass />
        </S.Wrapper>
    )
}

export { SignInTemplate }