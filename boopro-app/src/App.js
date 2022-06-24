import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <div className="text-3xl text-red-300 bg-black">
      <Router>
        <Routes>
         <Route path="/" element={<HomePage />}></Route>
         <Route path="login" element={<LoginPage />}></Route> 

        </Routes>
      </Router>
    </div>
  );
}

export default App;
