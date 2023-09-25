// components/Login.js
import React, { useState } from 'react';
import { auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, senha);
      alert('Login bem-sucedido!');
    } catch (error) {
      alert('Erro ao fazer login: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={senha} onChange={handleSenhaChange} />
        </div>
        <button type="submit">Acessar</button>
      </form>
    </div>
  );
};

export default Login;