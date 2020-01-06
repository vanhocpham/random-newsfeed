/**
 * author: hocpv
 * createdDate: Dec 25 2019
 * editor:
 * updatedDate:
 *
 */

const mongoose = require( "mongoose" ),
  Schema = mongoose.Schema,

  PostMetaSchema = new Schema( {
    "postId": Number,
    "metaKey": String,
    "metaValue": String,
    "metaType": Number,
    "description": String,
    "_post": {
      "type": Schema.Types.ObjectId,
      "ref": "Post"
    }
  } ),

  PostMeta = mongoose.model( "PostMeta", PostMetaSchema );

module.exports = PostMeta;
