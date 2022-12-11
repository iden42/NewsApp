import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import BlogsPage from "./components/BlogsPage";
import Favorite from "./components/Favorite";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SingleFavPage from "./components/SingleFavPage";
import SingleBlogPage from "./components/SingleBlogPage";
import "./style.css";

function App() {
  const [blogs, setBlogs] = useState([]);

  const createStore = () => {
    if (localStorage.getItem("posts") == null) {
      localStorage.setItem("posts", JSON.stringify([]));
      console.log("created");
    }
  };

  useEffect(() => {
    createStore();

    fetch(
      " https://newsapi.org/v2/top-headlines?country=ua&apiKey=2f9bad39c485422ca1e5344409954ce2"
    )
      .then((data) => data.json())
      .then((res) => {
        setBlogs(res.articles);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("lastSession", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<BlogsPage blogs={blogs} />}></Route>
        <Route path="favorite" element={<Favorite />}></Route>
        <Route
          path="page/:id"
          element={<SingleBlogPage blogs={blogs} />}
        ></Route>
        <Route
          path="favorite/:id"
          element={<SingleFavPage></SingleFavPage>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
