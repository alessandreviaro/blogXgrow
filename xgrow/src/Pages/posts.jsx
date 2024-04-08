import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Posts = () => {
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
      <Footer />
    </div>
  )
}

export default Posts;
