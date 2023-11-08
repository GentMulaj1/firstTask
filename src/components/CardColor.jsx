import React from 'react'
import './style/CustomersCard.css'

const CardColor = ({ state, color }) => {
  return (
    <div className='infoBtn' style={{backgroundColor: color}}> 
        {state}
    </div>
  )
}

export default CardColor