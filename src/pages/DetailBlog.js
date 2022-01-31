import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailBlog() {
  const params = useParams();
  const [article, setArticle] = useState([]);
  const [loading, setloading] = useState(true);
  const [NotFound, setNotFound] = useState(false);

  useEffect(() => {
    async function getDetailArticle() {
      const request = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
      );

      if (!request.ok) {
        return setNotFound(true);
      }
      const response = await request.json();

      setArticle(response);
      setloading(false);
    }
    getDetailArticle();
  }, [params]);

  if (NotFound) {
    return <h1>Article Tidak Ditemukan</h1>;
  }
  return (
    <section>
      {loading ? (
        <i>loading....</i>
      ) : (
        <article>
          <h1>{article.title}</h1>
          <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
          <img src={article.imageUrl} alt={article.title} />
          <p>{article.summary}</p>
          <p>
            <a href={article.url} target="_blank" rel="noreferrer">
              {article.newsSite}
            </a>
          </p>
        </article>
      )}
    </section>
  );
}

export default DetailBlog;
