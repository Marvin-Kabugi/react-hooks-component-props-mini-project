import React from "react";


function Article({title, date = "January 1, 1970", preview, minutes}){
    let x;
    if (minutes < 30){
        x = "☕️";
        let rounded = Math.round(minutes/5);
        return (
            <article>
                <h3>{title}</h3>
                <small>{date} . {x.repeat(rounded)} {minutes} min read</small>
                <p>{preview}</p>
            </article>
        )
    }else{
        x = "🍱";
        let rounded = Math.round(minutes/10);
        return (
            <article>
                <h3>{title}</h3>
                <small>{date} . {x.repeat(rounded)} {minutes} min read</small>
                <p>{preview}</p>
            </article>
            )
    }
}

export default Article