import './App.css';
// import { useState  } from 'react';
// import{employeeData} from "./data";
import Nav from './components/Nav/Nav';
import { Routes, Route } from "react-router-dom";
import HomePage from './components/Pages/HomePage';
import AddEmployeePage from './components/Pages/AddEmployeePage';
import EmployeeListPage from './components/Pages/EmployeeListPage';
import { EmployeeProvider } from './context';
function App() {
  // const [employeesData, setEmployeesData]=useState(employeeData);
  // const Login=()=>{
  //   return(
  //     <form>
  //       <input type='text' placeholder='insert your email'/>
  //       <input type='text' placeholder='passwoed'/>
  //       <input type='button' value='Login'/>
  
  //     </form>
  //   );
  // };
  return (<>
  <EmployeeProvider>
  <Nav/>
  <Routes>
    <Route path='/' element={<HomePage/>}/> 
    <Route path='add-employee'element={<AddEmployeePage />}/>
    <Route path='employee-list'element={<EmployeeListPage />}/>
   {/* <Route path='login' element={<Login/>}/> */}

  </Routes>
  </EmployeeProvider>
  
  
  
  
  
  
  </>
  
  );
}


export default App;

