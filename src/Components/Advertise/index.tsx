import React, { Key } from 'react'
import data from "./advertise.json"
import { FiArrowRight } from "react-icons/fi"
import "./style.scss"

function Advirtise() {
    return (
        <div className='advertise-container'>
            <div className='advertise'>
                {
                    data.map((item: any,key:Key) => {
                        return <div className='advertise-card' key={key}> 
                            <div className='advertise-img'>
                                <img src={item.image} ></img>
                            </div>
                            <div className='advertise-title'>
                                <div className='advertise-header'>{item.text} </div>
                                <div className='advertise-footer'>
                                    <span>Alışverişe Başla </span>
                                    <FiArrowRight></FiArrowRight>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Advirtise
