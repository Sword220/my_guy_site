import React, { Fragment } from 'react'
import { 
  Header, 
  Container,
  Divider,
  Image,
} from 'semantic-ui-react'
import ThumbsUp from '../images/Caricature.jpg'

class About extends React.Component {

  render() {
    return(
      <Fragment>
        <Header style={{ color: 'white', padding: '40px 0px 0px 0px' }} as='h1' textAlign='center'>About Us</Header>
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'flex-end', }}>
          My Guy Drain Solutions is an owner operated company based around helping others. <br />
          Our customer service is second to none. We are in the people business, but we can fix your drain too!<br /> 
          We never up sale or offer solutions that don’t fit your wants and needs. With almost two decades of experience,<br /> 
          serving Weber and Davis County, we can find a solution for all your drain needs. We look forward to the<br /> 
          opportunity to show you how our “help first” attitude can turn a stressful situation into an enjoyable experience.<br />
          We look forward to being your guy!
        </Container>
        <Image src={ThumbsUp} />
      </Fragment>
    )
  }
}

export default About
