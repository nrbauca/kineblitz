import React, { useEffect, useState } from 'react';
import hallway from '../Images/Hallway_Background.jpg';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import {
  auth,
  registerWithEmailAndPassword,
  // signInWithGoogle,
} from '../FirebaseSetup/firebase';

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [age, setAge] = useState("");
  const [condition, setCondition] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password, birthday, age, condition);
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
        <h3 className="register-title mx-auto">REGISTER</h3>
        <div className="flex space-x-[24px]">
          <div>
            <label>
              Full Name
              <input
              type="text"
              className="text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              />
        
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
          </div>

          <div>
            <label>
              Birth Date
              <input
              type="text"
              className="text-black"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              placeholder="Birth Date"
              />

              Age
              <input
              type="text"
              className="text-black"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
              />

              Condition
              <input
              type="text"
              className="text-black"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              placeholder="Condition"
              />
            </label>
          </div>
        </div>

        <div className="grid place-items-center">
        <p>Already have an account? <Link to="/login" className="underline hover:text-stone-400">Sign in now!</Link></p>
        <button className="gen-button register-buttons" onClick={register}>
          REGISTER
        </button>
        {/* <button className="register-buttons" onClick={signInWithGoogle}>
          REGISTER WITH GOOGLE
        </button> */}
        </div>
        
        </div>
      </div>
    </div>
  </div>
  );
}
