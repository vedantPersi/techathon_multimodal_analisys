import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
// @mui
import { Container, Stack, Typography, Grid, Continer, Table, TableHead, TableBody, TableCell, TableRow, Card } from '@mui/material';
// components
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const columns_pathalogy = [
    { id: "date", label: "Date", minWidth: 100},
    { id: "wbcCount", label: "WBC Count", minWidth: 100},
    { id: "rbcCount", label: "RBC Count", minWidth: 100},
    { id: "hemoglobin", label: "Hemoglobin", minWidth: 100},
    { id: "hematocrit", label: "Hematocrit", minWidth: 100},
    { id: "plateletCount", label: "Platelet count", minWidth: 100},
    { id: "sodium", label: "Sodium", minWidth: 100},
    { id: "potassium", label: "Potassium", minWidth: 100},
    { id: "chloride", label: "Chloride", minWidth: 100},
  ];

  const rows_pathalogy = [
    { date: "January", wbcCount: 5.8, rbcCount: 4, hemoglobin: 33.5, hematocrit: 333.5, plateletCount: 180, sodium: 137, potassium: 3.7, chloride: 97},
    { date: "February", wbcCount: 6.7, rbcCount: 4.2, hemoglobin: 38.6, hematocrit: 38.6, plateletCount: 200, sodium: 140, potassium: 4.6, chloride: 100},
    { date: "March", wbcCount: 4.9, rbcCount: 4.7, hemoglobin: 44.2, hematocrit: 44.2, plateletCount: 230, sodium: 139, potassium: 5.1, chloride: 104},
    { date: "April", wbcCount: 7.1, rbcCount: 4.6, hemoglobin: 36.8, hematocrit: 36.8, plateletCount: 210, sodium: 142, potassium: 4.7, chloride: 98},
    { date: "May", wbcCount: 5.2, rbcCount: 4.8, hemoglobin: 48.3, hematocrit: 48.3, plateletCount: 260, sodium: 141, potassium: 3.9, chloride: 101},
  ];

  const columns_generic = [
    { id: "date", label: "Date", minWidth: 100},
    { id: "smokingStatus", label: "Smoking Status", minWidth: 100},
    { id: "cancerStage", label: "Cancer Stage", minWidth: 100},
    { id: "mutationCount", label: "Mutation Count", minWidth: 100},
    { id: "krasMutationCount", label: "KRAS Mutation Count", minWidth: 100},
    { id: "egfrMutationCount", label: "EGFR Mutation Count", minWidth: 100},
    { id: "tp53MutationCount", label: "TP53 Mutation Count", minWidth: 100},
    { id: "alkFusionStatus", label: "ALK Fusion Status", minWidth: 100},
    { id: "ros1FusionStatus", label: "ROS1 Fucion Status", minWidth: 100},
    { id: "treatment", label: "Treatment", minWidth: 100},
    { id: "response", label: "Response", minWidth: 100},
  ];

  const rows_generic_sample = [
    { date: "01/02/2023", smokingStatus: "Yes", cancerStage: "Stage II", mutationCount: 5, krasMutationCount: 3, egfrMutationCount: 2, tp53MutationCount: 0, alkFusionStatus: "Negative", ros1FusionStatus: "Positive", treatment: "Chemotherapy", response: "Partial"},
    { date: "02/02/2023", smokingStatus: "Yes", cancerStage: "Stage II", mutationCount: 6, krasMutationCount: 4, egfrMutationCount: 2, tp53MutationCount: 0, alkFusionStatus: "Negative", ros1FusionStatus: "Positive", treatment: "Chemotherapy", response: "Stable"},
    { date: "03/02/2023", smokingStatus: "Yes", cancerStage: "Stage II", mutationCount: 7, krasMutationCount: 5, egfrMutationCount: 2, tp53MutationCount: 0, alkFusionStatus: "Negative", ros1FusionStatus: "Positive", treatment: "Chemotherapy", response: "Progressive"},
    { date: "04/02/2023", smokingStatus: "Yes", cancerStage: "Stage III", mutationCount: 9, krasMutationCount: 6, egfrMutationCount: 3, tp53MutationCount: 0, alkFusionStatus: "Positive", ros1FusionStatus: "Negative", treatment: "Immunotherapy", response: "Stable"},
    { date: "05/02/2023", smokingStatus: "No", cancerStage: "Stage III", mutationCount: 10, krasMutationCount: 7, egfrMutationCount: 3, tp53MutationCount: 1, alkFusionStatus: "Positive", ros1FusionStatus: "Negative", treatment: "Immunotherapy", response: "Partial"},
  ];

  const chart_data_sample = [
    {
      name: 'Mutation Count',
      type: 'column',
      fill: 'solid',
      data: [5, 6, 7, 9, 10],
    },
    {
      name: 'KRAS Mutation Count',
      type: 'column',
      fill: 'solid',
      data: [3, 4, 5, 6, 7],
    },
    {
      name: 'EGFR Mutation Count',
      type: 'column',
      fill: 'solid',
      data: [2, 2, 2, 3, 3],
    },
    {
      name: 'TP53 Mutation Count',
      type: 'column',
      fill: 'solid',
      data: [0, 0, 0, 0, 1],
    },
  ];

  const chart_labels_sample = [
    '01/01/2023',
    '02/01/2023',
    '03/01/2023',
    '04/01/2023',
    '05/01/2023',
  ];


  const [rows_generic, setGenericData] = useState([]);
  const [chart_data, setChartData] = useState([]);
  const [chart_lables, setChartLables] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/patient/getPatientMutation")
      .then(response => response.json())
      .then(json => {
        console.log(json, "Generic Data")
        setGenericData(json)
      })

    fetch("http://localhost:8080/patient/getMutationCount")
    .then(response => response.json())
    .then(json => {
      console.log(json, "Chart Data")
      setChartData(json)
    })

    fetch("http://localhost:8080/patient/getMutationCountDates")
    .then(response => response.json())
    .then(json => {
      console.log(json, "Chart Labels")
      setChartLables(json)
    })
  
  }, []);

  return (
    // <>
    //   <Helmet>
    //     <title> Dashboard: Products | Minimal UI </title>
    //   </Helmet>

    //   <Container>
    //     <Typography variant="h4" sx={{ mb: 5 }}>
    //       Products
    //     </Typography>

    //     <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
    //       <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
    //         <ProductFilterSidebar
    //           openFilter={openFilter}
    //           onOpenFilter={handleOpenFilter}
    //           onCloseFilter={handleCloseFilter}
    //         />
    //         <ProductSort />
    //       </Stack>
    //     </Stack>

    //     <ProductList products={PRODUCTS} />
    //     <ProductCartWidget />
    //   </Container>
    // </>
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Patient Report
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="h6">Full Name</Typography>
          <Typography variant="body">Vedant Khandokar</Typography>
          {/* <AppNewsUpdate
            title="News Update"
            list={[...Array(5)].map((_, index) => ({
              id: faker.datatype.uuid(),
              title: faker.name.jobTitle(),
              description: faker.name.jobTitle(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          /> */}
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="h6">Contact Number</Typography>
          <Typography variant="body">9146645638</Typography>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="h6">Email</Typography>
          <Typography variant="body">vedant@gmail.com</Typography>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="h6">Gender</Typography>
          <Typography variant="body">Male</Typography>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="h6">Blood Group</Typography>
          <Typography variant="body">A+</Typography>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="h6">Age</Typography>
          <Typography variant="body">58</Typography>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Typography variant="h6">Address</Typography>
          <Typography variant="body">400 Milford Street, New Hampshire, Manchester - 03103</Typography>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Typography variant="h6">Diagnosed with</Typography>
          <Typography variant="body">Diabetes, Hypertension, Bronchogenic carcinoma</Typography>
        </Grid>

        <Typography variant="h6">
        -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </Typography>

        {/* Pathology Reports */}
        <Grid item xs={12} md={6} lg={12}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Blood Test Reports
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                {columns_pathalogy.map((column) => (
                  <TableCell key={column.id} align="left" style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows_pathalogy.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">{row.wbcCount}</TableCell>
                  <TableCell align="left">{row.rbcCount}</TableCell>
                  <TableCell align="left">{row.hemoglobin}</TableCell>
                  <TableCell align="left">{row.hematocrit}</TableCell>
                  <TableCell align="left">{row.plateletCount}</TableCell>
                  <TableCell align="left">{row.sodium}</TableCell>
                  <TableCell align="left">{row.potassium}</TableCell>
                  <TableCell align="left">{row.chloride}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>

        <Typography variant="h6">
        -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </Typography>

        {/* Generic Alteration */}
        <Grid item xs={12} md={6} lg={12}>
          <AppWebsiteVisits
            title="Generic Alteration"
            subheader="Small cell lung cancer(NSCLC), which is the most common type of lung cancer"
            chartLabels={chart_labels_sample}
            chartData={chart_data_sample}
          />
          <Table>
            <TableHead>
              <TableRow>
                {columns_generic.map((column) => (
                  <TableCell key={column.id} align="left" style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows_generic_sample.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">{row.smokingStatus}</TableCell>
                  <TableCell align="left">{row.cancerStage}</TableCell>
                  <TableCell align="left">{row.mutationCount}</TableCell>
                  <TableCell align="left">{row.krasMutationCount}</TableCell>
                  <TableCell align="left">{row.egfrMutationCount}</TableCell>
                  <TableCell align="left">{row.tp53MutationCount}</TableCell>
                  <TableCell align="left">{row.alkFusionStatus}</TableCell>
                  <TableCell align="left">{row.ros1FusionStatus}</TableCell>
                  <TableCell align="left">{row.treatment}</TableCell>
                  <TableCell align="left">{row.response}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Container>
  );
}
