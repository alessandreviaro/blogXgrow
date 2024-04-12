import React from "react";

const Cposts = ({items}) => {

    const initialPost = items.find(item => item.id === '1');    


    return (
        <div>
             <div className="post-container">
                <div className="id" key={initialPost.id}>
                <h1 className="blog-title">{initialPost.title}</h1>
                <p className="data-minute">{initialPost.time_read}•</p>
                <p className="data-minute">{initialPost.created_at}</p>
                <img className='image-post' src={initialPost.image_url} alt='Rando'></img>
                <p className="post-description">{initialPost.body}</p>
            </div>
            </div>
            <h3 className="section-comments">Comentários:</h3>
        </div>
    );
}

export default Cposts;