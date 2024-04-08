import './styles.css'

const FeedPost = () => {
    return (
        <div className='post_feed'>
            <article>
                <img className='image' src='https://source.unsplash.com/random/237x133?sig=1' alt='Random'></img>
        <div className='feed-post-text'>
            <h3 className='headline'>O futuro da Inteligência Artificial</h3>
            <p className='hd-description'>A inteligência Artificial é assim, assado, machine learning...</p>
            <p className='day-data'>5 min . 4 Março, 2024</p>
        </div>
            </article>
        </div>
    )
}

export default FeedPost;