'use client';
import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // ✅ NEW GRID FIX

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessIcon from '@mui/icons-material/Business';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

const UserStats = () => {
  const stats = [
    {
      title: 'Total Users',
      count: 1280,
      icon: <PeopleAltIcon />,
      color: 'primary.main',
    },
    {
      title: 'Bizz Count',
      count: 340,
      icon: <BusinessIcon />,
      color: 'secondary.main',
    },
    {
      title: 'Active Leads',
      count: 47,
      icon: <LocalFireDepartmentIcon />,
      color: 'error.main',
    },
  ];

  return (
    <DashboardCard title="Overview">
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid xs={12} sm={4} key={index}>
            <Box display="flex" alignItems="center">
              <Avatar
                sx={{
                  bgcolor: stat.color,
                  width: 48,
                  height: 48,
                  mr: 2,
                }}
              >
                {stat.icon}
              </Avatar>
              <Box>
                <Typography variant="h6">{stat.count}</Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {stat.title}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </DashboardCard>
  );
};

export default UserStats;
