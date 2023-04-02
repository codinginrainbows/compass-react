import { InputHTMLAttributes } from 'react';
import * as S from './styles'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    content: string;
    type?: string;
    icon?: any;
}

function TextField(props: TextFieldProps) {
    return (
        <>
            <S.Input {...props} placeholder={props.content} autoComplete='off' />
            <S.Wrapper>
                <S.Icon src={props.icon} />
            </S.Wrapper>
        </>
    )
}

export { TextField }