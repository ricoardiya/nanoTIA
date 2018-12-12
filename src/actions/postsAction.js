import axios from 'axios';

// GET POSTS
export function getPosts() {
  return function(dispatch) {
    axios
      .get("https://www.techinasia.com/wp-json/techinasia/2.0/posts?page=1&per_page=30")
      .then(function(response) {
        dispatch({type: 'GET_POST', payload: response.data});
      })
      .catch(function(err) {
        dispatch({type: 'GET_POST_REJECTED', payload: err});
      });
  };
}

export function getNextPosts(page) {
  return function(dispatch) {
    axios
      .get("https://www.techinasia.com/wp-json/techinasia/2.0/posts?page="+ page +"&per_page=30")
      .then(function(response) {
        dispatch({type: 'GET_NEXT_POST', payload: response.data});
      })
      .catch(function(err) {
        dispatch({type: 'GET_NEXT_POST_REJECTED', payload: err});
      });
  };
}
