import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Features from "./components/Features/Features";
import Stats from "./components/Stats/Stats";
import CTA from "./components/CTA/CTA";

import Homepage from "./components/Homepage";

import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Homepage />   {/* ✅ load nội dung trang ở đây */}
      </main>
      <HowItWorks />
      <Features />
      <Stats />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
