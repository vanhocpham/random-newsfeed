/**
 * author: hocpv
 * createdDate: Dec 25 2019
 * editor:
 * updatedDate:
 *
 */

const mongoose = require( "mongoose" ),
  Schema = mongoose.Schema,

  PostCategorySchema = new Schema( {
    "status": Number,
    "name": String,
    "slugs": String,
    "title": String,
    "description": String,
    "keywords": String,
    "photo": String,
    "parent": Number,
    "orderStt": Number,
    "showTop": Number,
    "showHome": Number,
    "showRight": Number,
    "showBottom": Number,
    "createdAt": String,
    "updatedAt": String,
  } ),

  PostCategory = mongoose.model( "PostCategory", PostCategorySchema );

module.exports = PostCategory;
