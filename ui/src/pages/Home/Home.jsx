import { HeroBanner } from './HeroBanner';
import { WhyUs } from './WhyUs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Meals } from './Meals';

export const Home = () => {
  AOS.init();
  return (
    <div>
      <HeroBanner />
      <WhyUs />
      <Meals />
    </div>
  );
};
