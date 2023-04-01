import { useState, useEffect } from 'react';
import homeicon from '../assets/images/ic_home.svg';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo">
          <h1 className="header__title">
            Recipe<span className="header__subtitle">App</span>
          </h1>
        </div>
        {isMobile ? (
          <div className="header__menu-mobile">
            <img className="header__menu-image" src={homeicon} alt="Menu icon" />
          </div>
        ) : (
          <ul className="header__menu">
            <li className="header__menu-item">
              <a className="header__menu-link" href="/">
                Home
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="/">
                Vegetarianos
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="/">
                Platos Principales
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="/">
                Tortas
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="/">
                Comida Rápida
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="/">
                Menú Niños
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="/">
                Sopas
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
