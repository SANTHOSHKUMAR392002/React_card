import React from "react";
import "./style.css"
import img1 from './img.jpg'
import img2 from './img2..jpeg'
import img3 from './img3.jpg'

export default function Card(){

    let phone_details=[
        {
            id:1,
            img:img1,
            p_name:"MOBILE PHONE",
            price:"$199.99",
            content:"mobile is very helps for online porpose"
        },
        {
            id:2,
            img:img2,
            p_name:"LAPTOP",
            price:"$599.99",
            content:"laptop is very helpfull for other than many porpose"
        },
        {
            id:3,
            img:img3,
            p_name:"HEADPHONE",
            price:"$29.99",
            content:"headphone use to listen the song do not distrub any one"
        }
    ]


    return (

        <div id="card-section">{
            phone_details.map((a,i)=>{
                return(
                        <div className="card" key={i}>
                            <img src={a.img}></img>
                            <h4>{a.p_name}</h4>
                            <h3>{a.price}</h3>
                            <p>{a.content}</p>
                        </div>

                )
                
            })
        }</div>

    )

}