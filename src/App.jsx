import React, { useState,useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});

  async function auth() {
    const res=await fetch('http://localhost:3000', {
      method: 'POST'
    });
    const data = await res.json()
    nav(data.url)
  }


  // React component initiating authorization
  const nav = (url) => {
    window.location.href = url
  };

  return (
    
      <div className="">
        <header className="">
          <h1>Welcome to My App</h1>
          {isLogin ? (
            <div>
              <img className="avatar" src={user?.picture} alt={user?.name} />
              <button onClick={handleLogin}>Logout</button>
            </div>
          ) : (
            <div>
              <button onClick={()=>auth()}>Login</button>
            </div>
          )}
        </header>
      </div>
  );
}

export default App;
