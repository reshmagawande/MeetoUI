import React from 'react'
import img1 from '../Assets/images/Ellipse 11.png'
import img2 from '../Assets/images/image 34.png'
import img3 from '../Assets/images/image 33.png'
import img4 from '../Assets/images/image 32.png'
import img5 from '../Assets/images/image 3.png'
import { Helmet } from "react-helmet";
import { InlineWidget } from "react-calendly";
import { Table } from "react-bootstrap";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// To make rows collapsible
import "bootstrap/js/src/collapse.js";

export default function slotFound() {
    const home = () => {
        window.location = './';
    }
    const forword = () => {
        window.location = './compareLink';
    }

    const refresh = () => {

        window.location = './SlotFound';

    }

    const dt = localStorage.getItem('dt');
    const userLink = localStorage.getItem('userLink');
    const availableSlots = JSON.parse(localStorage.getItem('availableSlots'));
    const listItems = availableSlots.map((reptile) => 
    // <div class=" border text-box-slots">
    //     {/* <li>{reptile}</li> */}
    //     {reptile}
    // </div>
   
          <div class="col-md-5 border text-box-slots" style={{textalign: 'center',}}>
    {reptile}
    
    </div>)
 
    const providedLinks = JSON.parse(localStorage.getItem('providedLinks'));
    const listUsers = providedLinks.map((reptile1) => <li>{reptile1}</li>)
    const handleClick = (e, index) => {
        alert(JSON.stringify(localStorage.getItem('availableSlots')));

    }
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
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </nav>
            </div>
            <div class="enter-link container"  >
                <div class="row">
                    <div class="col-md-8">
                        <div class="form-group">
                        </div>
                    </div>
                    <div class="col-md-1">
                        <div class="form-group">
                            <button className='btn'><i className='fa fa-circle-left' ></i></button>
                            {/* <font-awesome-icon icon="fa-solid fa-circle-left" /> */}
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <button className='btn' onClick={home}><i className='fa fa-home btn btn-success'></i></button>
                            <button className='btn' onClick={forword}><i className='fa fa-arrow-left btn btn-success'></i></button>
                            <button className='btn' onClick={refresh}><i className='fa fa-rotate-right btn btn-success'></i></button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12"><hr></hr>
                    </div>
                </div>

                <div class="container row border" >
                    <div class="col-md-8">
                        <div className="App">
                            <InlineWidget url={userLink} />
                        </div>
                    </div>
                    <div class="slots-found col-md-4">
                        {/* <div class="row">
                       <div class="col-md-9">&nbsp;</div>
                    </div>
                    <div class="row">
                       <div class="col-md-9">&nbsp;</div>
                    </div>
                    <div class="row">
                       <div class="col-md-9">&nbsp;</div>
                    </div>
                    <div class="row">
                       <div class="col-md-9">&nbsp;</div>
                    </div> */}
                        <div class="row">
                            <p class="text-30">Users</p>
                            <div><ol>
                                {listUsers}<hr></hr>
                            </ol></div>

                            <p class="text-30">Availability For : <lable class="slot-date">{dt}</lable></p>
                            {listItems}
                            {/* <div class="col-md-12" >
                            <div class="col-md-6" style={{textalign: 'center',}}>
                                {listItems}
                            </div>
                            </div> */}
                            <div class="form-group">
                           
                            </div>
                            
                        </div>
                    </div>


                </div>
                {/* <div class="row mt-5">
                <div class="col-md-12">
                    <button class="btn btn-success d-flex align-items-center"><img src={img5} class="notify-email" alt=""/> Notify On Email </button>
                </div>
            </div> */}
            </div>




































        </>
    )
}
