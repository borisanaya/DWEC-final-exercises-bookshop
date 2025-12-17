import { useState } from 'react';
import './SearchModal.css';

function SearchModal({ isOpen, onClose, onSearchByTitle, onSearchByAuthor }) {
  const [titleSearch, setTitleSearch] = useState('');
  const [authorSearch, setAuthorSearch] = useState('');

  if (!isOpen) return null;

  const handleTitleSearch = (e) => {
    e.preventDefault();
    if (titleSearch.trim()) {
      onSearchByTitle(titleSearch.trim());
      setTitleSearch('');
      onClose();
    }
  };

  const handleAuthorSearch = (e) => {
    e.preventDefault();
    if (authorSearch.trim()) {
      onSearchByAuthor(authorSearch.trim());
      setAuthorSearch('');
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>🔍 Búsquedas</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          <form onSubmit={handleTitleSearch} className="search-form">
            <label>Búsqueda por título:</label>
            <div className="input-group">
              <input
                type="text"
                value={titleSearch}
                onChange={(e) => setTitleSearch(e.target.value)}
                placeholder="Título del libro"
                className="search-input"
              />
              <button type="submit" className="search-btn">
                Buscar
              </button>
            </div>
          </form>

          <form onSubmit={handleAuthorSearch} className="search-form">
            <label>Búsqueda por autor:</label>
            <div className="input-group">
              <input
                type="text"
                value={authorSearch}
                onChange={(e) => setAuthorSearch(e.target.value)}
                placeholder="Nombre del autor"
                className="search-input"
              />
              <button type="submit" className="search-btn">
                Buscar
              </button>
            </div>
          </form>
        </div>

        <div className="modal-footer">
          <button className="cancel-btn" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
