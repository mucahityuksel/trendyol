
import "./style.scss"
import { FiSearch } from "react-icons/fi"
import { MdOutlineFavorite } from "react-icons/md"
import { FaShoppingCart } from "react-icons/fa"
import { RiUser3Fill } from "react-icons/ri"
import { useEffect, useState } from "react"
import categories from "../../kadinCategory.json"
import menCategories from "../../erkekCategory.json"
import { useHistory } from "react-router-dom"
import axios from "axios"
import x from "../FeaturedProduct/products.json"

function Header() {

    const [active, setActive] = useState<boolean>(false)
    const [active1, setActive1] = useState<boolean>(false)
    const [data, setData] = useState<any>()
    const history = useHistory();

    

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
                    <img src='https://cdn.dsmcdn.com/web/logo/ty-web.svg' alt="logo" onClick={() => history.push("/")}></img>
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

                            <div className='header-link-item' >
                                <RiUser3Fill className='header-list-icon' size={"2.5em"}></RiUser3Fill>
                                <p >Giriş Yap</p>
                            </div>
                            <div className="user-notloggedin-container">
                                <div className="login-button" onClick={() => history.push("/login")}>Giriş Yap</div>
                                <div className="signup-button" onClick={() => history.push("/login")}>Üye Ol</div>
                            </div>
                        </div>
                        <div className='header-link-items'>

                            <div className='header-link-item'>
                                <MdOutlineFavorite className='header-list-icon' size={"2.5em"}></MdOutlineFavorite>
                                <p>Favorilerim</p>
                            </div>
                        </div>
                        <div className='header-link-items'>

                            <div className='header-link-item'>
                                <FaShoppingCart className='header-list-icon' size={"2.5em"}></FaShoppingCart>
                                <p>Sepetim</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header-categories-bar'>
                <nav className='header-categories'>
                    <ul className='header-category-list'>
                        <li className='category-item' onMouseOver={() => { setActive(true) }} onMouseOut={() => setActive(false)} >KADIN
                            <div className={active === true ? "subnav-active" : "subnav"}>
                                <div className="subnav-center">
                                    {
                                        categories.categories.map((data: any) => {
                                            return <div className="subnav-column">
                                                {
                                                    <div>
                                                        <div className="category-name">{data.name}</div>
                                                        {data.subCategories !== [] ? data.subCategories.map((item: any) => {
                                                            return <div className="sub-categories">{item.name} </div>
                                                        }) : <div></div>}
                                                    </div>
                                                }
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </li>
                        <li className='category-item' onMouseOver={() => { setActive1(true) }} onMouseOut={() => setActive1(false)} >ERKEK
                            <div className={active1 === true ? "subnav-active" : "subnav"}>
                                <div className="subnav-center">
                                    {
                                        menCategories.categories.map((data: any) => {
                                            return <div className="subnav-column">
                                                {
                                                    <div>
                                                        <div className="category-name">{data.name}</div>
                                                        {data.subCategories !== [] ? data.subCategories.map((item: any) => {
                                                            return <div className="sub-categories">{item.name} </div>
                                                        }) : <div></div>}
                                                    </div>
                                                }
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </li>
                        <li className='category-item'>ÇOCUK</li>
                        <li className='category-item'>EV & MOBİLYA</li>
                        <li className='category-item'>SÜPERMARKET</li>
                        <li className='category-item'>KOZMETİK</li>
                        <li className='category-item'>AYAKKABI & ÇANTA</li>
                        <li className='category-item'>SAAT & AKSESUAR</li>
                        <li className='category-item'>ELEKTRONİK</li>
                        <li className='category-item'>SPOR & OUTDOOR</li>

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
