import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFilters, fetchProductsByFilters } from '../../redux/slices/productsSlice';


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch();

    const navigate=useNavigate()

    const handleSearchToggle = () => {
        setIsOpen(!isOpen)
    }
    const handleSearch=(e)=>{
        e.preventDefault();
        dispatch(setFilters({search:searchTerm}));
        dispatch(fetchProductsByFilters({search:searchTerm}));
        navigate(`collections/all?search=${searchTerm}`)
        setIsOpen(false)
    }
    return (
        <div className={` flex items-center justify-center w-full transition-all duration-300 ${isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"} `}>
            {isOpen ? <form onSubmit={handleSearch} className='relative flex items-center justify-center w-full'>
                <div className='relative w-1/2'>
                    <input type="text" placeholder='Search' value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                    className='bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lh focus:outline-none w-full placeholder: text-gray-700' />
                    {/* Search-icon */}
                    <button type='submit' className=' absolute right-2 top-1/2 transform -translate-1/2 text-gray-600 hover:text-gray-800'>
                        <IoIosSearch className='h-6 w-6' />
                    </button>
                </div>
                {/* Close-btn */}
                <button type='button'
                onClick={handleSearchToggle}
                
                className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 cursor-pointer'>
                    <IoIosClose className='h-6 w-6' />

                </button>
            </form> : (
                <button onClick={handleSearchToggle}>
                    <IoIosSearch className='h-8 w-8' />
                </button>
            )}
        </div>
    )
}

export default SearchBar
