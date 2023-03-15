import React from 'react'
import logo from '../asserts/logo1.png'

const LogoPage = () => {
  return (
    <React.Fragment>
    <main>
      <div className="bg-white h-32 w-auto centered">
        <img src={logo} alt='image' className='w-32' />
      </div>
    </main>
  </React.Fragment>
  )
}

export default LogoPage