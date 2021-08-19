import React from 'react'
import Home from './Components/Home'
import Register from './Components/Register'
import Stages from './Components/Stages'
import Livestream from './Components/Livestream'
import Exhibition from './Components/Exhibition'
import HIFIJourney from './Components/HIFIJourney'
import Error from './Components/Error'
import SidebarLeft from './Components/SidebarLeft'
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