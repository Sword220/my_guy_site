import React, { Fragment } from 'react'
import { 
  Header, 
  Container, 
  Image, 
  Responsive,
} from 'semantic-ui-react'
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
  margin-top: 40px;
  font-family: futura;
`

const ResponsiveHeader = styled.h3`
    test-align: center;
    color: white !important;
    margin-top: 40px;
`

const YourStyle = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 0px;
    font-size: 70px;
    font-weight: extra-bold;
`

const ParaStyle = styled.div`
    padding-top: 25px;
    font-size: 40px;
    font-weight: light;
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
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection: 'column', 
          }} 
          fluid
        >
          <Responsive maxWidth={768}>
            <Header 
              as={HeaderStyle} 
              style={{ 
                paddingTop: '20px', 
                display: 'flex', 
                justifyContent: 'flex-end', 
                fontFamily: 'futura', 
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
          <Responsive minWidth={768}>
            <Header 
              as={ResponsiveHeader} 
              style={{ 
                paddingTop: '20px', 
                display: 'flex', 
                justifyContent: 'flex-end', 
                fontFamily: 'futura', 
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
















