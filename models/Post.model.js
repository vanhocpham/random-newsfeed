/**
 * author: hocpv
 * createdDate: Dec 25 2019
 * editor:
 * updatedDate:
 *
 */

const mongoose = require( "mongoose" ),
  Schema = mongoose.Schema,

  PostSchema = new Schema( {
    "postId": Number,
    "language": String,
    "commentStatus": String,
    "status": Number,
    "type": Number,
    "isHot": Number,
    "showTop": Number,
    "categoryId": Number,
    "topicId": Number,
    "authorId": Number,
    "slugs": String,
    "photo": String,
    "thumb": String,
    "photoData": String,
    "summary": String,
    "content": String,
    "title": String,
    "description": String,
    "tags": String,
    "source": String,
    "viewed": String,
    "viewTotal": Number,
    "viewDay": Number,
    "viewWeek": Number,
    "viewMonth": Number,
    "viewYear": Number,
    "releaseTime": String,
    "outdatedAt": String,
    "author": {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    "_postCategory": {
      "type": Schema.Types.ObjectId,
      "ref": "PostCategory"
    },
    "like": {
      "type": Number,
      "default": 0
    },
    "share": Number,
    "createdAt": String,
    "updatedAt": String,
  } );

PostSchema.pre( "save", async function ( next ) {
    try {
      // this.updated_at = Date.now();
      next();
    } catch ( error ) {
      next( error );
    }
  } );

const Post = mongoose.model( "Post", PostSchema );

module.exports = Post;
