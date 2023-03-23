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

  const columns_pathalogy = [
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
    { wbcCount: 4, rbcCount: 13.5, hemoglobin: 30, hematocrit: 33.5, plateletCount: 180, sodium: 137, potassium: 3.7, chloride: 97}
  ];

  const columns_generic = [
    { id: "month", label: "Month", minWidth: 100},
    { id: "smoking_status", label: "Smoking Status", minWidth: 100},
    { id: "cancer_stage", label: "Cancer Stage", minWidth: 100},
    { id: "mutation_count", label: "Mutation Count", minWidth: 100},
    { id: "kras_count", label: "KRAS Mutation Count", minWidth: 100},
    { id: "egfr_count", label: "EGFR Mutation Count", minWidth: 100},
    { id: "tp53_count", label: "TP53 Mutation Count", minWidth: 100},
    { id: "alk_fusion_status", label: "ALK Fusion Status", minWidth: 100},
    { id: "ros1_fusion_status", label: "ROS1 Fucion Status", minWidth: 100},
    { id: "treatment", label: "Treatment", minWidth: 100},
    { id: "response", label: "Response", minWidth: 100},
  ];

  const rows_generic = [
    { month: "January", smoking_status: "Yes", cancer_stage: "Stage II", mutation_count: 5, kras_count: 3, egfr_count: 2, tp53_count: 0, alk_fusion_status: "Negative", ros1_fusion_status: "Positive", treatment: "Chemotherapy", response: "Partial"},
    { month: "February", smoking_status: "Yes", cancer_stage: "Stage II", mutation_count: 6, kras_count: 4, egfr_count: 2, tp53_count: 0, alk_fusion_status: "Negative", ros1_fusion_status: "Positive", treatment: "Chemotherapy", response: "Stable"},
    { month: "March", smoking_status: "Yes", cancer_stage: "Stage II", mutation_count: 7, kras_count: 5, egfr_count: 2, tp53_count: 0, alk_fusion_status: "Negative", ros1_fusion_status: "Positive", treatment: "Chemotherapy", response: "Progressive"},
    { month: "April", smoking_status: "Yes", cancer_stage: "Stage III", mutation_count: 9, kras_count: 6, egfr_count: 3, tp53_count: 0, alk_fusion_status: "Positive", ros1_fusion_status: "Negative", treatment: "Immunotherapy", response: "Stable"},
    { month: "May", smoking_status: "No", cancer_stage: "Stage III", mutation_count: 10, kras_count: 7, egfr_count: 3, tp53_count: 1, alk_fusion_status: "Positive", ros1_fusion_status: "Negative", treatment: "Immunotherapy", response: "Partial"},
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
            chartLabels={[
              '01/01/2023',
              '02/01/2023',
              '03/01/2023',
              '04/01/2023',
              '05/01/2023',
            ]}
            chartData={[
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
            ]}
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
              {rows_generic.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="left">{row.month}</TableCell>
                  <TableCell align="left">{row.smoking_status}</TableCell>
                  <TableCell align="left">{row.cancer_stage}</TableCell>
                  <TableCell align="left">{row.mutation_count}</TableCell>
                  <TableCell align="left">{row.kras_count}</TableCell>
                  <TableCell align="left">{row.egfr_count}</TableCell>
                  <TableCell align="left">{row.tp53_count}</TableCell>
                  <TableCell align="left">{row.alk_fusion_status}</TableCell>
                  <TableCell align="left">{row.ros1_fusion_status}</TableCell>
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
