import * as S from './styles'

interface UserProps {
    name: string;
}

function User({ name }: UserProps) {
    return (
        <S.Name>{ name }</S.Name>
    )
}

export { User }