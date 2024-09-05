import React from 'react';
import './Container.css';
import photo1 from '../../assets/photo1.webp';
import photo2 from '../../assets/photo2.webp';
import photo3 from '../../assets/photo3.webp';
import photo4 from '../../assets/photo4.webp';
import photo5 from '../../assets/photo5.webp';
import creme from '../../assets/creme.webp';
import rouge from '../../assets/rouge.webp';
import poudre from '../../assets/poudre.webp';
import photo6 from '../../assets/photo6.webp';
import photo7 from '../../assets/photo7.webp';
import photo8 from '../../assets/photo8.webp';

const Container = () => {
  return (
    <div>
      <div className='container'>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={photo1} className="d-block w-100" alt="image1" />
            </div>
            <div className="carousel-item">
              <img src={photo2} className="d-block w-100" alt="image2" />
            </div>
            <div className="carousel-item">
              <img src={photo3} className="d-block w-100" alt="image3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className='titlescarousel'>
          <p>DÉCOUVREZ VOTRE NOUVELLE PASSION</p>
          <p id='bigtitre'>Produits de maquillage à base minérale</p>
        </div>
      </div>

      <div className='photos'>
        <div className='leftphoto'>
          <p id='firstp'>LES ESSENTIELS DE LA SAISON</p>
          <p id='secondp'>Soin hydratant pour les lèvres</p>
        </div>
        <div className='rightphoto'>
          <p id='thirdp'>FRAÎCHEUR</p>
          <p id='forthp'>Nouveaux démaquillants</p>
        </div>
      </div>

      <div className='products'>
        <div id="myCarousel" className="carousel slide container" data-bs-ride="carousel">
          <div className="carousel-inner w-100">
            <div className="carousel-item active">
              <div className="col-md-3">
                <div className="card card-body">
                  <img className="img-fluid" src={photo6} alt="Slide 1" />
                  <p>Kit pinceaux <br />17,00 €</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-3">
                <div className="card card-body">
                  <img className="img-fluid" src={rouge} alt="Slide 2" />
                  <p>Rouge à lèvres mat <br />27,00 €</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-3">
                <div className="card card-body">
                  <img className="img-fluid" src={poudre} alt="Slide 3" />
                  <p>Blush poudre satinée <br />20,00 €</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-3">
                <div className="card card-body">
                  <img className="img-fluid" src={creme} alt="Slide 4" />
                  <p>Gloss pour visage <br />50,00 €</p>
                </div>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className='Forthpart'>
        <div className='photogauche'>
          <p>CHOISISSEZ VOTRE MAQUILLAGE</p>
          <p id='titregauche'>Nouveau service - Retrait en magasin</p>
        </div>
        <div className='photodroite'>
          <p>BASE DE MAQUILLAGE</p>
          <p id='titredroit'>Fond de teint <br />liquide Nude fini mat</p>
        </div>
      </div>
    </div>
  );
}

export default Container;
