import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NutritionOverview from '../NutritionOverview/NutritionOverview';
import NutritionNew from '../NutritionNew/NutritionNew.jsx';
import NutritionDetail from '../NutritionDetail/NutritionDetail';
import NotFound from '../NotFound/NotFound';

function NutritionPage({ appState, setAppState }) {
  if(!appState.isAuthenticated) {
    return <AccessForbidden />
  }

  return (
    <div className='nutrition-page'>
      <Routes>
        <Route path="/" element={<NutritionOverview appState={appState} setAppState={setAppState} />} />
        <Route path="/create" element={<NutritionNew appState={appState} setAppState={setAppState} />} />
        <Route path="/id/:nutritionId" element={<NutritionDetail appState={appState} setAppState={setAppState} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default NutritionPage;

