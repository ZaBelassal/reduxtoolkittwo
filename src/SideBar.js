import React from 'react'

function SideBar({name , isChanged}) {
  return (
    <div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Hello {isChanged && name}</a></li>
        </ul>
    </div>
  )
}

export default SideBar