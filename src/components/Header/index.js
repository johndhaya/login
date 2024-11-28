import './index.css'

const Header = () => (
  <nav className="nav-head">
    <div className="nav-cont">
      <div className="nav-logo-cont">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <button type="button" className="nav-mob-btn">
          <img
            className="nav-bar-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
          />
        </button>
      </div>

      <div className="nav-cont nav-large-cont">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <ul className="nav-menu">
          <li className="menu-item">Home</li>
          <li className="menu-item">Products</li>
          <li className="menu-item">Cart</li>
        </ul>
        <button type="button" className="logout-desk-btn">
          Logout
        </button>
      </div>
    </div>
    <div className="nav-menu-mob">
      <ul className="nav-menu-list">
        <li className="nav-menu-item-mob">
          <img
            className="nav-bar-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
          />
        </li>
        <li className="nav-menu-item-mob">
          <img
            className="nav-bar-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
          />
        </li>
        <li className="nav-menu-item-mob">
          <img
            className="nav-bar-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
          />
        </li>
      </ul>
    </div>
  </nav>
)
export default Header
