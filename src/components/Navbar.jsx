import React from 'react'
import './style/Navbar.css'
import { Link } from '@mui/material'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="left__navbar">
            <Link href="/">1.1</Link>
            <Link href="/customers">1.2</Link>
        </div>
    </div>
  )
}

export default Navbar