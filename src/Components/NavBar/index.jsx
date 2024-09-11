import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/solid'
import { HeartIcon } from '@heroicons/react/24/solid'

function NavBar() {
  const activeStyle = "flex underline underline-offset-8";
  const accountFlex = "flex"
  const context = useContext(ShoppingCartContext)
  return (
    <nav className="bg-teal-700 flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 font-medium text-base font-quicksand">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-2xl">
          <NavLink to="/">KVStore</NavLink>
        </li> |
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
        <li>USD</li>|
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : accountFlex)}
            to="/account"
          >
            <UserIcon className="size-6"></UserIcon>
            <span className="px-1">Account</span>
          </NavLink>
        </li>|
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/like"
          ><div>
            <HeartIcon className="size-6"></HeartIcon>
          </div>
          </NavLink>
        </li>|
        <li>
          <NavLink
            className="flex"
            to="/shopping-cart"
          >
            <ShoppingCartIcon className="size-7 text-black"></ShoppingCartIcon><span className="px-1">{context.count}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
