import Comment from "../components/Comments/Comments";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import './posts.css'

const Posts = () => {
  return (
   <div>
      <Header />
      <div className="initial-post">
        <h1 className="blog-title">O futuro da Inteligência Artificial</h1>
        <p className="data-minute">5 min . Março 19, 2024</p>
        <img className='image-post' src='https://source.unsplash.com/random/1000x500?sig=1' alt='Rando'></img>
        <p className="post-description">A Inteligência Artificial (IA) está rapidamente se tornando uma força transformadora em nossa sociedade, prometendo revolucionar praticamente todos os aspectos de nossas vidas. No futuro, a IA terá um papel ainda mais proeminente, impulsionando avanços em áreas como saúde, transporte, educação e muito mais.
        Na área da saúde, a IA está sendo utilizada para diagnósticos mais precisos e tratamentos personalizados. Algoritmos de aprendizado de máquina analisam grandes conjuntos de dados médicos para identificar padrões e prever doenças, permitindo intervenções precoces e eficazes.</p>
      </div>
      <h3 className="section-comments">Comentários:</h3>
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
