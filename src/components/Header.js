import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink className="link" to="/">
            Головна
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/favorite">
            Обране
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
