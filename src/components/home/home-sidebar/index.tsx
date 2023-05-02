import * as S from './styles'
import CompassBanner from '../../../assets/icons/compass-negativo.svg'
import { useNavigate } from 'react-router-dom'

interface ISideBar {
    gridPosition: string
}

function SideBar({ gridPosition }: ISideBar) {
    const navigate = useNavigate()

    return (
        <S.Wrapper className={gridPosition}>
            <S.CompassBanner src={CompassBanner} onClick={() => navigate('/')} />
        </S.Wrapper>
    ) 
}

export { SideBar }