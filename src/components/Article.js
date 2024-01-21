import React from "react";

function Article({title, date="January 1, 1970", preview, minutes}) {
    
    return (
      <article>
        <h3>{title}</h3>
        <small>{date} {minutesToRead(minutes)}</small>
        <p>{preview}</p>
      </article>
    );
}

function minutesToRead(min){
    let indicators
    if(min < 30){
        let numofIndicators = (Math.round(num / 5) * 5)/5;
        for(let i=numofIndicators; i>0; i--){
            indicators+= "☕️ ";
        }
    }
    return `${indicators} ${min} min read`;
}

export default Article;