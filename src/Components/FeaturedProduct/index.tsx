import axios from 'axios'
import  { useEffect, useState } from 'react'
import "./style.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@brainhubeu/react-carousel/lib/style.css';
import { MdOutlineFavoriteBorder } from "react-icons/md"
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';



function FeaturedProduct() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/products")
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
            .catch((e) => console.log(e))
    }, [])

    return (
        <div className='featured-container'>
            <div className='featured-bar'>
                <p>Öne Çıkanlar</p>

                <div className='slider-bar'>
                    <Carousel
                        className=''
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
                            data?.map((item: any) => {
                                return <div>
                                    <div className="product-card">
                                        <div className='product-image'><img alt='' src={item.image}></img> </div>
                                        <div className="product-name"><span>{item.brand}</span></div>
                                        <div className="product-name1"><span>{item.name}</span> </div>

                                        <div className='product-details'>
                                            <div className='product-like'>
                                                <div className='icon-div'><MdOutlineFavoriteBorder className='like-icon'></MdOutlineFavoriteBorder></div>
                                            </div>
                                            <div className='product-cargo'>

                                                <div className='cargo'>
                                                    <div className='cargo-text'> KARGO BEDAVA</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='product-sale'>
                                            <div className='product-sale-icon'>
                                                <div className='sale'>
                                                    <img alt='' src='https://cdn.dsmcdn.com/mnresize/250/250/marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png'></img>
                                                </div>
                                            </div>
                                        </div>
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
