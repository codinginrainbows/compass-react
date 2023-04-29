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
    const [formValues, setFormValues] = useState<ISignIn>({ user: '', password: '' })

    const handleChangeValues = (e: any) => {
        const textFieldName = e.target.name
        const textFieldValue = e.target.value

        console.log(formValues)

        setFormValues((currentValues => {
            return {
                ...currentValues, [textFieldName]: textFieldValue
            }
        }))
    }

    const { credentials } = useAccount()

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(credentials.user === formValues.user && credentials.password === formValues.password) {
            setCheckCredentials(true)
            toast.success(`${credentials.user} LOGADO COM SUCESSO`)
            setHasError(false)
        } else {
            setCheckCredentials(false)
            toast.error('CREDENCIAIS INVÁLIDAS')
            setHasError(true)
        }

        return {}
    };

    return (
        <S.Wrapper>
            <S.Content>
                <S.Form onSubmit={handleSubmitForm}>
                    <FormHeader title="Olá," subTitle="Para continuar navegando de forma segura, efetue o login" />
                    
                    <FormTitle content="Login" />
                    
                    <TextField 
                        content="Usuário" 
                        type="text" 
                        icon={userIcon}
                        fieldName="user"
                        textValue={formValues.user}
                        changeEvent={handleChangeValues}
                        classTitle={hasError ? 'input-invalid' : ''}
                    />
                          
                    <TextField 
                        content="Senha" 
                        type="password" 
                        icon={lockIcon}
                        fieldName="password"
                        textValue={formValues.password}
                        changeEvent={handleChangeValues}
                        classTitle={hasError ? 'input-invalid' : ''}
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