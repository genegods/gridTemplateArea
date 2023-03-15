import React from 'react'
import { ThreeCocaData } from '../data/ThreeCocaData'

const GreePage = () => {
  return (
    <React.Fragment>
    <main>
      <div className="bg-green-100 w-auto h-32 grid grid-cols-3">
        {
            ThreeCocaData.map((item, index) => {
              return(
                <div key={index}>
                  <div className="centered h-32">
                    <img src={item.img} alt='image' className='h-28'/>
                  </div>
                </div>
              )
            })
        }
      </div>
    </main>
  </React.Fragment>
  )
}

export default GreePage