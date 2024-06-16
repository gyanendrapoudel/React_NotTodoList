import { useEffect, useState } from 'react'
import {Table, Form} from './components'
import './App.css'

function App() {
  const [taskList, setTaskList]  = useState([])

  const addTaskList = (objTask)=>{
    const obj = {...objTask, type:"Entry", id: randomIdGenerator()}
    setTaskList([...taskList, obj])
  }

  const randomIdGenerator=(length=6)=>{
    const str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGJKLZXCVBNM1234567890"
    let randomId=''
    for(let i=0; i<length; i++){
      const randomIndex = Math.floor(Math.random()*str.length)
      randomId+=str[randomIndex]
    }
    return randomId
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
      <Form addTaskList={addTaskList} />

      {/* table */}
      <Table taskList={taskList}/>
    </div>
  )
}

export default App
