
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Features from "./components/Features/Features";
import Stats from "./components/Stats/Stats";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";

import "./styles/global.css"; 

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <HowItWorks />
        <Features />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;