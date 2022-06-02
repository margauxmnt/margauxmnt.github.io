import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Home() {
    return (
      <>
        <Navbar />

        {/* BANNIERE DEFILANTE A PERSONNALISER */}
        <div className="home_banner">
          <div className="home_marquee">Écrire ici les promos en cours !!</div>
        </div>

        {/* IMAGE AMBIANCE D'ACCUEIL */}
        <div className="home_container">
          <img src="./images/cover.jpg" alt="cover" style={{ width: "100%" }} />
          {/* SLOGAN D'ACCUEIL */}
          <div className="home_tagline">
            <p>TROUVE DÈS MAINTENANT TON VÉLO POUR LA SAISON 2022</p>
            {/* BOUTON ACCES CATALOGUE PRODUITS */}
            <div>
              <Link to="/bikes">
                <Button className="home_button btn-lg">Découvrir</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* PARAGRAPHES DESCRIPTION SOCIETE ET/OU PRODUITS */}
        <div className="row home_about">
          <p className="col-md-6 home_about_p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            magni eos, <span className="bold">perspiciatis</span> alias eligendi
            ducimus dolores corrupti tenetur inventore doloribus natus, debitis,
            fugit molestiae pariatur cupiditate dignissimos corporis amet! Eius?
          </p>

          <p className="col-md-6 home_about_p p_right">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            magni eos, perspiciatis alias eligendi ducimus dolores corrupti
            tenetur inventore doloribus{" "}
            <span className="bold">natus, debitis, fugit molestiae</span>{" "}
            pariatur cupiditate dignissimos corporis amet! Eius?
          </p>
        </div>

        <Footer />
      </>
    );
}

export default Home;