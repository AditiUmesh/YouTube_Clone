import React from 'react'
import { useSelector } from 'react-redux'

const Siderbar = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className='col-span-1'>
      <ul>
        <li> Home</li>
        <li> Shorts</li>
        <li>Subscriptions</li>
        <li>You</li>
      </ul>
    </div>
  )
}

export default Siderbar