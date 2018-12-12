export function postReducers(
  state = {undefined},
  action,
) {
  switch (action.type) {
    case 'GET_POST':
      return {post: action.payload};

    // TODO
    // GET_POST_REJECTED

    default:
  }
  return state;
}
