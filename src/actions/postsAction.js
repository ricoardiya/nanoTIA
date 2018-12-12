import axios from 'axios';

// GET POSTS
export function getPosts() {
  return function(dispatch) {
    axios
      .get("https://www.techinasia.com/wp-json/techinasia/2.0/posts?")
      .then(function(response) {
        dispatch({type: 'GET_POST', payload: response.data});
      })
      .catch(function(err) {
        dispatch({type: 'GET_POST_REJECTED', payload: err});
      });
  };
}
