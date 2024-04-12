import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom';


const Chome = ({ items }) => {


  const MAX_WORDS = 16;

  const truncateString = (str, MAX_WORDS) => {
    const words = str.split(' ');
    if ( words.length > MAX_WORDS) {
      return words.slice(0, MAX_WORDS).join(" ") + "...";
    } else {
      return str;
    }
  };


  const initialPost = items.find(item => item.id === '1');

  const listPosts = items.filter(item => parseInt(item.id) >= 2 && parseInt(item.id) <= 4);

  return (
    <div>
  
      {initialPost && (
        <div className="initial-post">
          <div className="post-item" key={initialPost.id}>
            <h1 className="blog-title">{initialPost.title}</h1>
            <h4 className="blog-description">Aqui você ficará bem informado como nosso blog</h4>
            <Link to="/posts">
            <img className="image-post" src={initialPost.image_url} alt="img-api"></img>
            <p className="post-description">{truncateString(initialPost.body, MAX_WORDS)}</p>
            <p className="data-minute">{initialPost.time_read} Min • {initialPost.created_at}</p> 
            </Link>
          </div>
        </div>
      )}

      <div className="list-post">
        <div className="post_feed">
          <ul>
            {listPosts.map((item) => (
              <li key={item.id}>
                <article className={`article-${item.id}`}>
                  <img className="image-posts" src={item.image_url} alt="Random" />
                  <div className="feed-post-text">
                    <h3 className="headline">{item.title}</h3>
                    <p className="hd-description">{truncateString(item.body, MAX_WORDS)}</p>
                    <p className="day-data">{item.time_read} Min • {item.created_at}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chome;
