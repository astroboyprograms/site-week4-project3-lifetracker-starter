import React, { useState } from 'react';
import apiClient from '../../../services/apiClient'; 

const NutritionForm = ({ onSubmit }) => {
  const [nutrition, setNutrition] = useState({
    name: '',
    calories: 1,
    imageUrl: '',
    category: '',
  });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setNutrition({
      ...nutrition,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!nutrition.name || !nutrition.category) {
      setError('Name and category are required fields');
    } else {
      setError('');
    
      try {
        const response = await apiClient.createPost(nutrition);
        
        if (response.error) {
          console.error(`Error creating nutrition: ${response.error}`);
        } else {
          // After the request has been successful, clear the form
          setNutrition({
            name: '',
            calories: 1,
            imageUrl: '',
            category: '',
          });
        }
      } catch (error) {
        console.error(`Error creating nutrition: ${error}`);
      }
    }
  };  // Correct closing brace for handleSubmit function

  return (
    <div className="nutrition-form">
      {error && <div className="error">{error}</div>}
      <input
        name="name"
        type="text"
        value={nutrition.name}
        onChange={handleChange}
        className="form-input"
        placeholder="Name"
      />
      <input
        name="calories"
        type="number"
        value={nutrition.calories}
        onChange={handleChange}
        className="form-input"
        placeholder="Calories"
      />
      <input
        name="imageUrl"
        type="text"
        value={nutrition.imageUrl}
        onChange={handleChange}
        className="form-input"
        placeholder="Image URL"
      />
      <input
        name="category"
        type="text"
        value={nutrition.category}
        onChange={handleChange}
        className="form-input"
        placeholder="Category"
      />
      <button className="submit-nutrition" onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
};

export default NutritionForm;
