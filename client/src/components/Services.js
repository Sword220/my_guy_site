import React, { Fragment } from 'react'
import axios from 'axios'
import { 
  Header, 
  Container,
  Divider,
  Grid,
} from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroller'
import Footer from './Footer'

class Services extends React.Component {
  state = { services: [] }

  componentDidMount() {
    axios.get('/api/services')
      .then( res => {
        this.setState({ services: res.data })
      })
  }

  render() {
    const { services } = this.state
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
                <InfiniteScroll hasMore={false} pageStart={0}>
                  <div>
                    {services.map ( s => 
                    <div key={s.id} style={{ padding: '20px' }}>
                      <Header style={{ color: 'white' }} as='h3'>{s.name}</Header>
                      <Divider />
                        <p>{s.description}</p>
                      <hr />
                    </div>
                    )}
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