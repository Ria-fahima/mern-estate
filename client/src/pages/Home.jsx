import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';


export default function Home() {
  const [offerListings, setOfferListings] = useState([])
  const [sellListings, setSellListings] = useState([])
  const [rentListings, setRentListings] = useState([])
  SwiperCore.use([Navigation])

  console.log(sellListings)
  useEffect(() => {
    const fetchOfferListings = async() => {
      try{
        const res = await fetch('/api/listing/get?offer=true&limit=4')
        const data = await res.json();
        setOfferListings(data)
        fetchRentListings()
      }catch(error){
        console.log(error)
      }
    }

    const fetchRentListings = async() => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4')
        const data = await res.json();
        setRentListings(data)
        fetchSellListings()
      } catch (error) {
        console.log(error)
      }
    }

    const fetchSellListings = async() => {
      try {
        const res = await fetch('/api/listing/get?type=sell&limit=4')
        const data = await res.json();
        setSellListings(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchOfferListings()
  },[]);

  return (
    <div>
      {/* top */}
      <div className="flex flex-col gap-6 py-28 px-3 
      max-w-6xl mx-auto">
        <h1 className='text-red-800 font-bold text-3xl lg:text-6xl'>
          Discover your next <span className='text-red-700'>ideal</span><br/> destination</h1>
        <div className="text-slate-800 text-xs sm:text-sm">
        Embark on a journey with Real Estate, where dreams find their perfect home, 
        creating a haven for your ideal living space.
        <br/>

        Our collection of properties offers a rich tapestry of options, providing a spectrum 
        of choices for you to discover and select your perfect haven.
        </div>
        <Link to={"/search"} className="text-xs sm:text-sm 
        text-green-700 font-bold hover:underline">
          Get Started..
        </Link>
      </div>

      {/* swiper */}
      <Swiper navigation>
        {
          offerListings && offerListings.length > 0 && 
          offerListings.map((listing) => (
            <SwiperSlide>
              <div style={{background: `url(${listing.imageUrls[0]}) 
              center no-repeat`, backgroundSize: "cover"}} 
              className="h-[500px]" key={listing._id}></div>
            </SwiperSlide>
          ))
        }
      </Swiper>

      {/* listing results for offer, sale and rent */}
      <div className="max-w-6xl mx-auto p-3 flex 
      flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className='text-2xl font-semibold text-slate-800'>Recent Offers</h2>
              <Link className="text-sm text-blue-800 hover:underline" to={'/search?offer=true'}>
                Show more Offers
              </Link>
            </div>

            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} 
                key={listing._id}/>
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className='text-2xl font-semibold text-slate-800'>Recent Places for rent</h2>
              <Link className="text-sm text-blue-800 hover:underline" to={'/search?type=rent'}>
                Show more places for rent
              </Link>
            </div>

            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} 
                key={listing._id}/>
              ))}
            </div>
          </div>
        )}
        {sellListings && sellListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className='text-2xl font-semibold text-slate-800'>Recent places for Sale</h2>
              <Link className="text-sm text-blue-800 hover:underline" to={'/search?type=sell'}>
                Show more places for sale
              </Link>
            </div>

            <div className="flex flex-wrap gap-4">
              {sellListings.map((listing) => (
                <ListingItem listing={listing} 
                key={listing._id}/>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  )
}
