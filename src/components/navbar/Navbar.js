import React from "react";
import routes from "../../constants/routes";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const appRoutes = Object.entries(routes);
  const navigate = useNavigate();
  return (
    <nav>
      {appRoutes.map(([route, path]) => (
        <button
          key={route}
          onClick={() => {
            navigate(path);
          }}
        >
          {route}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
