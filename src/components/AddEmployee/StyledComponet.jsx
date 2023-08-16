import { styled } from "styled-components"

export const StyledFormContainer= styled.div`
        wisth 40%;
        margin: 30px auto;
        display: flex;
        flex-direction: column;
        alignitems: center;
    
    
    `;
export const StyledForm= styled.form`
    display: flex;
    flex-direction: column;
    gap:16px;

`;
export const StyledInputWrapper= styled.div`
    display: flex;
    gap:16px;
    width:80%;


`;
export const StyledInput= styled.input`
    flex: 2;
    border: none;
    border: 1px solid #333;
    border-radius: 6px;
    padding:5px;

`;
export const StyledLabel= styled.label`
    flex: 1;

`;
export const StyledButton= styled.button`
    border: none;
    padding:10px;
    color: white;
    background-color:#03a9f4;
    margin: 10px auto;
    border-radius: 6px;
    font-size:18px;

`;