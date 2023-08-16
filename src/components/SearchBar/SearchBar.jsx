import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const StyledInpput = styled.input`

width:90%;
padding:10px 5px;
border: none;
border: 1px solid #333;
border-radius: 6px;
margin: 4px;



`;
export default  function  SearchBar ({employeesData, setEmployeesData}){

    const [searchItem, setSearchItem] = useState(" ");

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