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

import { Controller, useForm } from "react-hook-form"
import { SignUpValidationSchema, defaultValues } from "./schema"
import { useEffect, useState } from "react"
import { ISignUp } from "../../models/sign-up"
import { MaskedDate } from "../../utils/date-mask"
import { toast } from "react-toastify"
import { ErrorMessage } from "../../components/error-message"

import * as S from './styles'
import { useAccount } from "../../hooks/account"

function SignUpTemplate() {
    const [checkCredentials, setCheckCredentials] = useState(true)
    
    const { createAccount } = useAccount()

    const {
        control,
        handleSubmit,
        setValue,
        watch,
        getValues,
    } = useForm({
        resolver: SignUpValidationSchema,
        defaultValues: defaultValues,
    })

    const birthInputValue = watch('birth')

    useEffect(() => {
        setValue('birth', MaskedDate(birthInputValue))
    }, [birthInputValue, setValue])
    

    const handleSubmitForm = ({ user }: ISignUp) => {
        const userValue = getValues('user')
        const passwordValue = getValues('password')

        if(user === 'admin') {
            setCheckCredentials(false)
            toast.error(`USUÁRIO ${userValue} JÁ EXISTE`)
        } else {
            setCheckCredentials(true)
            toast.success(`${userValue} SUA CONTA FOI CRIADA`)

            createAccount(userValue, passwordValue)
        }
    };
    
    return (
        <S.Wrapper>
            <S.Content>
                <S.Form onSubmit={handleSubmit(handleSubmitForm)}>
                    <FormHeader title="Olá," subTitle="Por favor, registre-se para continuar" />
                    
                    <FormTitle content="Registro" />
                    
                    <Controller
                        name="name"
                        control={control}
                        render={({
                            field: { ref, ...fieldProps },
                            fieldState: { error },
                        }) => (
                            <>
                                <TextField 
                                    {...fieldProps}
                                    content="Nome" 
                                    type="text" 
                                    icon={userIcon} 
                                    className={error && 'input-invalid'}
                                />
                                {error && <ErrorMessage text={error.message}/>}
                            </>
                        )}
                    />
                    
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
                                    icon={fingerPrintIcon} 
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

                    {!checkCredentials && <ErrorMessage text='Usuário já existe!'/>}
                    
                    <Controller
                        name="birth"
                        control={control}
                        render={({
                            field: { ref, ...fieldProps },
                            fieldState: { error },
                        }) => (
                            <>
                                <TextField 
                                    {...fieldProps}
                                    content="Data de Nascimento" 
                                    type="text" 
                                    icon={cakeIcon} 
                                    className={error && 'input-invalid'}
                                />
                                {error && <ErrorMessage text={error.message}/>}
                            </>
                        )}
                    />
                    
                    <Controller
                        name="email"
                        control={control}
                        render={({
                            field: { ref, ...fieldProps },
                            fieldState: { error },
                        }) => (
                            <>
                                <TextField 
                                    {...fieldProps}
                                    content="Email" 
                                    type="text" 
                                    icon={emailIcon} 
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
                    
                    <Controller
                        name="confirmPassword"
                        control={control}
                        render={({
                            field: { ref, ...fieldProps },
                            fieldState: { error },
                        }) => (
                            <>
                                <TextField 
                                    {...fieldProps}
                                    content="Confirmar Senha" 
                                    type="password" 
                                    icon={shieldIcon} 
                                    className={error && 'input-invalid'}
                                />
                                {error && <ErrorMessage text={error.message}/>}
                            </>
                        )}
                    />

                    <SubmitButton content="Registrar-se" />
                    
                    <TextLink where="/" link="Faça Login" textBefore="Já possui uma conta?" />
                </S.Form>
            </S.Content>
            <S.BannerCompass />
        </S.Wrapper>
    )
}

export { SignUpTemplate }