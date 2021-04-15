import { useState } from 'react'
import './App.css';
import {Singin} from "./components/Signin"
import {VideoChat} from "./components/VideoChat"

function App ()
{
   const [name,setName] = useState("")
    const [room,setRoom] = useState( "room" )
  const [token, setToken] = useState()
  return (
    <div className="App">
      {
        !token ?
          <div>
            <h1>Hello Video Chat App</h1>
            Show From
            <Singin setToken={setToken} setName={setName} setRoom={setRoom} name={name} room={room}/>
          </div> :
          <VideoChat token={token} room={room}/>
      }
    </div>
  );
}

export default App;
