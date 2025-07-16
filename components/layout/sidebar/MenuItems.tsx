import { IconHome, IconSettings, IconUsersGroup } from '@tabler/icons-react';

const Menuitems = [
  {
    id: 'home',
    title: 'Home',
    icon: IconHome,
    href: '/',
  },
  {
    id: 'Users',
    title: 'Users',
    icon: IconUsersGroup,
    href: '/user',
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: IconSettings,
    href: '/settings',
  },
];

export default Menuitems;
