import React,{useEffect,useRef} from 'react'
import TwilioVideo from 'twilio-video'


export function VideoChat ( {token, room } )
{
    const localVideoRef = useRef()
    const remoteVideoRef = useRef()

   function appendNewParticipant(track, identity) {
    const chat = document.createElement('div');
    chat.setAttribute('id', identity);
    chat.appendChild(track.attach());
    remoteVideoRef.current.appendChild(chat);
  }

    function removeParticipant(participant){
        const elementId = document.getElementsById( participant.identity )
        elementId.parentNode.removeChild(elementId)
    }

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
                    localVideoRef.current.appendChild(track.attach());
            } );
            
            function removeParticipant(participant) {
                    const elementId = document.getElementById(participant.identity);
                    elementId.parentNode.removeChild(elementId);
            }
            
            function addParticipant (participant){
                participant.tracks.forEach((publication) => {
                    if (publication.isSubscribed){
                        const track = publication.track;
                        appendNewParticipant(track, participant.identity);
                    }
                } )
                participant.on('trackSubscribed',(track) =>{
                    appendNewParticipant(track, participant.identity);
                })
            }
            room.participants.forEach(addParticipant);
            room.on('participantConnected', addParticipant)
            room.on('participantDisconnected', removeParticipant)
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