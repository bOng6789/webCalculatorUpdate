// src/components/Pages/ConverterTemplate.tsx

import Header from "../Header/Header";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Calculator from "../Calculator/Calculator";
import ConversionTable from "../ConversionTable/ConversionTable";
import FormulaSection from "../FormulaSection/FormulaSection";
import RelatedConverters from "../RelatedConverters/RelatedConverters";
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";


export default function ConverterTemplate() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Calculator />
      <ConversionTable />
      <FormulaSection />
      <RelatedConverters />
      <FAQ />
      <Footer />
    </>
  );
}