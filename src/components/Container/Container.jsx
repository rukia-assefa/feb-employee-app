import React from "react";
import {styled} from 'styled-components'

const StyledContainer = styled.div`
        max-width : 1200px;
        background-color : #f4f4f4;
        margin :100px auto;
        display : flex;
        height : 100vh;
        padding : 4 rem 2rem;
        gap:10px;

`
export default function Container({children}){
    return <StyledContainer>{children}</StyledContainer>;
}
