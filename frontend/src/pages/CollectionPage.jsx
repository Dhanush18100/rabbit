import React,{useState,useEffect, useRef} from 'react'
import { FaFilter } from "react-icons/fa";
import FilterSidebar from '../components/Products/FilterSidebar';
import SortOption from '../components/Products/SortOption';
import ProductGrid from '../components/Products/ProductGrid';
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByFilters } from '../redux/slices/productsSlice';
const CollectionPage = () => {

    const {collection}=useParams();
    const [searchParams]=useSearchParams()
    const dispatch=useDispatch();
    const{products,loading,error}=useSelector((state)=>state.products)
    const queryParams = Object.fromEntries([...searchParams]);
    
    useEffect(() => {
        // Dispatch an action to fetch products based on the collection and query parameters
        dispatch(fetchProductsByFilters({ collection, ...queryParams }));
    }, [dispatch, collection, searchParams]);

    const sidebarRef=useRef(null)
    const[isSidebarOpen,setIsSidebarOpen]=useState(false);

    const toggleSidebar=()=>{
        setIsSidebarOpen(!isSidebarOpen)
    }

    const handleClickOutside=(e)=>{
        //close sidebart
        if(sidebarRef.current && !sidebarRef.current.contains(e.target)){
            setIsSidebarOpen(false);
        }
    }

    // useEffect(() => {
    //  //Event listens for quick
    //  document.addEventListener("mousedown",handleClickOutside);
    //  //clean event listner
    //  document.removeEventListener("mousedown",handleClickOutside)
    // }, [])

    useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);
    
    // useEffect(() => {
    //     setTimeout(() => {
    //         const fetchProducts = [
    //             {
    //                 _id: 8,
    //                 name: "Product 1",
    //                 price: 100,
    //                 images: [
    //                     {
    //                         url: "https://picsum.photos/500/500?random=8",
    //                     }
    //                 ]
    //             },
    //             {
    //                 _id: 5,
    //                 name: "Product 2",
    //                 price: 100,
    //                 images: [
    //                     {
    //                         url: "https://picsum.photos/500/500?random=16",
    //                     }
    //                 ]
    //             },
    //             {
    //                 _id: 6,
    //                 name: "Product 3",
    //                 price: 100,
    //                 images: [
    //                     {
    //                         url: "https://picsum.photos/500/500?random=5",
    //                     }
    //                 ]
    //             },
    //             {
    //                 _id: 7,
    //                 name: "Product 4",
    //                 price: 100,
    //                 images: [
    //                     {
    //                         url: "https://picsum.photos/500/500?random=14",
    //                     }
    //                 ]
    //             },
    //             {
    //                 _id: 9,
    //                 name: "Product 1",
    //                 price: 100,
    //                 images: [
    //                     {
    //                         url: "https://picsum.photos/500/500?random=10",
    //                     }
    //                 ]
    //             },
    //             {
    //                 _id: 10,
    //                 name: "Product 2",
    //                 price: 100,
    //                 images: [
    //                     {
    //                         url: "https://picsum.photos/500/500?random=9",
    //                     }
    //                 ]
    //             },
    //             {
    //                 _id: 11,
    //                 name: "Product 3",
    //                 price: 100,
    //                 images: [
    //                     {
    //                         url: "https://picsum.photos/500/500?random=11",
    //                     }
    //                 ]
    //             },
    //             {
    //                 _id: 12,
    //                 name: "Product 4",
    //                 price: 100,
    //                 images: [
    //                     {
    //                         url: "https://picsum.photos/500/500?random=12",
    //                     }
    //                 ]
    //             },
    //         ];
    //         setProducts(fetchProducts)

    //     },1000);
    // }, [])

    return (
        <div  className='flex flex-col lg:flex-row'>
          {/* Mobile filter button   */}

          <button onClick={toggleSidebar} className="lg:hidden border p-2 flex justify-center items-center">
            <FaFilter className='mr-2' /> Filter
          </button>

          {/* Filter sidebar */}
          <div ref={sidebarRef} className={`${isSidebarOpen? "translate-x-0":"-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
            <FilterSidebar/>
          </div>

          <div>
            <div className="flex-grow p-4">
                <h2 className="text-2xl uppercase mb-4">All Collection</h2>

                {/* Sort option */}
                <SortOption/>

                {/* Product Gid */}
                <ProductGrid products={products} loading={loading} error={error}/>
            </div>
          </div>

        </div>
    )
}

export default CollectionPage
