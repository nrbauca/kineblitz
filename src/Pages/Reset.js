import React, { useEffect, useState } from 'react';
import hallway from '../Images/Hallway_Background.jpg';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import { auth, sendPasswordReset } from '../firebase_setup/firebase';

export default function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/userdashboard");
  }, [user, loading]);

  return (
    <div>
    <img src={hallway} alt="hallway background" className="fixed top-[20px] w-[1550px] h-full bg-cover blur-[2px]" />
    
    <div className="reset">
      <div className="reset-container">
        <div className="login-form">
        <h3 className="reset-title">RESET PASSWORD</h3>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        <p>Don't have an account? <Link to="/register" className="underline hover:text-stone-400">Register</Link> now</p>
        <button
          className="reset-button"
          onClick={() => sendPasswordReset(email)}
        >
          Send Password Reset Email
        </button>
        </div>
      </div>
    </div>
    </div>
  );
}
