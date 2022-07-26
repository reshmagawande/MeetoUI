import React, { useEffect } from 'react'
// import img1 from '../Assets/images/vecteezy_teamwork-or-team-building-office-business-meeting-vector_4154417 1.png'
import img2 from '../Assets/images/image 36.png'
import img3 from '../Assets/images/image 37.png'
import img4 from '../Assets/images/image 39.png'
import { Link } from 'react-router-dom'
import img1 from '../Assets/images/th.gif'




export default function Index() {
    
    const userEmail = localStorage.getItem('userEmail');
    const getStart=()=>{
        if(localStorage.getItem('userEmail') == 'reshma.gawande@arieotech.com' || localStorage.getItem('userEmail') == 'snehal.ratnaparkhi@arieotech.com')
        {
            window.location='./compareLink';
        }
        else
        {
            alert('Invalid Login..');
        }
    }
const login =()=>{
    window.location='./Login';
}
const signUp =()=>{
    window.location='./Register';
}

// useEffect(() => {
//     if(userEmail!=null)
//     {
//         document.getElementById('cred').innerHTML='<div class="d-flex align-items-center"><a class="navbar-brand text-30 login-title mb-0 fw-bold" href="#">'+userEmail+'</a></div>'
//     }
//     else
//     {
//         document.getElementById('cred').innerHTML='<div class="d-flex align-items-center"><a href="#" class="mr-20 index-login-link" onClick=>Login </a><button class="btn btn-success index-signup" onClick=>Sign Up</button> </div>'
//     }
//     localStorage.removeItem('userEmail');
//   });
  return (
    <>
    
  <div class="main-index">
    <nav class="navbar navbar-expand-lg navbar-dark bg-lignt-dark">
        <div class="container">
            <a class="navbar-brand text-30 login-title mb-0 fw-bold" href="#">MEETO</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id='cred'>
            {/* <div class="d-flex align-items-center">
                <a class="navbar-brand text-30 login-title mb-0 fw-bold" href="#">{userEmail}</a>
            </div> */}
            <div class="d-flex align-items-center">
            <a class="navbar-brand text-30 login-title mb-0 fw-bold" href="#">{userEmail}</a>
                {/* <a href="#" class="mr-20 index-login-link" onClick={login}>Switch User</a> */}
                <button class="btn btn-success index-signup" onClick={login}>Switch User</button>
                {/* <button class="btn btn-success index-signup" onClick={signUp}>Sign Up</button> */}
            </div>
        </div>
        </div>
      </nav>
  </div>
  <div class="container-fluid">
    <div class="container">
        <div class="row align-items-center mt-5 mb-4">
            <div class="col-md-4">
                <h3 class="carousel-heading">Meet Meeto </h3>
                <span class="carousel-para d-block">Sheduling Meetings for Busy People Made Easy Within 3 Clicks  </span>
                <button class="btn btn-success carousel-padd" onClick={getStart}>Get Started</button>
            </div>
            <div class=" align-items-center col-md-2"></div>
            <div class=" align-items-center col-md-6">
                <img src={img1} class="img-fluid" alt=""/>
            </div>
        </div>
    </div>
  </div>
  <div class="container how-it-works">
    <h4 class="how-it-works-h">How It Works </h4>
    <div class="row">
        <div class="col-md-4">
            <div class="how-works">
                <div class="d-flex align-items-center works-title">
                    <div class="bg-green-img">
                        <img src={img2} alt="" />
                    </div>
                    <div class="calendly-links">
                        <span class="text-22">Enter Calendly Links </span>
                    </div>
                </div>
                <div>
                    <p class="text-16">Enter calendly links to as many as people as you want to find an empty slot!</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="how-works">
                <div class="d-flex align-items-center works-title">
                    <div class="bg-green-img">
                        <img src={img3} alt="" />
                    </div>
                    <div class="calendly-links">
                        <span class="text-22">Find A Time Slot</span>
                    </div>
                </div>
                <div>
                    <p class="text-16">Find an empty slot that fits the schedule of all your teams or people from multiple organizations.</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="how-works">
                <div class="d-flex align-items-center works-title">
                    <div class="bg-green-img">
                        <img src={img4} alt="" />
                    </div>
                    <div class="calendly-links">
                        <span class="text-22">Send The Invite</span>
                    </div>
                </div>
                <div>
                    <p class="text-16">Book a slot, shedule a meeting for later & send invites to team mates! Draft your custom emial within the app.</p>
                </div>
            </div>
        </div>
    </div>
  </div>

    </>
  )
}
