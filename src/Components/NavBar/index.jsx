import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/solid'
import SelectMoney from "../SelectMoney";

function NavBar() {
  const activeStyle = "flex text-white underline underline-offset-8";
  const accountFlex = "flex"
  const context = useContext(ShoppingCartContext)
  let container = context.cartProducts.reduce((acumulador, producto) => {
    return acumulador + producto.quantity;
  }, 0);

  function resetSearched() {
    context.setSearched('');
  }

  return (
    <nav className="bg-black text-slate-300 flex justify-between -sm:justify-center items-center fixed z-1000 top-0 w-full py-5 px-8 -sm:py-3 -sm:px-4 font-medium text-base font-quicksand -sm:text-xs -md:text-sm">
      {/*bg-teal-700*/}
      <ul className="flex items-center gap-3">
        <li className="text-white font-semibold text-2xl -sm:text-xs">
          <NavLink to="/">KVStore</NavLink>
        </li> |
        <li className="-sm:hidden">
          <NavLink
            to="/"
            onClick={resetSearched}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li className="-sm:hidden -770:hidden">
          <NavLink
            to="/men's clothing"
            onClick={resetSearched}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Men's
          </NavLink>
        </li>
        <li className="-sm:hidden -770:hidden">
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/women's clothing"
            onClick={resetSearched}
          >
            Women's
          </NavLink>
        </li>
        <li className="-sm:hidden -770:hidden">
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/electronics"
            onClick={resetSearched}
          >
            Electronics
          </NavLink>
        </li>
        <li className="-sm:hidden -770:hidden">
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/jewelery"
            onClick={resetSearched}
          >
            Jewelery
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        {context.userData ? <li className="flex -sm:hidden -md:hidden">
          <h2>{context.userData.email}</h2>
          <p className="text-white ml-2">|</p></li> : console.log("No user has been entered")}
        <li className="-sm:ml-2">
          <SelectMoney />
        </li>|
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : accountFlex)}
            to="/account"
            onClick={resetSearched}
          >
            <UserIcon className="size-6 -sm:size-4"></UserIcon>
            <span className="px-1 -sm:px-0 -md:hidden">Account</span>
          </NavLink>
        </li>|
        <li className="-sm:hidden">
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/orders"
            onClick={resetSearched}
          >Orders |
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex"
            to="/shopping-cart"
            onClick={resetSearched}
          >
            <ShoppingCartIcon className="size-7 -sm:size-4 text-slate-300"></ShoppingCartIcon><span className="px-1">{container}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
