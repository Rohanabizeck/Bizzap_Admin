'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => setIsMobileSidebarOpen(!isMobileSidebarOpen);

  const isLoginPage = pathname === '/user/login';

  if (isLoginPage) {
    return <>{children}</>; // No layout
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onSidebarClose={() => setIsMobileSidebarOpen(false)}
      />
      <main className="flex-1">
        <Header toggleMobileSidebar={toggleMobileSidebar} />
        <div className="p-4">{children}</div>
      </main>
    </div>
  );
}
