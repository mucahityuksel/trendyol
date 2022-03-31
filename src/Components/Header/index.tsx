
import "./style.scss"
import { FiSearch } from "react-icons/fi"
import {  MdOutlineFavorite } from "react-icons/md"
import { FaShoppingCart } from "react-icons/fa"
import {  RiUser3Fill } from "react-icons/ri"

function Header() {
    return (
        <div className='header'>
            <div className='wrapper'>
                <div className='first-header'>
                    <ul className='header-top-list'>
                        <li><a href='#'>İndirim Kuponlarım</a></li>
                        <li><a href='#'>Trendyol'da Satış Yap</a></li>
                        <li><a href='#'>Yardım & Destek</a></li>
                    </ul>
                </div>
            </div>
            <div className='header-nav'>
                <div className='header-logo'>
                    <img src='https://cdn.dsmcdn.com/web/logo/ty-web.svg' alt="logo"></img>
                </div>
                <div className='search-comp'>
                    <div className='header-search-bar'>
                        <div className="header-search">
                            <input className='search-input' placeholder='Aradığınız ürün, ktegori veya markayı yazınız'></input>
                            <FiSearch className='search-icon'></FiSearch>
                        </div>
                    </div>
                </div>
                <div className='header-account'>
                    <div className='header-account-links'>
                        <div className='header-link-items'>

                            <div className='header-link-item'>
                                <RiUser3Fill className='header-list-icon'></RiUser3Fill>
                                <p>Giriş Yap</p>
                            </div>
                            <div className="user-notloggedin-container">
                                <div className="login-button">Giriş Yap</div>
                                <div className="signup-button">Üye Ol</div>
                            </div>
                        </div>
                        <div className='header-link-items'>

                            <div className='header-link-item'>
                                <MdOutlineFavorite className='header-list-icon'></MdOutlineFavorite>
                                <p>Favorilerim</p>
                            </div>
                        </div>
                        <div className='header-link-items'>

                            <div className='header-link-item'>
                                <FaShoppingCart className='header-list-icon'></FaShoppingCart>
                                <p>Sepetim</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header-categories-bar'>
                <div className='header-categories'>
                    <ul className='header-category-list'>
                        <li className='category-item'>KADIN</li>
                        <li className='category-item'>ERKEK</li>
                        <li className='category-item'>ÇOCUK</li>
                        <li className='category-item'>EV & MOBİLYA</li>
                        <li className='category-item'>SÜPERMARKET</li>
                        <li className='category-item'>KOZMETİK</li>
                        <li className='category-item'>AYAKKABI & ÇANTA</li>
                        <li className='category-item'>SAAT & AKSESUAR</li>
                        <li className='category-item'>ELEKTRONİK</li>
                        <li className='category-item'>SPOR & OUTDOOR</li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
