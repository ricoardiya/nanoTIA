export function postDetailReducers(
  state = {postDetail: {}},
  action,
) {
  switch (action.type) {
    case 'GET_POST_DETAIL':
      return {postDetail: action.payload};

    // TODO
    // GET_POST_DETAIL_REJECTED

    default:
  }
  return state;
}
