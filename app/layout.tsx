'use client';

import './globals.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/utils/Theme'; // ✅ import your theme
import ProtectedLayout from '@/components/auth/ProtectedLayout';
import LayoutWrapper from '@/components/layout/LayoutWrapper';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <ProtectedLayout>
            <LayoutWrapper>{children}</LayoutWrapper>
          </ProtectedLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
