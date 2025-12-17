import { useState } from 'react';
import BooksGrid from '../shared/BooksGrid';
import BookCard from '../shared/BookCard';
import CartPanel from './CartPanel';
import './CartView.css';

function CartView({ books, loading, cart, onAddToCart, onRemoveFromCart, onClearCart }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="cart-view">
      <div className="cart-header">
        <h2>📖 Catálogo de Libros</h2>
        <button 
          className="view-cart-btn"
          onClick={() => setIsCartOpen(true)}
        >
          🛒 Ver Carrito ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </button>
      </div>

      <BooksGrid books={books} loading={loading}>
        {books.map((book, index) => (
          <BookCard 
            key={book._id || index}
            book={book}
            showAddButton={true}
            onAddToCart={onAddToCart}
          />
        ))}
      </BooksGrid>

      <CartPanel
        isOpen={isCartOpen}
        cart={cart}
        onClose={() => setIsCartOpen(false)}
        onRemove={onRemoveFromCart}
        onClear={onClearCart}
      />
    </div>
  );
}

export default CartView;
