import React from 'react'
import axios from 'axios'
import {
  Container,
  Header,
  Rating,
  Divider,
  Button,
  Form,
  Grid,
} from 'semantic-ui-react'
import InfiniteScroll from 'react-infinite-scroller'

class Reviews extends React.Component {
  state = { reviews : [], showForm: false, name: '', body: '' }

  componentDidMount() {
    axios.get('/api/reviews')
      .then( res => {
        this.setState({ reviews: res.data })
      }
    )
  }

  addReview = (review) => {
    axios.post('/api/reviews')
      .then( res => {
        this.setState({ reviews: res.data, review})
      }
    )
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
    }
  
    handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/reviews', this.state)
      .then( res => {
        alert('Thanks for making us Your Guy!!')
        this.setState({ name: '', body: '' })
      })
    }

  reviewForm = () => {
    const { reviews, name, body, showForm } = this.state
    if(showForm)
      return(
        <div></div>
      )
  }
  
  render() {
    const { reviews, name, body } = this.state

    return(
      <Grid>
        <Grid.Column width={12} float='left'>
          <Container fluid style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', color: 'white', padding: '50px' }}>
            <Header style={{ color: 'white' }} as='h1' textAlign='center'>
              Reviews
            </Header>
            <Divider />
            <Container fluid>
              <div style={{ display: 'flex', justifyContent: 'center', height: '500px', overflow: 'auto', border: '2px solid grey' }}>
                <InfiniteScroll hasMore={false} pageStart={0}>
                  <div>
                    {reviews.map ( r => 
                    <div style={{ padding: '20px' }}>
                      <Header key={r.id} style={{ color: 'white' }} as='h3'>{r.name}</Header>
                      <Rating icon='star' size='tiny' defaultRating={5} maxRating={5} />
                      <Divider />
                        <p>{r.body}</p>
                      <hr />
                    </div>
                    )}
                    <p></p>
                  </div>
                </InfiniteScroll>
              </div>
              {/* <Button inverted color='black' onClick={() => {this.toggleForm()}}>
                    Form
              </Button> */}
            </Container>
          </Container>
        </Grid.Column>
        <Grid.Column width={4} style={{ display: 'flex', justifyContent: 'center'}}>
          <Container style={{ justifyContent: 'center' }}>
            <Form style={{ padding: '100px 0px 0px 0px' }}>
              <Form.Input
                    style={{ width: '300px'}}
                    required
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
              />
                <Form.TextArea 
                    style={{ height: '100px', width: '300px' }}
                    required
                    placeholder="Tell us what you think!"
                    name="body"
                    value={body} 
                    onChange={this.handleChange}
                  >
                  </Form.TextArea>
                  <Button inverted color='black' style={{ width: '100px'}} onClick={this.handleSubmit} >
                    post
                  </Button>
            </Form>
          </Container>
          </Grid.Column>
          </Grid>
    )
  }

}

export default Reviews
