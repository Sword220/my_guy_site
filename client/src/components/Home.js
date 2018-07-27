import React from 'react'
import { 
  Header, 
  Container, 
  Image, 
} from 'semantic-ui-react';
import styled, { keyframes } from 'styled-components'
import MyGuy from '../images/MyGuyDrainLogo.jpg'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
    }
  to {
    transform: rotate(360deg);
    }
`

const Rotate = styled.div`
  animation: ${rotate360} 30s linear infinite;
`

const HeaderStyle = styled.h1`
  text-align: center;
  color: white !important;
`

class Home extends React.Component {

  render() {
    return (
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} fluid>
          <Image src={MyGuy} as={Rotate} style={{ padding: '80px'}} circular />  
          <Header as={HeaderStyle}>Who's Your Guy?</Header>
        </Container>
    );
  }
}

export default Home