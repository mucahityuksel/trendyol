import { AiFillStar, AiOutlineRight, AiOutlineInfoCircle } from "react-icons/ai"
import { FaStarHalf, FaCarSide } from "react-icons/fa"
import { BsFillBookmarkFill, BsTagFill } from "react-icons/bs"
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { SiHomeassistantcommunitystore } from "react-icons/si"
import { IoMdText } from "react-icons/io"
import "./style.scss"
import { useParams } from "react-router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addFavorite, getSelected } from "../../redux/action/product"
import { Products } from "../FeaturedProduct/type"
import { Loader } from "rsuite"

function Detail(data: { data: Products[] }) {


    const params: any = useParams();
    const dispatch = useDispatch();
    const user: any = localStorage.getItem("user")
    const data1 = useSelector((state: any) => state.product.selected)
    useEffect(() => {
        console.log(data)
        dispatch(getSelected(params.id))
    }, [])
    return (
        <div className="product-detail-container">
            {
                data.data.length > 0 ? <div className="detail-bar">
                    <div className="left-side">
                        <div className="product-image">

                            <div className='product-cargo'>
                                <div className='cargo'>
                                    <div className='cargo-text'> KARGO BEDAVA</div>
                                </div>
                            </div>

                            <img src={data.data[0].image[0]}></img>
                        </div>
                        <div className="product-detail">
                            <div className="product-title">
                                <b>{data.data[0].brand} </b> {data.data[0].name}
                            </div>
                            <div className="product-seller">
                                <span className="seller-name">Satıcı :</span>
                                <span className="seller"> {data.data[0].brand} </span>
                            </div>
                            <div className="product-rating">
                                <ul className="rating-list">
                                    <li>{data.data[0].star === 0.5 ? <FaStarHalf size="1em" color="#ffca28" /> : <AiFillStar size="1em" color={data.data[0].star >= 1 ? "#ffca28" : "white"} />}</li>
                                    <li>{data.data[0].star === 1.5 ? <FaStarHalf size="1em" color="#ffca28" /> : <AiFillStar size="1em" color={data.data[0].star >= 2 ? "#ffca28" : "white"} />}</li>
                                    <li>{data.data[0].star === 2.5 ? <FaStarHalf size="1em" color="#ffca28" /> : <AiFillStar size="1em" color={data.data[0].star >= 3 ? "#ffca28" : "white"} />}</li>
                                    <li>{data.data[0].star === 3.5 ? <FaStarHalf size="1em" color="#ffca28" /> : <AiFillStar size="1em" color={data.data[0].star >= 4 ? "#ffca28" : "white"} />}</li>
                                    <li>{data.data[0].star === 4.5 ? <FaStarHalf size="1em" color="#ffca28" /> : <AiFillStar size="1em" color={data.data[0].star >= 5 ? "#ffca28" : "white"} />}</li>
                                    <li className="rating-text">
                                        <span>{data.data[0].rating} Değerlendirme</span>
                                        <img src="https://cdn.dsmcdn.com/mobile/reviewrating/kamera-emoji6x.png"></img>
                                        <div className="divider"></div>
                                        <span>{data.data[0].question} Soru & Cevap </span>
                                    </li>
                                </ul>


                            </div>
                            <div className="product-price">
                                <span>{data.data[0].price} TL</span>
                            </div>
                            <div className="product-bookmark">
                                <BsFillBookmarkFill color="#f27a1a"></BsFillBookmarkFill>
                                <span>Koleksiyonlara ekle</span>
                            </div>
                            <div className="buy-container">
                                <div className="buy-button">
                                    <button>Sepete Ekle</button>
                                </div>
                                <div className="like-button" onClick={() => {
                                    dispatch(addFavorite(data.data[0], user))
                                }}>
                                    <MdOutlineFavoriteBorder className="like-icon" size="1.5em"></MdOutlineFavoriteBorder>
                                </div>

                            </div>
                            <div className="cargo-info">
                                <div className="cargo-info-text">
                                    <FaCarSide color="#0bc15c"></FaCarSide>
                                    <span className="cargo-deliver">Hızlı Teslimat</span>
                                    <span className="cargo-day">1 gün içinde kargoda</span>
                                </div>
                                <div className="favorites-info">
                                    <MdOutlineFavoriteBorder color="#999"></MdOutlineFavoriteBorder>
                                    <span>{data.data[0].like} favori</span>
                                </div>
                            </div>
                            <div className="product-information">
                                <div className="title">
                                    <span>Öne Çıkan Bilgiler</span>
                                </div>
                                <ul className="information-list">
                                    {
                                        data.data[0].productInformation.map((item: any) => {
                                            return <li>{item}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="right-side">
                        <div className="product-campaigne">
                            <div className="campaigne-header">
                                <span>ÜRÜNÜN KAMPANYALARI</span>
                            </div>
                            <div className="campaigne-body">
                                <BsTagFill color="#f27a1a"></BsTagFill>
                                <span>60 TL ve Üzeri Kargo Bedava</span>
                                <AiOutlineRight color="#f27a1a"></AiOutlineRight>
                            </div>
                            <div className="campaigne-footer">
                                <BsTagFill color="#f27a1a"></BsTagFill>
                                <div className="basket-info">
                                    <span>Sepette İndirimli</span>
                                    <p>Son 3 Gün!</p>
                                </div>
                                <AiOutlineRight color="#f27a1a"></AiOutlineRight>
                            </div>
                        </div>
                        <div className="product-brand">
                            <div className="brand-header">
                                <div className="brand-info">
                                    <span>{data.data[0].brand} </span>
                                    <div>{data.data[0].Seller.score} </div>
                                    <AiOutlineInfoCircle color="#f27a1a"></AiOutlineInfoCircle>
                                </div>
                            </div>

                            <div className="campaigne-footer1">
                                <SiHomeassistantcommunitystore color="#f27a1a"></SiHomeassistantcommunitystore>
                                <div className="basket-info">
                                    <span>Mağazayı Gör İndirimli</span>
                                    <p>{data.data[0].Seller.followers} Takipçi</p>
                                </div>

                                <AiOutlineRight color="#f27a1a"></AiOutlineRight>
                            </div>
                            <div className="campaigne-body">
                                <IoMdText color="#f27a1a"></IoMdText>
                                <span>Ürün Soruları ({data.data[0].productQuestion})</span>
                                <AiOutlineRight color="#f27a1a"></AiOutlineRight>
                            </div>
                        </div>

                    </div>
                </div> : <div><Loader /></div>
            }
        </div>
    )
}

export default Detail
