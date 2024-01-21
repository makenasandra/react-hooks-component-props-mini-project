import React from "react";
import Article from "./Article";

function ArticleList({articles}) {

    const postList = articles.map((article)=>
    {
        return (<Article key={article.id}>{article}</Article>)
    });

    return (
      <main>
        {postList}
      </main>
    );
}

export default ArticleList;