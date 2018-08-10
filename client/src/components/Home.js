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
  margin: 40px 0px 0px 0px;
`


class Home extends React.Component {

  imageClick = () => {
    return(
      <div></div>
    )
  }

  render() {
    return (
      <Fragment>
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} fluid>
          <Header as={HeaderStyle} style={{ padding: '40px 0px 0px 0px' }}>Who's Your Guy?</Header>
          <Rotate>
            <Image src={MyGuy} style={{ padding: '60px' }} circular pointing='true' secondary='true' onClick={this.imageClick} /> 
          </Rotate>
        </Container>
        <Container>
        <Footer /> 
        </Container>
      </Fragment>
    );
  }
}

export default Home
















