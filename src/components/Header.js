import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Логотип." />
      <p className="header__email">{props.email}</p>
      <Link
        className={`header__link ${props.link === "Выйти" ? 'header__link_dark' : ''}`}
        to={props.link === "Регистрация" ? '/sign-up' : '/sign-in'} onClick={props.link === "Выйти" ? props.onLogout : null}>{props.link}</Link>
    </header>
  );
}

export default Header;