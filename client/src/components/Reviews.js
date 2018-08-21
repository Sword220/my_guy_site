import React, { Fragment } from 'react'
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
import styled from 'styled-components'
import Footer from './Footer'

const ReviewFooter = styled.footer`
  padding-top: 50px;
`

class Reviews extends React.Component {
  state = { reviews : [], name: '', body: '', moreReviews: false }

  componentDidMount() {
    axios.get('/api/reviews')
      .then( res => {
        this.setState({ reviews: res.data })
      }
    )
  }

  loadReviews = () => {
    this.setState({ moreReviews: this.state.moreReviews })
  }
  
  render() {
    const { reviews } = this.state

    return(
      <Fragment>
        <Grid>
          <Grid.Column width={16}>
            <Container fluid style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', color: 'white', padding: '50px' }}>
              <Header style={{ color: 'white' }} as='h1' textAlign='center'>
                Reviews
              </Header>
              <Container fluid>
                <div style={{ display: 'flex', justifyContent: 'center', background: 'black', height: '450px', overflow: 'auto', border: '2px solid grey' }}>
                  <InfiniteScroll hasMore={false} loadMore={() => this.loadReviews()} pageStart={0}>
                    <div>
                      {reviews.map ( r => 
                      <div key={r.id} style={{ padding: '20px' }}>
                        <Header style={{ color: 'white' }} as='h3'>{r.name}</Header>
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
              <Button style={{ padding: '15px 15px 10px 15px', margin: '10px' }} color='facebook' href='https://www.facebook.com/pg/cameron801/reviews/?ref=page_internal' >
                <Icon name='facebook' /> Leave a Review on Facebook
              </Button>
              <ReviewFooter>
                <Footer />
              </ReviewFooter>
            </Container>
          </Grid.Column>
        </Grid>
      </Fragment>
    )
  }

}

export default Reviews
