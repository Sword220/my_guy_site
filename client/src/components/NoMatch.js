import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from 'semantic-ui-react'

class NoMatch extends React.Component {
  render() {
    return(
      <Header as='h1' textAlign='center' style={{ color: 'white' }}>
        You Won't Find Your Guy Here! 
        Return to the <Link to='/'>Home Page</Link>!
      </Header>
    )
  }
}

export default NoMatch