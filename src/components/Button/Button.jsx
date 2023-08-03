export default function Button({handleChangeTitle}){
    return <input type="button" value="change header" onClick={()=>handleChangeTitle()}/>

}