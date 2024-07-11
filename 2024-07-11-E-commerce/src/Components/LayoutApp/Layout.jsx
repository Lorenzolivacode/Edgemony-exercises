import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer.jsx";

export function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
