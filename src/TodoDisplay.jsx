function todoDisplay(props) {
  
const deleteTodo = () => {
  props.setTodoArray(NewTodoArray => NewTodoArray.filter((todo, i) => i !== i));
}


const editTodo = () => {

}
    return (
       <ul>
        {props.todoArray.map((todo, i) => (
         <div key={i}>
          <li>{todo}</li>
          <span>{i + 1}</span>
          <button  style={{backgroundColor: 'red', border: 'thin solid red', color: 'white', padding: '10px 20px', borderRadius: '10px', fontFamily: 'roboto', marginLeft: '10px'}} onClick={deleteTodo}>Delete</button>
          <button style={{backgroundColor: 'green', border: 'thin solid green', color: 'white', padding: '10px 20px', borderRadius: '10px', fontFamily: 'roboto', marginLeft: '10px' }} onClick={editTodo}>Edit</button>
         </div> 

        ))}
      </ul>
    )
}

export default todoDisplay;