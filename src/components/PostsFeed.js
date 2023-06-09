import React, { useEffect, useState } from "react";

import moment from "moment";
import "./PostFeed.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchNext5Posts } from "../store/feed/actions";
import { Link } from "react-router-dom";
import { getFeedPosts, isFeedLoading } from "../store/feed/selectors";

export default function PostsFeed() {
  const dispatch = useDispatch();

  const loading = useSelector(isFeedLoading);
  const posts = useSelector(getFeedPosts);

  useEffect(() => {
    dispatch(fetchNext5Posts);
  }, [dispatch]);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
            <p className="meta">
              {moment(post.createdAt).format("DD-MM-YYYY")} &bull;{" "}
              <span className="tags">
                {post.tags.map((tag) => (
                  <React.Fragment key={tag.id}>
                    <span className="Tag">{tag.tag}</span>{" "}
                  </React.Fragment>
                ))}
              </span>
            </p>
          </div>
        );
      })}
      <p>
        {loading ? (
          <em>Loading...</em>
        ) : (
          <button onClick={() => dispatch(fetchNext5Posts)}>Load more</button>
        )}
      </p>
    </div>
  );
}
