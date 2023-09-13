import { useState } from "react";
import { dropdownList, menuDropdownProps } from "../data";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [menuDropdown, setMenuDropdown] =
    useState<menuDropdownProps>(dropdownList);

  const handleDropdownClick = (id: number) => {
    setMenuDropdown((prev) =>
      prev.map((el) => {
        if (id === el.id) {
          return { ...el, active: !el.active };
        } else {
          return { ...el, active: false };
        }
      })
    );
  };

  return (
    <nav className="nav wrapper">
      <div className="nav__logo">
        <img src="./images/logo.svg" alt="" />
      </div>
      <button className="nav__hamburger" onClick={() => setMenu(!menu)}>
        {menu ? (
          <img src="./images/icon-close.svg" alt="" />
        ) : (
          <img src="./images/icon-hamburger.svg" alt="" />
        )}
        <span className="visually-hidden">menu</span>
      </button>
      <div className={`nav__items ${menu ? "active" : ""}`}>
        <ul className="nav__menu">
          {menuDropdown.map((el) => (
            <Dropdown
              key={el.id}
              buttonLabel={el.title}
              menu={el.items}
              onDropdownClick={() => handleDropdownClick(el.id)}
              isActive={el.active}
            />
          ))}
        </ul>
        <div className="nav__auth">
          <a href="#">Login</a>
          <a className="signup" href="#">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

type DropdownProps = {
  buttonLabel: string;
  menu: {
    id: number;
    item: string;
  }[];
  onDropdownClick: () => void;
  isActive: boolean;
};

const Dropdown = ({
  buttonLabel,
  menu,
  onDropdownClick,
  isActive,
}: DropdownProps) => {
  return (
    <li className="dropdown">
      <button
        className={`dropdown__toggle ${isActive ? "active" : ""}`}
        onClick={() => onDropdownClick()}
      >
        {buttonLabel}{" "}
        <img
          className="arrow-light"
          src="./images/icon-arrow-light.svg"
          alt=""
        />
        <img className="arrow-dark" src="./images/icon-arrow-dark.svg" alt="" />
      </button>
      <ul className={`dropdown__menu ${isActive ? "active" : ""}`}>
        {menu?.map((el) => (
          <li key={el.id} className="dropdown__item">
            <a href="#">{el.item}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};
export default Nav;
