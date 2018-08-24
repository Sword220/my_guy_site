import React, { Fragment } from 'react'
import { 
  Header, 
  Container,
  Image,
  Grid,
  Responsive,
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
  font-family: futura;
`

const ImageStyle = styled.div`
  height: 500px;
  width: 500px;
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-left: 150px;
`

const AboutUsStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 60px;
  padding-right: 200px;
  font-family: futura !important;
`

class About extends React.Component {

  render() {
    return(
      <Fragment>
        <HeaderStyle>
          <Header style={{ color: 'white', fontFamily: 'futura' }}>
            About Us
          </Header>
        </HeaderStyle>
        <Responsive minWidth={768}>
          <Grid columm={2}>
            <Grid.Column width={8} floated='left'>
              <ImageStyle>
                <Image src={ThumbsUp} />
              </ImageStyle>
            </Grid.Column>
            <Grid.Column width={8} floated='right'>
              <AboutUsStyle>
                <Container as='h2' fluid >
                  My Guy Drain Solutions is an owner operated company based around helping others. Our customer service is second to none.<br />
                  We are in the people business, but we can fix your drain too! We never up sale or offer solutions that don’t fit your wants and needs.<br /> 
                  With almost two decades of experience, serving Weber and Davis County, we can find a solution for all your drain needs. We look forward to the opportunity to show you<br /> 
                  how our “help first” attitude can turn a stressful situation into an enjoyable experience.<br />
                  <br />
                  We look forward to being your guy!
                </Container>
              </AboutUsStyle>
            </Grid.Column>
          </Grid>
        </Responsive>
        <Responsive maxWidth={768}>
          <Grid column={1} row={2}>
            <Grid.Column>
              <Grid.Row>
                <Image src={ThumbsUp} />
              </Grid.Row>
              <Grid.Row style={{ paddingTop: '20px'}}>
                My Guy Drain Solutions is an owner operated company based around helping others. Our customer service is second to none.
                We are in the people business, but we can fix your drains too!  We never up sale or offer solutions that don't fit your
                wants and needs.  With almost two decades of experience, serving Weber and Davis Counties, we can find a solution for all
                your drain needs.  We look forward to the opportunituy to show you how our "help first" attitude can turn a stressful
                situation into an enjoyable experience.<br />
                We look forward to being your guy!
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Responsive>
        <AboutFooter>
          <Footer />
        </AboutFooter>
      </Fragment>
    )
  }
}

export default About
