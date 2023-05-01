import * as S from './styles'
import CompassBanner from '../../../assets/icons/compass-negativo.svg'

interface ISideBar {
    gridPosition: string
}

function SideBar({ gridPosition }: ISideBar) {
    return (
        <S.Wrapper className={gridPosition}>
            <S.CompassBanner src={CompassBanner} />
        </S.Wrapper>
    ) 
}

export { SideBar }