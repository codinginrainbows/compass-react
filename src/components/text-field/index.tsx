import * as S from './styles'

interface TextFieldProps {
    content: string;
    type?: string;
    icon?: any;
}

function TextField({ content, type, icon }: TextFieldProps) {
    return (
        <S.Wrapper>
            <S.Input type={type} placeholder={content} />
            <S.Icon src={icon} />
        </S.Wrapper>
    )
}

export { TextField }