import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
   <div className="conatiner-fluid">
     <nav className='flex items-center justify-between bg-white shadow-md px-24 py-4'>
       <div className="">
         <h1>Logo</h1>
       </div>
       <div className="">
         <ul className='flex items-center space-x-4'>
           <li> <Link to="/"> Home </Link>  </li>
           <li> <Link to="/about">About Us</Link> </li>
           <li> <Link to="/port">  Portfolio </Link> </li>
           <li> <Link to="/blogs">  Blogs </Link> </li>
           <li> <Link to="/contact"> Contact Us  </Link> </li>
         </ul>
       </div>
     </nav>
   </div>
  )
}

export default Nav