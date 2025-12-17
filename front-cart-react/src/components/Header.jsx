import './Header.css';

function Header({ cartCount, onCartClick }) {
  return (
    <header className="header">
      <h1 className="title">Your Book Store</h1>
      <button 
        className="cart-badge" 
        onClick={onCartClick}
        aria-label="Ver carrito"
      >
        {cartCount}
      </button>
    </header>
  );
}

export default Header;
