import axios from "axios";

const API_URL = `https://coders-network-api.herokuapp.com`;

export function startLoading() {
  return {
    type: "feed/startLoading",
  };
}

export function postFetched(morePosts) {
  return {
    type: "feed/postsFetched",
    payload: morePosts,
  };
}

export async function fetchNext5Posts(dispatch, getState) {
  dispatch(startLoading());

  const offset = getState().feed.posts.length;

  const res = await axios.get(`${API_URL}/posts?offset=${offset}&limit=5`);

  const morePosts = res.data.rows;
  dispatch(postFetched(morePosts));
}
