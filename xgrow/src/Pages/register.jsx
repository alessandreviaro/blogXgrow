import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from "../Hooks/useAuth";
import './register.css'
import { useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

const Register = () => {

  const [email, setEmail] = useState("");
  const [emailConfirma, setEmailConfirma] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = async () => {
    if (!email | !emailConfirma | !senha) {
      setError("Preencha todos os campos");
      return;
    }else if (email !== emailConfirma) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = await signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso")
    navigate("/login")
  }




  return (
   <div>
      <Header />
      <div className="container">
        <div className="label">Registre-se</div>
        <div className="content">
          <div className="label-signin">Já tem uma conta?</div>
          <div className="strong"><Link className="register-login" to="/login">&nbsp;Faça Login</Link></div>
          <Input 
          type ="email"
          placeholder="E-mail..."
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("") ]} />
          <Input 
          type ="email"
          placeholder="Confirme seu E-mail..."
          value={emailConfirma}
          onChange={(e) => [setEmailConfirma(e.target.value), setError("") ]} />
          <Input 
          type ="senha"
          placeholder="Digite sua senha..."
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("") ]} />
        <div className="error">{error}</div>
        <Button  Text="Registrar" onClick={handleSignup} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Register;
