import React from 'react'
import FavoritesHeader from '../../Components/FavoritesHeader'
import Header from '../../Components/Header'

function FavoritePage() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <Header></Header>
            <FavoritesHeader></FavoritesHeader>
        </div>
    )
}

export default FavoritePage
