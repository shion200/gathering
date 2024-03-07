import "./LoginForm.module.css";
import {signInWithPopup, GoogleAuthProvider, getAuth} from "firebase/auth"
import { useNavigate } from "react-router-dom";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({ }) => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const navigate = useNavigate();
  const handleSubmit = () => {
    signInWithPopup(auth, provider)
    .then(() => {
      navigate("/");
    })
    .catch((error)=> {
      console.error(error);
    })
  };

  return (
    <div>
      <h1>ログイン</h1>
      <button type="button" onClick = {handleSubmit} >ログイン</button>
    </div>
  );
};

export default Login;
