import React from 'react'
import axios from 'axios'

export function Singin ({setToken, setName, setRoom, name, room})
{

    
    async function handleSubmit(event){
        event.preventDefault();

        const result = await axios.post( "https://evybes-video-call-5486-dev.twil.io/video-token",
            {
                identity: name,
                room: room
            } )
        
        
        console.log("result token: ", result.data)
        setToken(result.data)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name
                 <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}></input>
            </label><br />
             <label htmlFor="name">
                Room
                 <input type="text" id="room" value={room} onChange={(e) => setRoom(e.target.value)}></input>
            </label><br />
            <button type="submit">Submit</button>
        </form>
    )
}