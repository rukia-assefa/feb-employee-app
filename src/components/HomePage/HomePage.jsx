import React from 'react';
import EmployeeList from '../EmployeeList/EmployeeList';
import { styled } from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';

const StyledHomePage = styled.div`
      background-color: #fff;
      width: 50%;
      height : 70%;
      border: 1px solid orange;
      padding: 2px 16px;

`

export default function HomePage({employeesData, setEmployeesData,selectedEmployee,handleEmployeeDetailClick}) {

  return (<>
    <StyledHomePage>
    <SearchBar 
          employeesData={employeesData} 
          setEmployeesData={setEmployeesData}/>
      <EmployeeList  employeesData={employeesData} 
          selectedEmployee={selectedEmployee} 
          handleEmployeeDetailClick={handleEmployeeDetailClick}/>
    
          
    </StyledHomePage>


</>
  );
}


