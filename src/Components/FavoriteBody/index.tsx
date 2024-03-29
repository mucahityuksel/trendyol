import axios from 'axios';
import { Key, useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import { FaStarHalf } from 'react-icons/fa';
import { VscClose } from 'react-icons/vsc'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteFavorite } from '../../redux/action/product';
import BlankFavorites from './blank';
import "./style.scss"


function FavoriteBody() {

    const user: any = localStorage.getItem("user")
    const [data, setData] = useState<any[]>([])
    const dispatch = useDispatch();
    const newData = useSelector((state: any) => state)
    const history = useHistory();
    const [load, setLoad] = useState(false)
    const [x, setX] = useState(0)

    const getDataFromApi = () => {
        axios.get(`https://trendyol-backend1.herokuapp.com/favorites?email=${user}`)
            .then((res) => {
                console.log(res)
                setData(res.data.favorites)
                console.log(data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getDataFromApi()
    }, [load])




    return (
        <div className='favorite-body-container'>
            <div className='favorite-body-bar'>
                {
                    data?.length > 0 ?
                    data?.map((item: any,key:Key) => {
                        return <div className='product-card1' key={key}>
                            <div className='product-header'>
                                <div className='product-features-bar'>
                                    {
                                        item.cargo === true ? <div className='product-cargo'>
                                            <div className='cargo'>
                                                <div className='cargo-text'> KARGO BEDAVA</div>
                                            </div>
                                        </div> : <div></div>
                                    }
                                    <div>
                                        {
                                            item.cargo === false ? <div className='product-sale1'>
                                                <div className='product-sale-icon1'>
                                                    <div className='sale1'>
                                                        <img alt='' src='https://cdn.dsmcdn.com/mnresize/250/250/marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png'></img>
                                                    </div>
                                                </div>
                                            </div> : <div></div>
                                        }
                                    </div>
                                </div>
                                <div className='delete-icon'>
                                    <div className='icon' onClick={async () => {

                                        dispatch(deleteFavorite(item, user))
                                        setLoad(!load)
                                        getDataFromApi()


                                    }}>
                                        <VscClose size={"2em"} className="close-icon" onClick={async () => {


                                            //setLoad(!load)
                                            getDataFromApi()


                                        }}></VscClose>
                                    </div>

                                </div>
                            </div>

                            <div className='product-image1'><img alt='' src={item.image}></img> </div>
                            <div className='product-card-titles'>
                                <div className="product-name1"><span>{item.brand}</span></div>
                                <div className="product-name2"><span>{item.name}</span> </div>
                            </div>
                            <div className="product-rating1">
                                <ul className="rating-list">
                                    <li>{item.star === 0.5 ? <FaStarHalf size="1em" color="#ffca28" /> : <AiFillStar size="1em" color={item.star >= 1 ? "#ffca28" : "gray"} />}</li>
                                    <li>{item.star === 1.5 ? <FaStarHalf size="1em" color="#ffca28" /> : <AiFillStar size="1em" color={item.star >= 2 ? "#ffca28" : "gray"} />}</li>
                                    <li>{item.star === 2.5 ? <FaStarHalf size="1em" color="#ffca28" /> : <AiFillStar size="1em" color={item.star >= 3 ? "#ffca28" : "gray"} />}</li>
                                    <li>{item.star === 3.5 ? <FaStarHalf size="1em" color="#ffca28" /> : <AiFillStar size="1em" color={item.star >= 4 ? "#ffca28" : "gray"} />}</li>
                                    <li>{item.star === 4.5 ? <FaStarHalf size="1em" color="#ffca28" /> : <AiFillStar size="1em" color={item.star >= 5 ? "#ffca28" : "gray"} />}</li>
                                    <li className="rating-text">
                                        <span>({item.question}) </span>
                                    </li>
                                </ul>
                            </div>
                            <div className='product-price'>
                                <span>{item.price} TL</span>
                            </div>
                            <div className='add-basket'>
                                <button>Sepete Ekle</button>
                            </div>
                        </div>
                    }): <BlankFavorites/>
                }

            </div>
        </div>
    )
}

export default FavoriteBody
