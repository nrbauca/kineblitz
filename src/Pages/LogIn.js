import React from 'react';

export default function LogIn() {
  return (
    <div>
      <div className="login-bg" />
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
