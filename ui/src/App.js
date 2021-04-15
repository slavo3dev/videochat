import { useState } from 'react'
import './App.css';
import { Singin } from "./components/Signin"

function App ()
{
  const [token, setToken] = useState()
  return (
    <div className="App">
      {
        !token ?
          <div>
            <h1>Hello Vide Chat App</h1>
            Show From
            <Singin />
          </div> :
          <div>
            Hello From Twilio
          </div>
      }
    </div>
  );
}

export default App;
