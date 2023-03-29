// // import React, { useState, useEffect } from 'react';
// // import { Line } from 'react-chartjs-2';

// // const PatientGraph = () => {
// //   const [chartData, setChartData] = useState({});

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       // Replace this with your own API call to retrieve patient data
// //       const response = await fetch('https://api.example.com/patientData');
// //       const data = await response.json();
      
// //       // Extract the data for each parameter into separate arrays
// //       const wbcData = data.map((item) => item.wbcCount);
// //       const rbcData = data.map((item) => item.rbcCount);
// //       const hemoglobinData = data.map((item) => item.hemoglobin);
// //       const hematocritData = data.map((item) => item.hematocrit);
// //       const plateletData = data.map((item) => item.plateletCount);
// //       const sodiumData = data.map((item) => item.sodium);
// //       const potassiumData = data.map((item) => item.potassium);
// //       const chlorideData = data.map((item) => item.chloride);

// //       // Set up the chart configuration
// //       setChartData({
// //         labels: data.map((item) => item.month), // Month names for x-axis labels
// //         datasets: [
// //           {
// //             label: 'WBC Count',
// //             data: wbcData,
// //             fill: false,
// //             borderColor: 'red',
// //             tension: 0.1,
// //           },
// //           {
// //             label: 'RBC Count',
// //             data: rbcData,
// //             fill: false,
// //             borderColor: 'blue',
// //             tension: 0.1,
// //           },
// //           {
// //             label: 'Hemoglobin',
// //             data: hemoglobinData,
// //             fill: false,
// //             borderColor: 'green',
// //             tension: 0.1,
// //           },
// //           {
// //             label: 'Hematocrit',
// //             data: hematocritData,
// //             fill: false,
// //             borderColor: 'orange',
// //             tension: 0.1,
// //           },
// //           {
// //             label: 'Platelet Count',
// //             data: plateletData,
// //             fill: false,
// //             borderColor: 'purple',
// //             tension: 0.1,
// //           },
// //           {
// //             label: 'Sodium',
// //             data: sodiumData,
// //             fill: false,
// //             borderColor: 'black',
// //             tension: 0.1,
// //           },
// //           {
// //             label: 'Potassium',
// //             data: potassiumData,
// //             fill: false,
// //             borderColor: 'gray',
// //             tension: 0.1,
// //           },
// //           {
// //             label: 'Chloride',
// //             data: chlorideData,
// //             fill: false,
// //             borderColor: 'brown',
// //             tension: 0.1,
// //           },
// //         ],
// //       });
// //     };

// //     fetchData();
// //   }, []);

// //   return (
// //     <div>
// //       <h2>Patient Blood Test Data</h2>
// //       <Line data={chartData} />
// //     </div>
// //   );
// // };

// // export default PatientGraph;

// import React, { Component } from 'react';
// import Chart from 'chart.js';

// class BloodTestChart extends Component {
//   chartRef = React.createRef();

//   componentDidMount() {
//     this.buildChart();
//   }

//   buildChart = () => {
//     const myChartRef = this.chartRef.current.getContext('2d');

//     new Chart(myChartRef, {
//       type: 'line',
//       data: {
//         labels: ['January', 'February', 'March'],
//         datasets: [
//           {
//             label: 'WBC Count',
//             data: [6.5, 7.0, 5.8],
//             borderColor: 'red',
//             fill: false
//           },
//           {
//             label: 'RBC Count',
//             data: [4.2, 4.5, 4.3],
//             borderColor: 'blue',
//             fill: false
//           },
//           {
//             label: 'Hemoglobin',
//             data: [14.2, 14.7, 13.8],
//             borderColor: 'green',
//             fill: false
//           }
//         ]
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         title: {
//           display: true,
//           text: 'Blood Test Results'
//         },
//         scales: {
//           yAxes: [{
//             ticks: {
//               beginAtZero: true
//             }
//           }]
//         }
//       }
//     });
//   }

//   render() {
//     return (
//       <canvas ref={this.chartRef} />
//     );
//   }
// }

// export default BloodTestChart;
