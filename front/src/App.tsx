import "./App.css";
import LoginForm from './components/LoginForm';
// import { HeaderMegaMenu } from "./header/HeaderMegaMenu";// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDG-vLM_eRNfTSn2QE-q4JJKHALkF6QlG8",
  authDomain: "gathering-eee66.firebaseapp.com",
  projectId: "gathering-eee66",
  storageBucket: "gathering-eee66.appspot.com",
  messagingSenderId: "887204151237",
  appId: "1:887204151237:web:fc3fc81b0247c20477d5ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const App: React.FC = () => {
    const handleLogin = (email: string, password: string) => {
      console.log('ログインされたメールアドレス:', email, 'とパスワード:', password);
    };
  
    return (
      <div>
        {/* <HeaderMegaMenu /> */}
        <LoginForm onSubmit={handleLogin} />
      </div>
    );
  };
  
  export default App;