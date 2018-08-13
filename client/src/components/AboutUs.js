import React, { Fragment } from 'react'
import { 
  Header, 
  Container,
  Image,
  Grid,
} from 'semantic-ui-react'
import styled from 'styled-components'
import Footer from './Footer'
import ThumbsUp from '../images/Caricature.jpg'

const AboutFooter = styled.footer`
  padding-top: 20px;
`

const HeaderStyle = styled.h1`
  padding-top: 40px;
  text-align: center;
`

const ImageStyle = styled.div`
  height: 500px;
  width: 400px;
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-left: 75px;
`

const AboutUsStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 60px;
  padding-right: 200px;
`

class About extends React.Component {

  render() {
    return(
      <Fragment>
        <HeaderStyle>
          <Header style={{ color: 'white' }}>
            About Us
          </Header>
        </HeaderStyle>
        <Grid columm={2}>
          <Grid.Column width={8} floated='left'>
            <ImageStyle>
              <Image src={ThumbsUp} />
            </ImageStyle>
          </Grid.Column>
          <Grid.Column width={8} floated='right'>
            <AboutUsStyle>
              <Container as='h2' fluid >
                My Guy Drain Solutions is an owner operated company based around helping others. <br />
                Our customer service is second to none. We are in the people business, but we can fix your drain too!<br /> 
                We never up sale or offer solutions that don’t fit your wants and needs. With almost two decades of experience,<br /> 
                serving Weber and Davis County, we can find a solution for all your drain needs. We look forward to the<br /> 
                opportunity to show you how our “help first” attitude can turn a stressful situation into an enjoyable experience.<br />
                We look forward to being your guy!
              </Container>
            </AboutUsStyle>
          </Grid.Column>
        </Grid>
        <AboutFooter>
          <Footer />
        </AboutFooter>
      </Fragment>
    )
  }
}

export default About
