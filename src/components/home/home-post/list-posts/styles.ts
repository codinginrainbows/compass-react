import styled from 'styled-components';

export const Wrapper = styled.div`

    h1 {
        font-size: 14px;
    }
`

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
`

export const UserDetails = styled.div`
`

export const When = styled.div`
    font-size: 1px;

    p {
        color: #75767D;
    }

    div {
        justify-content: left;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    padding: var(--default) 0;
    gap: 2rem;
`

export const Text = styled.p`
    font-size: 14px;
`

export const Image = styled.img`
    width: 100%;
    height: 300px;
`

export const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
`

export const Amount = styled.p`
    display: flex;
    align-items: center;
    gap: 6px;
`

export const HowMany = styled.p`
    cursor: pointer;
    font-size: 1px;
    background: #27282F;
    color: var(--white);
    border-radius: 30%;
    padding: calc(var(--default) / 4);

    &:hover {
        background: #2D86FC;
    }
`

export const CommentsContainer = styled.div`
`

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 0;
`

export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    flex: 1;
    gap: 1rem;
    padding: 0 1.5rem;

    border: 0;
    border-radius: 30px;
    background-color: #27282F;
    color: var(--white);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `

export const Input = styled.input`
    flex: 1;
    padding: 0.8rem 1rem;
    background: none;
    border: none;
    color: var(--white);
    font-size:  var(--default);
`

export const Icon = styled.img`
    width: 26px;
    height: 26px;
`

export const UserComments = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 1rem;
    text-align: justify;
    /* justify-content: flex-start; */

    img {
        width: 30px;
        height: 30px;
        /* margin-right: 1rem; */
    }

    h1 {
        font-size: 12px;
        margin: 0;
        padding: 0;
    }
    `

export const Comment = styled.div`
    display: flex;
    align-items: center;
    
    h1 {
        font-size: 12px;
        white-space: nowrap;
        margin-top: 1px;
    }
    
    h4 {
        font-size: 14px;
        white-space: nowrap;
        margin-right: 0.2rem;
    }
`
export const ShowAllContainer = styled.div`
    display: flex;
    align-items: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    a {
        color: #2D86FC;
        margin-top: 0.5rem;
    }

`

export const ShowAll = styled.button`
    background: none;
    margin: none;
    padding: 1rem 0;
`