import React, { useEffect, useState } from 'react';
// import hallway from '../Images/Hallway_Background.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../FirebaseSetup/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Pass() {
  return (
    <div>
    {/* <img src={hallway} alt="hallway background" className="fixed top-[20px] w-[1550px] h-full bg-cover blur-[2px]" /> */}
    <main className="pass">
      <div className="pass-container">
        <div className="login-form">
          <h3 className="pass-title">ADMIN</h3>
          <label className="pass-label">
            Authentication Code
            <input
            type="email"
            className="text-black"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            placeholder=""
            />
          </label>
          {/* <p><Link to="/resetcopy" className="underline hover:text-stone-400">Forgot Password</Link></p>
          <p>Don't have an account? <Link to="/registercopy" className="underline hover:text-stone-400">Register now!</Link></p> */}
          <button className="gen-button pass-buttons" onClick={() => logInWithEmailAndPassword()}>
            SIGN IN
          </button>
        </div>
      </div>
    </main>
    </div>
  );
}
