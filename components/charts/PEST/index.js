import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import CustomCard from '../../CustomComponents/CustomCard';
import { CardContent, CardHeader } from '@mui/material';
import { Box } from '@mui/system';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);


const option = {
    maintainAspectRatio :   false,
    plugins: {
        legend: {
            position: 'left',
          
        },
    }

}
export const data = {
  labels: ['Poitical', 'Economical', 'Social', 'Technological factors'],
  datasets: [
    {
      label: '# of Votes',
      data: [60, 50, 40, 30],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};

 function PEST() {
  return (
  <CustomCard>
    <CardHeader 
    title="PEST analysys"
    subheader="25 september 2022"
    />
    <CardContent>
    <Box sx={{minHeight:"200px"}}>
    <PolarArea data={data} options={option} />
    </Box>
    </CardContent>
  </CustomCard>
  );
}


export default PEST