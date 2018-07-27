import React from 'react'
import axios from 'axios'
import { 
  Header, 
  Container,
  Form,
  Input,
  Button,
  Label,
  TextArea,
  Message,
  Grid,
  Divider,
} from 'semantic-ui-react'
import styled, { flex } from 'styled-components'

const Main = styled.div`
  height: 100vh;
  background: black;
`

class Contact extends React.Component {

  state = { name: '', email: '', phone: '', body: '' }

  handleChange = (e) => {
  const { name, value } = e.target
  this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
  e.preventDefault()
  axios.post('/api/contacts', this.state)
    .then( res => {
      alert('Your message has been sent')
      this.setState({ name: '', email: '', phone: '', body: '' })
    })
  }

  render() {
    const { name, email, phone, body } = this.state
    return(
      <Main>
      <Header style={{ color: 'white', padding: '40px 0px 0px 0px' }} as='h1' textAlign='center'>
        Contact Us
      </Header>
      <Divider />
        <Grid>
          <Grid.Column style={{ display: 'flex', justifyContent: 'stretch', flexDirection: 'column'}} width={8} floated='left'>
            <Container style={{ padding: '125px 0px 0px 100px'}}fluid>
              <p>
                385-264-3353
              </p>
              <p>
                2621 N 1300 E, North Ogden, UT 84414
              </p>
              <p>
                myguydrainsolutions@gmail.com
              </p>
            </Container>
          </Grid.Column>
          <Grid.Column width={8} floated='right'>
            <Container style={{ width: '800px', padding: '30px', display: 'flex', justifyContent: 'center' }} fluid>
              <Form style={{ width: '600px', display: 'flex', justifyContent: 'space-around', flexDirection: 'column', padding: '40px 0px 0px 0px' }} onSubmit={this.handleSubmit}>
                <Form.Input
                  required
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />
                <Form.Input
                  required
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
                <Form.Input
                  placeholder="Phone"
                  name="phone"
                  value={phone}
                  onChange={this.handleChange}
                />
                <Form.TextArea 
                  style={{ height: '100px' }}
                  required
                  name="body"
                  value={body} 
                  onChange={this.handleChange}
                >
                </Form.TextArea>
                  <Button inverted color='black' style={{ width: '100px'}} onClick={this.handleSubmit} >
                    Send email
                  </Button>
                </Form>
              </Container>
            </Grid.Column>
          </Grid>
      </Main>
    )
  }
} 


export default Contact