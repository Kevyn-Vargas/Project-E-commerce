import { NavLink } from "react-router-dom";
// bg-emerald-600
//bg-teal-700
//bg-cyan-700-800
//bg-sky-800
function NavBar() {
  const activeStyle = "underline underline-offset-8";
  return (
    <nav className="bg-teal-700 flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 font-medium text-base font-quicksand">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-2xl">
          <NavLink to="/">KVStore</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/smartphones"
          >
            Smartphones
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/electronics"
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/toys"
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/all-categories"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All Categories
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li>Search</li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/like"
          >
            🖤
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/shopping-cart"
          >
            🛒 0
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/account"
          >
            Account
          </NavLink>
        </li>
        <li>USD</li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/sign-in"
          >
            Sing In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
