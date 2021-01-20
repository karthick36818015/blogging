import React from 'react';
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import Card from '../../components/UI/Card';
const ContactUs =props=>{
   return (
     


       
       
    <div class="social-container">
     <h3>
      <p> Social Follows</p>
    <p> ☎ Tel:91+ 9551021217</p>
    <p> ✉ ramanujamkarthick@gmail.com</p>    
    <p> no span only for useful enquiries</p>
    <p>.................🡫..................</p>

     </h3>
    <a href="https://www.youtube.com/results?search_query=react+js"
  className="youtube social">
  <FontAwesomeIcon icon={faYoutube} size="2x" />
</a>
<a href="https://www.facebook.com/karthick.zmr/"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://twitter.com/" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="https://www.instagram.com/computer_science_engineering_/"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
</div>


   );
}

export default ContactUs; 