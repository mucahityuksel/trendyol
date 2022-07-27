import React from 'react'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { MdOutlineFavorite } from 'react-icons/md'
import "./style.scss"


function FavoritesHeader() {
    return (
        <div className='favorite-header-container'>
            <div className='favorite-header-bar'>
                <div className='favorite-header-left'>
                    <div className='favorite-title'>
                        <MdOutlineFavorite size={"1.5em"} color="#f27a1a"></MdOutlineFavorite>
                        <span>Favorilerim</span>
                    </div>
                    
                </div>
                <div className='favorite-header-right'>
                    <div className='search-comp'>
                        <div className='header-search-bar'>
                            <div className="header-search">
                                <input className='search-input' placeholder='Favorilerimde ara'></input>
                                <FiSearch className='search-icon'></FiSearch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavoritesHeader
