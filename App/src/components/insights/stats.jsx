// EmployeeStats.jsx
import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeStats = ({ stats }) => {
  return (
    <div className="card p-3 shadow-sm">
      <h4 className="card-title mb-3">Employee Performance Stats</h4>
      <div className="card-body">
        <div className="mb-2">
          <strong>Total Appointments:</strong> {stats.totalAppointments}
        </div>
        <div className="mb-2">
          <strong>Completed Appointments:</strong> {stats.completedAppointments}
        </div>
        <div className="mb-2">
          <strong>No-shows:</strong> {stats.noShows}
        </div>
        <div className="mb-2">
          <strong>Client Feedback (Avg. Rating):</strong> {stats.averageRating} / 5
        </div>
        <div className="mb-2">
          <strong>Follow-up Success Rate:</strong> {stats.followUpSuccessRate}%
        </div>
        <div className="mb-2">
          <strong>Most Frequent Client:</strong> {stats.mostFrequentClient || 'N/A'}
        </div>
      </div>
    </div>
  );
};

// Define prop types to ensure stats are passed in the correct format
EmployeeStats.propTypes = {
  stats: PropTypes.shape({
    totalAppointments: PropTypes.number.isRequired,
    completedAppointments: PropTypes.number.isRequired,
    noShows: PropTypes.number.isRequired,
    averageRating: PropTypes.number,
    followUpSuccessRate: PropTypes.number,
    mostFrequentClient: PropTypes.string,
  }),
};

// Set default values for props in case some metrics are unavailable
EmployeeStats.defaultProps = {
  stats: {
    totalAppointments: 0,
    completedAppointments: 0,
    noShows: 0,
    averageRating: 0,
    followUpSuccessRate: 0,
    mostFrequentClient: '',
  },
};

export default EmployeeStats;
