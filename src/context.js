import { createContext ,useState} from "react";
import { employeeData } from "./data";

export const EmployeeContext= createContext();

 export const EmployeeProvider=(props)=>{
     const [employeesData, setEmployeesData]=useState(employeeData);
     const [selectedEmployee, setSelectedEmployee] = useState([0]);

    const handleEmployeeDetailClick = (id) => {
    setSelectedEmployee(id);
  }
    // const name ="rukia"
    return(
        <EmployeeContext.Provider value={{employeesData,selectedEmployee,setSelectedEmployee, setEmployeesData,handleEmployeeDetailClick}}>
            {props.children}
        </EmployeeContext.Provider>
    );

};