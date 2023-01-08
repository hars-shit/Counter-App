import { useState } from 'react';
import './Counter.css'

function Counter(){
    let[counter,setCounter]=useState(0);

    let increment=()=>{
        setCounter(Number(counter)+1);
    }
    let decrement=()=>{
        if(counter>0){
        setCounter(Number(counter)-1);
    }}

    let handleChange=(e)=>{
       
        setCounter(e.target.value);
    }
    
    const clear=()=>{
        setCounter(0);
    }
    return (
        <div>
            <h1>COUNTER APP</h1>
            <p className='counter-preview' onChange={handleChange}>{counter}</p>
            <button className='decrement'onClick={decrement}>Decrement</button>
            <button className='reset' onClick={clear}>Reset</button>
            <button className='increment' onClick={increment}>Increment</button>

        </div>
    )
}
 export default Counter; 