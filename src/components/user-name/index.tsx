import * as S from './styles'

interface UserProps {
    name: string;
}

function User({ name }: UserProps) {
    return (
        <S.Wrapper>
            <S.Name>{ name }</S.Name>
        </S.Wrapper>
    )
}

export { User }