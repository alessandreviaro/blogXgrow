import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
        <header>
            <h2>Blog K-12</h2>
            <nav>
                <Link to='/posts'>Posts</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Registre-se</Link>
            </nav>
        </header>
      </div>
  )
}

export default Header;  
