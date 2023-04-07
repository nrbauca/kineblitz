import React from 'react';
import hallway from '../Images/Hallway_Background.jpg'

export default function LogIn() {
  return (
    <div>
      <img src={hallway} alt="hallway background" className="fixed top-[20px] w-[1550px] h-full bg-cover blur-[2px]" />
      {/* <div className="login-bg" /> */}
      <main className="login">
        <div className="login-container">
          <form action className="login-form">
            <h3>SIGN IN</h3>
            <label htmlFor="email-address">Email Address
              <input type="email" name="email-address" id="email-address" />
            </label>
            <label htmlFor="password">Password
              <input type="password" name="password" id="password" />
            </label>
            <p>Forgot Password?</p>
            <p>Lorem ipsum dolor sit amet</p>
            <button type="submit" className="gen-button">SIGN IN</button>
          </form>
        </div>
      </main>
    </div>
  );
}
