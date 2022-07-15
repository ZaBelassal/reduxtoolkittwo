import React, { useState } from 'react'

function Form({setName,setEmail,addUser}) {

  return (
    <div>
        <form>
            <div className='form-group'>
                <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
            </div>
            
            <div className='form-group'>
                <input type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div>
                <button type="submit" placeholder="Add User" onClick={addUser}>SUBMIT</button>
            </div>
        </form>
    </div>
  )
}

export default Form