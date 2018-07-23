import React from 'react'
import { 
  Header, 
  List, 
  Container,
  Divider,
} from 'semantic-ui-react';
import style from 'styled-components'

//TODO add thumbs up my guy to left
//TODO on mouse hover of li toggle from my guy to before/after

class Services extends React.Component {
  state = { services: 
            ['Kitchen Sink',
             'Bathroom Sink',
             'Bathtub',
             'Toilet',
             'Urinal',
             'Washer Line',
             'Floor Drain',
             'Main Sewer',
             'Jetter',
             'Camera/Scope',
            ] 
          }

  render() {
    const { services } = this.state
    return(
      <div>
      <Header style={{ color: 'white', padding: '40px 0px 0px 0px' }}as='h1' textAlign='center'>Services</Header>
      <Divider />
      <Container style={{ display: 'flex',
                          justifyContent: 'center',
                          flexDirection: 'column',
                          alignItems: 'flex-end', }}>
        { services.map( s =>
          <List key={s} >
            <List.Item>
              {s}
            </List.Item>
          </List>
          )
        }
      </Container>
      </div>
    )
  }
} 

export default Services