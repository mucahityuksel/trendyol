import React from 'react'
import Advirtise from '../../Components/Advertise'
import FeaturedProduct from '../../Components/FeaturedProduct'
import Header from '../../Components/Header'
import HomeSlider from '../../Components/HomeSlider'


function Home() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <Header />
            <HomeSlider />
            <Advirtise />
            <FeaturedProduct />
        </div>
    )
}

export default Home
