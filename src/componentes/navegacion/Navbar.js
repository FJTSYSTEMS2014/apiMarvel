/* https://getbootstrap.com/docs/5.0/components/navbar/*/
/* https://www.geeksforgeeks.org/how-to-change-navigation-bar-color-in-bootstrap/     */

import React from 'react';
import {Link} from 'react-router-dom';
import image from '../../../src/img/marvel-logo.png';

function Navbar () {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger ">

        <div className="container-fluid">
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar navbar-light bg-dark"    id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav nav-pills ">
                <Link className="nav-link active" to="/" href="#"><h3>HOME</h3></Link>
              </li>
              <li className="nav nav-tabs ">
                <Link className="nav-link " to="/Pag1" href="#"><h3>Página #1</h3></Link>
              </li>
              <li className="nav nav-tabs">
                <Link className="nav-link" to="/Pag2" href="#"><h3>Página #2</h3></Link>
              </li>
              <li className="nav nav-tabs">
                <Link className="nav-link" to="/Pag3" href="#"><h3>Página #3</h3></Link>
              </li>
              <li className="nav nav-tabs">
                <Link className="nav-link" to="/Pag4" href="#"><h3>Página #4</h3></Link>
              </li>

              <li className="nav-item">
               
              </li> <Link to="/">
            <img src={image} width="50%" />{' '}
          </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
