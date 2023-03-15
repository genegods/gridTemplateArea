import React from 'react'
import img from '../asserts/coca1.png'

const PicturePage = () => {
  return (
    <React.Fragment>
    <main>
      <div className=" bg-yellow-100 centered h-96">
        <img src={img} alt='image' className='w-auto h-80'/>
      </div>
    </main>
  </React.Fragment>
  )
}

export default PicturePage