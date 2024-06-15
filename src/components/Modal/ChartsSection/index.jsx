import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import { ChartStyles } from './ChartSectionStyles';
import { Chart } from 'chart.js';
import { registerables } from 'chart.js';

Chart.register(...registerables);

const ChartsSection = ({ repoDetails, languages }) => {
   if (!repoDetails || !languages) return null;

   const chartData = {
      labels: ['Stargazers', 'Forks', 'Open Issues'],
      datasets: [
         {
            label: 'Statistics',
            data: [
               repoDetails.stargazers_count,
               repoDetails.forks_count,
               repoDetails.open_issues_count,
            ],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
         },
      ],
   };

   const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
   };

   const languageLabels = Object.keys(languages);
   const languageData = Object.values(languages);

   const languageChartData = {
      labels: languageLabels,
      datasets: [
         {
            label: 'Lines of Code',
            data: languageData,
            backgroundColor: [
               '#FF6384',
               '#36A2EB',
               '#FFCE56',
               '#5AD3D1',
               '#FF8A80',
               '#B9F6CA',
               '#FFD180',
               '#AED581',
               '#FFD700',
               '#F0E68C',
            ],
            hoverBackgroundColor: [
               '#FF6384',
               '#36A2EB',
               '#FFCE56',
               '#5AD3D1',
               '#FF8A80',
               '#B9F6CA',
               '#FFD180',
               '#AED581',
               '#FFD700',
               '#F0E68C',
            ],
         },
      ],
   };

   const languageChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
         y: {
            beginAtZero: true,
            ticks: {
               stepSize: 1000,
            },
         },
      },
   };

   return (
      <ChartStyles>
         <div className="chart-container">
            <Doughnut data={chartData} options={chartOptions} />
         </div>
         <div className="chart-container">
            <Bar data={languageChartData} options={languageChartOptions} />
         </div>
      </ChartStyles>
   );
};

export default ChartsSection;
