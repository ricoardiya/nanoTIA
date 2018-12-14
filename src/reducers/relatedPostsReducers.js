export function relatedPostsReducers(
  state = {relatedPosts: {}},
  action,
) {
  switch (action.type) {
    case 'GET_RELATED_POST':
      return {relatedPosts: action.payload};

    // TODO
    // GET_RELATED_POST_REJECTED

    default:
  }
  return state;
}
