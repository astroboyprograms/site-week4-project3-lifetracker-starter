import React from 'react';
import './SummaryStat.css'

export const SummaryStat = ({ stat, label, substat }) => {
  return (
    <div className="summary-stat">
      <div className="primary-statistic">
        {stat}
      </div>
      <div className="stat-label">
        {label}
      </div>
      <div className="secondary-statistic">
        {substat}
      </div>
    </div>
  );
};
