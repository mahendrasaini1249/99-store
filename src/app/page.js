import React from 'react'
import Banner from './comonents/home/Banner'
import PopularCategories from './comonents/home/PopularCategories'
import BestSellingProducts from './comonents/home/BestSellingProducts'
import HomeGlosery from './comonents/home/Home-Glosery'



export default function page() {
  return (
    <div>
      <Banner />
      <PopularCategories />
      <BestSellingProducts />
      <HomeGlosery/>
    </div>
  )
}
