import React from 'react'
import LandingPage from './LandingPage'

const Body = ({isSignedIn}) => {
  console.log(isSignedIn);
  return (
    <div>
      { isSignedIn ? <h1>Welcome to Blogger</h1>:<LandingPage/>}
    </div>
  )
}

export default Body