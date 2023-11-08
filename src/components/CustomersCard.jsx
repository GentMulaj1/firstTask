import React from 'react'
import './style/CustomersCard.css'
import CardColor from './CardColor'


const CustomersCard = ({ dateTime, status, image, color, name, description }) => {
  return (
    <div className='CustomersCard'>

        <div className="version__time">
            <span>{dateTime}</span>
        </div>

        <div className="info__and__fullname">
            <CardColor state={status} color={color}/>

            <div className='infoFullname'>
                <img src={image} alt="" />
                <p className='fullname'>
                    {name}
                </p>
            </div>
        </div>

        <div className="customerDescription">
            {/* File system changed from Dokan to CBFS Host Cloud Drive is now a netwrok drive Various bug fixes and stability improvements Share permissions re-design and optimization */}
            {description}

        </div>

        <button className="downloadBtn">
            Download
        </button>


    </div>
  )
}

export default CustomersCard