import React from 'react';

const NutritionCard = ({ nutrition }) => {
  const { imageUrl, name, calories, category, createdAt } = nutrition;

  const formattedDate = new Date(createdAt).toLocaleDateString();

  return (
    <div className="nutrition-card">
      {imageUrl && <img className="nutrition-image" src={imageUrl} alt={name} />}
      <div className="nutrition-name">{name}</div>
      <div className="nutrition-calories">{calories}</div>
      <div className="nutrition-category">{category}</div>
      <div className="nutrition-date">{formattedDate}</div>
    </div>
  );
};

export default NutritionCard;
