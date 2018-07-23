import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Menu, 
  Container,
  Header,
} from 'semantic-ui-react'
import styled, { flex } from 'styled-components'

const Nav = styled.div`
  background-color: black;
  color: white !important;
  height: 15vh;
`

class NavBar extends React.Component {

  render() {
    return (
      <Container fluid>
        <Menu style={{ fontSize: '20px', display: 'flex', justifyContent: 'space-around', border: 'bottom solid grey 1px' }} fluid pointing secondary>
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
      </Container>
    );
  }
}

export default NavBar