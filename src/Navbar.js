import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Link to={`/`}>
        <span>{'Back to HomePage'}</span>
    </Link>
  );
}


export default Navbar;