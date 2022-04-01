

import { useEffect, useState } from "react";
import axios from "axios";
import data from "./brands.json"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "react-slick";
import '@brainhubeu/react-carousel/lib/style.css';
import "./style.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import data1 from "../FeaturedProduct/products.json"

function HomeSlider() {

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

    useEffect(()=> {
        axios.get("http://localhost:3001/products").then((res) => console.log(res))
    },[])

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
    useEffect(() => {
        axios.get("https://api.trendyol.com/sapigw/brands")
            .then((res) => console.log(res))
            .catch((e) => console.log(e))
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        className: "slider",
        slidesToShow: 11,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <Slider
            {...settings}
        >
            {
                data.brands.map((item: any) => {
                    return <div className="brand">
                        <img src={item.image} ></img>
                        <div className="brand-name">{item.name} </div>

                    </div>
                })
            }


        </Slider>



    )
}

export default HomeSlider
