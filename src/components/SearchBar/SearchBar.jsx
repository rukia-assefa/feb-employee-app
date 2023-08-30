import { useContext, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { EmployeeContext } from '../../context';

const StyledInpput = styled.input`

width:90%;
padding:10px 5px;
border: none;
border: 1px solid #333;
border-radius: 6px;
margin: 4px;



`;
export default  function  SearchBar (){

    const [searchItem, setSearchItem] = useState(" ");
    const {employeesData, setEmployeesData}=useContext(EmployeeContext);
    const handleChange=(e)=>{
        setSearchItem(e.target.value);

    }
    const handleSearch=()=>{
        const result = employeesData.filter((item)=>{
            return (
            item.name.toLowerCase().includes(searchItem.toLocaleLowerCase())||
            item.title.toLowerCase().includes(searchItem.toLocaleLowerCase()) );



        })
        // console.log(result);
        setEmployeesData(result)
    }
return(<>
    <StyledInpput type="text" name ='' id='' onChange={handleChange}/>
    <FontAwesomeIcon icon={faSearch} size='lg' onClick={handleSearch}/>
    {/* <button onClick={handleSearch}>Serch</button> */}
    {/* <p>{searchItem}</p> */}
    
</>
);

}