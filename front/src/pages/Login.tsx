import LoginForm from "../components/LoginForm";

export const Login = () => {
    
    const handleLogin = (email: string, password: string) => {
        console.log('ログインされたメールアドレス:', email, 'とパスワード:', password);
      };

    return (
      <div>
        <h1>Login</h1>
        <LoginForm onSubmit={handleLogin} />
      </div>
    );
  };
  