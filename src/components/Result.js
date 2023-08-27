import { Stack, Typography } from '@mui/material';

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
  const { homevalue, DownPayment, loanAmount, loanTerm, interestrate } = data;
  const Totalloanmonths = loanTerm * 12;
  const interestPerMonth = interestrate / 100 / 12;
  const monthlyPayment =
    (
      loanAmount * interestPerMonth *
      (1 + interestPerMonth) ** Totalloanmonths) /
    ((1 + interestPerMonth) ** Totalloanmonths - 1);
  const totalinterestgenerated = monthlyPayment * Totalloanmonths - loanAmount;

  const piedata = {
    labels: ['Principle', 'Interest'],
    datasets: [
      {
        label: 'Ratio of principle and interest',
        data: [homevalue, totalinterestgenerated],
        backgroundColor: [
          'rgba(255, 0, 0, 0.4)',
          'rgba(187, 0, 255, 0.5)',
        ],
        borderColor: [
          'rgba(255, 255, 255, 1)',
          'rgba(0, 0, 0, 1)',
        ],
        borderWidth: 1,
        
      },
    ],
  };

  return (
    <Stack gap={3} padding={1}>
      <Typography textAlign='center' variant="h5">
        Monthly Payment: ${monthlyPayment.toFixed(2)}
      </Typography>
      <Stack direction={'row'} justifyContent={'center'}>
        <div>
          <Pie data={piedata} />
        </div>
      </Stack>

    </Stack>
  );


};

export default Result;