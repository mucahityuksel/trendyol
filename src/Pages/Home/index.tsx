import React from 'react'
import Advirtise from '../../Components/Advertise'
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
        </div>
    )
}

export default Home
