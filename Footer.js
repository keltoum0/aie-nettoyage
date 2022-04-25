import React from "react";
import "../styles/Footer.css";
import adressEmail from "../assets/adressEmail.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import telephone from "../assets/telephone.png"
function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h1>CoNet</h1>
          
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Nos Services</h4>
            <ui className="list-unstyled">
              <li></li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
            
          </div>
          
        
          {/* Column3 */}
          <div className="col">
            <h4>CONTACTE</h4>
            <ui className="list-unstyled">
              <li><img src={adressEmail} alt="Adresse Email"/>CoNet06@gmail.com</li>
              <li><img src={telephone} alt="Téléphone"/>0444125784</li>
              <li><img src={facebook} alt="Facebook"/>CoNetFacebook</li>
              <li><img src={instagram} alt="instagram"/>CoNetInstagram</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Toujours en ligne | 24H/24H 7j/7j|
            Service de nettoyage | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;