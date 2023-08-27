import React from 'react'
import { PropagateLoader, ScaleLoader } from 'react-spinners'

const Loader = () => {
  return (
    <PropagateLoader
  color="#3641d6"
  size={15}
  speedMultiplier={0.8}
/>
  )
}

export default Loader;

export const SecondaryLoader = () => {
  
      return (
        <ScaleLoader color="#021914" height={15} loading />
      )
}

