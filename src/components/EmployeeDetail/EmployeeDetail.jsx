import React, { useContext } from 'react';
import styled from 'styled-components';
import { EmployeeContext } from '../../context';




const StyledEmployeeDetail = styled.div`
  height: 70%;
  border: 1px solid brown;
  width: 50%;
  h3,
  p{
    padding:0;
    margin:0;
  }

`;

const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const StyledEmployeeHeader=styled.div`
    display:flex;
    gap:10px;
    padding:15px 10px;
    align-item: center;
    border-bottom: 1px solid #9e9e9e;
`;
const StyledEmployeeContactInfo=styled.div`
    display:flex;
    flex-direction:column;
    padding: 10px;
    border-bottom: 1px solid #9e9e9e;

`;
const StyledEmployeeDetailWrapper=styled.div`
    margin:2rem;
    border:1px solid #9e9e9e;
    border-radius:8px;
`;
const StyledEmployeeHeaderContactInfo=styled.div`
display:flex;
flex-direction:column;
padding: 10px;
`;


function EmployeeDetail() {
  const {employeesData,selectedEmployee}=useContext(EmployeeContext)

  return (
    <StyledEmployeeDetail>
      <StyledEmployeeDetailWrapper>
   

      {/* {name} */}

       {selectedEmployee !== null ? (
        <div>
           <  StyledEmployeeHeader>
          <StyledImage src={employeesData[selectedEmployee].imageURL} alt="" />


          {/* <StyledContent> */}
           <StyledEmployeeHeaderContactInfo>
          <h3>{employeesData[selectedEmployee].name}</h3>
           <p> {employeesData[selectedEmployee].title}</p>
           </StyledEmployeeHeaderContactInfo>
          </StyledEmployeeHeader>
           <StyledEmployeeContactInfo>
          <p><h3>Call Mobile: </h3>{employeesData[selectedEmployee].callMobile}</p>
          </StyledEmployeeContactInfo>
           <StyledEmployeeContactInfo>
          <p><h3>call Office: </h3>{employeesData[selectedEmployee].callOffice}</p>
          </StyledEmployeeContactInfo>
           <StyledEmployeeContactInfo>
          <h3>  Sms : </h3>
          <p>{employeesData[selectedEmployee].sms}</p>
          </StyledEmployeeContactInfo>
           <StyledEmployeeContactInfo>
         <p> <h3>Email:  </h3>{employeesData[selectedEmployee].email}</p>
         </StyledEmployeeContactInfo>
           {/* </StyledContent> */}
       </div>
      ) : (
        <p>No employee selected</p>
       )} 
       </StyledEmployeeDetailWrapper>
      
      </StyledEmployeeDetail>

  );
}

export default EmployeeDetail;