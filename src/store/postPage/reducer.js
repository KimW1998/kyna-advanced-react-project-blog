const initialState = {
  status: "loading",
};

export default function postPageSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "feed/startLoading": {
      return {
        status: "loading",
      };
    }
    case "feed/postsFetched": {
      return {
        status: "success",
        data: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
