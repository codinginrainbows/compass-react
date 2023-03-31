import * as S from './styles'

interface InputFieldProps {
    text: string;
    type?: string;
    icon?: any;
}

function InputField({ text, type, icon }: InputFieldProps) {
    return (
        <S.Wrapper>
            <S.Input type={type} placeholder={text} />
            <S.Icon src={icon} />
        </S.Wrapper>
    )
}

export { InputField }