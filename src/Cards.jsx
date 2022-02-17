import React from "react";

let Card = (props) => {
    return (
        <div className="card">
            <img src={props.imgsrc} className="image" />
            <div className="text">
                <h1>{props.title}</h1>
                <p>{props.summary}</p>
                <a href={props.downloadLink} target="_blank">Download</a>
            </div>
        </div>
    )
}

export default Card;