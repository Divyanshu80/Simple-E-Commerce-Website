import {React,useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
      <img
        alt="logo"
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_3WJ9si_NkO6KmPs7Mkna3dY0PnKapi9vhA&usqp=CAU"
      />
      {auth ? (
        <ul className={showMediaIcons ? "nav-ul-mobile" : "nav-ul"}>
          <li>
            <Link to="/"> Your Cart</Link>
          </li>
          <li>
            <Link to="/add">Add To Cart</Link>
          </li>
          <li>
            <Link to="/update"> Update Cart</Link>
          </li>
          <li>
            {" "}
            <Link onClick={logout} to="/signup">
              Logout ({JSON.parse(auth).name})
            </Link>
          </li>
          <div className="hamb">
            <a href="#" onClick={()=>setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
            </div>
        </ul>
      ) : (
        <ul className={ showMediaIcons ? "nav-right-mobile": "nav-right"}>
          <li>
            {" "}
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <div className="hamb">
            <a href="#" onClick={()=>setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
            </div>
        </ul>
      )}
    </div>
  );
};

export default Nav;
