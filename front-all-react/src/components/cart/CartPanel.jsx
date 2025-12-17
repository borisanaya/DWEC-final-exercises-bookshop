import CartItem from './CartItem';
import './CartPanel.css';

function CartPanel({ isOpen, cart, onClose, onRemove, onClear }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={onClose}></div>}
      
      <div className={`cart-panel ${isOpen ? 'open' : ''}`}>
        <div className="cart-header-panel">
          <h2>🛒 Carrito de Compras</h2>
          <button className="close-cart-btn" onClick={onClose}>✕</button>
        </div>

        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>El carrito está vacío</p>
              <span className="empty-icon">🛒</span>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item) => (
                  <CartItem 
                    key={item._id}
                    item={item}
                    onRemove={onRemove}
                  />
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <strong>Total de libros:</strong> {totalItems}
                </div>
                <button className="clear-cart-btn" onClick={onClear}>
                  🗑️ Vaciar Carrito
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CartPanel;
