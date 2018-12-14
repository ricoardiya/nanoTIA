import {combineReducers} from 'redux'
import {postReducers} from './postReducers'
import {postDetailReducers} from './postDetailReducers'
import {relatedPostsReducers} from './relatedPostsReducers'

export default combineReducers({
  post: postReducers,
  postDetail: postDetailReducers,
  relatedPosts: relatedPostsReducers
});
