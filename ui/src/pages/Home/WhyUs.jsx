import { Container, Grid, Text, Title } from '@mantine/core';
import { WhyUsCard } from '../../components/WhyUsCard';

export const WhyUs = () => {
  return (
    <Container
    //   data-aos="fade-in-up"
    //   sx={(theme) => ({
    //     background: theme.fn.linearGradient(
    //       45,
    //       theme.colors.orange[5],
    //       theme.colors.red[5]
    //     ),
    //     borderRadius: theme.radius.lg,
    //     padding: theme.spacing.md,
    //     minHeight: '250px',
    //   })}
    >
      <Text
        align="center"
        variant="gradient"
        weight={700}
        mb={25}
        gradient={{ from: 'orange', to: 'red', deg: 25 }}
        style={{ fontFamily: 'Greycliff CF, sans-serif', fontSize: '35px' }}
      >
        Why Us?
      </Text>
      <Grid justify="center" gutter="xl">
        <WhyUsCard />
        <WhyUsCard />
        <WhyUsCard />
        <WhyUsCard />
        <WhyUsCard />
      </Grid>
    </Container>
  );
};
