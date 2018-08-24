import React, { Fragment } from 'react'
import axios from 'axios'
import { 
  Header, 
  Container,
  Form,
  Grid,
  Responsive,
} from 'semantic-ui-react'
import styled from 'styled-components'
import Footer from './Footer'

const ContactFooter = styled.footer`
  padding-top: 160px !important;
`

const FormStyle = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding-top: 40px;
`
const YourStyle = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 0px;
    font-size: 70px;
    font-weight: extra-bold;
`

const ParaStyle = styled.div`
    padding-top: 25px;
    font-size: 40px;
    font-weight: light;
`

class Contact extends React.Component {
  state = { name: '', email: '', phone: '', body: '' }

  handleChange = (e) => {
  const { name, value } = e.target
  this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
  e.preventDefault()
    const { email, name, body } = this.state
    //const regex = new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)

    if (email === '' || name === '' || body === '') {
      alert('You need to enter a name, valid email, and reason for your message before you can send an email.')
    } else {
      axios.post('/api/contacts', this.state)
        .then( res => {
          alert('Your message has been sent')
          this.setState({ name: '', email: '', phone: '', body: '' })
      })
    }
  }

  render() {
    const { name, email, phone, body } = this.state

    return(
      <Fragment>
        <Responsive minWidth={768}>
          <Header 
            style={{ 
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white', 
              paddingTop: '40px', 
              fontFamily: 'futura', 
            }} 
            as='h1' 
            textAlign='center' 
          >
            <ParaStyle>
              <p>I'm</p>
            </ParaStyle>
            <YourStyle>
              <p>Your</p>
            </YourStyle>
            <ParaStyle>
              <p>Guy!</p>
            </ParaStyle>
          </Header>
        </Responsive>
        <Responsive maxWidth={768}>
          <Header 
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center', 
              color: 'white', 
              paddingTop: '40px', 
            }} 
            as='h6' 
            textAlign='center' 
          >
            <ParaStyle>
              <p>I'm</p>
            </ParaStyle>
            <YourStyle>
              <p>Your</p>
            </YourStyle>
            <ParaStyle>
              <p>Guy!</p>
            </ParaStyle>
          </Header>
        </Responsive>
        <Grid>
          <Grid.Column width={16}>
            <Container 
              style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                padding: '30px', 
                fontFamily: 'futura', 
              }} 
              fluid
            >
              <FormStyle>
                <Form>
                  <Form.Input
                    required
                    autoFocus={"true"}
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
                    placeholder='Message...'
                    name="body"
                    value={body} 
                    onChange={this.handleChange}
                  >
                  </Form.TextArea>
                  <Form.Button 
                    style={{ width: '100px', height: '50px'}} 
                    inverted 
                    floated='right'
                    color='black' 
                    onClick={this.handleSubmit} 
                  >
                    Send
                  </Form.Button>
                </Form>
              </FormStyle>
            </Container>
          </Grid.Column>
        </Grid>
        <ContactFooter>
          <Footer />
        </ContactFooter>
      </Fragment>
    )
  }
} 



export default Contact
