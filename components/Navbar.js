import Image from "next/image";
import Link from "next/link";
import ReactDOM from "react-dom";
import {} from "../styles/Navbar.module.css";
import WealthifyLogo from "../assets/image/WealthifyLogo.png";
import Wrappers from "../assets/wrappers/Navbar.js";
import Home from "./Home";
import { useState } from "react";
import Login from "./Login";
import Menu from "../components/Menu";
import { useRouter } from "next/router";
import ActiveLink from "./ActiveLink";
import EachDoctorDetails from "./EachDoctorDetails";
const Navbar = () => {
  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState(false);
  const [singleDoctor, setSingleDoctor] = useState(false);
  console.log(useRouter());
  return (
    <Wrappers>
      <div className="navbar-container">
        {modal
          ? ReactDOM.createPortal(
              <Login setModal={setModal} />,
              document.getElementById("modal-root")
            )
          : null}

        <div className="first-item">
          <Image
            className="logo"
            src={WealthifyLogo}
            width="200px"
            height="200px"
          />
        </div>
        <div className="second-item">
          <li>
            <ul>
              <Link href={"/homeLoggedOut"}>
                <a
                  href=""
                  style={{
                    color:
                      useRouter().route === "/homeLoggedOut" ? "red" : "black",
                  }}
                >
                  Before Login{" "}
                </a>
                {/* Before Login */}
              </Link>
            </ul>
            <ul>
              {/* <Link href={"/"}>Home</Link> */}

              <ActiveLink route={"/"}>Home</ActiveLink>
            </ul>
            <ul>
              {/* <Link href={"/aboutus"}>
                <a href="">About us</a>
              </Link> */}

              <ActiveLink route={"/aboutus"}>About us</ActiveLink>
            </ul>
            <ul>
              <ActiveLink route={"/plans"}>Plans</ActiveLink>
            </ul>

            <ul>
              <ActiveLink route={"/recipe"}>Recipe</ActiveLink>
            </ul>
            <ul>
              <ActiveLink route={"/nutrition"}>Nutrition DataBase</ActiveLink>
            </ul>
            <ul onClick={() => setModal(!modal)}>
              <Link href={""}>
                <a href=""> Login</a>
              </Link>
            </ul>
            {/* <div
              className="third-item"
              onClick={() => setSingleDoctor(!singleDoctor)}
            >
              <button className="btn-primary">single doctor</button>
            </div> */}

            {/* {singleDoctor && <EachDoctorDetails setMenu={setSingleDoctor} />} */}
          </li>
        </div>

        <div className="third-item" onClick={() => setMenu(!menu)}>
          <button className="btn-primary">Doctor Login</button>
        </div>
      </div>
      {/* {modal && <Login setModal={setModal} />} */}
      {menu && <Menu setMenu={setMenu} />}
    </Wrappers>
  );
};

export default Navbar;
