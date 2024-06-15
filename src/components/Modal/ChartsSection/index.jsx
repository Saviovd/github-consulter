import React from 'react';
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import { ChartStyles } from './ChartSectionStyles';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ChartsSection = ({
   repoDetails,
   languages,
   commitsCount,
   issuesCount,
   pullsCount,
}) => {
   if (
      !repoDetails ||
      !languages ||
      commitsCount === null ||
      issuesCount === null ||
      pullsCount === null
   )
      return null;

   const chartData = {
      labels: [
         'Stargazers',
         'Forks',
         'Open Issues',
         'Commits',
         'Issues',
         'Pull Requests',
      ],
      datasets: [
         {
            label: 'Statistics',
            data: [
               repoDetails.stargazers_count,
               repoDetails.forks_count,
               repoDetails.open_issues_count,
               commitsCount,
               issuesCount,
               pullsCount,
            ],
            backgroundColor: [
               '#90CC5F',
               '#fbd479',
               '#054495',
               '#8f29f8',
               '#657c9b',
            ],
            hoverBackgroundColor: [
               '#90CC5F',
               '#fbd479',
               '#054495',
               '#8f29f8',
               '#657c9b',
            ],
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
            backgroundColor: ['#fbd479', '#054495', '#8f29f8', '#657c9b'],
            hoverBackgroundColor: ['#fbd479', '#054495', '#8f29f8', '#657c9b'],
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
         <div className='chart-container'>
            <Doughnut data={chartData} options={chartOptions} />
         </div>
         <div className='chart-container'>
            <Bar data={languageChartData} options={languageChartOptions} />
         </div>
      </ChartStyles>
   );
};

export default ChartsSection;
