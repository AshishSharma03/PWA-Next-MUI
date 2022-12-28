import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import CustomCard from '../../CustomComponents/CustomCard';
import { CardContent, CardHeader,Box } from '@mui/material';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);


const option = {
    maintainAspectRatio :   false,
    plugins: {
        legend: {
           display:false
        },
    }

}
export const data = {
  labels: ['Strength', 'Weakness', 'Opertunity', 'Threates'],
  datasets: [
    {
      label: '# of Votes',
      data: [100, 50, 40, 30],
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

 function SWOT() {
  return (
  <CustomCard>
    <CardHeader 
    title="SWOT analysys"
    subheader="25 september 2022"
    />
    <CardContent>
      <Box sx={{minHeight:"200px"}}>
    <Radar data={data} options={option} />
      </Box>
    </CardContent>
  </CustomCard>
  );
}


export default SWOT