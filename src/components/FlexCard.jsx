import React from 'react'
import './style/FlexCard.css'

const FlexCard = ({ icon, cardTitle, cardDescription}) => {
  return (
    <div className='FlexCard'>
        <div className="left__flexCard">
            {icon}
        </div>
        
        <div className="right__flexCard">
            <h4>
                {cardTitle}
            </h4>

            <span>
                {cardDescription}
            </span>
        </div>
        
    </div>
  )
}

export default FlexCard