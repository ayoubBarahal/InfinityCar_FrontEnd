import React, { useState, useEffect } from "react";
import './App.css';
import { useNavigate } from "react-router-dom";


function App() {
  const [text, setText] = useState(""); 
  const fullText = "InNfinity Car"; 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };
    
    try {
      console.log("data:", data);

      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        setResponseMessage("Connexion réussie !"); 
        console.log(result); 
        navigate("/home"); 

      } else {
        const error = await response.json();
        setResponseMessage("Username ou mot de passe incorrecte ");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi des données", error);
      setResponseMessage("Erreur de connexion");
    }
  };

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length-1) {
        setText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval); 
      }
    }, 150); 

    return () => clearInterval(interval); 
  }, []); 

  return (
    <>
   <div className="login-container">
      <div className="login-box">
      <h1 className="animated-text">{text}</h1>
      <p>Have an account?</p>
        <form onSubmit={handleSubmit} >
          <div className="input-group">
            <input type="text" placeholder="Username" className="input-field"  value={username} onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button type="submit" className="signin-btn">SIGN IN</button>
          <div className="extras">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#" className="forgot-password">Forgot Password</a>
          </div>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </div>
    </>
  );
}

export default App;
