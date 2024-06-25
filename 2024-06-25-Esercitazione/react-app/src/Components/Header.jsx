import scoobyDoo from "../img/icons8-scooby-doo-48.png";

function Menu() {
  return (
    <nav className="nav">
      <ul className="list">
        <li className="item">
          <a href="#">"About us"</a>
        </li>
        <li className="item">
          <a href="#">"About us"</a>
        </li>
      </ul>
    </nav>
  );
}

export function Header() {
  console.log("header");
  return (
    <header className="header">
      <img src={scoobyDoo} alt="" />
      <Menu />
    </header>
  );
}
