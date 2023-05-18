import React from 'react';
import Loader from './include/loader';
import Nav from './include/nav';
import Footer from './include/footer';
import Slide from './include/slide';
import Leftmenu from './include/leftmenu';
import Rightmenu from './include/rightmenu';
import Signup from './include/signup';
import Signin from './include/signin';
import Betbalance from './include/betbalance.js';
import MainContent from './include/maincontent.js';
const index = () => {

  return (
   <>      
   <Loader />
   <Nav />
   <div className="main-body">
     <Leftmenu />
     <div className="body-middle">
         <Slide />

         <MainContent />
       
         <Footer />
          
         <a href="#0" className="click-btn" data-bs-toggle="modal" data-bs-target="#exampleModal3">
            <i className="icon-basketball"></i>
         </a>
      </div>  
      <Rightmenu />
   </div>
      <Signup />
      <Signin />
      <Betbalance />
   </>
  )
}

export default index