const Post = require( "../models/Post.model" ),
  PostCategory = require( "../models/PostCategory.model" ),
  User = require( "../models/User.model" ),
  PostMeta = require( "../models/PostMeta.model" );

const xlsx = require("xlsx"); 

module.exports = {
  /**
   * import post 
   * 
   */
  "post": async ( req, res ) => {
    let count = 0;
    const data = await Post.find();

    for ( let i = 1; i < 21042; i++ ) {
      let findCategory = await PostCategory.findOne( { "id": data[ i ].categoryId } )
      if ( findCategory ) {
        data[ i ]._postCategory = findCategory._id;
        await  data[ i ].save();
      }
      count++;
      console.log ( count )
    }
    res.send("success");
  },
  /**
   * 
   * import post category
   * 
   */
  "postCategory": async ( req, res ) => {
    const workbook = xlsx.readFile( "DataPostCategory.xlsx" ),
      sheetNameList = workbook.SheetNames,
      dataPostCategory = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);

    res.send( dataPostCategory )
  },
  /**
   * 
   * import post meta
   * 
   */
  "postMeta": async ( req, res ) => {
    let count = 0;
    const data = await PostMeta.find();

    for ( let i = 0; i < 1019; i++ ) {
      let findPost = await Post.findOne( { "id": data[ i ].postId } )
      if ( findPost ) {
        data[ i ]._post = findPost._id;
        await  data[ i ].save();
      }
      count++;
      console.log ( count )
    }
    res.send("success");
  },

  "importUser": async ( req, res ) => {
    const checkUserExist = await User.findOne( req.params.id );

    if ( checkUserExist ) {
      
    }
  }
}