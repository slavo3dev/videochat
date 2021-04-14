exports.handler = function ( context, event, callback )
{
    const TWILIO_ACCOUNT_SID = context.TWILIO_ACCOUNT_SID;
    const TWILIO_API_KEY = context.TWILIO_API_KEY;
    const TWILIO_API_SECRET = context.TWILIO_API_SECRET;

    const AccessToken = TWILIO.jwt.AccessToken;

    const accessToken = new AccessToken( TWILIO_ACCOUNT_SID, TWILIO_API_KEY, TWILIO_API_SECRET );

    callback( null, { token: accessToken.toJwt() } );
}