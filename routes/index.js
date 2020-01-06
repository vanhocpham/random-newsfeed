const router = require( "express" ).Router();
const PostController = require( "../controllers/import.controller" );
const NewsfeedController = require( "../controllers/newsfeed.controller" );

router.route( "/posts" ).post( PostController.post );
router.route( "/post-categories" ).post( PostController.postCategory );
router.route( "/post-metas" ).post( PostController.postMeta );

router.route( "/news" ).get( NewsfeedController.index );



module.exports = router;
