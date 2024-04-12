import { useState, useEffect } from "react";
import Comment from "../components/Comments/Comments";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Cposts from "../components/Posts/Cposts";
import './posts.css'

const Posts = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  
  return (
   <div>
      <Header />
      <Cposts items={items} />
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Footer />
    </div>
  )
}

export default Posts;
