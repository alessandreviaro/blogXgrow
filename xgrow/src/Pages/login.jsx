import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import './login.css'
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth"
import { useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button"

const Login = () => {

  const{ signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !senha) {
      setError("Preencha todos os campos");
      return;
    }
  
    const res = await signin(email, senha);
  
    if (res) {
      setError(res);
      return;
    }
  
    navigate("/");
  }
  
  
  return (
   <div>
      <Header />
      <div className="container">
        <div className="label">Login</div>
        <div className="content">
          <div className="label-signup">

            <div className="label-signup-ch">Novo no site?</div>
          <div className="strong">
            <Link  className="register-login"to="/register">&nbsp;Registre-se</Link>
          </div>
          </div>
            <Input 
            type="email"
            placeholder="Email..." 
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]} 
            />
            <Input 
            type="password"
            placeholder="Senha..."
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
            <div className="error">{error}</div>
            <Button Text="Login" onClick={handleLogin} />
          </div>
      </div>
      <Footer />
    </div>
  ) ;
} ;

export default Login;