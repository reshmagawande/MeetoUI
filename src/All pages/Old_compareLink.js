import React from 'react'
import { useState } from 'react';
import img1 from '../Assets/images/Ellipse 11.png'
import img2 from '../Assets/images/Group 1.png'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import slotFound from './slotFound'

export default function App() {
  
    const [strLinks, setLink] = useState( [] );
    const [strReqLinks, setReqLink] = useState( [] );
    const [selectedDate, setSelectedDate] = useState(null);

    const onFindSlot =()=>{
        
        var axios = require('axios');
        const d1 = moment(selectedDate).format('yyyy-MM-DD');

        const d2 = moment(selectedDate).format('yyyy-MM');
        //alert(JSON.stringify(strLinks));
        alert("30min?month="+d2+"&date="+d1);

        for (let i = 0; i < strLinks.length; i++) {
            alert(strLinks[i]);
            strReqLinks[i] = strLinks[i] + "/30min?month="+d2+"&date="+d1;
            alert(strReqLinks[i]);
          }

        
        var data = JSON.stringify(strReqLinks);
        var config = {
          method: 'post',
          url: 'https://localhost:44323/api/User/GetAvailability',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
            alert(JSON.stringify(response.data));
          console.log(JSON.stringify(response.data));
          localStorage.setItem('availableSlots',JSON.stringify(response.data));
          window.location='./SlotFound';
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

    const handleTextChange= (e, index) => {
        //alert(e.currentTarget.value + " " + e.currentTarget.id);
        strLinks[e.currentTarget.id-1] = e.currentTarget.value;

    }
    const handleServiceChange = (e, index) => {
        //alert(this.textBox1);
        
       
        const { name, value } = e.target;
        const list = [...personList];
        list[index][name] = value;
        setpersonList(list);

    }
    const handleServiceRemove = (e) => {

        const list = [...personList]

        strLinks.splice(e.currentTarget.id-101, 1);
        list.splice(e.currentTarget.id-101,1);

        setpersonList(list);

        //alert(strLinks.length);
        for (let i = 0; i < strLinks.length; i++) {
            document.getElementById(i+1).value = strLinks[i];
          }
        
        // onClick={() => {
        //     let data = this.state.data;
        //     console.log(this.state.data[index]);
        //     data.splice(index, 1)
        //     this.setState({data})
        //   }}
        

    }
    return (
        <>
            <div id="compair">
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
            
                <div class="enter-link">
                    <div class="container">
                        <p class="text-30 link-title">Enter Calender Links To Find An Empty Slot</p>
                        <div class="row">
                                    <div class="col-md-2">
                                        <div class="form-group">
                                            {/* <label for="exampleInputEmail1" class="text-12">Person 1 </label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter link" /> */}
                                        </div>
                                    </div>
                            <div class="col-md-6">
                            <div class="form-group" style={{ height: "66px" }}>
                                    <span className='d-inline-block'>Select Date</span>
                                    
                                    <DatePicker style={{ height: "66px" }} value={selectedDate} selected={selectedDate} onChange={Date1 => setSelectedDate(Date1)} dateFormat='yyyy-MM-dd' minDate={new Date()} />
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
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            {/* <label for="exampleInputEmail1" class="text-12">Person 1 </label> */}
                                            <span className='d-inline-block'>Person{index + 1} </span>
                                            {/* <input type="email" class="form-control" id={index + 1} aria-describedby="emailHelp" placeholder="enter link" onChange={(e) => setLink([...strLinks,e.currentTarget.id])} /> */}
                                            <input type="email" class="form-control" id={index + 1} aria-describedby="emailHelp" placeholder="enter link" onChange={(e) => handleTextChange(e)} />
                                        </div>
                                    </div>
                                    <div class="col-md-1" style={{ marginTop: "35px" }}>
                                        {personList.length > 2 && <button type="button" id={(index+1)+100} className="btn btn-success"
                                            onClick={(e) => handleServiceRemove(e)}
                                            
                                            >
                                            Remove
                                        </button>}
                                    </div>
                                    <div class="col-md-3"></div>
                                    {/* <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="text-12">Person 1 </label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter link" />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="text-12">Person 1 </label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter link" />
                                        </div>
                                    </div> */}
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <div class="form-group">

                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                    
                                            <div class="col-md-10">
                                                <div class="form-group">
                                                    {personList.length - 1 === index && <button class="btn btn-default" onClick={handleServiceAdd}><img src={img2} alt="" />&nbsp; Add Person</button>}
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                {/* <div class="form-group">
                                                    {personList.length > 1 && personList.length - 1 === index && <button class="btn btn-success find-slot">Find A Slot</button>}
                                                </div> */}
                                            </div>
                                        
                                    </div>
                                    <div class="col-md-2" >
                                                <div class="form-group" style={{marginLeft: "87px"}}>
                                                    {personList.length > 1 && personList.length - 1 === index && <button class="btn btn-success find-slot" onClick={onFindSlot}>Find A Slot</button>}
                                                </div>
                                            </div>
                                    <div class="col-md-4">

                                    </div>
                                    </div>
                                
                            </div>
                        ))}
                    </div>
                </div> 
            </div>
        </>
    )
}
