import { Container, Grid, Group, Text, ThemeIcon, Title } from '@mantine/core';
import { HeartHandshake } from 'tabler-icons-react';

export const WhyUsCard = () => {
  return (
    <Grid.Col sm={3} md={4} data-aos="flip-up" sx={(theme) => ({})}>
      <Group
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '150px',
          border: `1px solid ${theme.colors.orange[5]}`,
          borderRadius: theme.radius.md,
          boxShadow: theme.shadows.sm,
          cursor: 'pointer',
          '&:hover': {
            boxShadow: theme.shadows.lg,
          },
        })}
      >
        <ThemeIcon variant="light" size="xl" color="red">
          <HeartHandshake size="xl" />
        </ThemeIcon>
        <Text size="lg" weight={600}>
          Healthy
        </Text>
      </Group>
    </Grid.Col>
  );
};
