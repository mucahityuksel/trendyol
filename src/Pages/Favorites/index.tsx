import React from 'react'
import FavoriteBody from '../../Components/FavoriteBody'
import FavoritesHeader from '../../Components/FavoritesHeader'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'

function FavoritePage() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <Header></Header>
            <FavoritesHeader></FavoritesHeader>
            <FavoriteBody></FavoriteBody>
            <Footer></Footer>
        </div>
    )
}

export default FavoritePage
