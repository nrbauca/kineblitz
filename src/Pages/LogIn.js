import React from 'react'
import submit from '../App'

export default function LogIn() {
  return (
    <div className="py-36">  
        <div className="flex justify-center w-[432px] h-[507px] bg-[#1d3578]">
            <form onSubmit={submit}>
                    <p>SIGN IN</p>
                    <label for="email adress"> Email Address
                        <input type="email" name="email-adress" id="email-adress" />
                    </label>

                    <label for="password">Password
                    <input type="password" name="password" id="password" />

                    </label>

                <p>Forgot Password?</p>
                <p>Lorem ipsum dolor sit amet</p>

                <button type="submit">SIGN IN</button>
            </form>
        </div>
    </div>
  )
}
