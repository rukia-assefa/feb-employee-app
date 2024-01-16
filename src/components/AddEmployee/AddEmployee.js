import { useContext, useState } from 'react';
import{
    StyledFormContainer,
    StyledForm,
    StyledInputWrapper,
    StyledInput,
    StyledLabel,
    StyledButton,
}from './StyledComponet'
import { EmployeeContext } from '../../context';


export default function AddEmployee(){
    const {employeesData, setEmployeesData}= useContext(EmployeeContext)
    const[errors, setErrors]=useState({})
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
            ...prevData,[name]:value,

        }));

    }
    const handleSubmite=(e)=>{
        e.preventDefault();
        if(formValidation()){
            
            setEmployeesData([...employeesData,formData]);
            setFormData(  {name:"",
            title:"",
            imageURL:"",
            callMobile:"",
            callOffice:"",
            sms:"",
            email:"",})

        }

    }
    
const formValidation=()=>{
    let listErrors={}
    // name validation
    if(formData.name ===""){
        listErrors.name ="Name can not be empty!"

    }
    // email validation
    // trim will ignore the space if the user apply space at end or begining 
    if(formData.email.trim() ===""){
        listErrors.email="email can not be empty"
    }else if(!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)){
        listErrors.email="email is not valid"

    }
    console.log(listErrors)
    setErrors(listErrors)
    return Object.keys(listErrors).length === 0;
}
    
    return(<>
    <StyledFormContainer>
    <h1> Add Employee  </h1>
        <StyledForm action="" onSubmit={handleSubmite}>
            <StyledInputWrapper>
                <StyledLabel htmlFor="name">Name <span style={{color:"red"}}>*</span>:</StyledLabel>
                <StyledInput 
                onChange={handleChange}
                name='name'
                type="text" 
                value={formData.name}
                >
                </StyledInput>
             {errors.name && <p style={{ color: "red", margin: 0, lineHeight:1}}>{errors.name}</p>}

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
                 name='email' type="text" 
                 value={formData.email} >

                 </StyledInput>
                 {errors.name&&<p>{errors.email}</p>}
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