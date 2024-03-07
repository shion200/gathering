import React, { useState } from 'react';
import "./LoginForm.module.css";
import {signInWithPopup, GoogleAuthProvider, getAuth} from "firebase/auth"

interface LoginProps {
  onSubmit: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(email, password);
    signInWithPopup(auth, provider)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>ログイン</h1>
      {/* <label>
        メールアドレス
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        パスワード
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label> */}
      <button type="submit">ログイン</button>
    </form>
  );
};

export default Login;
