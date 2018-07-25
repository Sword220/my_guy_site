import React, { Fragment } from 'react'
import axios from 'axios'
import { 
  Header, 
  List, 
  Container,
  Divider,
  Grid,
} from 'semantic-ui-react';
import style from 'styled-components'

//TODO add thumbs up my guy to left
//TODO on mouse hover of li toggle from my guy to before/after

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
        <Header style={{ color: 'white', padding: '40px 0px 0px 0px' }}as='h1' textAlign='center'>
          Services
        </Header>
        <Divider />
        <Grid>
          <Grid.Column width={8} style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', flexGrow: '2', padding: '50px' }}>
              { services.map( s =>
                <List key={s.id} >
                  <List.Item>
                    {s.name}
                  </List.Item>
                </List>
                )
              }
          </Grid.Column>
          <Grid.Column width={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', }}>
              pics and stuff
          </Grid.Column>
        </Grid>
      </Fragment>
    )
  }
} 

export default Services