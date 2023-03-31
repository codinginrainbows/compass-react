import * as S from './styles'

interface ButtonProps {
    type: any;
}

function SubmitButton({ type }: ButtonProps) {
    return <S.Button type={type} />
}

export { SubmitButton }