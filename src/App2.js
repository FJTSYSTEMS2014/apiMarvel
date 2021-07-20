import React from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './componentes/navegacion/Navbar';
import Inicio from './componentes/paginas/Inicio';
import Pag1 from './componentes/paginas/Pag1';
import Pag2 from './componentes/paginas/Pag2';
import App1 from './App1';


function App2() {
    return (
        <div>
           <h1>Navbar</h1>
           <Router><Navbar/>
           <Switch>
               <Route path='/' exact component={App1}/>
               <Route path='/Pag1'  component={Pag1}/>
               <Route path='/Pag2'  component={Pag2}/>

               
           </Switch>
           </Router>
        </div>
    )
}

export default App2

/* //npm install react-router-dom
// necesitamos 2 componentes para navegacion ypaginas */