import { useState } from 'react'
import {Table, Form} from './components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleSubmit =(e)=>{
    e.preventDefault();
   console.log('first')
  }
  const wrapper = 
    { 
      minHeight: "100vh",
      background:"linear-gradient(rgba(208, 109, 208, 0.746),rgba(132, 49, 49, 0.57))",    
    }
  return (
    <div
      className="pt-5"
      style={wrapper}
    >
      <h1 className="text-center mb-5">Not To Do Lists</h1>
      {/* form */}
      <Form handleSubmit={handleSubmit}/>

      {/* table */}
      <Table/>
    </div>
  )
}

export default App
