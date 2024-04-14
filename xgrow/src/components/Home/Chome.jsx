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
  const secondPost = items.find(item => item.id === '2');
  const thirdPost = items.find(item => item.id === '3');
  const fourthPost = items.find(item => item.id === '4');


  return (
    <div>
  
      {initialPost && (
        <div className="initial-post">
          <div className="post-item" key={initialPost.id}>
            <h1 className="blog-title">{initialPost.title}</h1>
            <h4 className="blog-description">Aqui você ficará bem informado como nosso blog</h4>
            <Link to="/posts">
            <img className="image-post" src="https://source.unsplash.com/1192x357/?random" alt="img-api"></img>
            <p className="post-description">{truncateString(initialPost.body, MAX_WORDS)}</p>
            <p className="data-minute">{initialPost.time_read} Min • {initialPost.created_at}</p> 
            </Link>
          </div>
        </div>
      )}

      <div className="list-post">
        <div className="post_feed">
    
            {secondPost && (
              <div key={secondPost.id}>
                <img className="image-post" src={secondPost.image_url} alt="Random" />
                <article className={`article-${secondPost.id}`}>
                  <div className="feed-post-text">
                    <h3 className="headline">{secondPost.title}</h3>
                    <p className="hd-description">{truncateString(secondPost.body, MAX_WORDS)}</p>
                    <p className="day-data">{secondPost.time_read} Min • {secondPost.created_at}</p>
                  </div>
                </article>
              </div>
            )}
        </div>
      </div>
      <div className="list-post">
        <div className="post_feed">
          
            {secondPost && (
              <div key={thirdPost.id}>
                <article className={`article-${thirdPost.id}`}>
                  <div className="feed-post-text">
                    <img className="image-post" src={thirdPost.image_url} alt="Random" />
                    <h3 className="headline">{thirdPost.title}</h3>
                    <p className="hd-description">{truncateString(thirdPost.body, MAX_WORDS)}</p>
                    <p className="day-data">{thirdPost.time_read} Min • {thirdPost.created_at}</p>
                  </div>
                </article>
              </div>
            )}
          
        </div>
      </div>
      <div className="list-post">
        <div className="post_feed">
          {secondPost && (
              <div key={fourthPost.id}>
                <article className={`article-${fourthPost.id}`}>
                  <div className="feed-post-text">
                    <img className="image-post" src={fourthPost.image_url} alt="Random" />
                    <h3 className="headline">{fourthPost.title}</h3>
                    <p className="hd-description">{truncateString(fourthPost.body, MAX_WORDS)}</p>
                    <p className="day-data">{fourthPost.time_read} Min • {fourthPost.created_at}</p>
                  </div>
                </article>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Chome;
