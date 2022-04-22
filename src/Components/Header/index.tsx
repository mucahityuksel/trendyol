
import "./style.scss"
import { FiMail, FiSearch } from "react-icons/fi"
import { MdOutlineFavorite ,MdLiveHelp} from "react-icons/md"
import { FaBox, FaShoppingCart, FaUser } from "react-icons/fa"
import { RiUser3Fill, RiLogoutBoxRLine, RiMessage2Line } from "react-icons/ri"
import { useEffect, useState } from "react"
import categories from "../../kadinCategory.json"
import menCategories from "../../erkekCategory.json"
import { useHistory } from "react-router-dom"
import { BsWallet2 } from "react-icons/bs"
import { HiOutlineTicket } from "react-icons/hi"
import { GiCutDiamond } from "react-icons/gi"



function Header() {

    const [active, setActive] = useState<boolean>(false)
    const [active1, setActive1] = useState<boolean>(false)
    const history = useHistory();

    const [load, setLoad] = useState<boolean>(false);
    const user: any = localStorage.getItem("user")

    useEffect(() => {

        console.log(user)
        if (user !== "") {
            setLoad(true)
            console.log(user)
        } else {
            setLoad(false)
        }
    }, [load])
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
                                <p >{load === false ? "Giriş Yap" : "Hesabım"}</p>
                            </div>
                            {
                                load === false ? <div className="user-notloggedin-container">
                                    <div className="login-button" onClick={() => history.push("/login")}>Giriş Yap</div>
                                    <div className="signup-button" onClick={() => history.push("/login")}>Üye Ol</div>
                                </div> :
                                    <div className="user-notloggedin-container1">
                                        <div className="username">{user}</div>
                                        <div className="login-button1">
                                            <FaBox></FaBox>
                                            <span>Siparişlerim</span>
                                        </div>
                                        <div className="login-button1">
                                            <RiMessage2Line></RiMessage2Line>
                                            <span>Değerlendirmelerim</span>
                                        </div>
                                        <div className="login-button1">
                                            <FiMail></FiMail>
                                            <span>Mesajlarım</span>
                                        </div>
                                        <div className="login-button1">
                                            <BsWallet2></BsWallet2>
                                            <span>Trendyol Cüzdanım</span>
                                        </div>
                                        <div className="login-button1">
                                            <HiOutlineTicket></HiOutlineTicket>
                                            <span>İndirim Kuponlarım</span>
                                        </div>
                                        <div className="login-button1">
                                            <FaUser></FaUser>
                                            <span>Kullanıcı Bilgilerim</span>
                                        </div>
                                        <div className="login-button1">
                                            <GiCutDiamond></GiCutDiamond>
                                            <span>Trendyol Elite</span>
                                        </div>
                                        <div className="login-button1">
                                            <MdLiveHelp></MdLiveHelp>
                                            <span>Trendyol Asistan</span>
                                        </div>
                                        <div className="login-button1" onClick={() => {
                                        
                                            localStorage.setItem("user", "")
                                            history.push("/login")
                                        }}>
                                            <RiLogoutBoxRLine></RiLogoutBoxRLine>
                                            <span>Çıkış Yap</span>
                                        </div>

                                    </div>
                            }
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
