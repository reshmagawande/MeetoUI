import React from 'react'
import img1 from '../Assets/images/Ellipse 11.png'
import img2 from '../Assets/images/Ellipse 5.png'
import img3 from '../Assets/images/Ellipse 6.png'
import img4 from '../Assets/images/image 8.png'
export default function sendEmail() {
  return (
   <>
   
  <div class="main-index">
    <nav class="navbar navbar-expand-lg navbar-dark bg-lignt-dark">
        <div class="container-fluid">
            <a class="navbar-brand text-30 login-title mb-0 fw-bold" href="#">MEETO</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div>
            <img src={img1} alt=""/>
        </div>
        </div>
      </nav>
  </div>
  <div class="enter-link">
    <div class="container">
        <p class="text-30 link-title">Invite People To Your Meeting </p>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group d-flex">
                    <input type="email" class="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter link"/>
                    <button class="btn btn-success text-18 w-30 send-invite">Send Invite</button>
                  </div>
                  <div class="d-flex align-items-center mt-3">
                    <img src={img2} alt=""/>
                    <p class="mb-0 gmail-link">personone@gmail.com</p>
                    <a class="mb-0 cancel-btn">Cancel</a>
                </div>
                <div class="d-flex align-items-center mt-2">
                    <img src={img3} alt=""/>
                    <p class="mb-0 gmail-link">personone@gmail.com</p>
                    <a class="mb-0 cancel-btn">Cancel</a>
                </div>
                <div class="form-group">
                    <textarea class="form-control textarea-form" id="exampleFormControlTextarea1" rows="3" placeholder="Draft An Invite Email"></textarea>
                    
                  </div>
                  <div  class="meeting-link">
                    <a href="#"><img src={img4} alt=""/> Copy Meeting Link</a>
                  </div>
            </div>
        </div>
        
    </div>
  </div>

   </>
  )
}
