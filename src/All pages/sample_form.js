import React, { Component } from 'react'
import {Form} from 'react-bootstrap';
export default class Register extends Component {
  render() {
    return (
      <div class="main-content">
      <div class="container-fluid" style={{paddingLeft:"300px"}}>
        <div class="card" style={{width:"900px"}}>
          <div class="card-header card-header-icon card-header-rose" style={{marginLeft:"39rem"}}>
            <h3 class="card-title">Register -
              <small class="category">Complete your profile</small>
            </h3>
          </div>
        
          <div class="card-body" style={{marginleft:"32rem"}}>
            <Form >
              
            <div class="row">
                <div class="col-md-6">
                <h5>First Name</h5>
                </div>
                <div class="col-md-6">     
                <input type="text" />     
              </div>
                  </div>  
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <h5>Last Name</h5>
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <h5>Email address</h5>
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <h5>Phone Number</h5>
                    <input type="text" class="form-control"  maxlength="10"/>
                  </div>
                </div>
              </div>
              <button type="cancel" class="btn btn-rose pull-right"></button>
         
              <button  type="submit" class="btn btn-rose pull-right">Register</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
