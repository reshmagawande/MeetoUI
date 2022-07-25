import React from 'react'

export default function forgotPassword() {
  return (
    <div class="login-meeto">
    <div class="login">
      <form>
        <p class="text-30 login-title">MEETO</p>
          <div class="form-group form-fieldset-pos">
            <label for="exampleInputEmail1">Enter Email </label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div class="text-center mt-3 ">
              <button type="submit" class="btn btn-success w-100">Send Code</button>
          </div>
          <div class="signup-account text-center">
            <span class="text-18">Don’t have an account? Signup</span>
          </div>
        </form>
  </div>
  </div>

  )
}
