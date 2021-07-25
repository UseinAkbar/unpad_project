import React, {useState} from 'react'
import Home from './components/Home'
import Register from './components/Register'
import Stages from './components/Stages'
import Livestream from './components/Livestream'
import Exhibition from './components/Exhibition'
import Stage3 from './components/Stage3'
import Error from './components/Error'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const App = () => {
  const state = localStorage.getItem('clicked')
  
  return (
    <Router>
      <div className="App">
        {/* <ul className="topbar">
          <li className='topbar__list'><a className='topbar__link' href='/'>Home</a></li>
        </ul> */}
        
        <Register removeClass={`${state ? 'removeAbsen' : null}`}/>
        
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/stages' component={Stages} />
          <Route path='/livestream' component={Livestream} />
          <Route path='/exhibition' component={Exhibition} />
          <Route path='/stage3' component={Stage3} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
        );
}

export default App;