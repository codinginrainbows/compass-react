import * as S from './styles'

export interface ICard {
  children: React.ReactNode
}

function Card({ children }: ICard) {
    return (
        <S.Wrapper>
            {children}
        </S.Wrapper>
    ) 
}

export { Card }