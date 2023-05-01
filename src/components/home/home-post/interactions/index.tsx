import * as S from './styles'

interface InteractionProps {
    type: string;
    icon: string;
    amount?: string;
}

function Interaction({ icon, type, amount }: InteractionProps) {
    return (
        <S.Wrapper>
            <S.Icon src={ icon } />
            <S.Type>{ type }</S.Type>
        </S.Wrapper>
    )
}

export { Interaction }