import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Menu,
} from 'semantic-ui-react'
import styled from 'styled-components'

const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  justify-content: stretch;
  flex-direction: row;
  height: 20vh
  padding: 0px 0px 0px 125px;
`

class Footer extends React.Component {
  render() {
    return(
      <FooterStyle>
        <Container fluid>
          <Menu style={{ fontSize: '15px', display: 'flex', justifyContent: 'space-evenly' }} fluid pointing secondary>
            <Menu.Item style={{ color: 'white' }} name='phone' content='Phone: 385-264-3353' />
            <Link to ='/contact'>
              <Menu.Item style={{ color: 'white' }} name='email' content='Email: myguydrainsolutions@gmail.com' />
            </Link>
            <Menu.Item href='https://www.facebook.com/pg/cameron801/' style={{ color: 'white' }} name='facebook' content='facebook.com/myguy' />
          </Menu>
        </Container>
      </FooterStyle>
    )
  }
}

export default Footer
