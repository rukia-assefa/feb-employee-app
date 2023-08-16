import EmployeeListItem from '../EmployeeListItem/EmployeeListItem';
import { styled } from 'styled-components';

const StyledEmployeeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

function EmployeeList({ employeesData, selectedEmployee,handleEmployeeDetailClick }) {
  return (
    <StyledEmployeeList>
      
      <EmployeeListItem 
      employeesData={employeesData} 
      selectedEmployee={selectedEmployee}
      handleEmployeeDetailClick={handleEmployeeDetailClick}

      />
    </StyledEmployeeList>
  );
}


export default EmployeeList;
