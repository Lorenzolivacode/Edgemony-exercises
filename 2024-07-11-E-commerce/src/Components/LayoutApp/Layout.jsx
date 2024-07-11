import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer.jsx";

export function Layout({ children, counter }) {
  return (
    <>
      <Header counter={counter} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
