import React from 'react'
import { useState } from 'react';
import img1 from '../Assets/images/Ellipse 11.png'
import img2 from '../Assets/images/Group 1.png'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import loader from '../Assets/images/loader1.gif'
// import loader from '../Assets/images/loading.gif'
// import './ButtonDemo.css';

export default function App() {
    const home = () => {
        window.location = './';
    }
    const forword = () => {
        window.location = './compareLink';
    }
    const [strLinks, setLink] = useState([]);
    const [strReqLinks, setReqLink] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);

    const onFindSlot = () => {
        //document.getElementById('load').innerHTML=" <div class='row'><div class='col-md-4'></div><div class='col-md-4' ><p><b>Loading Availability, Please wait...</b></p></div><div><img src="+loader+" width=\"100%\" height=\"150px\"></div><div class='col-md-4'></div>";
        document.getElementById('load').innerHTML = " <div class='row'><div class='col-md-3'></div><div class='col-md-6' style={{textAlign: 'center'}}><p><b></b></p><img src=" + loader + " width=\"100%\" height=\"300px\"></div><div></div><div class='col-md-3'></div>";


        var axios = require('axios');
        const d1 = moment(selectedDate).format('yyyy-MM-DD');

        const d2 = moment(selectedDate).format('yyyy-MM');

        const dt = moment(selectedDate).format('MMMM Do YYYY');
        //alert(JSON.stringify(strLinks));
        // alert("30min?month=" + d2 + "&date=" + d1);

        for (let i = 0; i < strLinks.length; i++) {
            // alert(strLinks[i]);
            strReqLinks[i] = strLinks[i] + "/30min?month=" + d2 + "&date=" + d1;
            // alert(strReqLinks[i]);
        }


        var data = JSON.stringify(strReqLinks);
        var config = {
            method: 'post',
            url: 'https://localhost:44347/api/User/GetAvailability',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                // alert(JSON.stringify(response.data));
                // console.log(JSON.stringify(response.data));
                localStorage.setItem('availableSlots', JSON.stringify(response.data));
                // alert(JSON.stringify(strLinks));
                localStorage.setItem('providedLinks', JSON.stringify(strLinks));
                localStorage.setItem('dt', dt);
                window.location = './SlotFound';
            })
            .catch(function (error) {
                console.log(error);
            });


    }

    // const [personList, setpersonList] = useState([{ service: "" }]);
    const [personList, setpersonList] = useState([{ service: "" }]);
    const handleServiceAdd = () => {
        setpersonList([...personList, { service: "" }])
    }

    const handleTextChange = (e, index) => {
        //alert(e.currentTarget.value + " " + e.currentTarget.id);
        strLinks[e.currentTarget.id - 1] = e.currentTarget.value;

    }
    const handleServiceChange = (e, index) => {

        const { name, value } = e.target;
        const list = [...personList];
        list[index][name] = value;
        setpersonList(list);

    }
    const handleServiceRemove = (e) => {

        const list = [...personList]
        strLinks.splice(e.currentTarget.id - 101, 1);
        list.splice(e.currentTarget.id - 101, 1);

        setpersonList(list);

        for (let i = 0; i < strLinks.length; i++) {
            document.getElementById(i + 1).value = strLinks[i];
        }

    }
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
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </nav>
            </div>
            <div class="enter-link" id='load'>
                <div class="row">
                    <div class="col-md-8">
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-2">&nbsp;</div>
                                <div class="col-md-10">
                                    <p class="text-30 link-title"><b>Calendly Details</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <button className='btn'><i className='fa fa-circle-left' ></i></button>
                            {/* <font-awesome-icon icon="fa-solid fa-circle-left" /> */}
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <button className='btn' onClick={home}><i className='fa fa-home btn btn-success'></i></button>
                            <button className='btn' onClick={forword}><i className='fa fa-rotate-right btn btn-success'></i></button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12"><hr></hr>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-2">
                            &nbsp;
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <div class="form-group">
                                {/* <label for="exampleInputEmail1" class="text-12">Person 1 </label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter link" /> */}
                            </div>
                        </div>
                        <div class="col-md-1">
                            <div class="form-group"      >
                                <span className='d-inline-block'><b>Select Date</b></span>
                            </div>
                        </div>&nbsp;
                        <div class="col-md-5">
                            <div class="form-group"      >
                                <div style={{ height: "50px" }}>
                                    <DatePicker
                                        className='form-control'
                                        value={selectedDate} selected={selectedDate}
                                        onChange={Date1 => setSelectedDate(Date1)}
                                        dateFormat='yyyy-MM-dd' minDate={new Date()} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {personList.map((singleService, index) => (
                        <div key={index} className="services">
                            <div class="row">
                                <div class="col-md-2">
                                    <div class="form-group">
                                        {/* <label for="exampleInputEmail1" class="text-12">Person 1 </label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter link" /> */}
                                    </div>
                                </div>
                                <div class="col-md-1">
                            <div class="form-group"      >
                                <span className='d-inline-block'><b>Attendee {index + 1}</b></span>
                            </div>
                        </div>&nbsp;
                                <div class="col-md-5">
                                    <div class="form-group">
                                    {/* onChange={(e) => handleTextChange(e)}  */}
                                        {/* <span className='d-inline-block'><b>Attendee {index + 1} </b> </span> */}
                                        {/* <input type="email" class="form-control" id={index + 1} aria-describedby="emailHelp" placeholder="enter link" onChange={(e) => setLink([...strLinks,e.currentTarget.id])} /> */}
                                        <input type="email" class="form-control" id={index + 1} aria-describedby="emailHelp" placeholder="Enter link" onChange={(e) => handleTextChange(e)} />&nbsp;
                                    </div>
                                </div>
                                <div class="col-md-1">
                                    {/* <button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-outlined" aria-label="Cancel"></button> */}
                                    {personList.length > 2 && <button className='btn btn-trash' id={(index + 1) + 100} onClick={(e) => handleServiceRemove(e)}><i className='fa fa-trash' ></i></button>}

                                </div>
                                <div class="col-md-3"></div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="form-group">

                                    </div>
                                </div>
                                <div class="col-md-4">

                                    <div class="col-md-10">
                                        <div class="form-group">
                                            {personList.length - 1 === index && <button class="btn btn-default" style={{backgroundColor: '#D7FF66'}} onClick={handleServiceAdd}><img src={img2} alt="" />&nbsp; Add Attendees</button>}
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                    </div>
                                </div>
                                <div class="col-md-2" >
                                    <div class="form-group" >
                                        {personList.length > 1 && personList.length - 1 === index && <button class="btn btn-default" style={{backgroundColor: '#D7FF66'}} onClick={onFindSlot}>Find Slot</button>}
                                    </div>
                                </div>
                                <div class="col-md-5">

                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>



            {/* 

            <div className='container'>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-2'>
                        <label>Select Date</label>
                    </div>
                    <div className='col-4'>
                        <DatePicker
                            className='form-control '
                            value={selectedDate} selected={selectedDate}
                            onChange={Date1 => setSelectedDate(Date1)}
                            dateFormat='yyyy-MM-dd' minDate={new Date()} />
                    </div>
                    <div className='col-4'></div><br /><br />
                    <div className='col-2'></div>
                    <div className='col-2'>
                        <label>attendee 1</label>
                    </div>
                    <div className='col-4'>
                        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter link" onChange={(e) => handleTextChange(e)} />&nbsp;

                    </div>
                    <div className='col-4'></div><br />
                </div>
            </div> */}
        </>
    )
}
