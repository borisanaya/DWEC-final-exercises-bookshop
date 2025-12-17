import './Navigation.css';

function Navigation({ currentView, onViewChange }) {
  return (
    <nav className="navigation">
      <button
        className={`nav-btn ${currentView === 'cart' ? 'active' : ''}`}
        onClick={() => onViewChange('cart')}
      >
        🛒 Carrito
      </button>
      <button
        className={`nav-btn ${currentView === 'crud' ? 'active' : ''}`}
        onClick={() => onViewChange('crud')}
      >
        ⚙️ Gestión CRUD
      </button>
    </nav>
  );
}

export default Navigation;
