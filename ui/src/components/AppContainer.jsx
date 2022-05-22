import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import { AppHeader } from './AppHeader';

const links = [
  { link: '#about', label: 'Why Us' },
  { link: '#meals', label: 'Meals' },
  { link: '#contact', label: 'Contact' },
  { link: '#faq', label: "FAQ's" },
];

export default function AppContainer({ children }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      //   footer={
      //     <Footer height={60} p="md">
      //       Application footer
      //     </Footer>
      //   }
      header={<AppHeader links={links} />}
    >
      {children}
    </AppShell>
  );
}
