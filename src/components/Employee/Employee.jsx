import React from 'react';
import "./Employee.css";
import HomePage from '../HomePage/HomePage';
import Container from '../Container/Container';
import EmployeeDetail from '../EmployeeDetail/EmployeeDetail';
import  { useState } from 'react';
import AddEmployee from '../AddEmployee/AddEmployee';
import Login from '../Login/Login';




function Employee({employeesData, setEmployeesData}) {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEmployeeDetailClick = (index) => {
    setSelectedEmployee(index);
  }

  


  return (<>
    <div className='employee-wrapper'>
        <Container>
            <HomePage employeesData={employeesData} setEmployeesData={setEmployeesData} 
            selectedEmployee={selectedEmployee} handleEmployeeDetailClick={handleEmployeeDetailClick}/>
            {/* <EmployeeDetail /> */}
            <EmployeeDetail employeesData={employeesData} selectedEmployee={selectedEmployee}
 />
        </Container>
        {/* <AddEmployee employeesData={employeesData} selectedEmployeeIndex={selectedEmployeeIndex}/> */}
        <AddEmployee employeesData={employeesData} setEmployeesData={setEmployeesData}/>
        <Login/>

    </div>
    </>

  );
}



export default Employee