import React, { Fragment } from 'react'
import { 
  Header, 
  Container, 
  Image, 
  Responsive,
} from 'semantic-ui-react'
import styled, { keyframes } from 'styled-components'
import MyGuy from '../images/favicon.ico'
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

const YourStyle = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 0px;
    font-family: futura !important;
    font-size: 70px;
    font-weight: 700;
`

const ParaStyle = styled.div`
    padding-top: 25px;
    font-family: futura !important;
    font-size: 40px;
    font-weight: 300;
`

class Home extends React.Component {
  state = { imageSpin: false }

  imageClick = () => {
    this.setState({ imageSpin: !this.state.ImageSpin })
  }

  render() {
    return (
      <Fragment>
        <Container 
          style={{ 
            textAlign: 'center',
            fontFamily: 'futura',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection: 'column', 
          }} 
          fluid
        >
          <Responsive maxWidth={768}>
            <Header 
              style={{ 
                paddingTop: '20px',
                textAlign: 'center', 
                display: 'flex', 
                justifyContent: 'flex-end', 
                fontFamily: 'futura',
                color: 'white', 
              }}
            >
              <ParaStyle>
                <p style={{ fontFamily: 'futura' }}>Who's</p> 
              </ParaStyle>
              <YourStyle>
                <p style={{ fontFamily: 'futura' }}>Your</p> 
              </YourStyle>
              <ParaStyle>
                <p style={{ fontFamily: 'futura' }}>Guy?</p>
              </ParaStyle>
            </Header>
          </Responsive>
          <Responsive minWidth={768}>
            <Header 
              style={{ 
                paddingTop: '20px', 
                display: 'flex', 
                justifyContent: 'flex-end', 
                fontFamily: 'futura', 
                color: 'white',
              }}
            >
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
          </Responsive>
          <Image 
            src={MyGuy} 
            as={Rotate} 
            style={{ padding: '60px' }} 
            circular 
            onClick={this.imageClick} 
          /> 
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default Home
















