import React from 'react'
import { 
  Header, 
  Container, 
  Image, 
} from 'semantic-ui-react';
import styled, { keyframes } from 'styled-components'
import MyGuy from '../images/MyGuyDrainLogo.jpg'
import Footer from './Footer'

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
  margin: 40px 0px 0px 0px;
`


class Home extends React.Component {

  imageClick = () => {
    console.log('click!')
  }

  render() {
    return (
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} fluid>
          <Header as={HeaderStyle} style={{ padding: '40px 0px 0px 0px' }}>Who's Your Guy?</Header>
          <Image src={MyGuy} as={Rotate} style={{ padding: '60px'}} circular pointing secondary onClick={this.imageClick} /> 
          <Footer /> 
        </Container>
    );
  }
}

export default Home
















