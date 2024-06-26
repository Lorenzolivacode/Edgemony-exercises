import "./header.css";
import scooby from "./../../img/icons8-scooby.png";

function MenuItem(props) {
  const { label, href = "#" } = props;
  return (
    <li className="item">
      <a href={href}>{label}</a>
    </li>
  );
}

function Menu() {
  const items = [
    { label: "About us", href: "https://www.lorenzoliva.it/biografia/" },
    { label: "Blog", href: "https://google.it" },
    { label: "Shop", href: "https://www.lorenzoliva.it/" },
  ];

  return (
    <nav>
      <ul className="nav__list">
        {items.map((item, index) => (
          <MenuItem
            key={`${item.label}-${index}`}
            label={item.label}
            href={item.href}
          />
        ))}
      </ul>
    </nav>
  );
}

export function LogoContainer(props) {
  const { brand } = props;
  return (
    <div className="logo-container">
      <img src={scooby} alt="Icona" className="logo__icon" />
      <h1 className="logo__title">{brand.name}</h1>
    </div>
  );
}

export function Header(props) {
  const { brand, children, ...attrs } = props;

  return (
    <header {...attrs}>
      <LogoContainer brand={brand} />
      <Menu />
      {children}
    </header>
  );
}
