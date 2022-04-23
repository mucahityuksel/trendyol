import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { User } from '../../Pages/Login/type';
import { getSelected } from '../../redux/action/product';
import { Products } from '../FeaturedProduct/type';
import "./style.scss"


function FavoriteBody() {

    const user: any = localStorage.getItem("user")
    const [data, setData] = useState<any[]>([])
    useEffect(() => {
        axios.get(`http://localhost:3001/favorites?email=${user}`)
            .then((res) => {
                console.log(res)
                setData(res.data.favorites)
                console.log(data)
            })
            .catch((err) => console.log(err))
    }, [])



    return (
        <div className='favorite-body-container'>
            <div className='favorite-body-bar'>
                {
                    data?.map((item: any) => {
                        return <div>{item.brand}</div>
                    })
                }
                {/* <div>
                    <div className="product-card" onClick={() => {
                        dispatch(getSelected(item.id))
                        setX(item.id)
                        history.push(`/product/${item.id}`)
                    }}>
                        <div className='product-image'><img alt='' src={item.image}></img> </div>
                        <div className="product-name"><span>{item.brand}</span></div>
                        <div className="product-name1"><span>{item.name}</span> </div>


                        <div className='product-details'>
                            <div>
                                <div className='product-like'>
                                    <div className='icon-div'
                                        onClick={() => {
                                 
                                        }}
                                    ><MdOutlineFavoriteBorder className='like-icon'></MdOutlineFavoriteBorder></div>
                                </div>
                                {
                                    item.cargo === true ? <div className='product-cargo'>
                                        <div className='cargo'>
                                            <div className='cargo-text'> KARGO BEDAVA</div>
                                        </div>
                                    </div> : <div></div>
                                }
                            </div>
                        </div>
                        {item.mostSales === true ? <div className='product-sale'>
                            <div className='product-sale-icon'>
                                <div className='sale'>
                                    <img alt='' src='https://cdn.dsmcdn.com/mnresize/250/250/marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png'></img>
                                </div>
                            </div>
                        </div> : <div></div>}
                        <div className='product-price'>
                            <span className='price'>{item.price} TL</span>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default FavoriteBody
