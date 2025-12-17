import { useState } from 'react';
import './NewBookModal.css';

function NewBookModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    img: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.author.trim() || !formData.img.trim()) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const success = await onSubmit(formData);
    if (success) {
      setFormData({ title: '', author: '', img: '' });
      onClose();
    }
  };

  const handleClose = () => {
    setFormData({ title: '', author: '', img: '' });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>➕ Nuevo Libro</h2>
          <button className="close-btn" onClick={handleClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="title">Título:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Título del libro"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="author">Autor:</label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Nombre del autor"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="img">Imagen:</label>
              <input
                type="text"
                id="img"
                name="img"
                value={formData.img}
                onChange={handleChange}
                placeholder="nombre_imagen.jpg"
                className="form-input"
              />
              <small className="form-help">
                Nombre del archivo de imagen (ej: 0.jpg, 1.jpg, etc.)
              </small>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="cancel-btn" onClick={handleClose}>
              Cerrar
            </button>
            <button type="submit" className="submit-btn">
              💾 Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewBookModal;
