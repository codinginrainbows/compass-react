import DropDownIcon from '../../../assets/icons/home/dropdown.svg'
import * as S from './styles'
import { useState } from 'react';

interface IDropdownProps{
    header: string
    children?: React.ReactNode
}

function Dropdown({ header, children }: IDropdownProps) {
    const [show, setShow] = useState(true)
    
    return (
        <S.Wrapper>
            <S.Header onClick={() => setShow(!show)}>
                <S.Title>{header}</S.Title>
                <S.Icon src={DropDownIcon} 
                    className={show ? 'turnUpsideDown' : ''} 
                />
            </S.Header>
            {show && (
                <S.Content>
                    {children}
                </S.Content>
            )},
        </S.Wrapper>
    )
}

export { Dropdown }