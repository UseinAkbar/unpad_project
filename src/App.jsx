import React, {useState} from 'react'
import Home from './components/Home'
import Register from './components/Register'
import Stages from './components/Stages'
import Livestream from './components/Livestream'
import Exhibition from './components/Exhibition'
import HIFIJourney from './components/HIFIJourney'
import Error from './components/Error'
import SidebarLeft from './components/SidebarLeft'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  const state = localStorage.getItem('clicked')
  
  return (
    <Router>
      <div className="App">
        <SidebarLeft />
        
        <Register removeClass={`${state ? 'removeAbsen' : null}`}/>
        
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/stages' component={Stages} />
          <Route path='/livestream' component={Livestream} />
          <Route path='/hifi-journey' component={HIFIJourney} />
          <Route path='/exhibition' component={Exhibition} />
          <Route component={Error} />
        </Switch>
        
      </div>
    </Router>
        );
}

export default App;