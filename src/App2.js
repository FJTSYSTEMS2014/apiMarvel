import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './componentes/navegacion/Navbar';

import Pag1 from './componentes/paginas/Pag1';
import Pag2 from './componentes/paginas/Pag2';
import App1 from './App1';
import Pag3 from './componentes/paginas/Pag3';
import Pag4 from './componentes/paginas/Pag4';
import Pag5 from './componentes/paginas/Pag5';
import Footer from './componentes/Footer/Footer';

function App2 () {
  return (
    <div>
      <h1 />
      <Router>
        <Navbar />

        <Switch >
          <Route path="/" exact component={App1} />
          <Route path="/Pag1" component={Pag1} />
          <Route path="/Pag2" component={Pag2} />
          <Route path="/Pag3" component={Pag3} />
          <Route path="/Pag4" component={Pag4} />

          <h1>     </h1>
        </Switch>
        <Pag5 />
        <Footer />

      </Router>

    </div>
  );
}

export default App2;


