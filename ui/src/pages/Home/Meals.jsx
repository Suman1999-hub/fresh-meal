import { Container, Grid, Group, Text, Title } from '@mantine/core';
import { CurrencyRupee } from 'tabler-icons-react';
import { WhyUsCard } from '../../components/WhyUsCard';

export const Meals = () => {
  return (
    <Container pb="xl" pt={100}>
      <Text
        align="center"
        variant="gradient"
        weight={700}
        mb={25}
        gradient={{ from: 'orange', to: 'red', deg: 25 }}
        style={{ fontFamily: 'Greycliff CF, sans-serif', fontSize: '35px' }}
      >
        Meals
      </Text>
      <Grid gutter="xl">
        <Grid.Col
          span={6}
          sx={(theme) => ({
            border: `3px solid ${theme.colors.gray[9]}`,
            borderRadius: '10px',
          })}
        >
          <Title align="center" order={3}>
            Veg Meal
          </Title>
          <Group
            position="center"
            align="baseline"
            mt="md"
            sx={(theme) => ({
              gap: '0px',
            })}
          >
            <CurrencyRupee />
            <Text
              weight={550}
              sx={(theme) => ({
                fontSize: '35px',
              })}
            >
              200
            </Text>
          </Group>
        </Grid.Col>
        <Grid.Col span={6}>
          <Title align="center" order={3}>
            Mixed Meal (Veg + Non-Veg)
          </Title>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
