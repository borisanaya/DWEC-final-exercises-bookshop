import './CartItem.css';

function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <img 
        src={`http://localhost:3000/public/${item.img}`}
        alt={item.title}
        className="cart-item-img"
      />
      <div className="cart-item-info">
        <h4 className="cart-item-title">{item.title}</h4>
        <p className="cart-item-author">{item.author}</p>
        <p className="cart-item-quantity">Cantidad: {item.quantity}</p>
      </div>
      <button 
        className="remove-btn"
        onClick={() => onRemove(item._id)}
        title="Eliminar"
      >
        🗑️
      </button>
    </div>
  );
}

export default CartItem;
