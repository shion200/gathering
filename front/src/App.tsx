import "./App.css";
import LoginForm from './components/LoginForm';
// import { HeaderMegaMenu } from "./header/HeaderMegaMenu";
import { initializeApp } from "firebase/app";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Routes, Route } from 'react-router-dom';


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
  
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    );
  };
  
  export default App;