import React from 'react'
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
        </div>
    )
}

export default Home
