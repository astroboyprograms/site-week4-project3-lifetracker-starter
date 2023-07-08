import React from 'react';
import NutritionForm from '../NutritionForm/NutritionForm';

function NutritionNew({ appState, setAppState }) {
  return (
    <div className='nutrition-new'>
      <NutritionForm appState={appState} setAppState={setAppState} />
    </div>
  );
}

export default NutritionNew;
