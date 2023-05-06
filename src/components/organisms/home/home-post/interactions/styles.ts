import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    border-radius: 20px;
    gap: calc(var(--default) / 2);
    cursor: pointer;
`

export const Icon = styled.img`
    width: 20px;
    height: 20px;
`

export const Type = styled.p`
    background: none;
    color: #A1A3A7;
    font-size: var(--default);

    &:hover {
        color: #2D86FC;
    }
`