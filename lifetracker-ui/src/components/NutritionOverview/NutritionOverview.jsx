import React from 'react';
import { Link } from 'react-router-dom';
import NutritionFeed from '../NutritionFeed/NutritionFeed';
import Loading from '../Loading/Loading';


function NutritionOverview({ appState, setAppState }) {
  const { error, isLoading, nutritions } = appState;

  return (
    <div className='nutrition-overview'>
      <Link to="/nutrition/create">Record Nutrition</Link>
      {error && <div className='error'>{error}</div>}
      {isLoading ? <Loading /> : <NutritionFeed nutritions={nutritions || []} />
}
    </div>
  );
}

export default NutritionOverview;
