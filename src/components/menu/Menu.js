import React from 'react'
import './Menu.css';
import {FaPizzaSlice} from 'react-icons/fa'
import {FaHamburger} from 'react-icons/fa'
import {GiBowlOfRice} from 'react-icons/gi'
import { useEffect , useState } from 'react';
import getAllFoods from '../../services/getAllFoods';

export default function Menu() {
    const [foods, setFoods] = useState([]);
    const [type,setType]=useState("burger");

    const buyFood=(food)=>{
        console.log(food)

    }

    useEffect(() => {
        const getFoods = async () => {
            const { data } = await getAllFoods();
            setFoods(data)
        }
       try {
           getFoods();
           
       } catch (error) {
           console.log(error)
       }
    }, [])
    return (
        <section id="menu">
            <h2 className="heading">منو</h2>
            <div className="badges-menu">
                <span id="pizza" onClick={(e)=>setType(e.currentTarget.id)} className={type==="pizza"?'active' :''} > <FaPizzaSlice /> </span>
                <span id="burger" onClick={(e)=>setType(e.currentTarget.id)} className={type==="burger"?'active' :''} > <FaHamburger /> </span>
                <span  id="pasta" onClick={(e)=>setType(e.currentTarget.id)} className={type==="pasta"?'active' :''}> <GiBowlOfRice  /> </span>
            </div>
            <div className="meun-container">
                {  foods.filter(f => f.type===type).map(food=>{
                    return( <div className="foodItem" key={food.id}>
                                <p className="name">{food.name}</p>
                                <p className="material">{food.materials}</p>
                                <div className="foodImg">
                                    <img src={food.img}/>
                                </div>
                                <div className="flexi">
                                    <button onClick={()=>{buyFood(food)}} className="add-btn btn-primary">+</button>
                                    <p className="price">{food.price} تومان</p>
                                </div>
                          </div> )
                }) }   
            </div>
        </section>
    )
}
