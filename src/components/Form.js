import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addUser} from './userSlice'

function Form() {
    
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const dispatch = useDispatch();


    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({name,email}))
    }
    

  return (
  
        <form onSubmit={handelSubmit}>
            <div className='form-group'>
                <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
            </div>
            
            <div className='form-group'>
                <input type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div>
                <button type="submit" placeholder="Add User">SUBMIT</button>
            </div>
        </form>
    
  )
}

export default Form