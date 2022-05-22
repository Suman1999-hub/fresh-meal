import React from 'react';
import {
  createStyles,
  Header,
  Menu,
  Group,
  Center,
  Burger,
  Container,
  Title,
  ThemeIcon,
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { ChevronDown, ToolsKitchen2 } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.red[2],
    borderBottom: 0,
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  brandName: {
    fontFamily: 'Pacifico',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colors.gray[9],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      background: theme.fn.linearGradient(24, 'orange', 'red'),
      color: theme.colors.gray[1],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

export const AppHeader = ({ links }) => {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes } = useStyles();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          delay={0}
          transitionDuration={0}
          placement="end"
          gutter={1}
          control={
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <ChevronDown size={12} />
              </Center>
            </a>
          }
        >
          {menuItems}
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={56} className={classes.header} mb={120}>
      <Container>
        <div className={classes.inner}>
          <Group spacing={10}>
            <ThemeIcon
              size="lg"
              variant="gradient"
              gradient={{ from: 'orange', to: 'red' }}
            >
              <ToolsKitchen2 size={20} />
            </ThemeIcon>
            <Title
              order={3}
              sx={(theme) => ({
                color: theme.colors.gray[9],
                fontFamily: 'Pacifico',
                letterSpacing: '2px',
              })}
            >
              Fresh Meal
            </Title>
          </Group>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
            color="#fff"
          />
        </div>
      </Container>
    </Header>
  );
};
