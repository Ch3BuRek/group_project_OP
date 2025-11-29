import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

function AddProfile({ onGoHome }) {
  const [userProfiles, setUserProfiles] = useLocalStorage('userProfiles', []);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    description: '',
    image: ''
  });
  const [previewImage, setPreviewImage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
        setFormData(prev => ({
          ...prev,
          image: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.age || !formData.description || !formData.image) {
      alert('Будь ласка, заповніть всі поля та оберіть зображення');
      return;
    }

    const newProfile = {
      ...formData,
      id: Date.now()
    };

    setUserProfiles([...userProfiles, newProfile]);
    alert('Анкету успішно створено!');
    
    // Скидання форми
    setFormData({
      name: '',
      age: '',
      description: '',
      image: ''
    });
    setPreviewImage('');
  };

  return (
    <section id="add-section">
      <h2>Додати нового кота</h2>
      <form onSubmit={handleSubmit}>
        <div className="image-upload-container">
          <div className="image-preview">
            {previewImage ? (
              <img src={previewImage} alt="Попередній перегляд" />
            ) : (
              <span>Попередній перегляд</span>
            )}
          </div>
          <label className="upload-btn">
            Обрати зображення
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
          </label>
        </div>
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Ім'я кота" 
          required 
        />
        <input 
          type="text" 
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          placeholder="Вік" 
          required 
        />
        <textarea 
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Опис" 
          required 
        />
        <button type="submit">Створити анкету</button>
        <button type="button" onClick={onGoHome}>На головну</button>
      </form>
    </section>
  );
}

export default AddProfile;