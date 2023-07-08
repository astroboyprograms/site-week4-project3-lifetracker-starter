import React from 'react';
import { SummaryStat } from '../SummaryStat/SummaryStat';
import './ActivityFeed.css'

export const ActivityFeed = ({ totalCaloriesPerDay, avgCaloriesPerCategory }) => {
  return (
    <div className="activity-feed">
      <h1 className="activity-title">Activity Feed</h1>
      <div className="activity-data">
        <div className="per-category">
          <h4>Average Calories Per Category</h4>
          {avgCaloriesPerCategory.slice(0, 6).map((item, idx) => (
            <SummaryStat
              key={idx}
              stat={Math.floor(item.avgCaloriesPerCategory)}
              label="calories"
              substat={item.category}
            />
          ))}
        </div>

        <div className="per-day">
          <h4>Total Calories Per Day</h4>
          {totalCaloriesPerDay.map((item, idx) => (
            <SummaryStat
              key={idx}
              stat={Math.floor(item.totalCaloriesPerDay)}
              label="calories"
              substat={new Date(item.date).toLocaleDateString('en-GB')} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};
