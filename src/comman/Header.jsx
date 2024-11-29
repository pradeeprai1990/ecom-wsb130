import React, { useContext } from 'react'
import { Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';
import { cartContext } from '../MainContext';


export default function Header() {
  let {cart}=useContext(cartContext)
  return (
    <div>
        <Navbar fluid rounded className='shadow-lg p-5'>
      <Navbar.Brand  href="https://flowbite-react.com">
       
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        
        <Navbar> <Link to={'/'}>  Home </Link></Navbar>
        <Navbar>  <Link to={'/cart'}> Cart ({cart.length}) </Link></Navbar>
       
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}
