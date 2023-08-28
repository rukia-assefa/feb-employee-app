import { createContext ,useState} from "react";
import { employeeData } from "./data";

export const EmployeeContext= createContext();

 export const EmployeeProvider=(props)=>{
     const [employeesData, setEmployeesData]=useState(employeeData);
     const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleEmployeeDetailClick = (index) => {
    setSelectedEmployee(index);
  }
    const name ="rukia"
    return(
        <EmployeeContext.Provider value={{employeesData,name,selectedEmployee,setSelectedEmployee, setEmployeesData,handleEmployeeDetailClick}}>
            {props.children}
        </EmployeeContext.Provider>
    );

};