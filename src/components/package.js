import React from "react";
import star from "../images/Star.png"

export default function Pack(props) {
    return (
        <div className="card">
            <img src={props.item.image} alt="" className="card-img" />
            <div className="card-stats">
                <img src={star} alt="" className="card-star" />
                <span className="rating"> {props.item.rating}</span>
                <span className="grey card-location" >{props.item.location}</span>
            </div>
            <p className="card-title">{props.item.title}</p>
            <p><span className="bold"> ${props.item.price}</span> / person</p>
            <p className="des">{props.item.description}</p>
        </div>
    )
}