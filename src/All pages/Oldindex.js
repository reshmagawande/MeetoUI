import React from 'react'
import img1 from '../Assets/images/vecteezy_teamwork-or-team-building-office-business-meeting-vector_4154417 1.png'
import img2 from '../Assets/images/image 36.png'
import img3 from '../Assets/images/image 37.png'
import img4 from '../Assets/images/image 39.png'
import { Link } from 'react-router-dom'



export default function index() {
    const getStart=()=>{
<Link to="/compareLink">Get Started</Link>
    }
  return (
    <>
    
  <div class="main-index">
    <nav class="navbar navbar-expand-lg navbar-dark bg-lignt-dark">
        <div class="container">
            <a class="navbar-brand text-30 login-title mb-0 fw-bold" href="#">MEETO</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="d-flex align-items-center">
            <a href="#" class="mr-20 index-login-link">Login </a>
            <button class="btn btn-success index-signup">Sign Up</button>
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
                <button class="btn btn-success carousel-padd" onClick={getStart}><Link to="/compareLink">Get Started</Link></button>
            </div>
            <div class="col-md-8">
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
