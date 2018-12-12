import axios from 'axios';

// GET POST DETAIL
export function getPostDetail(url) {
  return function(dispatch) {
    axios
      .get("https://www.techinasia.com/wp-json/techinasia/2.0/posts/" + url)
      .then(function(response) {
        dispatch({type: 'GET_POST_DETAIL', payload: response.data});
      })
      .catch(function(err) {
        dispatch({type: 'GET_POST_DETAIL_REJECTED', payload: err});
      });
  }
}
