import React, { useEffect, useState } from 'react';
import hallway from '../Images/Hallway_Background.jpg';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, sendPasswordReset } from '../FirebaseSetup/firebase';

export default function ResetAuth() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div>
    <img src={hallway} alt="hallway background" className="fixed top-[20px] w-[1550px] h-full bg-cover blur-[2px]" />
    <div className="resetauth">
      <div className="resetauth-container">
        <div className="login-form">

        <div className="grid place-items-center">
        <h3 className="resetauth-title">RESET PASSWORD</h3>
        </div>

        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        <p>Don't have an account? <Link to="/registerauth" className="underline hover:text-stone-400">Register now!</Link></p>
        <button
          className="gen-button resetauth-button"
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
