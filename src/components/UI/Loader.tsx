import React from "react";
import Spinner from 'assets/spinner.svg'
import styled from '@emotion/styled';

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`


export default function Loader():React.ReactElement {
    return (
        <MainContainer>
            <img src={Spinner} />
        </MainContainer>
    )
}
