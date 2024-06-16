import React, { useEffect, useState } from 'react';
import {
   Chart as ChartJS,
   ArcElement,
   BarElement,
   CategoryScale,
   LinearScale,
   Tooltip,
   Legend,
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import { ChartStyles } from './ChartSectionStyles';
import Loading from '@/components/Loading';

ChartJS.register(
   ArcElement,
   BarElement,
   CategoryScale,
   LinearScale,
   Tooltip,
   Legend
);

const ChartsSection = ({
   repoDetails,
   languages,
   commitsCount,
   issuesCount,
   pullsCount,
}) => {
   const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
      const timer = setTimeout(() => {
         setIsLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
   }, []);
   if (isLoading) {
      return <Loading size={30} />;
   }
   if (
      !repoDetails ||
      !languages ||
      commitsCount === null ||
      issuesCount === null ||
      pullsCount === null
   ) {
      return (
         <p className='message'>
            Unable to fetch statistics data from repository. Please try again
            later.
         </p>
      );
   }

   const chartData = {
      labels: [
         'Stargazers',
         'Issues',
         'Commits',
         'Forks',
         'Open Issues',
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
      maintainAspectRatio: true,
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
         {languageLabels ? (
            <div className='chart-container'>
               <Bar data={languageChartData} options={languageChartOptions} />
            </div>
         ) : (
            ''
         )}
         {repoDetails.stargazers_count !== 0 &&
         repoDetails.forks_count !== 0 &&
         repoDetails.open_issues_count !== 0 &&
         commitsCount !== 0 &&
         issuesCount !== 0 &&
         pullsCount !== 0 ? (
            <div className='chart-container'>
               <Doughnut data={chartData} options={chartOptions} />
            </div>
         ) : (
            ''
         )}
      </ChartStyles>
   );
};

export default ChartsSection;
