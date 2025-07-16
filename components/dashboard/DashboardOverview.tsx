'use client';
import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Stack,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { Grid } from '@mui/system';
import { IconUsersGroup } from '@tabler/icons-react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const dashboardData = [
  {
    title: 'User Count',
    total: 18,
    active: 18,
    deleted: 0,
    icon: <IconUsersGroup />,
    bgColor: '#f5f5f5',
  },
  {
    title: 'Bizz Count',
    total: 477,
    active: 467,
    deleted: 10,
    icon: <Avatar sx={{ bgcolor: 'white', color: 'black' }}>B</Avatar>,
    bgColor: '#f5f5f5',
  },
  {
    title: 'Active Lead Count',
    total: 450,
    active: 450,
    deleted: 0,
    icon: <PersonAddIcon />,
    bgColor: '#f5f5f5',
  },
];

const StatCard = ({ title, total, active, deleted, icon, bgColor }: any) => (
  <Paper
    elevation={3}
    sx={{
      p: 2,
      borderRadius: 3,
      background: bgColor,
      minWidth: 200,
    }}
  >
    <Box display="flex" justifyContent="center" mb={1}>
      <Avatar sx={{ bgcolor: 'white', color: '#333' }}>{icon}</Avatar>
    </Box>
    <Typography align="center" variant="subtitle2" fontWeight={500}>
      {title}
    </Typography>
    <Typography align="center" variant="h4" fontWeight={700} mt={1}>
      {total}
    </Typography>
    <Stack direction="row" justifyContent="space-around" mt={2}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <CircleIcon sx={{ color: 'green', fontSize: 12 }} />
        <Typography variant="body2" color="green">Active: {active}</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <CircleIcon sx={{ color: 'red', fontSize: 12 }} />
        <Typography variant="body2" color="red">Deleted: {deleted}</Typography>
      </Stack>
    </Stack>
  </Paper>
);

const DashboardOverview = () => {
  return (
    <Box>
      <Typography variant="h5" fontWeight={600} mb={3} color='text.primary'>
        Dashboard Overview
      </Typography>
      <Grid container spacing={3}>
        {dashboardData.map((item, idx) => (
          <Grid item xs={12} sm={4} key={idx}>
            <StatCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DashboardOverview;
