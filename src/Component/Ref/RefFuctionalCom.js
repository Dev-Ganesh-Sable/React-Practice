
import React, { useRef } from 'react'

function RefFuctionalCom() {

    const inputRef=useRef()

    const handelClick=()=>{
        inputRef.current.focus();   // input focus on button click
    }

  return (
    <div>
        <input type='text' ref={inputRef} />
        <button onClick={()=>{handelClick()}}>Click</button>
    </div>
  )
}

export default RefFuctionalCom