import React from 'react';
import "./Employee.css";
import HomePage from '../HomePage/HomePage';
import Container from '../Container/Container';
import EmployeeDetail from '../EmployeeDetail/EmployeeDetail';
// import Conainer from '../Container/Container';
function Employee({employeesData, setEmployeesData}) {
  // console.log(setEmployeesData)
 // setEmployeesData([])

  return (<>
    <div className='employee-wrapper'>
        <Container>
            <HomePage employeesData={employeesData} setEmployeesData={setEmployeesData}/>
            <EmployeeDetail/>
        </Container>
    </div>
    </>

  );
}

export default Employee