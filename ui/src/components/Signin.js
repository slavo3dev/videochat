import React, {useState} from 'react'


export function Singin ()
{
    const [name,setName] = useState("name")
    const [room,setRoom] = useState( "room" )
    
    return (
        <form>
            <label htmlFor="name">
                Name
                 <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}></input>
            </label><br />
             <label htmlFor="name">
                Room
                 <input type="text" id="room" value={room} onChange={(e) => setRoom(e.target.value)}></input>
            </label>
        </form>
    )
}