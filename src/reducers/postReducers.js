export function postReducers(
  state = {post: []},
  action,
) {
  switch (action.type) {
    case 'GET_POST':
      return {post: action.payload.posts};

    // TODO
    // GET_POST_REJECTED

    case 'GET_NEXT_POST':
      return {
        ...state,
        post: state.post.concat(action.payload.posts)
      }

    default:
  }
  return state;
}
