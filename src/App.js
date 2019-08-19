import React, { Component } from 'react'
import Nav from './Nav'
import About from './About'
import Shop from './Shop'
import Home from './Home'
import InputDetails from './InputDetails'
import ItemDetails from './ItemDetails'
import ProductDetail from './ProductDetail'
import AllProducts from './AllProducts'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import AllProducts from './AllProducts';

class App extends Component {

    render() {

      return (
        <Router>
        <div className="container">
          <Nav />
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/shop" exact component={Shop}/>
          <Route path="/shop/:id" component={ItemDetails}/>
          <Route path="/inputdetials" component={InputDetails}/>
          <Route path="/products" exact component={AllProducts}/>
          <Route path="/products/:id" component={ProductDetail}/>
          </Switch>
        </div>
        </Router>
      )
    }

  }

export default App