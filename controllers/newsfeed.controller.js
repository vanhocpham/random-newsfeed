const Post = require( "../models/Post.model" ),
  PostCategory = require( "../models/PostCategory.model" ),
  PostMeta = require( "../models/PostMeta.model" );

module.exports = {
  "index": async ( req, res ) => {

    const findPost = await Post.aggregate([{ "$sample": { "size": req.query.size && typeof parseInt( req.query.size ) !== NaN ? parseInt( req.query.size ) : 5  } },  {
     $lookup: {
        from: 'postcategories',
        localField: '_postCategory',
        foreignField: '_id',
        as: '_postCategory' 
      } },
      // {                     // Limit field wanna response
      //   "$project": {
      //     "_postCategory.uuid": 1
          
      // } }
    ] )
    res.send( findPost );
  }
}