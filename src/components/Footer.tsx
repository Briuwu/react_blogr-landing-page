import { dropdownList } from "../data";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <img src="./images/logo.svg" alt="" />
        {dropdownList.map((el) => (
          <div key={el.id} className="footer__items">
            <h2>{el.title}</h2>
            <ul>
              {el.items.map((ea) => (
                <li key={ea.id}>
                  <a href="#">{ea.item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};
export default Footer;
