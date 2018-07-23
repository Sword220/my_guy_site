import React from 'react'
import { 
  Header, 
  Container, 
  Divider, 
  Footer, 
  Rating,
  Image,
} from 'semantic-ui-react'
import InfiniteScroll from 'react-infinite-scroller'
import styled from 'styled-components'
import Background from '../images/MyGuy_Background.jpg'

const WordCloud = styled.div`
  background-image: url('../images/MyGuy_Background.jpg') !important;
  background-size: cover !important;
`

//TODO connect to graph api for reviews

class Reviews extends React.Component {

  render() {
    return(
      <Container fluid style={{ display: 'flex', 
                                justifyContent: 'center', 
                                flexDirection: 'column',
                                backgroundImage: '../images/MyGuy_Background.jpg', 
                                color: 'white', 
                                padding: '50px' }}>
        <Header style={{ color: 'white' }} as='h1' textAlign='center'>Reviews</Header>
        <div style={{ display: 'flex',
                      justifyContent: 'center',
                      height: '500px', 
                      overflow: 'auto',
                      border: '2px solid grey', }} >
          <InfiniteScroll hasMore={false} pageStart={0}>
            <Header style={{ color: 'white', padding: '20px 0px 0px 0px' }} as='h3'>
              Cole Larsen 
            </Header>
            <Rating icon='star' size='tiny' defaultRating={5} maxRating={5} />
            <Divider />
              <p>
                "We were in the process of moving into a house we recently purchased when disaster struck - sewer line backing<br /> 
                up into the downstairs bathroom. Our home warranty company sent out Cameron bright and early, and he got the<br /> 
                drain cleared in no time. Now we can finish moving and settling into our new home. Cameron is super friendly,<br /> 
                fast, and I couldn't be happier with the experience. I hope we don't meet again under these circumstances, but<br />
                I feel better knowing it will go well if it has to be done."
              </p>
              <hr />
            <Header style={{ color: 'white' }} as='h3'>
              Lindsay Adams
            </Header>
            <Rating icon='star' size='tiny' defaultRating={5} maxRating={5} />
            <Divider />
              <p>
                "Cameron was helping us move into our new home when he noticed a small drip from a pipe in the basement.<br />
                It turned out our sewage pipe coming from one upstairs toilet was clogged, so he came back with his equipment<br /> 
                and fixed the clog in less than 30 minutes. No mess left behind and a fully functional bathroom since. Highly<br /> 
                recommend My Guy!!"
              </p>
              <hr />
            <Header style={{ color: 'white' }} as='h3'>
              David Bigelow
            </Header>
            <Rating icon='star' size='tiny' defaultRating={5} maxRating={5} />
            <Divider />
              <p>
                "We’ve had a drain backing up in the basement for months. It started when the city installed new sewer lines<br/> 
                in the street and so we thought it was the new connection. The city has been out and said there is no problem.<br /> 
                Long story short we were introduced to Cameron through a Connect Utah interview. He came out this morning and<br /> 
                explained to us what the real problem was and had it fixed within minutes. He also gave us pointers for the future.<br /> 
                Great job Cameron. Exactly the kind of service we like to give our customers and expect from other service providers.<br /> 
                You will always be our Guy and the Guy we recommend!"
              </p>
              <hr />
            <Header style={{ color: 'white' }} as='h3'>
              Logan George
            </Header>
            <Rating icon='star' size='tiny' defaultRating={5} maxRating={5} />
            <Divider />
              <p>
                "I called Cameron to clear out what I thought was a clogged drain. Cameron listened to my problem and it didn't quite make<br /> 
                sense to him. Instead of going right for the drain he checked everything else out first and found the problem was actually<br /> 
                electrical. I tried to pay Cameron for his time but he insisted it was no problem and that he has happy he could help.<br /> 
                Great guy and very trustworthy."
              </p>
              <hr />
            <Header style={{ color: 'white' }} as='h3'>
              Brandi Bigelow
            </Header>
            <Rating icon='star' size='tiny' defaultRating={5} maxRating={5} />
            <Divider />
              <p>
                "My drain in the basement started backing up every time I did laundry. We called Cameron. He was great! He even put little booties<br />
                on the wheels of the cart. After, he made sure the washer would drain and cleaned up the area around the drain."
              </p>
              <hr />
            <Header style={{ color: 'white' }} as='h3'>
              Alex Bennet
            </Header>
            <Rating icon='star' size='tiny' defaultRating={5} maxRating={5} />
            <Divider />
              <p>
                "Cameron helped me get my toilet unclogged. He was very fast and friendly. Great company if you want a quick solution that is effective<br /> 
                and a good deal. Thanks My Guy drain solutions!"
              </p>
              <hr />
            <Header style={{ color: 'white' }} as='h3'>
              Tyler Nielson
            </Header>
            <Rating icon='star' size='tiny' defaultRating={5} maxRating={5} />
            <Divider />
              <p>
                "We live in a small apartment and needed our sink fixed. Cameron contacted me and got right over that day to fix our problem. He was<br />
                super friendly and courteous! Got the job done quickly and efficiently. I would highly recommend him to anyone!"
              </p>
              <hr />
            <Header style={{ color: 'white' }} as='h3'>
              David Lassig
            </Header>
            <Rating icon='star' size='tiny' defaultRating={5} maxRating={5} />
            <Divider />
              <p>
                "I can't say enough good things about My guy Drain Solutions. Cameron is very professional, friendly and does exceptional work! Would highly<br /> 
                recommend!!"
              </p>
              <hr />
            <Header style={{ color: 'white' }} as='h3'>
              Hannah Waiment Maizler
            </Header>
            <Rating icon='star' size='tiny' defaultRating={5} maxRating={5} />
            <Divider />
              <p>
                "Awesome service. The ceiling in the apartment we live in started to leak and the management called him, but very fast professional service.<br /> 
                If I had a house I would definitely call him! And will recommend Cameron to anyone."
              </p>
              <hr />
            <Header style={{ color: 'white' }} as='h3'>
              Apryl Field
            </Header>
            <Rating icon='star' size='tiny' defaultRating={5} maxRating={5} />
            <Divider />
              <p>
              "Cameron was very friendly and very knowledgeable, he unclogged the bath drain with no problem and was super fast. I would recommend his serivce<br /> 
              to friends and family."
              </p>
              <hr />
            <Header style={{ color: 'white' }} as='h3'>
              Amber Nixon
            </Header>
            <Rating icon='star' size='tiny' defaultRating={5} maxRating={5} />
            <Divider />
              <p>
                "Cameron was prompt and affordable. We will only use him for our drain issues in the future. I highly recommend him!"
              </p>
              <hr />
            <Header style={{ color: 'white' }} as='h3'>
              Chauntell Yvonne Cunningham
            </Header>
            <Rating icon='star' size='tiny' defaultRating={5} maxRating={5} />
            <Divider />
              <p>
                "Will definitely use my guy drain solutions again very friendly fast and affordable would highly recommend if you<br /> 
                need help with your drains"
              </p>
              <hr />
            <Header style={{ color: 'white' }} as='h3'>
              Billy Spears
            </Header>
            <Rating icon='star' size='tiny' defaultRating={5} maxRating={5} />
            <Divider />
              <p>
                "Cameron is fast, efficient, friendly and affordable! He's definitely our guy!"
              </p>
            <hr />
            <Header style={{ color: 'white' }} as='h3'>
              Kristin Fitzgerald Pritchard
            </Header>
            <Rating icon='star' size='tiny' defaultRating={5} maxRating={5} />
            <Divider />
              <p>
                "Fast and efficient."
              </p>
            <hr />
            <p></p>
          </InfiniteScroll>
        </div>
      </Container>
    )
  }
} 

export default Reviews