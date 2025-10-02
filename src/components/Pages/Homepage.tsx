import Header from "../Header/Header";
import HeroHomepage from "../Hero/HeroHomepage";
import Categories from "../Categories";
import HowItWorks from "../HowItWorks/HowItWorks";
import Features from "../Features/Features";
import Stats from "../Stats/Stats";
import CTA from "../CTA/CTA";
import Footer from "../Footer/Footer";


export default function Homepage() {
  return (
    <>
      <Header />
      <HeroHomepage />
      <Categories />
      <HowItWorks />
      <Features />
      <Stats />
      <CTA />
      <Footer />
    </>
  );
}

      