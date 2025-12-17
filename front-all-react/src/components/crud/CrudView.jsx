import { useState } from 'react';
import BooksGrid from '../shared/BooksGrid';
import BookCard from '../shared/BookCard';
import SearchModal from '../shared/SearchModal';
import NewBookModal from '../shared/NewBookModal';
import CrudFooter from './CrudFooter';
import './CrudView.css';

function CrudView({ books, loading, onSearchByTitle, onSearchByAuthor, onCreate, onLoadAll }) {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isNewBookModalOpen, setIsNewBookModalOpen] = useState(false);

  return (
    <div className="crud-view">
      <h2>⚙️ Gestión de Libros (CRUD)</h2>

      <BooksGrid books={books} loading={loading}>
        {books.map((book, index) => (
          <BookCard 
            key={book._id || index}
            book={book}
          />
        ))}
      </BooksGrid>

      <CrudFooter 
        onSearchClick={() => setIsSearchModalOpen(true)}
        onNewBookClick={() => setIsNewBookModalOpen(true)}
        onAllBooksClick={onLoadAll}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSearchByTitle={onSearchByTitle}
        onSearchByAuthor={onSearchByAuthor}
      />

      <NewBookModal
        isOpen={isNewBookModalOpen}
        onClose={() => setIsNewBookModalOpen(false)}
        onSubmit={onCreate}
      />
    </div>
  );
}

export default CrudView;
