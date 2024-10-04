"use client";
import Image from "next/image";
import Earth from "./map";
import DoughnutPieChart from "./chart";
import React, { useEffect, useState } from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Link from "next/link";
import axios from "axios";

export default function Home() {
  const [dataJson,setDataJson]=useState([11, 80, 3, 6 ]);
  const [country,setCountry]=useState('egypt');
  const [result1, setResult1] = useState(null);
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
        data: dataJson,//[11, 80, 3, 6 ],
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

  const handleSubmit=async()=>{
    const countryData = result.find(item => item.country.toLowerCase() === country.toLowerCase());
    const countryDataJson = countryResources.find(
      (item) => item.country.toLowerCase() == country.toLowerCase()
    );
    if (countryDataJson) {
      setResult1(countryDataJson);
    } else {
    }
    if (countryData) {
      const { CO2, N2O, CH4, others } = countryData.gases;
      setDataJson([CH4, CO2, others, N2O ])
    }
  }

  const [resources, setResources] = useState({ humanResources: 0, naturalResources: 0 });

  const countryResources = [
  {
    country: "Egypt",
    humanResources: 95.6,
    naturalResources: 4.4,
  },
  {
    country: "United States",
    humanResources: 58.4,
    naturalResources: 1.6,
  },
  {
    country: "China",
    humanResources: 72.9,
    naturalResources: 8.3,
  },
  {
    country: "India",
    humanResources: 88.4,
    naturalResources: 6.1,
  },
  {
    country: "Germany",
    humanResources: 77.6,
    naturalResources: 22.4,
  },
  {
    country: "Brazil",
    humanResources: 63.2,
    naturalResources: 36.8,
  },
  {
    country: "Russia",
    humanResources: 61.9,
    naturalResources: 38.1,
  },
  {
    country: "Japan",
    humanResources: 85.9,
    naturalResources: 14.1,
  },
  {
    country: "Canada",
    humanResources: 72.1,
    naturalResources: 27.9,
  },
  {
    country: "United Kingdom",
    humanResources: 79.6,
    naturalResources: 20.4,
  },
  {
    country: "Australia",
    humanResources: 74.2,
    naturalResources: 25.8,
  },
  {
    country: "South Africa",
    humanResources: 69.4,
    naturalResources: 30.6,
  },
  {
    country: "Mexico",
    humanResources: 70.4,
    naturalResources: 29.6,
  },
  {
    country: "Indonesia",
    humanResources: 76.2,
    naturalResources: 23.8,
  },
  {
    country: "Saudi Arabia",
    humanResources: 66.2,
    naturalResources: 33.8,
  },
  {
    country: "Argentina",
    humanResources: 71.8,
    naturalResources: 28.2,
  }
];


const carbonData = [
  {
    country: "Egypt",
    energyProduction: 70,
    transportation: 12,
    industry: 10,
    agriculture: 5,
    wasteManagement: 3,
  },
  {
    country: "United States",
    energyProduction: 65,
    transportation: 28,
    industry: 6,
    agriculture: 0.7,
    wasteManagement: 0.3,
  },
  {
    country: "China",
    energyProduction: 72,
    transportation: 15,
    industry: 10,
    agriculture: 2,
    wasteManagement: 1,
  },
  {
    country: "India",
    energyProduction: 70,
    transportation: 14,
    industry: 8,
    agriculture: 6,
    wasteManagement: 2,
  },
  {
    country: "Germany",
    energyProduction: 60,
    transportation: 20,
    industry: 15,
    agriculture: 3,
    wasteManagement: 2,
  },
  {
    country: "Brazil",
    energyProduction: 60,
    transportation: 12,
    industry: 15,
    agriculture: 10,
    wasteManagement: 3,
  },
  {
    country: "Russia",
    energyProduction: 67,
    transportation: 15,
    industry: 10,
    agriculture: 4,
    wasteManagement: 4,
  },
  {
    country: "Japan",
    energyProduction: 65,
    transportation: 15,
    industry: 15,
    agriculture: 3,
    wasteManagement: 2,
  },
  {
    country: "Canada",
    energyProduction: 70,
    transportation: 15,
    industry: 8,
    agriculture: 5,
    wasteManagement: 2,
  },
  {
    country: "United Kingdom",
    energyProduction: 58,
    transportation: 26,
    industry: 10,
    agriculture: 4,
    wasteManagement: 2,
  },
  {
    country: "Australia",
    energyProduction: 65,
    transportation: 20,
    industry: 10,
    agriculture: 3,
    wasteManagement: 2,
  },
  {
    country: "South Africa",
    energyProduction: 75,
    transportation: 10,
    industry: 10,
    agriculture: 3,
    wasteManagement: 2,
  },
  {
    country: "Mexico",
    energyProduction: 68,
    transportation: 18,
    industry: 8,
    agriculture: 3,
    wasteManagement: 3,
  },
  {
    country: "Indonesia",
    energyProduction: 70,
    transportation: 10,
    industry: 12,
    agriculture: 5,
    wasteManagement: 3,
  },
  {
    country: "Saudi Arabia",
    energyProduction: 80,
    transportation: 10,
    industry: 7,
    agriculture: 2,
    wasteManagement: 1,
  },
  {
    country: "Argentina",
    energyProduction: 65,
    transportation: 15,
    industry: 10,
    agriculture: 7,
    wasteManagement: 3,
  }
];

  const [location, setLocation] = useState({ latitude: '', longitude: '' });
  const [error, setError] = useState('');
  const [countryName,setCountryName]=useState('');
  useEffect(() => {  
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          var temp='https://nominatim.openstreetmap.org/reverse?lat='+Number(position.coords.latitude)+'&lon='+Number(position.coords.longitude)+'&format=json'
          fetch(temp)//`https://nominatim.openstreetmap.org/reverse?lat=${Number(location.latitude)}&lon=${Number(location.longitude)}&format=json`)
          .then(res => res.json())
          .then(res => {
            if (res.error) {
              console.error('Geocode Error:', res.error);
              //alert('Unable to find the location for the given coordinates.');
            } else {
              setCountryName(res.display_name);
              console.log('Country:', res.display_name);
            }
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });

          //fetch(`https://nominatim.openstreetmap.org/reverse?lat=${Number(location.latitude)}&lon=${Number(location.longitude)}&format=json`).then(res=>res.json())
          //.then(res=>{setCountryName(res.display_name);console.log('contry ',res)});
        },
        (error) => {
          setError('Location access denied or unavailable');
        }
      );
    } else {
      setError('Geolocation is not supported by your browser');
    }
  }, []);

 const [footPrintData, setFootPrintDData] = useState(null);

 const [carbonInfo, setCarbonInfo] = useState(null);

 useEffect(() => {
   const fetchedData = carbonData.find(data => data.country.toLowerCase() === country.toLowerCase());
   setCarbonInfo(fetchedData);
 }, [country]); 

  return (
    <div className="text-center">
      <div className="text-[1rem] md:text-[2.2rem] text-center w-full my-[1.5rem] md:my-[3rem] m-auto">Uncover the Role of Greenhouse Gases in Your Neighborhood</div>
      
      <div className="flex  flex-col md:flex-row gap-[1rem] w-full min-h-[540px]">
        <iframe
          src="https://climate.nasa.gov/earth-now/" // Add your NASA Earth Map URL
          width=""
          height=""
          className="w-[100%] min-h-[600px]  max-w-[100%] md:w-[700px] h-[100%]"
          style={{ border: 'none' }} // Correct usage of the style prop
          allowFullScreen // Corrected casing   className="max-h-[100%] md:max-h-[50vh]"
        ></iframe>
        <div className="flex flex-col gap-[1rem] w-full md:w-[50%] min-h-[12rem] md:h-full">
          <div className="flex flex-row items-center gap-[1rem]">
            <input value={country} onChange={(e)=>{setCountry(e.target.value)}} className="outline-none h-[3rem] text-[#000] w-[15rem] rounded-[1rem] border border-bink-500 m-[1rem] p-[0.6rem]" type="text" placeholder="Enter country" />
            <button onClick={handleSubmit} className="bg-blue-800 text-[#FFF] w-[12rem] h-[3rem] text-center rounded-[1rem]" type="submit">Get Emissions Data</button>
          </div>
          {/* <DoughnutPieChart /> */}
          <div style={{ width: '50%', margin: '0 auto' }}>
            <Doughnut data={data}/>
          </div>
        </div>
      </div>



      
        {/*
        <div className="w-full text-left">
           <p className="w-full ml-auto my-[1rem] text-[1.5rem]">Your Location is:{' '+countryName}</p>
           <p>Latitude: {location.latitude}</p>
           <p>Longitude: {location.longitude}</p>
        </div> 
        */}
      {result1 && (
        <div className="mt-[2rem]">
          <h3 className="mb-[1rem] text-xl">Country: {result1.country}</h3>
          <p>Human Resources: {result1.humanResources}%</p>
          <p>Natural Resources: {result1.naturalResources}%</p>
        </div>
      )}

      <div className="my-[2rem]">
        <h1 className="mb-[1rem] text-xl bg-blue-600 border w-[50%] m-auto p-[1rem] rounded-[1rem]">Carbon Footprint for {carbonInfo?.country}</h1>
        <p>Energy Production: {carbonInfo?.energyProduction}%</p>
        <p>Transportation: {carbonInfo?.transportation}%</p>
        <p>Industry: {carbonInfo?.industry}%</p>
        <p>Agriculture: {carbonInfo?.agriculture}%</p>
        <p>Waste Management: {carbonInfo?.wasteManagement}%</p>
      </div>

      {result1&&(
        <div className="w-full mr-auto mt-[3rem] mb-[2rem]">
          <div className="mb-[1rem] text-xl bg-blue-600 border w-[50%] m-auto p-[1rem] rounded-[1rem]">Solutions:</div>
          <div>
            {/* <div className="flex flex-">
              <img></img>
              <p>If anyone has a farm ,The main problem is cow manure so the solution is to feed the cows azola ferns  instead of feed so it will reduce the percentage of methane gas</p>
            </div> */}

          <div className="flex my-[1.5rem] w-[90%] m-auto items-center  justify-between gap-[1rem]">
            <p>If anyone has a farm ,The main problem is cow manure so the solution is to feed the cows azola ferns  instead of feed so it will reduce the percentage of methane gas</p>
            <img src="first_ph.jpeg" className="sm:max-w-[500px] max-w-[200px] object-cover rounded-[2rem]"></img>
          </div>
          <div className="flex my-[1.5rem] w-[90%] m-auto items-center  justify-between gap-[1rem]">
            <img src="second_ph.jpeg" className="sm:max-w-[500px] max-w-[200px] object-cover rounded-[2rem]"></img>
            <p>If anyone has a factory the solution is using bio filters</p>
          </div>
          <div className="flex my-[1.5rem] w-[90%] m-auto items-center  justify-between gap-[1rem]">
            <p>Car exhaust emissions can be solved by either using catalytic converters or switching to electric vehicles</p>
            <img src="third_ph.jpeg" className="sm:max-w-[500px] max-w-[200px]  object-cover rounded-[2rem]"></img>
          </div>

          </div>
        </div>
      )}

          {/* <div className="flex my-[1.5rem] w-full items-center mx-[3rem] justify-between gap-[1rem]">
            <p>If anyone has a farm ,The main problem is cow manure so the solution is to feed the cows azola ferns  instead of feed so it will reduce the percentage of methane gas</p>
            <img src="first_ph.jpeg" className="w-full object-cover rounded-[2rem]"></img>
          </div>
          <div className="flex my-[1.5rem] w-full items-center mx-[3rem] justify-between gap-[1rem]">
            <img src="first_ph.jpeg" className="w-full object-cover rounded-[2rem]"></img>
            <p>If anyone has a factor the solution is using bio filters</p>
          </div>
          <div className="flex my-[1.5rem] w-full items-center mx-[3rem] justify-between gap-[1rem]">
            <p>Car exhaust , the solution is to use electric vehicles</p>
            <img src="first_ph.jpeg" className="w-full object-cover rounded-[2rem]"></img>
          </div> */}
            
      {result1&&(<>
        <Link href={'/researchers'}>
          <button className="bg-blue-800 text-[#FFF] w-[7rem] h-[3rem] text-center rounded-[1rem] mb-[1rem]">Researchers</button>
        </Link>
        <div className="mb-[1rem]">for more solutions and awarenss</div>
        </>
      )}




      
      {/* <iframe
        src="https://gemini.google.com/"
        width="100%"
        height="100%"
        className="w-[100%] min-h-[70vh] md:w-[700px] md:h-[100%]"
        style={{ border: 'none' }}
        allowFullScreen
      ></iframe> */}

    </div>
  );
}
