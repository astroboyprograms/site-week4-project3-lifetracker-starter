import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NutritionCard from '../NutritionCard/NutritionCard';
import NotFound from '../NotFound/NotFound';

const NutritionDetail = () => {
  const [nutrition, setNutrition] = useState(null);
  const { nutritionId } = useParams();

  useEffect(() => {
    const fetchNutrition = async () => {
      try {
        const response = await axios.get(`/nutrition/${nutritionId}`);
        setNutrition(response.data);
      } catch (error) {
        console.error(`Error fetching nutrition: ${error}`);
      }
    };

    fetchNutrition();
  }, [nutritionId]);

  if (!nutrition) return <h1 className="loading">Loading...</h1>;
  
  return (
    <div className="nutrition-detail">
      {nutrition ? <NutritionCard nutrition={nutrition} /> : <NotFound />}
    </div>
  );
};

export default NutritionDetail;
