const User = require( "../models/User.model" );

module.exports = {
  "index": async ( req, res ) => {
    if ( req.query.id ) { 
      const findUser = await User.findOne( { "_id": req.query.id } ).select( "-_id " );
      if ( !findUser ) {
        return req.status( 403 ).send( { "status": "error", "data": "User not found!"} );
      }

      return req.status( 403 ).send( { "status": "error", "data": "User not found!"} );
    }
    
  },
  "create": async ( req, res ) => {
    
  },
  "update": async ( req, res ) => {
    
  },
}
