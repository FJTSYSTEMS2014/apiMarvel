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
          <Link to="/">
            <img src={image} width="100px" />{' '}
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav nav-pills ">
                <Link className="nav-link active" to="/" href="#">Home</Link>
              </li>
              <li className="nav nav-tabs ">
                <Link className="nav-link " to="/Pag1" href="#">Link1</Link>
              </li>
              <li className="nav nav-tabs">
                <Link className="nav-link" to="/Pag2" href="#">Link2</Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  PW3-IUPA
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
