import { Key, useEffect, useState } from 'react'
import "./style.scss"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, fetchRequest, getSelected } from '../../redux/action/product';
import { useHistory } from 'react-router-dom';
import fakeData from "./mockProducts.json";


function FeaturedProduct({ title }: any) {

    const dispatch = useDispatch();
    const store = useSelector((state: any) => state.product)
    const [x, setX] = useState(0)
    const history = useHistory();
    const user = localStorage.getItem("user")

    useEffect(() => {
        //dispatch(fetchRequest())
        console.log(fakeData)
    }, [])
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='featured-container'>
            <div className='featured-bar'>
                <p>{title}</p>

                <div className='slider-bar'>
                    <Carousel
                        className='carousel'
                        responsive={responsive}
                    >
                        {
                            fakeData?.map((item: any, key: Key) => {
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
