import React from 'react'
import MainContainer from './MainContainer'
import Siderbar from './Siderbar'

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
    <Siderbar/>
    <MainContainer/>
    </div>
  )
}

export default Body