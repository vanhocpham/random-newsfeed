const redis = require( "redis" );
//configure redis client on port 6379
const redisClient = redis.createClient( process.env.PORT_REDIS );


module.exports = {
  "cachePostById": async ( req, res, next ) => {
    redisClient.get( req.params.id, (err, data) => {
      if (err) {
          console.log(err);
          res.status(500).send(err);
      }
      console.log( JSON.parse( data ) );
      //if no match found
      if (data != null) {
          res.send(data);
      } 
      else {
          //proceed to next middleware function
          next();
      }
   });
  }
}