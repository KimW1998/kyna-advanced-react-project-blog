import { combineReducers } from "redux";
import feedSliceReducer from "./feed/reducer";
import postPageSliceReducer from "./postPage/reducer";
// import someFeatureReducer from "./someFeature/reducer";

const reducer = combineReducers({
  feed: feedSliceReducer,
  postPage: postPageSliceReducer,
});

export default reducer;
