import "./Article.scss";

const Article = (props) => {
  const { url, abstract, text, source, image, date } = props;

  return (
    <a href={url} target="_blank" rel="noreferrer" className="article">
      {image && <img src={image && image} alt={image}></img>}
      <div className="column">
        <h3 className="title">{abstract}</h3>
        <p className="content">{text}</p>
        <div className="source">Source : {source}</div>
        <div className="publication">
          Publication : {date.split("").slice(0, 10).join("")}
        </div>{" "}
      </div>
    </a>
  );
};

export default Article;
