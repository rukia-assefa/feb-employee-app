import { useState } from 'react';
import{
    StyledFormContainer,
    StyledForm,
    StyledInputWrapper,
    StyledInput,
    StyledLabel,
    StyledButton,
}from './StyledComponet'


export default function AddEmployee({employeesData, setEmployeesData}){
    const [formData,setFormData]= useState({
        name:"",
        title:"",
        imageURL:"",
        callMobile:"",
        callOffice:"",
        sms:"",
        email:"",


    });
    // collect the user data 
    // update the form data or handling the form submition 
    const handleChange=(e)=>{
        
        const{name, value}= e.target
        setFormData((prevData)=>({
            // the spread will keep the previous value 
            // name is the key of objet 
            //example :var person = {};
            // var key = "name";
            // person[key] /* this is same as person.name */ = "John";
            // console.log(person)
            ...prevData,[name]:value,

        }));

    }
    const handleSubmite=(e)=>{
        e.preventDefault();
        setEmployeesData([...employeesData,formData]);
        setFormData(  {name:"",
        title:"",
        imageURL:"",
        callMobile:"",
        callOffice:"",
        sms:"",
        email:"",})

    }
    // useEffect((e)=>{
    //     const{name, value}= e.target


    // },[])

    
    return(<>
    <StyledFormContainer>
    <h1> Add Employee  </h1>
        <StyledForm action="" onSubmit={handleSubmite}>
            <StyledInputWrapper>
                <StyledLabel htmlFor="name">Name :</StyledLabel>
                <StyledInput onChange={handleChange}
                name='name'
                type="text" 
                value={formData.name}
                ></StyledInput>
            </StyledInputWrapper>
                
            <StyledInputWrapper>
                <StyledLabel htmlFor="title">Title :</StyledLabel>
                <StyledInput
                onChange={handleChange}
                 name='title' type="text" 
                 value={formData.title}></StyledInput>
            </StyledInputWrapper>
           
            <StyledInputWrapper>
                <StyledLabel htmlFor="call mobile"> Call Mobile :</StyledLabel>
                <StyledInput 
                onChange={handleChange}
                name='callMobile' type="text" 
                value={formData.callMobile}></StyledInput>
            </StyledInputWrapper>
            <StyledInputWrapper>
                <StyledLabel htmlFor="image url"> Image Url :</StyledLabel>
                <StyledInput 
                onChange={handleChange}
                name='imageURL' type="img" 
                value={formData.imageURL}></StyledInput>
            </StyledInputWrapper>

           <StyledInputWrapper>
                <StyledLabel htmlFor="call office"> Call Office :</StyledLabel>
                <StyledInput 
                onChange={handleChange}
                name='callOffice' type="text" 
                value={formData.callOffice}></StyledInput>
           </StyledInputWrapper>

           
            <StyledInputWrapper>
                <StyledLabel htmlFor="sms">Sms :</StyledLabel>
                <StyledInput 
                onChange={handleChange}
                name='sms' type="text" value={formData.sms}></StyledInput>
            </StyledInputWrapper>

            <StyledInputWrapper>
                <StyledLabel htmlFor="email">Email :</StyledLabel>
                <StyledInput
                onChange={handleChange}
                 name='email' type="text" value={formData.email} ></StyledInput>
            </StyledInputWrapper>

            <StyledButton>
             Add Employee
         </StyledButton>
        </StyledForm>
        <div>
       
        </div>
       

    </StyledFormContainer>
    
        
    </>)
}