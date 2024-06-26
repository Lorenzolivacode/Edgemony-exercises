import "./main.css";
import posts from "./../../data.json";

function Article(props) {
  const { labelTitle, labelAuthor, labelContent } = props;

  return (
    <article>
      <h2 className="article__title">{labelTitle}</h2>
      <small className="article__author">{labelAuthor}</small>
      <p className="article__content">{labelContent}</p>
    </article>
  );
}

export function Main() {
  const postsTen = posts.slice(5, 15);
  //console.log(postsTen);
  //console.log(postsTen[0]);

  return (
    <main>
      {postsTen.map((post) => (
        <Article
          key={post.id}
          labelTitle={post.title}
          labelAuthor={`User-${post.userId}`}
          labelContent={post.body}
        />
      ))}
    </main>
  );
}
