import React from 'react'
import {useSelector} from 'react-redux'

function Header() {
    const name = useSelector(state=>state.user.name)
  return (
    <div>
        <h1>Coderz Academy</h1>
        <p>Hello {name}</p>    
    </div>
  )
}

export default Header