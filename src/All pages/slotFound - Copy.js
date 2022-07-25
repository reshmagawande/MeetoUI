import React from 'react'
import img1 from '../Assets/images/Ellipse 11.png'
import img2 from '../Assets/images/image 34.png'
import img3 from '../Assets/images/image 33.png'
import img4 from '../Assets/images/image 32.png'
import img5 from '../Assets/images/image 3.png'


export default function slotFound() {
  return (
    <>
    
    <div class="main-index">
        <nav class="navbar navbar-expand-lg navbar-dark bg-lignt-dark">
            <div class="container-fluid">
                <a class="navbar-brand text-30 login-title mb-0 fw-bold" href="#">MEETO</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div>
                    <img src={img1} alt=""/>
                </div>
            </div>
        </nav>
    </div>
    <div class="slots-found">
        <div class="container">
            <p class="text-30 slots-title">2 Slots Available:</p>
            <div class="row">
                <div class="col-md-3">
                    <p class="slot-date">17 Jul. Tuesday</p>
                    <div class="form-check">
                        <input class="form-check-input slot-check" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label text-22" for="flexCheckDefault">
                            9:00-9:30
                        </label>
                      </div>
                      <div class="form-check mt-3">
                        <input class="form-check-input slot-check" type="checkbox" value="" id="flexCheckChecked" checked/>
                        <label class="form-check-label text-22" for="flexCheckChecked">
                            10:00-10:30
                        </label>
                      </div>
                </div>
                <div class="col-md-3">
                    <h5 class="mb-4">Select Platform</h5>
                    <div class="form-check">
                        <input class="form-check-input slot-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label class="form-check-label text-22" for="flexRadioDefault1">
                            <img src={img2} alt=""/> Zoom
                        </label>
                      </div>
                      <div class="form-check mt-3">
                        <input class="form-check-input slot-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                        <label class="form-check-label text-22" for="flexRadioDefault2">
                            <img src={img3} alt=""/> Teams
                        </label>
                      </div>
                      <div class="form-check mt-3">
                        <input class="form-check-input slot-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label class="form-check-label text-22" for="flexRadioDefault1">
                            <img src={img4} alt=""/> Meet
                        </label>
                      </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-12">
                    <button class="btn btn-success d-flex align-items-center"><img src={img5} class="notify-email" alt=""/> Notify On Email </button>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}
