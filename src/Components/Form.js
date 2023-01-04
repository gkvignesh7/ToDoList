 import React from 'react'
 import {v4 as uuidv4} from "uuid";
 const Form = ({input,setInput,todos,setTodos}) => {

    const onChangeInput=(e)=>{
        setInput(e.target.value)
    }
    const onsubmitForm=(e)=>{
        e.preventDefault();
        setTodos([...todos,{id:uuidv4(),title:input,completed:false}])
        setInput("");
    }
   return (
     <form onSubmit={onsubmitForm}>
        <input type="text" placeholder='Enter Your ToDo???' className="input-text"
        
         value={input}
         onChange={onChangeInput}
        />
        <button type='submit' className='add-button'>Add</button>
     </form>
   )
 }
 
 export default Form 