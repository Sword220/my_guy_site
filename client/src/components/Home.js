import React, { Fragment } from 'react'
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
  animation: ${rotate360} 30s linear;
`

const HeaderStyle = styled.h1`
  text-align: center;
  color: white !important;
  margin-top: 40px;
`

const YourStyle = styled.div`
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 0px;
    font-size: 70px;
`

const ParaStyle = styled.div`
    padding-top: 25px;
    font-size: 35px;
`

class Home extends React.Component {
  state = { imageSpin: false }

  imageClick = () => {
    this.setState({ imageSpin: !this.state.ImageSpin })
  }

  render() {
    return (
      <Fragment>
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} fluid>
          <Header as={HeaderStyle} style={{ paddingTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
          <ParaStyle>
            <p>Who's</p> 
          </ParaStyle>
          <YourStyle>
            <p>Your</p> 
          </YourStyle>
          <ParaStyle>
            <p>Guy?</p>
          </ParaStyle>
          </Header>
          <Image src={MyGuy} as={Rotate} style={{ padding: '60px' }} circular pointing='true' secondary='true' onClick={this.imageClick} /> 
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default Home
















