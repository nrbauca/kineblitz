import React, { useEffect, useState } from 'react';
import hallway from '../Images/Hallway_Background.jpg';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '../firebase_setup/firebase';

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/userdashboard");
  }, [user, loading]);
  
  return (
    <div>
    <img src={hallway} alt="hallway background" className="fixed top-[20px] w-[1550px] h-full bg-cover blur-[2px]" />
    
    <div className="register">
      <div className="register-container">
        <div className="login-form">
        <h3 className="register-title">REGISTER</h3>
        <label>
        <input
          type="text"
          className="text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        </label>
        <label>
        <input
          type="email"
          className="text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        </label>
        <label>
        <input
          type="password"
          className="text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        </label>
        <p>Already have an account? <Link to="/login" className="underline hover:text-stone-400">Sign in</Link> now</p>
        <button className="register-buttons" onClick={register}>
          REGISTER
        </button>
        <button
          className="register-buttons"
          onClick={signInWithGoogle}
        >
          REGISTER WITH GOOGLE
        </button>
        </div>
      </div>
    </div>
    </div>
  );
}
