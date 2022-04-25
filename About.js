import React from "react";
import about from '../assets/about.jpg';
import '../styles/About.css'
function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={about}
              alt="Qui sommes nous ?"
              className="img"
            />
            
          </div>
          <div class="col-lg-5">
            <h1 class="font-bold-light">Qui sommes nous ?</h1>
            <p className="par">
            CoNet est une plateforme qui regroupe des entreprise 
            de nettoyage à travers toute l’Algérie, 
            afin que vous puissiez réserver le service qui vous convient le mieux
            </p>
          </div>
        </div>
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
          <h1 class="font-bold-light">Comment ça marche ?</h1>
            <p className="par">
            Créez un compte si vous n’en avez pas,
            ensuite choisissez une offre et indiquez
            les détails qui vous seront demandés, 
            nos équipes se chargent du reste !   
            </p>
          </div>
          <div class="col-lg-7">
          <div className='btn'>S'inscrire</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;