import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    background-color: var(--background);
    border: 1px solid var(--white);
    border-radius: 2rem;
    padding: 0.8rem 1.5rem;
    `

export const Input = styled.input`
    width: 300px;
    border: 0;
    background-color: var(--background);
    color: var(--white);

`

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    color: var(--white);
`