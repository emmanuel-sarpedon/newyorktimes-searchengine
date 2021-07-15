import { useState, useEffect } from "react";
import "./Page.scss";
import Article from "../Article/Article";

const axios = require("axios").default;

const Page = (props) => {
  const { filter, query } = props;
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?${
    query && `q=${query}`
  }${filter && `&fq=news_desk:("${filter}")`}
  &api-key=HHGfGWC6M3ahywRlHV8Vbt5CSMsDhZ0O`;

  const setAllArticles = async () => {
    setIsLoading(true);
    const response = await axios.get(url);
    setArticles(response.data.response.docs);
    setIsLoading(false);
    console.log(url);
  };

  useEffect(() => setAllArticles(), [filter, query]);

  return (
    <div className="page">
      <h1>{filter ? filter : "Most recently"}</h1>
      {query && <h2>Results for : {query}</h2>}
      <div>
        {isLoading
          ? "chargement en cours"
          : Array.from(articles).map((e, i) => (
              <Article
                key={i}
                url={e.web_url}
                abstract={e.abstract}
                text={e.lead_paragraph}
                source={e.source}
                image={
                  e.multimedia[0] &&
                  "https://www.nytimes.com/" + e.multimedia[0].url
                }
                date={e.pub_date}
              />
            ))}
      </div>
    </div>
  );
};

export default Page;
