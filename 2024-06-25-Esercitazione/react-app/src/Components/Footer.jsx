import scoobyDoo from "../img/icons8-scooby-doo-48.png";

export function Footer() {
  return (
    <footer className="footer">
      <img src={scoobyDoo} alt="" />
      <div className="container-footer">
        <ul className="list-footer">
          <h3 className="list__title">Lorem, ipsum dolor.</h3>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
        </ul>
        <ul className="list-footer">
          <h3 className="list__title">Lorem, ipsum dolor.</h3>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
        </ul>
      </div>
    </footer>
  );
}
