import CartItem from './CartItem';
import './CartPanel.css';

function CartPanel({ cart, isVisible, onRemove }) {
  return (
    <div className={`cart-panel ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="cart-header">
        <h2>Carrito de Compras</h2>
      </div>
      <div className="cart-items">
        {cart.length === 0 ? (
          <div className="empty-cart">El carrito está vacío</div>
        ) : (
          cart.map((book, index) => (
            <CartItem 
              key={`cart-${index}`}
              book={book}
              onRemove={() => onRemove(index)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default CartPanel;
