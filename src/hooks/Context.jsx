import React from 'react'
import {createContext, useState} from 'react'
export const ContextValue = createContext(null)
export default function Context({children}) {
    const [jobs, setJobs] = useState(['Go coffee','Go Swimming','Cleaning'])
    console.log(jobs);
    
    const values = {
        jobs,
        setJobs
    }
  return (
   <ContextValue.Provider value={values}>
    {children}
   </ContextValue.Provider>
  )
}
