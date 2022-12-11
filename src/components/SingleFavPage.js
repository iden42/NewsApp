import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function SingleBlogPage() {
  const { id } = useParams();

  const [fav, setFav] = useState(JSON.parse(localStorage.getItem("posts")));
  const [ppost, setPpost] = useState([]);
  const [flag, setFlag] = useState();

  async function post() {
    let temp = await fav.find((post) => post.publishedAt === id);
    setPpost(temp);
    let t = await fav.find((post) => post.url === temp.url);

    if (t === undefined) {
      setFlag(true);
    }
    if (t !== undefined) {
      setFlag(false);
    }
  }

  const favChek = () => {
    let posts = JSON.parse(localStorage.getItem("posts"));
    if (flag === true) {
      posts.unshift(ppost);
      localStorage.setItem("posts", JSON.stringify(posts));
    }
    if (flag === false) {
      let temp = posts.filter((post) => post.url !== ppost.url);
      localStorage.setItem("posts", JSON.stringify(temp));
    }
  };

  useEffect(() => {
    post();
  });
  useEffect(() => {});

  return (
    <div className="post-page">
      <h1 className="title">{ppost.title}</h1>
      <p className="desc">{ppost.description}</p>
      <p className="desc" id="auth">
        {ppost.author}
      </p>
      <a target="_blank" className="desc" href={ppost.url}>
        читати далі...
      </a>
      <Link
        className="fav-btn"
        to={"/favorite"}
        onClick={() => {
          favChek();
        }}
      >
        {flag ? "Додати до обраного" : "Видалити"}
      </Link>
    </div>
  );
}
