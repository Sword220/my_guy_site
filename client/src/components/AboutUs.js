import React, { Fragment } from 'react'
import { 
  Header, 
  Container,
  Image,
  Grid,
} from 'semantic-ui-react'
import Footer from './Footer'
import ThumbsUp from '../images/Caricature.jpg'

class About extends React.Component {

  render() {
    return(
      <Fragment>
        <Header style={{ color: 'white', padding: '40px 0px 0px 0px' }} as='h1' textAlign='center'>About Us</Header>
        <Grid>
          <Grid.Column width={8} floated='left'>
            <Image src={ThumbsUp} style={{ display: 'flex', justifyContent: 'center', padding: '30px 0px 0px 75px', height: '500px', width: '400px' }}/>
          </Grid.Column>
          <Grid.Column width={8} floated='right'>
            <Container as='h2' style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: '60px 200px 0px 0px' }} fluid >
              My Guy Drain Solutions is an owner operated company based around helping others. <br />
              Our customer service is second to none. We are in the people business, but we can fix your drain too!<br /> 
              We never up sale or offer solutions that don’t fit your wants and needs. With almost two decades of experience,<br /> 
              serving Weber and Davis County, we can find a solution for all your drain needs. We look forward to the<br /> 
              opportunity to show you how our “help first” attitude can turn a stressful situation into an enjoyable experience.<br />
              We look forward to being your guy!
            </Container>
          </Grid.Column>
        </Grid>
        <Footer />
      </Fragment>
    )
  }
}

export default About
