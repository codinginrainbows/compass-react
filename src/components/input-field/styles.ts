import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 380px;
    background-color: var(--background);
    border: 2px solid var(--white);
    border-radius: 2rem;
    padding: 0 1rem;
    margin-top: var(--default);
`

export const Input = styled.input`
    width: 300px;
    border: 0;
    background-color: var(--background);
    color: var(--white);
    padding: 1rem 1rem;
`

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    color: var(--white);
`