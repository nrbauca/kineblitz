import React, { useEffect, useState } from 'react';
import hallway from '../Images/Hallway_Background.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../FirebaseSetup/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/userdashboard");
  }, [user, loading]);
  
  return (
    <div>
    <img src={hallway} alt="hallway background" className="fixed top-[20px] w-[1550px] h-full bg-cover blur-[2px]" />
    <main className="login">
      <div className="login-container">
        <div className="login-form">

          <div className="grid place-items-center">
          <h3 className="login-title">SIGN IN</h3>
          <h4 className="user-pat">Patient</h4>
          </div>

          <label>
            Email Address
            <input
            type="email"
            className="text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            />
          
            Password
            <input
            type="password"
            className="text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            />
          </label>
          <p><Link to="/reset" className="underline hover:text-stone-400">Forgot Password</Link></p>
          <p>Don't have an account? <Link to="/register" className="underline hover:text-stone-400">Register now!</Link></p>
          <button className="gen-button login-buttons" onClick={() => logInWithEmailAndPassword(email, password)}>
            SIGN IN
          </button>
          <button className="gen-button login-buttons" onClick={signInWithGoogle}>
            SIGN IN WITH GOOGLE
          </button>
        </div>
      </div>
    </main>
    </div>
  );
}
