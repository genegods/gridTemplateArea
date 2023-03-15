import React from 'react'
import grayImg from '../asserts/coca4.png'

const GrayPage = () => {
  return (
    <React.Fragment>
    <main>
      <div className='w-auto h-64 bg-gray-100 centered'>
        <img src={grayImg} alt='image' className='h-60'/>
      </div>
    </main>
  </React.Fragment>
  )
}

export default GrayPage