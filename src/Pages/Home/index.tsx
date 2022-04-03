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
            <FeaturedProduct title={"Öne Çıkanlar"} />
            <Advirtise />
            <Advirtise />
            <FeaturedProduct title={"Çok Satan Ürünler"} />
            <FeaturedProduct title={"Fırsat Ürünleri"} />
            <Advirtise />
            <Advirtise />
            <Advirtise />
            <Advirtise />
        </div>
    )
}

export default Home
