// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './Components/Form';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
// import Registration from './Components/Registration';


const App=()=> {
  const[input,setInput]=useState("");
  const[todos,setTodos]=useState([]);
  return (
    <div className="main-container">
       <div className="sub-wrapper">
          <div>
          <Header/> 
          </div>
          <div>
            <Form
             input={input}
             setInput={setInput}
             todos={todos}
             setTodos={setTodos}
            />
          </div>
          <div>
            <TodoList todos={todos} setTodos={setTodos}
             
            />
            
          </div>
        </div>   

     
 
    </div>
  );
}

export default App;
