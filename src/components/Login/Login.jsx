
//rfc shortcure creating the react components
import React from 'react'
import { useState } from 'react'
import { styled } from 'styled-components';

const StyledInput=styled.input`
    flex: 2;
    border: none;
    border: 1px solid #333;
    border-radius: 6px;
    padding:5px;
`;
const StyledButton=styled.button`
    border: none;
    padding:10px;
    color: white;
    background-color:#03a9f4;
    margin: 10px auto;
    border-radius: 6px;
    font-size:18px;

`;

export const StyledInputWrapper= styled.div`
    display: flex;
    gap:10px;
    width:60%;
    flex-direction: column;
    margin: 20px auto;
`;
export const StyledFormContainer= styled.div`
        wisth 10%;
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        alignitems: center;
    `;
function Login() {
    const[login,setLogin]=useState({})
    function handelAllChanges(e) {
        const {name, value} = e.target
        setLogin({ ...login, [name]: value });
      }
  return (
    <StyledFormContainer>
        <h2> Sign up</h2>
        <StyledInputWrapper>
        <StyledInput name='userName' type='text' onChange={handelAllChanges}></StyledInput>
        <StyledInput name='password' type='password' onChange={handelAllChanges}></StyledInput>

        </StyledInputWrapper>
        
        
        <StyledButton onClick={()=>{
            console.log(Login)
        }}> Login In</StyledButton>
    </StyledFormContainer>
  )
}

export default Login