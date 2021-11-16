import React, {useState} from 'react'
import Home from './Components/Home'
import Register from './Components/Register'
import Stages from './Components/Stages'
import Livestream from './Components/Livestream'
import Exhibition from './Components/Exhibition'
import HIFIJourney from './Components/HIFIJourney'
import Info from './Components/Info'
import Error from './Components/Error'
import Load from './Components/Load'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  const [isLoad, setLoad] = useState(false)
  // const state = localStorage.getItem('clicked')

  document.addEventListener('readystatechange', () => {
    if(document.readyState !== 'complete') {
      setLoad(!isLoad)
    } else {
      setTimeout(() => setLoad(!isLoad), 1000)
    }
  })
  
  return (
    <Router>
      <div className="App font-body">
        {isLoad && <Load />}
        {/* <Register removeClass={`${state ? 'removeAbsen' : null}`}/> */}
        
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/stages' component={Stages} />
          <Route path='/livestream' component={Livestream} />
          <Route path='/hifi-journey' component={HIFIJourney} />
          <Route path='/exhibition' component={Exhibition} />
          <Route path='/info' component={Info} />
          <Route component={Error} />
        </Switch>
        
      </div>
    </Router>
        );
}

export default App;