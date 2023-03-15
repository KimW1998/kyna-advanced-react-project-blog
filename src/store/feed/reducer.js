const initialState = {
  loading: true,
  posts: [],
};

export default function feedSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "feed/startLoading": {
      return {
        ...state,
        loading: true,
      };
    }
    case "feed/postsFetched": {
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
}
