import React from 'react'

import foto1 from '../../../src/img/1.jpg'
import foto2 from '../../../src/img/2.jpg'
import foto3 from '../../../src/img/3.jpg'
import foto4 from '../../../src/img/4.jpg'
import foto5 from '../../../src/img/5.jpg'
import foto6 from '../../../src/img/6.jpg'
const Carusel2 =()=>{ 
    return (
        <div>

<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
    
  
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 3"></button>
  </div>

  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src={foto1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1>#1</h1>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div> 


    <div className="carousel-item" data-bs-interval="2000">
      <img src={foto2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1>#2</h1>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>

    <div className="carousel-item">
      <img src={foto3} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h1>#3</h1>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={foto4} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h1>#4</h1>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={foto5} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h1>#5</h1>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={foto6} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h1>#6</h1>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div> </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



    )}

export default Carusel2
