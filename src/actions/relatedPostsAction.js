import axios from 'axios';

// GET RELATED POSTS
export function getRelatedPosts(postID) {
  return function(dispatch) {
    axios
      .get("https://www.techinasia.com/wp-json/techinasia/2.0/posts/" + postID + "/related")
      .then(function(response) {
        dispatch({type: 'GET_RELATED_POST', payload: response.data});
      })
      .catch(function(err) {
        dispatch({type: 'GET_RELATED_POST_REJECTED', payload: err});
      });
  };
}
