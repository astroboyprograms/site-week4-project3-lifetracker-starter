
import React from 'react';
import Loading from '../Loading/Loading';
import { ActivityFeed } from '../ActivityFeed/ActivityFeed';

export const ActivityPage = ({ appState, setAppState }) => {
    const { isProcessing, activityData } = appState;
  
    // Provide default values for activityData and its nested properties
    const safeActivityData = {
      nutrition: {
        calories: {
          perDay: [],
          perCategory: []
        }
      },
      ...activityData
    };
  
    const totalCaloriesPerDay = safeActivityData.nutrition.calories.perDay;
    const avgCaloriesPerCategory = safeActivityData.nutrition.calories.perCategory;
  
    return (
      <div className="activity-page">
        {isProcessing
          ? <Loading />
          : <ActivityFeed
              totalCaloriesPerDay={totalCaloriesPerDay}
              avgCaloriesPerCategory={avgCaloriesPerCategory}
            />
        }
      </div>
    );
  };
  
export default ActivityPage;
