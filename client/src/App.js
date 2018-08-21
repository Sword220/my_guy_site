import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/AboutUs'
import Contact from './components/Contact'
import Services from './components/Services'
import Reviews from './components/Reviews'
import NoMatch from './components/NoMatch'
import Img from './images/MyGuy_Background.jpg'

const Main = styled.div`
  height: 900px;
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  color: white !important;
  font-family: Verdana, Geneva, sans-serif !important;
`

class App extends React.Component {
  
  render() {
    return (
      
        <Main>
          <Fragment>
            <NavBar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/services' component={Services} />
              <Route exact path='/reviews' component={Reviews} />
              <Route component={NoMatch} />
            </Switch>
          </Fragment>
        </Main>
    )
  }
}

export default App
