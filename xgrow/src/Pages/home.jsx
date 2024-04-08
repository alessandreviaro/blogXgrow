
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./stles.css"


const Home = () => {
  return (
   <div>
      <Header />
      <div className="initial-post">
      <h1 className="blog-title">A Jornada da Programação</h1>
      <h4 className="blog-description">Aqui você ficará bem informado como nosso blog</h4>
      <img className='image-post' src='https://source.unsplash.com/random/1000x250?sig=1' alt='Rando'></img>
      <p className="post-description">Aprender a programar é como aprender uma nova língua. No inicio, tudo parece estranho e desafiador...</p>
      <p className="data-minute">5 min . Março 19, 2024</p>
    </div>
    <div className="list-post">
      <div className='post_feed'>
        <ul>
          <li>
            <article className="article-1">
                <img className='image-posts' src='https://source.unsplash.com/random/237x133?sig=1' alt='Random'></img>
        <div className='feed-post-text'>
            <h3 className='headline'>O futuro da Inteligência Artificial</h3>
            <p className='hd-description'>A inteligência Artificial é assim, assado, machine learning...</p>
            <p className='day-data'>5 min . 4 Março, 2024</p>
        </div>
            </article>
            </li>
            <li>
            <article className="article-2">
                <img className='image-posts' src='https://source.unsplash.com/random/237x133?sig=1' alt='Random'></img>
        <div className='feed-post-text'>
            <h3 className='headline'>O futuro da Inteligência Artificial</h3>
            <p className='hd-description'>A inteligência Artificial é assim, assado, machine learning...</p>
            <p className='day-data'>5 min . 4 Março, 2024</p>
        </div>
            </article>
            </li>
            <li>
            <article className="article-3">
                <img className='image-posts' src='https://source.unsplash.com/random/237x133?sig=1' alt='Random'></img>
        <div className='feed-post-text'>
            <h3 className='headline'>O futuro da Inteligência Artificial</h3>
            <p className='hd-description'>A inteligência Artificial é assim, assado, machine learning...</p>
            <p className='day-data'>5 min . 4 Março, 2024</p>
        </div>
            </article>
            </li>
            </ul>
        </div>
      </div>
      <Footer />
    </div>
  ) ;
} ;

export default Home;