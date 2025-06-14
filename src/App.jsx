import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {increment,decrement} from './features/countSlice'
const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.count.count)
  return (
    <div>
      <h2>Counter</h2>
    <button onClick={()=> dispatch(increment())}>Increment</button>
    <div>{count}</div>
    <button onClick={()=> dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default App