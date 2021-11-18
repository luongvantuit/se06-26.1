import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/css/_404.css'
import notFound from '../../assets/image/g12.svg'

export default function _404() {
    return (
        <div>
            <div className="main">
                <div className="right">
                    <div className="image">
                        <img src={notFound} alt="" />
                    </div>
                </div>
                <div className="left">
                    <div className="wrap">
                        <p id="title">Ooops! <br />
                            Page not found </p>
                        <p id="content">Some thing went wrong.<br />
                            It looks like the link  is broken or the page has been <br />  <span>removed</span></p>

                        <div className="btn"><button id="click">Go back</button></div>

                    </div>

                </div>
            </div>
        </div>

    )
}
