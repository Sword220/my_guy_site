import React, { Fragment } from 'react'
import axios from 'axios'
import { 
  Header, 
  Container,
  Form,
  Button,
  Grid,
} from 'semantic-ui-react'
import Footer from './Footer'

class Contact extends React.Component {

  state = { 
    name: '', 
    email: '', 
    phone: '', 
    body: '',
    nameError: false,
    emailError: false,
    bodyError: false,
  }

  handleChange = (e) => {
  const { name, value } = e.target
  this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
  e.preventDefault()
  //add validation and errors here
  let error = false
  if (this.state.email === '') {
    this.setState({ emailError: true })
    error = true
  } else {
    this.setState({ emailError: false })
    error = false
  }
  axios.post('/api/contacts', this.state)
    .then( res => {
      alert('Your message has been sent')
      this.setState({ name: '', email: '', phone: '', body: '' })
    })
  }

  render() {
    const { name, email, phone, body, nameError } = this.state
    return(
      <Fragment>
      <Header style={{ color: 'white', padding: '40px 0px 0px 0px' }} as='h1' textAlign='center' >
        <p>Phone:  385-264-3353  |  Email: myguydrainsolutions@gmail.com</p>
      </Header>
        <Grid>
          <Grid.Column width={16}>
            <Container style={{ width: '800px', padding: '30px', display: 'flex', justifyContent: 'center' }} fluid>
              <Form style={{ width: '600px', display: 'flex', justifyContent: 'space-around', flexDirection: 'column', padding: '40px 0px 0px 0px' }} onSubmit={this.handleSubmit}>
                <Form.Input
                  required
                  placeholder="Name"
                  name="name"
                  value={name}
                  error={nameError}
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
                  <Form.Button 
                    inverted 
                    color='black' 
                    style={{ width: '100px' }} 
                    onClick={this.handleSubmit} 
                    floated='right'
                    disabled = {
                      !this.state.name ||
                      !this.state.email ||
                      !this.state.body
                    }>
                    Send email
                  </Form.Button>
              </Form>
            </Container>
          </Grid.Column>
        </Grid>
          <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
          <Footer />
          </Container>
      </Fragment>
    )
  }
} 


export default Contact
