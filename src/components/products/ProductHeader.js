import React from "react";
import logo from "../../Images/logo.jpg";
import { Link } from "react-router-dom";
export default function ProductHeader(props) {
  return (
    <div className="testBox">
      <div className="testCart">
        <Link to="/">
          <img className="logo" src={logo} height="5px" width="5px" />
        </Link>
        <Link to="/ProductBasket">
          Cart{" "}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ""
          )}
        </Link>{" "}
      </div>
    </div>
  );
}
