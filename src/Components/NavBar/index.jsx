import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/solid'

function NavBar() {
  const activeStyle = "flex text-white underline underline-offset-8";
  const accountFlex = "flex"
  const context = useContext(ShoppingCartContext)
  let container = context.cartProducts.reduce((acumulador, producto) => {
    return acumulador + producto.quantity;
}, 0);
  return (
    <nav className="bg-black text-slate-300 flex justify-between items-center fixed z-1000 top-0 w-full py-5 px-8 font-medium text-base font-quicksand">
      {/*bg-teal-700*/}
      <ul className="flex items-center gap-3">
        <li className="text-white font-semibold text-2xl">
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
            to="/men's clothing"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Men's
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/women's clothing"
          >
            Women's
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
            to="/jewelery"
          >
            Jewelery
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
            to="/orders"
          >Orders
          </NavLink>
        </li>|
        <li>
          <NavLink
            className="flex"
            to="/shopping-cart"
          >
            <ShoppingCartIcon className="size-7 text-slate-300"></ShoppingCartIcon><span className="px-1">{container}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
