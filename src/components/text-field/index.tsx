import { InputHTMLAttributes } from 'react';
import * as S from './styles'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    content: string;
    type?: string;
    icon?: any;
    fieldName?: string;
    textValue?: string;
    changeEvent?: (e: any) => void;
    classTitle?: string
}

function TextField({ icon, type, content, fieldName, textValue, changeEvent, classTitle }: TextFieldProps) {
    return (
        <>
            <S.Input 
                placeholder={content} 
                autoComplete='off'
                type={type}
                name={fieldName}
                value={textValue} 
                onChange={changeEvent}
                className={classTitle}
            />
            <S.Wrapper>
                <S.Icon src={icon} />
            </S.Wrapper>
        </>
    )
}

export { TextField }