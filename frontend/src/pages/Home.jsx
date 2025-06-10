import React, { useEffect,useState } from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrival from '../components/Products/NewArrival'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid'
import FeaturedCollection from '../components/Products/FeaturedCollection'
import FeaturesSection from '../components/Products/FeaturesSection'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByFilters } from '../redux/slices/productsSlice'
import axios from 'axios';

// const placeholderProducts=[
//   {
//         _id:8,
//         name:"Product 1",
//         price:100,
//         images:[
//             {
//                 url:"https://picsum.photos/500/500?random=8",
//             }
//         ]
//     },
//     {
//         _id:5,
//         name:"Product 2",
//         price:100,
//         images:[
//             {
//                 url:"https://picsum.photos/500/500?random=16",
//             }
//         ]
//     },
//     {
//         _id:6,
//         name:"Product 3",
//         price:100,
//         images:[
//             {
//                 url:"https://picsum.photos/500/500?random=5",
//             }
//         ]
//     },
//     {
//         _id:7,
//         name:"Product 4",
//         price:100,
//         images:[
//             {
//                 url:"https://picsum.photos/500/500?random=14",
//             }
//         ]
//     },
//     {
//         _id:9,
//         name:"Product 1",
//         price:100,
//         images:[
//             {
//                 url:"https://picsum.photos/500/500?random=10",
//             }
//         ]
//     },
//     {
//         _id:10,
//         name:"Product 2",
//         price:100,
//         images:[
//             {
//                 url:"https://picsum.photos/500/500?random=9",
//             }
//         ]
//     },
//     {
//         _id:11,
//         name:"Product 3",
//         price:100,
//         images:[
//             {
//                 url:"https://picsum.photos/500/500?random=11",
//             }
//         ]
//     },
//     {
//         _id:12,
//         name:"Product 4",
//         price:100,
//         images:[
//             {
//                 url:"https://picsum.photos/500/500?random=12",
//             }
//         ]
//     },
// ]
const Home = () => {
    const dispatch = useDispatch();
    const{products,loading,error}=useSelector((state) => state.products);
    const[bestSellerProduct, setBestSellerProduct] = useState(null);
    useEffect(() => {
        //Fetch products for specific category
        dispatch(fetchProductsByFilters({
                gender:"Women",
                category:"Bottom Wear",
                limit:8
            })
        );
        //Fetch best seller product
         const fetchBestSeller=async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`);
                setBestSellerProduct(response.data);
                // console.log("Fetched best seller:", response.data); 
            }catch (error) {
                console.error("Error fetching best seller product:", error);
            }
            
        }
        fetchBestSeller();
       
       
    }, [dispatch]);
     
       


   
  return (
    <div>
      <Hero/>
      <GenderCollectionSection/>
      <NewArrival/>
      {/* Best seller */}
      <h2 className="text-3xl text-center font-bold mb-4">
        Best Seller
      </h2>
      {bestSellerProduct?(
        <ProductDetails productId={bestSellerProduct._id}/>
      ):(
        <p className='text-center'>Loading best seller product ...</p>
      )}
      
      


      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={products} loading={loading} error={error}/>
      </div>
      <FeaturedCollection/>
      <FeaturesSection/>
    </div>
  )
}

export default Home
