import styled from 'styled-components';

import CompassBanner from '../../../assets/banner-compass.svg'

export const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: stretch;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
`

export const BannerCompass = styled.div`
    width: 50%;
    background-image: url(${CompassBanner});
    background-size: cover;
`

