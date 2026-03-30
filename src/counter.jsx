import   { useState } from 'react'
import Button from './Button'
function Counter() {
    const [count , setCount] = useState(0)
    const styled = {
        padding: "10px 20px", borderRadius: "10px", margin: "10px"}
    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
         if(count <= 0){
            return;
        }
        setCount(count - 1)
       
    }

    
    return (
        <div style={{border: "thin solid red", margin: "auto", padding: "30px"}}>
            <p>{count}</p>
            <Button calculate={increment} backgroundColor="green" text="Increment"/>
            <Button calculate={decrement} backgroundColor="red" text="Decrement"/>
            {/* <button onClick={increment} style={styled}>Increment</button>
            <button onClick={decrement} style={styled}>Decrement</button> */}
        </div>
    )
}

export default Counter