import React from 'react'
import { Header, Container } from 'semantic-ui-react'
import styled from 'styled-components'

const Main = styled.div`
  height: 100vh;
  background: black;
`

class Contact extends React.Component {
  render() {
    return(
      <Main>
        <Header style={{ color: 'white' }} as='h1' textAlign='center'>Contact Us</Header>
        <Container textAlign='center'>
          <p>
            385-264-3353
          </p>
          <p>
            2621 N 1300 E, North Ogden, UT 84414
          </p>
          <p>
            myguydrainsolutions@gmail.com
          </p>
        </Container>
      </Main>
    )
  }
} 

export default Contact