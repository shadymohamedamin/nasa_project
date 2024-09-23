// components/DoughnutPieChart.tsx
"use client"
import React, { useState } from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutPieChart = () => {
    const [dataJson,setDataJson]=useState([]);
    const result=[
        {
          "country": "Egypt",
          "gases": {
            "CO2": 80,
            "N2O": 6,
            "CH4": 11,
            "others": 3
          }
        },
        {
          "country": "United States",
          "gases": {
            "CO2": 50,
            "N2O": 5,
            "CH4": 4,
            "others": 1
          }
        },
        {
          "country": "China",
          "gases": {
            "CO2": 65,
            "N2O": 8,
            "CH4": 15,
            "others": 12
          }
        },
        {
          "country": "India",
          "gases": {
            "CO2": 60,
            "N2O": 8,
            "CH4": 25,
            "others": 7
          }
        },
        {
          "country": "Germany",
          "gases": {
            "CO2": 70,
            "N2O": 15,
            "CH4": 10,
            "others": 5
          }
        },
        {
          "country": "Brazil",
          "gases": {
            "CO2": 50,
            "N2O": 10,
            "CH4": 30,
            "others": 10
          }
        },
        {
          "country": "Russia",
          "gases": {
            "CO2": 65,
            "N2O": 10,
            "CH4": 10,
            "others": 15
          }
        },
        {
          "country": "Japan",
          "gases": {
            "CO2": 80,
            "N2O": 5,
            "CH4": 10,
            "others": 5
          }
        },
        {
          "country": "Canada",
          "gases": {
            "CO2": 75,
            "N2O": 10,
            "CH4": 10,
            "others": 5
          }
        },
        {
          "country": "United Kingdom",
          "gases": {
            "CO2": 60,
            "N2O": 20,
            "CH4": 10,
            "others": 10
          }
        },
        {
          "country": "Australia",
          "gases": {
            "CO2": 70,
            "N2O": 15,
            "CH4": 10,
            "others": 5
          }
        },
        {
          "country": "South Africa",
          "gases": {
            "CO2": 55,
            "N2O": 20,
            "CH4": 15,
            "others": 10
          }
        },
        {
          "country": "Mexico",
          "gases": {
            "CO2": 60,
            "N2O": 10,
            "CH4": 20,
            "others": 10
          }
        },
        {
          "country": "Indonesia",
          "gases": {
            "CO2": 70,
            "N2O": 10,
            "CH4": 15,
            "others": 5
          }
        },
        {
          "country": "Saudi Arabia",
          "gases": {
            "CO2": 60,
            "N2O": 10,
            "CH4": 15,
            "others": 15
          }
        },
        {
          "country": "Argentina",
          "gases": {
            "CO2": 65,
            "N2O": 10,
            "CH4": 20,
            "others": 5
          }
        }
      ]
      
      
  // Data for the charts
  const data = {
    labels: ['CH4', 'CO2', 'Others', 'N2O'],
    datasets: [
      {
        label: '%',
        data: [11, 80, 3, 6 ],
        backgroundColor: [
          'rgba(149, 0, 0, 0.8)',
          'rgba(54, 162, 235, 1)',
          //'rgba(255, 206, 86, 0.2)',
          'rgba(0, 255, 0, 0.6)',
          'rgba(255, 255, 0, 0.5)',
          //'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(149, 0, 0, 1)',
          'rgba(54, 162, 235, 1)',
          //'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          //'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      {/* <h2>Doughnut Chart</h2> */}
      <Doughnut data={data}/>
      {/* <h2>Pie Chart</h2>
      <Pie data={data} /> */}
    </div>
  );
};

export default DoughnutPieChart;
