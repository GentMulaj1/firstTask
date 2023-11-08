import React from 'react'
import './Customers.css'
import CustomersCard from '../components/CustomersCard'

const customers = [
  {
    dateTime: "3.3.0 (14/05/2018)",
    status: "New",
    image: "https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/04/16113750/Elon-scaled.jpg",
    color: "rgb(0,200,82)",
    name: "Kevin Joe",
    description: "File system changed from Dokan to CBFS Host Cloud Drive is now a netwrok drive Various bug fixes and stability improvements Share permissions re-design and optimization",

  },
  {
    dateTime: "3.1.0 (20/05/2015)",
    status: "Fix",
    image: "https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/04/16113750/Elon-scaled.jpg",
    color: "rgb(41,99,254)",
    name: "Kevin Joe",
    description: `Introducting Host Cloud Drive - virtual drive functionality New Share options and management New, moew user friendly design Sync optimizations Various performance improvements and bug fixes`,

  },
  {
    dateTime: "3.1.0 (20/05/2015)",
    status: "Improvement",
    image: "https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/04/16113750/Elon-scaled.jpg",
    color: "rgb(195,90,254)",
    name: "Kevin Joe",
    description: "Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes",

  },
]

const Customers = () => {
  return (
    <div className='Customers'>

    {Array.from({ length: 3 }).map(() => (
        <div className='test' key={Math.floor(Math.random() * 99)}>
        {customers.map((customer) => (
          <CustomersCard 
            key={Math.floor(Math.random() * 99)}
            dateTime={customer.dateTime}
            status={customer.status}
            image={customer.image}
            color={customer.color}
            name={customer.name}
            description={customer.description}
          />
        ))}
        </div>
    ))}

    

     
   
    </div>
  )
}

export default Customers