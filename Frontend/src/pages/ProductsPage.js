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
    { id: "name", label: "Name", minWidth: 100},
    { id: "age", label: "Age", minWidth: 100},
    { id: "email", label: "Email", minWidth: 100}
  ];

  const rows = [
    { id: 1, name: "ASD", age: 30, email: "asd@asd.com"}
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
        User Details
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
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.age}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>

        <Grid item xs={12} md={6} lg={12}>
          <AppWebsiteVisits
            title="Generic Alteration"
            subheader="Small cell lung cancer(NSCLC), which is the most common type of lung cancer"
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
