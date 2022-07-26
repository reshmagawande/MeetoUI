import React from 'react'

export default function registration() {
 const   onsubmit =()=>{
    var axios = require('axios');
    var data = JSON.stringify({
      "FirstName": "snehal",
      "LastName": "ratnparkhi",
      "Email": "snehal@arieotech.com",
      "MobileNo": "1236541236",
      "Password": "password"
    });
    
    var config = {
      method: 'post',
      url: 'https://dmthhbq42j.execute-api.ap-south-1.amazonaws.com/Prod/api/User/UserRegistration',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
    }
  return (
    <div class="login-meeto">
    <div class="login">
      <form>
        <p class="text-30 login-title">MEETO</p>
        <div class="form-group form-fieldset-pos">
            <label for="exampleInputFirstName1">First Name</label>
            <input type="firstName" class="form-control" id="exampleInputFirstName1" placeholder="FirstName" />
          </div>
          <div class="form-group form-fieldset-pos">
            <label for="exampleInputLastName1">Last Name</label>
            <input type="lastName" class="form-control" id="exampleInputLastName1" placeholder="LastName" />
          </div>
          <div class="form-group form-fieldset-pos">
            <label for="exampleInputMobileNo1">Mobile No</label>
            <input type="mobileNo" class="form-control" id="exampleInputMobileNo1" placeholder="MobileNo" />
          </div>
          <div class="form-group form-fieldset-pos">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div class="form-group form-fieldset-pos">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div class="form-group form-fieldset-pos">
            <label for="exampleInputPassword1">Reneter Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div class="form-check d-flex align-items-center mb-30">
            <input type="checkbox" class="form-check-input form-check-size" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Keep me logged in </label>
          </div>
          <div class="text-center mt-3 ">
              <button type="submit" class="btn btn-success w-100" onClick={()=>onsubmit()}>Submit</button>
          </div>
          <div class="signup-account text-center">
            <span class="text-18">Don’t have an account? Signup</span>
          </div>
        </form>
  </div>
  </div>

  )
}
