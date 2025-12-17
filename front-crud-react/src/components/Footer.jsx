import './Footer.css';

function Footer({ onSearchClick, onNewBookClick, onAllBooksClick }) {
  return (
    <footer className="footer">
      <div className="footer-buttons">
        <button className="footer-btn btn-search" onClick={onSearchClick}>
          🔍 Búsquedas
        </button>
        <button className="footer-btn btn-new" onClick={onNewBookClick}>
          ➕ Nuevo Libro
        </button>
        <button className="footer-btn btn-all" onClick={onAllBooksClick}>
          🏠 Todos
        </button>
      </div>
    </footer>
  );
}

export default Footer;
