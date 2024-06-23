import { useState } from 'react'
import './App.css'
import CounterWithFuncComponent from './components/CounterWithFuncComponent'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className='border border-purple-500 p-10 m-10'>
      {/* <CounterWithClass /> */}
      <h1 className='text-3xl'>Count = {count}</h1>

      <CounterWithFuncComponent count={count} setCount={setCount} />
    </div>
  )
}

export default App
