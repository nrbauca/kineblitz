// import React, { useEffect, useState } from 'react';
// import hallway from '../Images/Hallway_Background.jpg'
// import {Link, useNavigate } from 'react-router-dom';
// import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../FirebaseSetup/firebase';
// import { useAuthState } from 'react-firebase-hooks/auth';

// export default function LogIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, loading, error] = useAuthState(auth);
//   const navigate = useNavigate ();

//   useEffect(() => {
//     if (loading) {
//       return;
//     }
//     if (user) navigate ("/userdashboard");
//   }, [user, loading]);

//   return (
//     <div>
//       <img src={hallway} alt="hallway background" className="fixed top-[20px] w-[1550px] h-full bg-cover blur-[2px]" />
//       <div className="login-bg" />
//       <main className="login">
//         <div className="login-container">
//           <form action className="login-form">
//             <h3>SIGN IN</h3>
//             <label>Email Address
//               <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="text-black" />
//             </label>
//             <label>Password
//               <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="text-black" />
//             </label>
//             <p><Link to="/reset" className="underline hover:text-stone-400">Forgot Password</Link></p>
//             <p>Don't have an account? <Link to="/register" className="underline hover:text-stone-400">Register</Link> now</p>
//             <button className="login-buttons" onClick={() => logInWithEmailAndPassword(email, password)}>SIGN IN</button>
//             <button className="login-buttons" onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// }
