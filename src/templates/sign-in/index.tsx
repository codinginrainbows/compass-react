import { SubmitButton } from "../../components/button"
import { FormHeader } from "../../components/form-header"
import { FormTitle } from "../../components/form-title"
import { TextField } from "../../components/text-field"
import { TextLink } from "../../components/text-link"

import userIcon from "../../assets/icons/user-icon.svg"
import lockIcon from "../../assets/icons/lock-icon.svg"

import { ErrorMessage } from "../../components/error-message"
import { useState } from "react"
import { ISignIn } from "../../models/sign-in"
import { toast } from "react-toastify"

import * as S from './styles'
import { useAccount } from "../../hooks/account"

function SignInTemplate() {
    const [checkCredentials, setCheckCredentials] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [formValues, setFormValues] = useState({ user: '', password: '' })

    const handleChangeValues = (e: any) => {
        const textFieldName = e.target.name
        const textFieldValue = e.target.value

        setFormValues((currentValues => {
            return {
                ...currentValues, [textFieldName]: textFieldValue
            }
        }))
    }

    const { credentials } = useAccount()

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
                <S.Form onSubmit={() => handleSubmitForm}>
                    <FormHeader title="Olá," subTitle="Para continuar navegando de forma segura, efetue o login" />
                    
                    <FormTitle content="Login" />
                    
                    <TextField 
                        content="Usuário" 
                        type="text" 
                        icon={userIcon}
                        textValue={formValues.user}
                        changeEvent={handleChangeValues}
                        // className={hasError && 'input-invalid'}
                    />
                    {hasError && (
                        <>
                            <ErrorMessage text='Preencha um nome de usuário'/>
                            {setCheckCredentials(true)}
                        </>
                    )}
                          
                    <TextField 
                        content="Senha" 
                        type="password" 
                        icon={lockIcon}
                        textValue={formValues.password}
                        changeEvent={handleChangeValues}
                        // className={hasError && 'input-invalid'}
                    />
                    {hasError && (
                        <>
                            <ErrorMessage text='Preencha uma senha'/>
                            {setCheckCredentials(true)}
                        </>
                    )}

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