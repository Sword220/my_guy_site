import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from 'semantic-ui-react'

class NoMatch extends React.Component {
  render() {
    return(
      <Header as='h1' textAlign='center'>
        No Route Match Return <Link to='/'>Home</Link>
      </Header>
    )
  }
}

export default NoMatch