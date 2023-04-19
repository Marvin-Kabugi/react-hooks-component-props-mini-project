import React from "react";


function Article({title, date = "January 1, 1970", preview, minutes}){
    if (minutes < 30){
        let x = "☕️";
        let rounded = Math.round(minutes/5);
        x.repeat(rounded)
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article