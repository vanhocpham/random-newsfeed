const Post = require( "../models/Post.model" ),
  PostCategory = require( "../models/PostCategory.model" ),
  PostMeta = require( "../models/PostMeta.model" ),
  redis = require( "redis" );
  //configure redis client on port 6379
  const redisClient = redis.createClient( process.env.PORT_REDIS );
  
  
module.exports = {
  "index": async ( req, res ) => {

    const findPost = await Post.aggregate([{ "$sample": { "size": req.query.size && typeof parseInt( req.query.size ) !== NaN ? parseInt( req.query.size ) : 5  } },  {
     $lookup: {
        from: 'postcategories',
        localField: '_postCategory',
        foreignField: '_id',
        as: '_postCategory' 
      } }
    ] )
    res.send( findPost );
  },
  "getPostById": async ( req, res ) => {
    const findPost = await Post.findOne( { "_id": req.params.id } ).populate( "_postCategory" ).catch( ( e ) => console.log(e ) );

    if ( !findPost ) {
      res.send( "Not Found!" );
    }

    //add data to Redis
    await redisClient.setex(req.params.id, 3600, JSON.stringify(findPost));

    res.send( findPost );
  },

  "getPostID": async ( req, res ) => {
    const getPost = await Post.findById( req.params._id );

    res.status( 200 ).send( { "data": getPost } );
  }
}



