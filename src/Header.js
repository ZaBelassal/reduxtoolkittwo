import React from 'react'

function Header({name, isChanged}) {
  return (
    <div>
        <h1>Coderz Academy</h1>
        <p>Hello {isChanged && name}</p>    
    </div>
  )
}

export default Header