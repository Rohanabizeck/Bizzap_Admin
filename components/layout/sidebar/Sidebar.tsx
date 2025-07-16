'use client';

import { useMediaQuery, Box, Drawer } from "@mui/material";
import SidebarItems from "./SidebarItems";

interface ItemType {
  isMobileSidebarOpen: boolean;
  onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void;
  isSidebarOpen: boolean;
}

const Sidebar = ({
  isMobileSidebarOpen,
  onSidebarClose,
  isSidebarOpen,
}: ItemType) => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  const sidebarWidth = "270px";

  const scrollbarStyles = {
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#d1d5db', // Tailwind's gray-300
      borderRadius: '10px',
    },
  };

  // -------------------------
  // Sidebar for Desktop (lg+)
  // -------------------------
  if (lgUp) {
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
        }}
      >
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          variant="permanent"
          slotProps={{
            paper: {
              sx: {
                width: sidebarWidth,
                boxSizing: 'border-box',
                ...scrollbarStyles,
              },
            },
          }}
        >
          <Box sx={{ height: '100%' }}>
            <SidebarItems />
          </Box>
        </Drawer>
      </Box>
    );
  }

  // -------------------------
  // Sidebar for Mobile
  // -------------------------
  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      variant="temporary"
      slotProps={{
        paper: {
          sx: {
            width: sidebarWidth,
            boxSizing: 'border-box',
            ...scrollbarStyles,
          },
        },
      }}
    >
      <Box sx={{ height: '100%' }}>
        <SidebarItems />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
