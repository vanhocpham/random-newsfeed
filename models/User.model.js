/**
 * author: hocpv
 * createdDate: Feb 11 2020
 * editor:
 * updatedDate:
 *
 */

const mongoose = require( "mongoose" ),
  Schema = mongoose.Schema,
  bcrypt = require( "bcryptjs" ),
  UserSchema = new Schema( {
    "name": String,
    "email": String,
    "password": String,
    "phone": String,
    "_friends": [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  } );

UserSchema.pre( "save", async function ( next ) {
  try {
    const salt = await bcrypt.genSalt( 10 );

    this.password = await bcrypt.hash( this.password, salt );
    // eslint-disable-next-line camelcase
    next();
  } catch ( error ) {
    next( error );
  }
} );

User = mongoose.model( "User", UserSchema );

module.exports = User;
