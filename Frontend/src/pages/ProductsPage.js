import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container, Stack, Typography, Grid, Continer } from '@mui/material';
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
    <div>
      <Typography variant="h4" sx={{ mb: 5 }}>
        User Details
      </Typography>

      <Grid item xs={12} md={6} lg={8}>
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
    </div>
  );
}
