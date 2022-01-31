import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [articles, setArticles] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDataArticles() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles/"
      );
      const response = await request.json();
      setArticles(response);
      setLoading(false);
    }
    getDataArticles();
  }, []);
  return (
    <section>
      <h1>My BLog</h1>
      {loading && <p>Loading</p>}
      {!loading && (
        <div>
          {articles.map((article) => {
            return (
              <article key={article.id}>
                <h2>
                  <Link to={`/Blog/${article.id}`}>{article.title}</Link>
                </h2>
                <time>
                  {new Date(article.publishedAt).toLocaleDateString()}
                </time>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
