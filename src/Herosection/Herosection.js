import style from './Herosection.module.css'
import React, { Fragment } from 'react'
import image2 from '../Images/Rectangle 2.png'

export function Herosection() {
    return (
        <Fragment>
            <div className={style.main_herosec}>
                <img src={image2} alt="" />
                <div className={style.sub_herosec}>
                    <h1>Computer Engineering</h1>
                    <p>142,765 Computer Engineers follow this</p>
                </div>
            </div>
        </Fragment>
    )
}
