import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: var(--default) calc(var(--default) * 2);
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #1E1F23;
    border: 2px solid #2E2F36;
`
export const HomeInfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--default);
`

export const HomeText = styled.h1`
    font-size: var(--default);
    cursor: pointer;
`

export const HomeIcon = styled.img`
    width: 18px;
    height: 18px;
`