import React from 'react'
import {useState, useContext} from 'react'
import { ContextValue } from '../hooks/Context'
export default function TodoInput() {
  const [job, setJob] = useState('')
  const {setJobs} = useContext(ContextValue)
   
  function handleJob () {
    setJobs(pre => [...pre, job])
    setJob('')
  }
  return (
    <header>
        <input value={job} type='text' placeholder='Enter todo ...' onChange={e => setJob(e.target.value)}/>
        <button onClick={handleJob}>Add</button>
    </header>
  )
}
