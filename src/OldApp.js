

import'../src/Assets/css/style.css';
import'../src/Assets/css/bootstrap.css';
import '../src/Assets/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../src/All pages/Home.js';
import Login from '../src/All pages/login.js';
import Register from './All pages/registration';
import ForgotPassword from './All pages/forgotPassword';
import Index from './All pages/index';
import SendEmail from './All pages/sendEmail';
import CompareLink from './All pages/compareLink';
import SlotFound from './All pages/slotFound';
// import SendMail from './All pages/SendMail';
// import sample_form from './All pages/sample_form.js';

function App() {
  return (
    
    <>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
         {/* <Route path='/' element={<SendMail/>}/> */}
          <Route path="/Login" element={<Login/>} />
          <Route path='/Register' element={<Register/>}/>
          <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
          <Route path='/' element={<Index/>}/>
          <Route path='/SendEmail' element={<SendEmail/>}/>
          <Route path='/CompareLink' element={<CompareLink/>}/>
          <Route path='/SlotFound' element={<SlotFound/>}/>
          {/* <Route path='/SendEmail' element={<SendEmail/>}/> */}
        </Routes>
      </Router>

    </>
  );
}

export default App;
