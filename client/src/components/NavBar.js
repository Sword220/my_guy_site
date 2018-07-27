import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { 
  Menu, 
  Container,
  //Header,
  Responsive,
  Button,
  Icon,
} from 'semantic-ui-react'
//import styled from 'styled-components'

// const Nav = styled.div`
//   background-color: black;
//   color: white !important;
//   height: 15vh;
// `

class NavBar extends React.Component {
  state = { showMenu: false }

  toggleMenu = () => {
    this.setState({showMenu: !this.state.showMenu})
  }

  dropMenu = () => {
    const { showMenu } = this.state
    if(showMenu) {
      return(
        <Menu style={{ fontSize: '1 em', display: 'flex', justifyContent: 'space-evenly' }} pointing secondary vertical>
              <Link to='/'>
                <Menu.Item style={{ color: 'white' }} name='Home' />
              </Link>
              <Link to='/about'>
                <Menu.Item style={{ color: 'white' }} name='About us' />
              </Link>
              <Link to='/reviews'>
                <Menu.Item style={{ color: 'white' }} name='Reviews' />
              </Link>
              <Link to='/services'>
                <Menu.Item style={{ color: 'white' }} name='Services' />
              </Link>
              <Link to='/contact'>
                <Menu.Item style={{ color: 'white' }} name='Contact Us' />
              </Link>
        </Menu>
      )
    }
  }

  render() {
    return (
      <Fragment>
        <Container fluid>
          <Responsive minWidth={768}>
            <Menu style={{ fontSize: '20px', display: 'flex', justifyContent: 'space-evenly' }} fluid pointing secondary>
              <Link to='/'>
                <Menu.Item style={{ color: 'white' }} name='Home' />
              </Link>
              <Link to='/about'>
                <Menu.Item style={{ color: 'white' }} name='About us' />
              </Link>
              <Link to='/reviews'>
                <Menu.Item style={{ color: 'white' }} name='Reviews' />
              </Link>
              <Link to='/services'>
                <Menu.Item style={{ color: 'white' }} name='Services' />
              </Link>
              <Link to='/contact'>
                <Menu.Item style={{ color: 'white' }} name='Contact Us' />
              </Link>
            </Menu>
          </Responsive>
        </Container>
        <Responsive maxWidth={768}>
          <Button.Group>
            <Button icon inverted color='black' style={{ margin: '10px' }} onClick={() => this.toggleMenu()}>
              <Icon name='bars' />
              Menu
            </Button>
          </Button.Group>
          <Container>
            {this.dropMenu()}
           </Container>
        </Responsive>
      </Fragment>
    );
  }
}

export default NavBar