import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./style.scss"
import { Product } from './type'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '@brainhubeu/react-carousel/lib/style.css';


function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "gray" }}
            onClick={onClick}
        />
    );
}


function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "gray" }}
            onClick={onClick}
        />
    );
}


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    className: "slider1",
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};
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
                    <Slider
                        {...settings}
                    >
                        {
                            data?.map((item: any) => {
                                return <div>
                                    <div className="product-card">
                                        <div className='product-image'><img src={item.image}></img> </div>
                                        <div className="product-name"><span>{item.brand}</span></div>
                                        <div className="product-name1"><span>{item.name}</span> </div>
                                        <div className='product-details'>
                                            <div className='product-cargo'>
                                                <div className='cargo'>
                                                    <div className='cargo-text'> KARGO BEDAVA</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='product-sale'>
                                            <div className='product-sale-icon'>
                                                <div className='sale'>
                                                    <img src='https://cdn.dsmcdn.com/mnresize/250/250/marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png'></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }


                    </Slider>

                </div>
            </div>
        </div>
    )
}

export default FeaturedProduct
