import React,{useEffect,useRef} from 'react'
import TwilioVideo from 'twilio-video'


export function VideoChat ( {token, room } )
{
    const localVideoRef = useRef()
    const remoteVideoRef = useRef()

    useEffect(() =>
    {
        //effect 
        TwilioVideo.connect( token,{
            video: true,
            audio: true,
            name: room 
        } ).then( ( room ) =>
        {
            TwilioVideo.createLocalVideoTrack().then((track ) => {
                    localVideoRef.current.appendChild( track.attach() );
                });
            function addParticipant (participant){
                console.log( "New Participant" )
                participant.tracks.forEach( publication => {
                    if (publication.subsribe){
                        const track = publication.track
                        remoteVideoRef.current.appendChild( track.attach())
                    }
                })
            }
            room.participants.forEach(addParticipant)
            room.on('participantConnected', addParticipant)
        } ).catch( (err) => console.log("Error Messge: ", err) )
        //clean up function
        // return () => {}
        
    }, [token, room])
    return (
        <div style={{textAlign: "center", alignItems: "center", display: "flex", flexDirection:"column"}}>
            <div>
              <h3>You are inside the room name: {room}</h3>
            </div>
            <div ref={localVideoRef} ></div>
            <div ref={remoteVideoRef}></div>
        </div>
    )
}