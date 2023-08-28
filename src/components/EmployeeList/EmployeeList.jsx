import EmployeeListItem from '../EmployeeListItem/EmployeeListItem';
import { styled } from 'styled-components';

const StyledEmployeeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

function EmployeeList() {
  return (
    <StyledEmployeeList>
      
      <EmployeeListItem 
     
      // selectedEmployee={selectedEmployee}
      // handleEmployeeDetailClick={handleEmployeeDetailClick}

      />
    </StyledEmployeeList>
  );
}


export default EmployeeList;
