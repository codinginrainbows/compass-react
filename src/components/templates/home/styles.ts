import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #17181C;
`

export const GridLayout = styled.div`
    min-height: 100vh;
    display: grid;
    margin: auto;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 80px auto;
    grid-auto-rows: minmax(100px, auto);
    grid-auto-columns: minmax(100px, auto);
    justify-content: stretch;
    grid-template-areas:
        "a b b b"
        "a c c d";

    .left {
        grid-area: a;
    }
    
    .top {
        grid-area: b;
    }
    
    .center {
        grid-area: c;
    }
    
    .right {
        grid-area: d
    }
`