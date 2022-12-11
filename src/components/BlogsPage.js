import React from "react";
import { Link } from "react-router-dom";

export default function BlogsPage(props) {
  const blogs = props.blogs;

  return (
    <div>
      {blogs.map((blog) =>
        blog.urlToImage ? (
          <div key={blog.url} className="blog">
            <img className="img" src={blog.urlToImage} alt=""></img>
            <div className="info">
              <Link className="to-blog" to={`/page/${blog.publishedAt}`}>
                {blog.title}
              </Link>
              <div>{blog.author}</div>
              <div>{blog.publishedAt.replace("T", " ").replace("Z", "")}</div>
            </div>
          </div>
        ) : (
          <div key={blog.url} className="no-img-blog">
            <div className="info">
              <Link className="to-blog" to={`/page/${blog.publishedAt}`}>
                {blog.title}
              </Link>
              <div>{blog.author}</div>
              <div>{blog.publishedAt.replace("T", " ").replace("Z", "")}</div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
