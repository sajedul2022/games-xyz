import { Outlet } from "react-router-dom";

// import Footer from "./components/Footer";
// import Header from "./components/Header";

import Nav from "./frontend/include/nav";
import Footer from "./frontend/include/footer";
import Slide from "./frontend/include/slide";
import Leftmenu from "./frontend/include/leftmenu";
import Rightmenu from "./frontend/include/rightmenu";
// import Signup from './frontend/include/signup';
// import Signin from './frontend/include/signin';
import Betbalance from "./frontend/include/betbalance.js";
import MainContent from "./frontend/include/maincontent.js";

function App() {
  return (
    <>
      <Nav />

      <div className="main-body">
        <Leftmenu />
        <div className="body-middle">
          
          {/* <Slide /> */}

          {/* <MainContent /> */}

          <Outlet />


          <Footer />

          <a
            href="#0"
            className="click-btn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal3"
          >
            <i className="icon-basketball"></i>
          </a>
        </div>
        <Rightmenu />
      </div>
      {/* <Signup />
      <Signin /> */}
      <Betbalance />

      {/* <Header />

        <Outlet />

      <Footer /> */}
    </>
  );
}

export default App;
