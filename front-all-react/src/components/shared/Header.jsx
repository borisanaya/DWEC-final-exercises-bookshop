import './Header.css';

function Header({ cartCount = 0 }) {
  return (
    <header className="header">
      <h1 className="title">📚 Librería - MongoDB Atlas</h1>
      {cartCount > 0 && (
        <div className="cart-indicator">
          <span className="cart-icon">🛒</span>
          <span className="cart-badge">{cartCount}</span>
        </div>
      )}
    </header>
  );
}

export default Header;
