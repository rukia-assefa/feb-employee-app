import React from 'react';
import styled from 'styled-components';




const StyledEmployeeDetail = styled.div`
  height: 70%;
  border: 1px solid brown;
  width: 50%;
`;

const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const StyledContent = styled.div`
    margin-left: 10px;
    text-align: left;
    p,
    h4 {
        margin: 0;
    }
    font-size:1.3em;
    line-height:2.2em; 
    margin-bottom:2.2em;


`;
function EmployeeDetail({ employeesData, selectedEmployee }) {
  return (
    <StyledEmployeeDetail>
      {selectedEmployee !== null ? (
        <div>
          <StyledImage src={employeesData[selectedEmployee].imageURL} alt="" />
          <StyledContent>
            <h4>Name :{employeesData[selectedEmployee].name}</h4>
            <p><b>Title:</b> {employeesData[selectedEmployee].title}</p>
            <p><b>Call Mobile: </b>{employeesData[selectedEmployee].callMobile}</p>
            <p><b>call Office: </b>{employeesData[selectedEmployee].callOffice}</p>
            <p> <b> Sms : </b>{employeesData[selectedEmployee].sms}</p>
            <p> <b>Email:  </b>{employeesData[selectedEmployee].email}</p>



            {/* ... display other employee details ... */}
          </StyledContent>
        </div>
      ) : (
        <p>No employee selected</p>
      )}
    </StyledEmployeeDetail>
  );
}

export default EmployeeDetail;