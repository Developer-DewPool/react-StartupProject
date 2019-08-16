import React, { Component } from 'react'
import Nav from './Nav'
import About from './About'
import Shop from './Shop'
import Home from './Home'
import InputDetails from './InputDetails'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {

    render() {

      return (
        <Router>
        <div className="container">
          <Nav />
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/inputdetials" component={InputDetails}/>
          </Switch>
        </div>
        </Router>
      )
    }

  }

export default App