import React from 'react';
import EmployeeList from '../EmployeeList/EmployeeList';
import {employeeData } from '../../data';
import { styled } from 'styled-components';

const StyledHomePage = styled.div`
      background-color: #fff;
      width: 50%;
      height : 70%;
      border: 1px solid orange;

`

function HomePage({employeesData, setEmployeesData}) {
  
  // console.log(employeeData)
 
  return (<>
    <StyledHomePage>
      <EmployeeList 
          employeesData={employeesData} 
          setEmployeesData={setEmployeesData}
      />
    {/* <button onClick={()=>{
      setEmployeesData(employeeData)
    }}> update</button> */}
    </StyledHomePage>

</>
  );
}


export default HomePage
