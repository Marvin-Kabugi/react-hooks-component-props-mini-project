import React from "react";
import Article from "./Article";


function ArticleList({post}){
    return (
        <main>
            {post.map(element => {
                return <Article key={element.id} title={element.title} date={element.date} preview={element.preview} minutes={element.minutes}/>
            })}
        </main>
    )
}

export default ArticleList