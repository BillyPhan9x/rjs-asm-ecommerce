import NavBar from "./NavBar/NavBar";

import Footer from "./Footer/Footer";
import LiveChat from "./LiveChat/LiveChat";

const Layout = (props) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{props.children}</main>
      <LiveChat />
      <Footer />
    </>
  );
};

export default Layout;
