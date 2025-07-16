'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');

    if (!loggedIn && pathname !== '/user/login') {
      // Redirect to login and DON'T render layout
      router.replace('/user/login');
    } else {
      // Allow rendering only if:
      // - loggedIn is true
      // - OR we're on /user/login
      setIsReady(true);
    }
  }, [pathname, router]);

  if (!isReady) return null;

  return <>{children}</>;
}
