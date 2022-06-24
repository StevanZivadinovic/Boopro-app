import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { AuthContextProvider } from "./components/AuthContex/AuthContext";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <div className="text-3xl text-red-300 bg-black">
      <AuthContextProvider>
      <Router>
    
        <Routes>
         <Route path="/" element={<HomePage />}></Route>
         <Route path="login" element={<LoginPage />}></Route> 

        </Routes>
        
      </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
