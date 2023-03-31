import { InputField } from "../../components/input-field"

import * as S from './styles'

function SignUpTemplate() {
    return (
        <S.Wrapper>
            <S.FormContainer>
                <InputField title="Nome" textInside="Seu nome aqui" type="text"  />
            </S.FormContainer>
            <S.ImageContainer>
                <h1>img aqui</h1>
            </S.ImageContainer>
        </S.Wrapper>
    )
}

export { SignUpTemplate }