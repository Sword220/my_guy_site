import React, { Fragment } from 'react'
import { 
  Header, 
  Container,
  Divider,
  Grid,
} from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroller'
import Footer from './Footer'

class Services extends React.Component {
  state = { moreServices: false }

  handleLoad = () => {
    this.state({ moreServices: this.state.moreServices })
  }

  render() {
    return(
      <Fragment>
        <Grid>
          <Grid.Column width={16} float='left'>
            <Container fluid style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', color: 'white', padding: '50px' }}>
              <Header style={{ color: 'white' }} as='h1' textAlign='center'>
                Services
              </Header>
              <Container fluid>
                <div style={{ display: 'flex', justifyContent: 'center', background: 'black', height: '500px', overflow: 'auto', border: '2px solid grey' }}>
                  <InfiniteScroll hasMore={false} loadMore={() => this.handleLoad()} pageStart={0}>
                    <div>
                      <div style={{ padding: '20px' }}>
                        <Header style={{ color: 'white' }} as='h3'>Kitchen Sink</Header>
                        <Divider />
                          <p>Are you experienceing water flowing from one side of your sink to the other, or have stinky food smells coming from your sink?</p>
                          <p>My Guy has a Solution!</p>
                        <hr />
                      </div>
                      <div style={{ padding: '20px' }}>
                        <Header style={{ color: 'white' }} as='h3'>Main Sewer</Header>
                        <Divider />
                          <p>Do you have a stinky smell coming from any of your drains, hear a gurgling in your toilets, or finding puddles of water by<br />
                          your floor drains?</p>
                          <p>My Guy has a Solution!</p>
                        <hr />
                      </div>
                      <div style={{ padding: '20px' }}>
                        <Header style={{ color: 'white' }} as='h3'>Bathroom Sink</Header>
                        <Divider />
                          <p>Does your sink fill up afrter you wash your hands, brush your teeth, or just not draining at all?</p>
                          <p>My Guy has a Solution!</p>
                        <hr />
                      </div>
                      <div style={{ padding: '20px' }}>
                        <Header style={{ color: 'white' }} as='h3'>Bathtub</Header>
                        <Divider />
                          <p>Are you taking a shower that turns into an ankle-deep bath? Does it take your bathtub several minutes to drain?</p>
                          <p>My Guy has a Solution!</p>
                        <hr />
                      </div>
                      <div style={{ padding: '20px' }}>
                        <Header style={{ color: 'white' }} as='h3'>Washer Line</Header>
                        <Divider />
                          <p>Does your washing machine overflow when it begins the spin cycle?  Do you have water coming up from your floor drain<br />
                          or nearby sink?</p>
                          <p>My Guy has a Solution!</p>
                        <hr />
                      </div>
                      <div style={{ padding: '20px' }}>
                        <Header style={{ color: 'white' }} as='h3'>Toilet</Header>
                        <Divider />
                          <p>Do you have to flush more than once or jiggle the handle that certain way? Is your plunger getting more use than normal?</p>
                          <p>My Guy has a Solution!</p>
                        <hr />
                      </div>
                      <div style={{ padding: '20px' }}>
                        <Header style={{ color: 'white' }} as='h3'>Floor Drain</Header>
                        <Divider />
                          <p>Take a ptcher of water and test your floor drains.  If you are experiencing poolin or if it drians slow.</p>
                          <p>My Guy has a Solution!</p>
                          <p>* Defective floor drains could cause thousands of dollars in repairs to your home.  Don't wait until it's too late.</p>
                        <hr />
                      </div>
                      <div style={{ padding: '20px' }}>
                        <p>My Guy Drain Solutions uses only the top of the line equipment to ensure you receive the solution you need.  Ask me about<br />
                        our whole house treatment using the Hydro-Jetter to make your drains like new again.</p>
                      </div>
                      <p></p>
                    </div>
                  </InfiniteScroll>
                </div>
              </Container>
            </Container>
          </Grid.Column>
        </Grid>
        <Footer />
      </Fragment>
    )
  }
} 

export default Services