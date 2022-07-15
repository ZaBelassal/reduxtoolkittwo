import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Form from './Form';
import {useState} from 'react'

function App() {
  const [name , setName] = useState('')
    const [email,setEmail] = useState('')
    const [isChanged,setIsChanged] = useState(false)

    const addUser = (e) => {
      e.preventDefault()
      setIsChanged(true)
    }
  return (
    <div className="App">
      <Header name={name} isChanged={isChanged}/>
      <div>
        <SideBar name={name} isChanged={isChanged}/>
        <Form setName={setName} setEmail={setEmail} isChanged={isChanged} addUser={addUser}/>
      </div>
    </div>
  );
}

export default App;
