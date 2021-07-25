import React from 'react';

function Footer () {
  return (
    <div>
      <div className="bg-danger  border border-white">
        <footer className="text-center footer-style">
          <div className="container">
            <div className="row">
              <div className="col-md-4 footer-col">
                <h3>Dirección</h3>
                <p className="text-white bg-dark">
                  Bariloche - Argentina <br />
                  Siempre Viva 123
                </p>
              </div>
              <div className="col-md-4 footer-col">
                <h3>Mis redes</h3>
                <ul className="list-inline">
                  <li>
                    <a
                      target="_blank"
                      href="/"
                      className="btn btn-outline-info"
                    >
                      Facebook<i className="fa fa-fw fa-facebook" />
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      href="/"
                      className="btn btn-outline-dark"
                    >
                      Twitter<i className="fa fa-fw fa-twitter" />
                    </a>
                  </li>

                </ul>
              </div>
              <div className="col-md-4 footer-col">
                <h3>Programacion WEB 3</h3>
                <p className="text-white bg-dark">Aprendiendo React JS</p>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default Footer;
