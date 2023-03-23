import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
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

  const columns = [
    
    { id: "wbcCount", label: "WBC Count", minWidth: 100},
    { id: "rbcCount", label: "RBC Count", minWidth: 100},
    { id: "hemoglobin", label: "Hemoglobin", minWidth: 100},
    { id: "hematocrit", label: "Hematocrit", minWidth: 100},
    { id: "plateletCount", label: "Platelet count", minWidth: 100},
    { id: "sodium", label: "Sodium", minWidth: 100},
    { id: "potassium", label: "Potassium", minWidth: 100},
    { id: "chloride", label: "Chloride", minWidth: 100},
  ];

  const rows = [
    { wbcCount: 4, rbcCount: 13.5, hemoglobin: 30, hematocrit: 33.5, plateletCount: 180, sodium: 137, potassium: 3.7, chloride: 97}
  ];

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
        Patient Details
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

        <Grid item xs={12} md={6} lg={12}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align="left" style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  
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

        <Grid item xs={12} md={6} lg={12}>
          <AppWebsiteVisits
            title="Generic Alteration"
            //subheader="Comparison of how patients are responding to Medications"
            chartLabels={[
              '01/01/2023',
              '02/01/2023',
              '03/01/2023',
              '04/01/2023',
              '05/01/2023',
              '06/01/2023',
              '07/01/2023',
              '08/01/2023',
              '09/01/2023',
              '10/01/2023',
              '11/01/2023',
            ]}
            chartData={[
              {
                name: 'Mutation Count',
                type: 'column',
                fill: 'solid',
                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
              },
              {
                name: 'KRAS Mutation Count',
                type: 'column',
                fill: 'solid',
                data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
              },
              {
                name: 'EGFR Mutation Count',
                type: 'column',
                fill: 'solid',
                data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
              },
              {
                name: 'TP53 Mutation Count',
                type: 'column',
                fill: 'solid',
                data: [25, 34, 32, 28, 41, 28, 61, 58, 59, 36, 39],
              },
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
