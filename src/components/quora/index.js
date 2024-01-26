import React from 'react';
import Screenshot7 from '../../assets/images/Screenshot (7).png'
import Screenshot8 from '../../assets/images/Screenshot (8).png'
import Screenshot9 from '../../assets/images/Screenshot (9).png'
import Screenshot10 from '../../assets/images/Screenshot (10).png'
function Quora() {
  return (
    <div className='container'>
        <div className='image-container'>
            <img className='image' alt='image' src={Screenshot7}/>
            <img className='image' alt='image' src={Screenshot8}/>
            <img className='image' alt='image' src={Screenshot9}/>
            <img className='image' alt='image' src={Screenshot10}/>
        </div>
    </div>
  )
}

export default Quora
