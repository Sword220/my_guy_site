import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Menu,
  Responsive,
} from 'semantic-ui-react'
import styled from 'styled-components'

const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  justify-content: stretch;
  flex-direction: row;
  height: 20vh;
  padding: 0px 0px 0px 125px;
`

class Footer extends React.Component {
  render() {
    return(
      <Fragment>
        <Responsive minWidth={768}>
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
        </Responsive>
        <Responsive maxWidth={768} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Menu style={{ fontSize: '15px' }} pointing secondary vertical>
            <Menu.Item href='tel:13852643353' style={{ color: 'white' }} name='phone' content='385-264-3353' />
              <Menu.Item style={{ color: 'white' }} name='email' content='myguydrainsolutions@gmail.com' />
            <Menu.Item href='https://www.facebook.com/pg/cameron801/' style={{ color: 'white' }} name='facebook' content='facebook.com/myguy' />
          </Menu>
        </Responsive>
      </Fragment>
    )
  }
}

export default Footer
