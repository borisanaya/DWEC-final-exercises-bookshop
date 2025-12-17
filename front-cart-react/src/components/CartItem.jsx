import './CartItem.css';

function CartItem({ book, onRemove }) {
  return (
    <div className="cart-item">
      <img 
        src={`http://localhost:3000/public/${book.img}`}
        alt={book.title}
        className="cart-item-img"
      />
      <div className="cart-item-info">
        <h4 className="cart-item-title">{book.title}</h4>
        <p className="cart-item-author">{book.author}</p>
        <button 
          className="remove-btn"
          onClick={onRemove}
          aria-label="Eliminar del carrito"
        >
          🗑️ Eliminar
        </button>
      </div>
    </div>
  );
}

export default CartItem;
