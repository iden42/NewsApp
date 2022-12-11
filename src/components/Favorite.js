import React from "react";
import { Link } from "react-router-dom";

export default function Favorite() {
  let posts = JSON.parse(localStorage.getItem("posts"));
  return (
    <div>
      {posts.map((post) =>
        post.urlToImage ? (
          <div key={post.url} className="blog">
            <img className="img" src={post.urlToImage} alt=""></img>
            <div className="info">
              <Link className="to-blog" to={`/favorite/${post.publishedAt}`}>
                {post.title}
              </Link>
              <div>{post.author}</div>
              <div>{post.publishedAt.replace("T", " ").replace("Z", "")}</div>
            </div>
          </div>
        ) : (
          <div key={post.url} className="no-img-blog">
            <div className="info">
              <Link className="to-blog" to={`/favorite/${post.publishedAt}`}>
                {post.title}
              </Link>
              <div>{post.author}</div>
              <div>{post.publishedAt.replace("T", " ").replace("Z", "")}</div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
