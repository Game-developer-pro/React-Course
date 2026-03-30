// import { useState } from "react";
// import TodoStyles from "./TodoList.module.css"
// function TodoList() {
//     const [value, setValue] = useState("");
//     const [todo, setTodo] = useState([]);
    
//     // const handleChange = (e) => {
//     //     setValue(e.target.value);
//     // }

//     const displayInput = () => {
//         if(value) {
//           setTodo(prevTodo => [...prevTodo, value]);
//           setValue("");
//           todo.push(value);
//         }
//     }


//     return (
        
//         <div className={TodoStyles.container}>

//             <h1 className={TodoStyles.title}>Todo List</h1>
//             <input className={TodoStyles.inputText} value={value} onChange={(e) => setValue(e.target.value)}/>
//             <button className={TodoStyles.button} value={value} onClick={displayInput}>Add</button>
//             <p>{todo}</p>
    
//         </div>
//     )
// }

// export default TodoList

import { useState } from "react";
import Button from './Button';
import TodoDisplay from './TodoDisplay';
import TodoInput from './TodoInput';

function TodoList() {
  const [value, setValue] = useState('');
  const [todoArray, setTodoArray] = useState([]);

  // const handleInput = (e) => {
  //   setValue(e.target.value);
  //   // console.log("The input value", value);
  // }

  const displayInput = () => {
    if (value) {
      setTodoArray(() => [...todoArray, value]);
      setValue("");
      // todoArray.push(value)
      console.log(todoArray);
    }
  };

  return (
    <>
      <h1>Todo List</h1>

      <TodoInput value={value} setValue={setValue} />

      <Button text="Submit" calculate={displayInput} />

      <TodoDisplay todoArray={todoArray} setTodoArray={setTodoArray} />

    </>
  );
}

export default TodoList;
