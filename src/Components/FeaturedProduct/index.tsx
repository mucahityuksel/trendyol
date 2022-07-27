import { Key, useEffect, useState } from 'react'
import "./style.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@brainhubeu/react-carousel/lib/style.css';
import { MdOutlineFavoriteBorder } from "react-icons/md"
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, fetchRequest, getSelected } from '../../redux/action/product';
import { useHistory } from 'react-router-dom';



function FeaturedProduct({ title }: any) {

    const dispatch = useDispatch();
    const store = useSelector((state: any) => state.product)
    const [x, setX] = useState(0)
    const history = useHistory();
    const user = localStorage.getItem("user")

    useEffect(() => {
        dispatch(fetchRequest())
    }, [])

    return (
        <div className='featured-container'>
            <div className='featured-bar'>
                <p>{title}</p>

                <div className='slider-bar'>
                    <Carousel
                        className='carousel'
                        plugins={[
                            'infinite',
                            'arrows',
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 4

                                }
                            },
                        ]}
                    >
                        {
                            store.product?.map((item: any,key:Key) => {
                                return <div key={key}>
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
                                                            dispatch(addFavorite(item, user))
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
                                        {
                                            item.mostSales === true ? <div className='product-sale'>
                                                <div className='product-sale-icon'>
                                                    <div className='sale'>
                                                        <img alt='' src='https://cdn.dsmcdn.com/mnresize/250/250/marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png'></img>
                                                    </div>
                                                </div>
                                            </div> : <div></div>
                                        }
                                        <div className='product-price'>
                                            <span className='price'>{item.price} TL</span>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProduct
