import React, { useState } from "react";
import "./App.css";
// import { initializeApp } from "firebase/app";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Alcohol } from "./pages/Alcohol";
import {Collection} from "./pages/Collection";
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./contexts/Auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDG-vLM_eRNfTSn2QE-q4JJKHALkF6QlG8",
//   authDomain: "gathering-eee66.firebaseapp.com",
//   projectId: "gathering-eee66",
//   storageBucket: "gathering-eee66.appspot.com",
//   messagingSenderId: "887204151237",
//   appId: "1:887204151237:web:fc3fc81b0247c20477d5ac"
// };

// const app = initializeApp(firebaseConfig);

const App: React.FC = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/alcohol" element={<Alcohol />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;