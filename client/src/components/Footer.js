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
  padding-left: 117px;
  font-family: futura;
`

class Footer extends React.Component {
  render() {
    return(
      <Fragment>
        <Responsive minWidth={768}>
          <FooterStyle>
            <Container fluid>
              <Menu 
                style={{ 
                  fontSize: '15px', 
                  display: 'flex', 
                  justifyContent: 'space-evenly', 
                }} 
                fluid 
                pointing 
                secondary
              >
                <Link to ='/contact'>
                  <Menu.Item 
                    style={{ 
                      color: 'white', 
                      fontFamily: 'futura', 
                      paddingTop: '70px',
                    }} 
                    name='Send Us A Message' 
                    icon='envelope outline' 
                  />
                </Link>
                <Menu.Item 
                  style={{
                    fontSize: '50px', 
                    color: 'white', 
                    fontFamily: 'futura', 
                  }} 
                  name='phone' 
                  content='385-264-3353' 
                />
                <Menu.Item 
                  style={{ 
                    color: 'white', 
                    fontFamily: 'futura',
                    paddingBottom: '55px',
                  }} 
                  href='https://www.facebook.com/pg/cameron801/' 
                  name='Like Us On Facebook'
                  icon='facebook' 
                />
              </Menu>
            </Container>
          </FooterStyle>
        </Responsive>
        <Responsive 
          maxWidth={768} 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
          }}
        >
          <Menu 
            style={{ fontSize: '15px' }} 
            pointing 
            secondary 
            vertical
          >
            <Menu.Item 
              style={{ color: 'white' }} 
              href='tel:13852643353' 
              name='phone' 
              content='385-264-3353' 
            />
            <Link to='/contact'>
              <Menu.Item 
                style={{ color: 'white', displayFlex: 'flex', justifyContent: 'flex-start' }}
                content='Send Us A Message' 
                icon='envelope outline'
              />
            </Link>
            <Menu.Item 
              style={{ color: 'white' }} 
              href='https://www.facebook.com/pg/cameron801/' 
              name='Like Us On Facebook' 
              icon='facebook' 
            />
          </Menu>
        </Responsive>
      </Fragment>
    )
  }
}

export default Footer
