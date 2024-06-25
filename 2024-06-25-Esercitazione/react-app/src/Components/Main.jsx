function Sidebar() {
  return <aside className="side">Sidebar</aside>;
}

function Main() {
  return (
    <main className="main">
      <article className="article">
        <h2 className="title">Lorem ipsum dolor sit amet.</h2>
        <p className="p-txt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          consectetur natus voluptatibus ad in maiores!
        </p>
      </article>
      <article className="article">
        <h2 className="title">Lorem ipsum dolor sit amet.</h2>
        <p className="p-txt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          consectetur natus voluptatibus ad in maiores!
        </p>
      </article>
      <article className="article">
        <h2 className="title">Lorem ipsum dolor sit amet.</h2>
        <p className="p-txt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          consectetur natus voluptatibus ad in maiores!
        </p>
      </article>
    </main>
  );
}

export function ContainerMain() {
  return (
    <>
      <div className="container">
        <Main />
        <Sidebar />
      </div>
    </>
  );
}
