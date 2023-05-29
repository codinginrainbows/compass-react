import { useState } from "react"
import { toast } from "react-toastify"
import userIcon from "../../../../assets/icons/user-icon.svg"
import lockIcon from "../../../../assets/icons/lock-icon.svg"
import * as S from "./styles"
import { ISignIn } from "../../../../models/sign-in"
import { useAccount } from "../../../../hooks/useAccount"
import { FormHeader } from "../../form/form-header"
import { FormTitle } from "../../form/form-title"
import { TextField } from "../../../atoms/text-field"
import { ErrorMessage } from "../../../atoms/error-message"
import { SubmitButton } from "../../../atoms/button"
import { TextLink } from "../../../atoms/text-link"
import { signIn } from "../../../../services/signIn"
import { useToken } from "../../../../hooks/useToken"
import { Navigate } from "react-router-dom"

function SignInForm() {
    const [checkCredentials, setCheckCredentials] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [formValues, setFormValues] = useState<ISignIn>({ user: '', password: '' })

    const handleChangeValues = (e: any) => {
        const textFieldName = e.target.name
        const textFieldValue = e.target.value

        setFormValues((currentValues => {
            return {
                ...currentValues, [textFieldName]: textFieldValue
            }
        }))
    }

    const { setToken } = useToken()
    const { storageAccount } = useAccount()
    
    async function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (formValues.user === '' || formValues.password === '') {
            setCheckCredentials(false)
            setErrorMessage('Por favor, preencha todos os campos!')
            toast.error('CAMPOS VAZIOS')
            setHasError(true)
        } 
        else {
            setCheckCredentials(true)
            setHasError(false)
        }
        
        const { TokenJWT, name, user } = await signIn(formValues)
        
        if (TokenJWT) {
            setToken(TokenJWT)
            storageAccount(user, name)
        }

        return {}
    };

    return (
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

            {!checkCredentials && <ErrorMessage text={errorMessage}/>}
            
            <SubmitButton content="Logar-se" />
            
            <TextLink where="/sign-up" link="Registre-se" textBefore="Novo por aqui?" />
        </S.Form>
    )
}

export { SignInForm }