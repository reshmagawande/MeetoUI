import React from 'react'
import axios from 'axios';
export default function login() {
  // const [LeadGenUserName, setName] = useState("");
  // const [LeadGenPassword, setPassword] = useState("");

  const onSaveClick = () => {
    var axios = require('axios');
    var data = JSON.stringify({

      "Email": "reshma@arieotech.com",
      "Password": "reshma"
    });

    var config = {
      method: 'post',
      url: 'https://localhost:44323/api/User/Authenticate',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
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
    <>



      <div class="login-meeto">
        <div class="login">
          <form>
            <p class="text-30 login-title">MEETO</p>
            <div class="form-group form-fieldset-pos">
              <label for="exampleInputEmail1">Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div class="form-group form-fieldset-pos">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div class="form-check d-flex align-items-center mb-30">
              <input type="checkbox" class="form-check-input form-check-size" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Keep me logged in </label>
            </div>
            <div class="text-center mt-3 ">
              <button type="submit" class="btn btn-success w-100" onClick={() => onSaveClick()} >Submit</button>
            </div>
            <div class="signup-account text-center">
              <span class="text-18">Don’t have an account? Signup</span>
            </div>
            <div>
              <button class="btn btn-google"></button>
            </div>
          </form>
        </div>
      </div>





    </>


  )
}
