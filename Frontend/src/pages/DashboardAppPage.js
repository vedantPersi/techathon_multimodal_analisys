import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
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

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          <h2>OncoGuide Dashboard</h2> 
          <h3>Annual Report</h3>
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Patients" total={714} icon={'ant-design:idcard-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Alive" total={658} color="info" icon={'ant-design:smile-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Critical" total={24} color="warning" icon={'ant-design:meh-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Deceased" total={56} color="error" icon={'ant-design:frown-filled'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits 
              title="Monthly Patient Feedback"
              subheader="A consolidated view of patients emotions"
              chartLabels={[
                '01/01/2021',
                '02/01/2021',
                '03/01/2021',
                '04/01/2021',
                '05/01/2021',
                '06/01/2021',
                '07/01/2021',
                '08/01/2021',
                '09/01/2021',
                '10/01/2021',
                '11/01/2021',
              ]}
              chartData={[
                {
                  name: 'Satisfied',
                  type: 'line',
                  fill: 'solid',
                  color: '#04b855',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
    
                {
                  name: 'Not satisfied',
                  type: 'line',
                  fill: 'solid',
                  color: '#d9646c',
                  data:[39,36,59,52,64,35,45,30,36,25,30],
                },
              ]}
              />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Treatment Status"
              subheader="Overall satisfaction rate"
              chartData={[
                { label: 'Treated', value: 500 },
                { label: 'Undergoing Treatment', value: 49 },
                { label: 'N/A', value: 23 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={12}>
            <AppConversionRates
              title="Patients Age Group"
              subheader="(+43%) patients belong to 60-80 age group"
              chartData={[
                { label: '0-10', value: 26 },
                { label: '10-20', value: 34 },
                { label: '20-30', value: 43 },
                { label: '30-40', value: 63 },
                { label: '40-50', value: 88 },
                { label: '50-60', value: 99 },
                { label: '60-70', value: 120 },
                { label: '70-80', value: 105 },
                { label: '80+', value: 87 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                '#FFCC29',
                '#FFCC29',
                '#FFCC29',
                '#FFCC29',
                '#FFCC29',
                '#FFCC29',
                '#FFCC29',
                '#FFCC29'
              ]}
            />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Google',
                  value: 341212,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
}
