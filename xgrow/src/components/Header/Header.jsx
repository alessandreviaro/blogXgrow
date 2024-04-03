import { Link } from 'react-router-dom'
import './style.css'

const Header = () => {
  return (
    <div className="header">
        <header>
            <div className='header-name'><Link className='header-name' to='/'>Blog K-12</Link></div>
              <ul>
                <li className='link-name'><Link className='link-name-post' to='/posts'>Posts</Link></li>
                <li><button className='login'><Link  className='link-name-login' to='/login'>Login</Link></button></li>
                <li><button className='register'><Link className='link-name' to='/register'>Registre-se</Link></button></li>
              </ul>
            
        </header>
      </div>
  )
}

export default Header;  
