import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';


const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount,home, token, setToken } = useContext(StoreContext);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const cartHasItems = getTotalCartAmount() > 0;

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    setIsProfileOpen(false);
    setIsMobileOpen(false);
    navigate('/');
  };

  const closeAll = () => {
    setIsMobileOpen(false);
    setIsProfileOpen(false);
  };

  const scrollToSection = (targetId) => {
    const headerOffset = 72; // navbar height
    const el = document.getElementById(targetId);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const y = window.scrollY + rect.top - headerOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const handleNavScroll = (targetId) => {
    // close mobile
    setIsMobileOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(targetId), 150);
    } else {
      scrollToSection(targetId);
    }
  };

  const isRouteActive = (path) => location.pathname === path;

  return (
    <nav className="bk-navbar" style={{backgroundColor: '#fff'}}>
      {/* Left: Brand */}
      <div className="bk-left">
        <Link to="/" className="bk-brand" onClick={closeAll}>
          <img
            src={assets.logo}
            alt="Bwari Kitchen logo"
            className="bk-logo"
          />
          <div className="bk-brand-text">
            <span className="bk-brand-title">Bwari Kitchen</span>
            <span className="bk-brand-subtitle">Fresh • Local • Fast</span>
          </div>
        </Link>
      </div>

      {/* Center: Desktop Menu */}
      <ul className="bk-menu">
        <li>
          <Link
            to="/"
            className={`bk-link ${isRouteActive('/') ? 'active' : ''}`}
            onClick={closeAll}
          >
            Home
          </Link>
        </li>
        <li>
          <button
            className="bk-link ghost"
            onClick={() => handleNavScroll('explore-menu')}
          >
            Menu
          </button>
        </li>
        <li>
          <button
            className="bk-link ghost"
            onClick={() => handleNavScroll('app-download')}
          >
            Mobile App
          </button>
        </li>
        <li>
          <button
            className="bk-link ghost"
            onClick={() => handleNavScroll('footer')}
          >
            Contact
          </button>
        </li>
      </ul>

      {/* Right: Actions */}
      <div className="bk-right">
        {/* Search */}
        <button
          className="bk-icon-btn"
          aria-label="Search"
        >
          <img src={assets.search_icon} alt="" />
        </button>

        {/* Cart */}
        <Link
          to="/cart"
          className={`bk-icon-btn bk-cart-btn ${isRouteActive('/cart') ? 'active' : ''}`}
          onClick={closeAll}
          aria-label="View cart"
        >
          <img src={assets.basket_icon} alt="" />
          {cartHasItems && <span className="bk-cart-dot" />}
        </Link>

        {/* Auth / Profile */}
        {!token ? (
          <button
            className="bk-btn bk-btn-outline"
            onClick={() => {
              closeAll();
              setShowLogin(true);
            }}
          >
            Enter Shop Make you Fit Chop Beta Food
          </button>
        ) : (
          <div className="bk-profile">
            <button
              className="bk-profile-trigger"
              onClick={() => setIsProfileOpen((prev) => !prev)}
            >
              <img src={assets.profile_icon} alt="Profile" />
            </button>
            {isProfileOpen && (
              <ul className="bk-profile-dropdown">
                <li
                  onClick={() => {
                    setIsProfileOpen(false);
                    navigate('/myorders');
                  }}
                >
                  <img src={assets.bag_icon} alt="" />
                  <p>My Orders</p>
                </li>
                <hr />
                <li onClick={logout}>
                  <img src={assets.logout_icon} alt="" />
                  <p>Logout</p>
                </li>
              </ul>
            )}
          </div>
        )}

        {/* Mobile Burger */}
        <button
          className={`bk-burger ${isMobileOpen ? 'open' : ''}`}
          onClick={() => {
            setIsMobileOpen((prev) => !prev);
            setIsProfileOpen(false);
          }}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`bk-mobile-menu ${isMobileOpen ? 'show' : ''}`}>
        <button
          className="bk-mobile-link"
          onClick={() => {
            navigate('/');
            closeAll();
          }}
        >
          Home
        </button>
        <button
          className="bk-mobile-link"
          onClick={() => handleNavScroll('explore-menu')}
        >
          Menu
        </button>
        <button
          className="bk-mobile-link"
          onClick={() => handleNavScroll('app-download')}
        >
          Mobile App
        </button>
        <button
          className="bk-mobile-link"
          onClick={() => handleNavScroll('footer')}
        >
          Contact
        </button>

        {!token ? (
          <button
            className="bk-btn bk-btn-primary bk-mobile-cta"
            onClick={() => {

              setIsMobileOpen(false);
              setShowLogin(true);
              home();
            }}
          >
            Enter Shop Make you Fit Chop Beta Food
          </button>
        ) : (
          <>
            <button
              className="bk-mobile-link"
              onClick={() => {
                setIsMobileOpen(false);
                navigate('/myorders');
              }}
            >
              My Orders
            </button>
            <button
              className="bk-mobile-link bk-mobile-logout"
              onClick={logout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
