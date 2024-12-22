import { NavLink } from "react-router";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 ml-4">Jr's Boutique</h1>
        <nav>
          <ul className="flex gap-8 mr-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-600 transition"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Users"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-600 transition"
                }
              >
                Our Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Products"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-600 transition"
                }
              >
                Collections
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-600 transition"
                }
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
