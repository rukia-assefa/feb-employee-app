import './App.css';
import { useState  } from 'react';
// import { useHistory } from 'react-router-dom';
// import Button from './components/Button/Button';
// import { Header } from './components/Header/Header';
import{employeeData} from "./data";
import Employee from './components/Employee/Employee';



function App() {
  const [employeesData, setEmployeesData]=useState(employeeData);
  // const [employeesData, setEmployeesData]=useState([]);
  // const [count, setCount]=useState(0)
   

  // const requestURL="https://calm-everglades-09552-105a0b4519dc.herokuapp.com/api/employee/employees";


  // const getEmployeesData = async () =>{
  //   const response = await fetch(requestURL);
  //   const data = await response.json();
  //   setEmployeesData(data);
  //   // console.log(data);

  // };


  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log("This will run after 1 second");
  //   }, 1000);
  
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);


  // useEffect(()=>{
  //   document.title=`${count} count`;
  //   console.log("useEffect");
  // },[count]);

// useEffect(()=>{
//     getEmployeesData();
//     // console.log("fetched");
// },[]); // it runs at onece when there is a re-render


  // console.log(setEmployeesData)
  return (
    <div className="App">
      <Employee 
                employeesData={employeesData} 
                setEmployeesData={setEmployeesData}/>

                

     <div>
    {/* <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>Click me</button> */}
  </div>

    </div>
  );
}


export default App;

