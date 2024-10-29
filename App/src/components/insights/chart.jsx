// WeeklyAppointments.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
    },
  },
};

// Weekly Appointments Line Graph
export const WeeklyAppointments = () => {
  const weeklyData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Appointments",
        data: [5, 10, 8, 15, 20, 17, 12],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Header>Weekly Appointment Count</Card.Header>
      <Card.Body>
        <Line options={{ ...options, plugins: { ...options.plugins, title: { ...options.plugins.title, text: 'Weekly Appointment Count' } } }} data={weeklyData} />
      </Card.Body>
    </Card>
  );
};

// Monthly Appointments Line Graph
export const MonthlyAppointments = () => {
  const monthlyData = {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: "Appointments",
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 20) + 5),
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
      },
    ],
  };

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Header>Monthly Appointment Count</Card.Header>
      <Card.Body>
        <Line options={{ ...options, plugins: { ...options.plugins, title: { ...options.plugins.title, text: 'Monthly Appointment Count' } } }} data={monthlyData} />
      </Card.Body>
    </Card>
  );
};

// Yearly Appointments Line Graph
export const YearlyAppointments = () => {
  const yearlyData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Appointments",
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 50),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Header>Yearly Appointment Count</Card.Header>
      <Card.Body>
        <Line options={{ ...options, plugins: { ...options.plugins, title: { ...options.plugins.title, text: 'Yearly Appointment Count' } } }} data={yearlyData} />
      </Card.Body>
    </Card>
  );
};
