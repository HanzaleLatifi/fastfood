import React from 'react'
import './Menu.css';
import {FaPizzaSlice} from 'react-icons/fa'
import {FaHamburger} from 'react-icons/fa'
import {GiBowlOfRice} from 'react-icons/gi'

export default function Menu() {
    return (
        <section id="menu">
            <h2 className="heading">منو</h2>
            <div className="badges-menu">
                <span> <FaPizzaSlice/> </span>
                <span> <FaHamburger/> </span>
                <span > <GiBowlOfRice/> </span>
            </div>
            <div className="meun-container">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        </section>
    )
}
