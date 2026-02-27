import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/icons/home.svg?react";
import "./Layout.css";

export const Layout = () => {
  return (
    <div className="layout">
      <header className="layout__header">
        <div className="layout__header-content">
          <Link
            aria-label="На страницу списка персонажей"
            className="layout__logo-link"
            to="/characters"
          >
            <Logo className="layout__logo" />
          </Link>

          <div className="layout__controls">
            <button className="layout__control-button" type="button">
              ☼
            </button>
            <button className="layout__control-button" type="button">
              РУ
            </button>
          </div>
        </div>
      </header>

      <main className="layout__main">
        <Outlet />
      </main>

      <footer className="layout__footer">
        <p className="layout__footer-text">Made with love by lebovvskii</p>
      </footer>
    </div>
  );
};
