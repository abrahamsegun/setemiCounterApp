import React from 'react'
import { useState } from 'react'
import "../component/button.css"
import { ChevronDown, ChevronsDown,Hash, ChevronUp,RotateCw, ChevronsUp} from 'react-feather';
const Button = () => {
    
    const [update, setUpdate]=useState(0)

    const Increase1=()=>{
        setUpdate((prevState)=> prevState+ 1);
    }
    const Increase10=()=>{
        setUpdate((prevState)=> prevState+ 10);
    }
    const Reset=()=>{
        setUpdate((prevState)=> 0);
    }
    const Hassh=()=>{
        setUpdate((prevState)=> {
            const randomDecimal = Math.random()
            const randomNumber = Math.floor(randomDecimal * 100) + 1;

            return randomNumber;

        }

        );
    }
    const Decrease10=()=>{
        setUpdate((prevState)=> prevState- 10);
    }
    const Decrease1=()=>{
        setUpdate((prevState)=> prevState-1);
    }
  return (
    <div>
        <p className='currentValue'>Current value : </p>
        <p style={{color:"blue"}} className='updateP'>{update}</p>
        <div className='button'>
        <button onClick={Increase1}><ChevronUp size={24} color="black"></ChevronUp></button>
        <button onClick={Increase10}><ChevronsUp size={24} color="black"></ChevronsUp></button>
        <button onClick={Reset}><RotateCw size={24} color="black"></RotateCw></button>
        <button onClick={Hassh}><Hash size={24} color="black"></Hash></button>
        <button onClick={Decrease10}><ChevronsDown size={24} color="black"></ChevronsDown></button>
        <button onClick={Decrease1}><ChevronDown size={24} color="black" /></button>
    

        </div>
    </div>
  )
}

export default Button
