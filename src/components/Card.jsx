import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src="src/images/katie-zaferes.png" className="card--image" />
            <div className="card--stats">
                <img src={props.img} className="card--star" />
                <span>{props.rating} </span>
                <span className="gray">({props.reviewCount}) - </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}


/*
import React from "react"

export default function Joke(props) {
    return(
        <div>
            <h2>Setup: {props.setup}</h2>
            <p>Punchline: {props.punchline}</p>
            <hr></hr>
        </div>
    )
}
*/
