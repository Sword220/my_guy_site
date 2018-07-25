import React from 'react'
import axios from 'axios'
import {
  Container,
  Header,
  Rating,
  Divider,
} from 'semantic-ui-react'
import InfiniteScroll from 'react-infinite-scroller'

class Reviews extends React.Component {
  state = { reviews : [] }

  componentDidMount() {
    axios.get('/api/reviews')
      .then( res => {
        this.setState({ reviews: res.data })
      })
  }

  render() {
    const { reviews } = this.state

    return(
      <Container fluid style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', color: 'white', padding: '50px' }}>
        <Header style={{ color: 'white', size: '50px' }} as='h1' textAlign='center'>
          Reviews
        </Header>
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
        </Container>
      </Container>
    )
  }

}

export default Reviews
