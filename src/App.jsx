import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementbyamount } from './redux/features/counterSlice'
import { useState } from 'react'





const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state)=> state.counter.value)

const [num, setnum] = useState(5)

  return (
    <div>
    <h1>{count}</h1>

    <button onClick={()=>{
     dispatch(increment())
    }}>
      Increment
      </button>
    <button onClick={()=>{
    dispatch(decrement())
    }}>
      Decrement
      </button>

      <button onClick={()=>{
        dispatch(incrementbyamount(Number(num)))
      }}>
        Increase by Amount 
      </button>

      <input
         value={num}
       type="Number"
        onChange={(e)=>{
        setnum(e.target.value)
        
      }}/>
      
    </div>
  )
}

export default App
 