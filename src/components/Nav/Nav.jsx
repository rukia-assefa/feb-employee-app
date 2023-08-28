import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const StyledNav=styled.div`
display:flex;
justify-content: space-between;
padding:5px 20px;
background-color:#03a9f4;
color:white;
box-shadow:0px 4px 8px rgba(0,0,0,0.26);
z-index:1;
position:relative;
`;
const StyledUl=styled.ul`
display:flex;
width:40%;
justify-content: space-between;
list-style:none;
align-items: center;

`;

function Nav() {
  return (
    <StyledNav>
        <h2> Employee App</h2>
        <StyledUl>
            <Link to='/'>  Home </Link>
            <Link to='/employee-list'> Employee List</Link>
            <Link to='/add-employee'> Add Employee</Link>
            <Link to='/'> Log Out</Link>

        </StyledUl>
    </StyledNav>
  )
}

export default Nav