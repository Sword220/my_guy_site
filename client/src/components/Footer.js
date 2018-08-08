import React from 'react'
import {
  Container,
  Menu,
  Button,
  Icon,
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
            <Menu.Item style={{ color: 'white' }} name='385-264-3353' />
            <Menu.Item style={{ color: 'white' }} name='myguydrainsolutions@gmail.com' />
            <Button color='facebook' style={{ height: '50px', width: '50px'}}>
              <Icon name='facebook' />
              <Menu.Item href='https://www.facebook.com/pg/cameron801/' style={{ color: 'white' }} />
            </Button>
          </Menu>
        </Container>
      </FooterStyle>
    )
  }
}

export default Footer
