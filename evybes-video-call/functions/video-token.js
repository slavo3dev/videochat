exports.handler = function (context, event, callback) {
  const TWILIO_ACCOUNT_SID = context.ACCOUNT_SID;
  const TWILIO_API_KEY = context.API_KEY;
  const TWILIO_API_SECRET = context.API_SECRET;
  const AccessToken = Twilio.jwt.AccessToken;

  const accessToken = new AccessToken(
    TWILIO_ACCOUNT_SID,
    TWILIO_API_KEY,
    TWILIO_API_SECRET
  );
    
    const VideoGrant = AccessToken.VideoGrant()
    const videoGrant = new VideoGrant( {
        room: event.room
    } )
    
    accessToken.addGrant( videoGrant );
    
    callback(null, { token: accessToken.toJwt() });
}