'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DashboardOverview from '@/components/dashboard/DashboardOverview';
import { Container } from '@mui/material';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (!isLoggedIn) {
      router.replace('/user/login');
    }
  }, [router]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <DashboardOverview />
    </Container>
  );
}
