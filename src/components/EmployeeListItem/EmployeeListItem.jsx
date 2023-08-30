import React from 'react';
import { useContext } from 'react';
import { styled } from 'styled-components';
import { EmployeeContext } from '../../context';




const StyledEmployeeListItem = styled.div`
    display: flex;
    margin-top: 5px;
    background-color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    align-items: center;
    padding: 5px 10px;
`;

const StyledImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
`;

const StyledContent = styled.div`
    margin-left: 10px;
    text-align: left;
    p,
    h4 {
        margin: 0;
    }
`;
const StyledEmployeeList = styled.div`
    display: flex;
`;

// export default function EmployeeListItem({ employeesData, selectedEmployee, handleEmployeeDetailClick }) {
  export default function EmployeeListItem() {
const {employeesData,handleEmployeeDetailClick}=useContext(EmployeeContext)

  return (
    <StyledEmployeeList>
      <div>
      {employeesData.length > 0 ? (
        employeesData.map((employee, id) => (
          <StyledEmployeeListItem key={id}>
            <button>
                            <StyledImage
                                src={employee.imageURL}
                                alt=""
                                onClick={() => handleEmployeeDetailClick(id)}
                            />
                        </button>
            <StyledContent>
              <h4>{employee.name}</h4>
              <p>{employee.title}</p>
            </StyledContent>
          </StyledEmployeeListItem>
        ))
      ) : (
        <p>Employee not found</p>
      )}
      </div>
   
    </StyledEmployeeList>
  );
}









  