import { Link } from 'react-router-dom'
import { HiOutlineUser, HiOutlineShoppingBag } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBar from './SearchBar';
import CartDrawer from '../Layout/CartDrawer';
import React, { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';


const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [navDraverOpen, setNavDraverOpen] = useState(false)
    const {cart}=useSelector((state) => state.cart);
    const {user}=useSelector((state)=>state.auth)

    const cartItemCount = cart?.products?.reduce((total,product)=> total+product.quantity,0) || 0;

    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }
    const toggleNavDrawer = () => {
        setNavDraverOpen(!navDraverOpen)
    }
    return (
        <>
            <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
                {/* Logo -left */}
                <div>
                    <Link to="/" className='text-2xl font-medium'>Rabbit</Link>
                </div>


                {/* Center - Navigation Links */}

                <div className='hidden md:flex space-x-6'>
                    <Link to="/collections/all?gender=Men" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        Men
                    </Link>
                    <Link to="/collections/all?gender=Women" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        Women
                    </Link>
                    <Link to="/collections/all?category=Top Wear" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        Top Wear
                    </Link>
                    <Link to="/collections/all?category=Bottom Wear" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        Bottom Wear
                    </Link>
                </div>
                {/* Right- Icons */}
                <div className='flex items-center space-x-4'>
                    {user && user.role==="admin"  && (
                        <Link to="/admin" className="block bg-black px-2 rounded text-sm text-white">Admin</Link>
                    )}
                    
                    <Link to="/profile" className='hover:text-black'>
                        <HiOutlineUser className='h-6 w-6 text-gray-700' />
                    </Link>
                    <button onClick={toggleCartDrawer} className='relative hover:text-black'>
                        <HiOutlineShoppingBag className='h-6 w-6 text-gray-700' />
                        {cartItemCount > 0 && (
                        <span className='absolute -top-1 bg-[#ea2e0e] text-white text-xs rounded-full px-2 py-0.5'>
                          {cartItemCount}  
                            
                        </span>)}
                    </button>

                    {/* Search */}
                    <div className='overflow-hidden'>

                        <SearchBar />
                    </div>

                    <button onClick={toggleNavDrawer} className='md:hidden'>
                        <GiHamburgerMenu className='h-6 w-6 text-gray-700' />
                    </button>

                </div>
            </nav>
            <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
            {/* Mobile Navigation */}
            <div className={`bg-white fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full shadow-lg transform transition-transform duration-300 z-50 ${navDraverOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className='flex justify-end p-4 absolute top-[50px] right-[10px]'>
                    <button onClick={toggleNavDrawer}>
                        <IoCloseOutline className='h-6 w-6 text-gray-600' />
                    </button>
                </div>
                <div className='p-4 absolute top-[80px] bg-white text-black'>
                    <h2 className='text-xl font-semibold mb-4 mt-5'>Menu</h2>
                    <nav className='space-y-4'>
                        <Link to='/collections/all?gender=Men' onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black font-medium'>
                            Men
                        </Link>
                        <Link to='/collections/all?gender=Women' onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black font-medium'>
                            Women
                        </Link>
                        <Link to='/collections/all?category=Top Wear' onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black font-medium'>
                            Top Wear
                        </Link>
                        <Link to='/collections/all?category=Bottom Wear' onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black font-medium'>
                            Bottom Wear
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar
