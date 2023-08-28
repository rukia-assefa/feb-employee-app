import React from 'react';
import "./Employee.css";
import HomePage from '../HomePage/HomePage';
import Container from '../Container/Container';
import EmployeeDetail from '../EmployeeDetail/EmployeeDetail';

function Employee() {
 
  return (<>
    <div className='employee-wrapper'>
        <Container>
            <HomePage />
            <EmployeeDetail />
        </Container>
    </div>
    </>

  );
}



export default Employee