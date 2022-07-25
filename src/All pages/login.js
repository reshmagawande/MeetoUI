import React, { useState } from 'react'
import axios from 'axios';
export default function Login() {

  const [Email, setName] = useState("");
  const [Password, setPassword] = useState("");

  const onSaveClick = (e) => {

    // var axios = require('axios');
    
    // var data = JSON.stringify({ "Email": Email, "Password": Password });

    // var config1 = {
    //   method: 'post',
    //   url: 'https://localhost:44323/api/User/Authenticate',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   data: data
    // };

    // axios(config1).then(function (response1) {
    //   alert(JSON.stringify(response1.data));
    //   alert(JSON.stringify(response1.data));
    //   // alert(response1.data.Email);
    //   // alert(response1.data.FirstName + " " + response1.data.LastName);
    //   // alert(response1.data.UserLink);
    //   // localStorage.setItem('userEmail',response1.data.Email);
    //   // localStorage.setItem('userName',response1.data.FirstName + " " + response1.data.LastName);
    //   // localStorage.setItem('userLink',response1.data.UserLink);
    //   // alert(localStorage.getItem('userEmail'));
    //   window.location='./SlotFound';
    // }).catch(function (error) {
    //   console.log(error);
    // });

      localStorage.setItem('userEmail','');
      localStorage.setItem('userName','Snehal Ratnaparkhi');
      localStorage.setItem('userLink','https://calendly.com/snehal-ratnaparkhi');
//alert(Email);
    if(Email == 'snehal.ratnaparkhi@arieotech.com')
    {
      localStorage.setItem('userEmail',Email);
      localStorage.setItem('userName','Snehal Ratnaparkhi');
      localStorage.setItem('userLink','https://calendly.com/snehal-ratnaparkhi');
    }
    
    if(Email == 'reshma.gawande@arieotech.com')
    {
      localStorage.setItem('userEmail',Email);
      localStorage.setItem('userName','Reshma Gawande');
      localStorage.setItem('userLink','https://calendly.com/reshma-gawande');
    }

    if(localStorage.getItem('userEmail') == 'reshma.gawande@arieotech.com' || localStorage.getItem('userEmail') == 'snehal.ratnaparkhi@arieotech.com')
        {
          window.location='./';
        }
        else
        {
            alert('Invalid Login..');
        }
      e.preventDefault();
      //window.location = "https://www.bbc.co.uk";
      //window.location='./';
  }
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>



      <div class="login-meeto">
        <div class="login">
          <form>
            <p class="text-30 login-title">MEETO</p>
            <div class="form-group form-fieldset-pos">
              <label for="exampleInputEmail1">Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChangeName} placeholder="Enter email" value={Email} />
            </div>
            <div class="form-group form-fieldset-pos">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={onChangePassword} value={Password} />
            </div>
            {/* <div class="form-check d-flex align-items-center mb-30">
              <input type="checkbox" class="form-check-input form-check-size" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Keep me logged in </label>
            </div> */}
            <div class="text-center mt-3 ">
              <button type="submit" class="btn btn-success w-100" onClick={(e) => onSaveClick(e)} >Submit</button>
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
