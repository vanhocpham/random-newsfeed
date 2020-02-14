const User = require( "../models/User.model" );

module.exports = {
  "index": async ( req, res ) => {
    if ( req.query.id ) { 
      const findUser = await User.findOne( { "_id": req.query.id } );


    }
    
  },
  "create": async ( req, res ) => {
    
  },
  "update": async ( req, res ) => {
    
  },
}
