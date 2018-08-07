import React from 'react'
import axios from 'axios'
import {
  Container,
  Header,
  Rating,
  Divider,
  Button,
  Grid,
  Icon,
} from 'semantic-ui-react'
import InfiniteScroll from 'react-infinite-scroller'

class Reviews extends React.Component {
  state = { reviews : [], name: '', body: '' }

  componentDidMount() {
    axios.get('/api/reviews')
      .then( res => {
        this.setState({ reviews: res.data })
      }
    )
  }
  
  render() {
    const { reviews } = this.state

    return(
      <Grid>
        <Grid.Column width={16}>
          <Container fluid style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', color: 'white', padding: '50px' }}>
            <Header style={{ color: 'white' }} as='h1' textAlign='center'>
              Reviews
            </Header>
            <Container fluid>
              <div style={{ display: 'flex', justifyContent: 'center', background: 'black', height: '500px', overflow: 'auto', border: '2px solid grey' }}>
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
            </Container>
              <Button style={{ padding: '15px', margin: '10px' }} color='facebook' href='https://www.facebook.com/pg/cameron801/reviews/?ref=page_internal' >
                <Icon name='facebook' /> Facebook
              </Button>
          </Container>
        </Grid.Column>
      </Grid>
    )
  }

}

export default Reviews
