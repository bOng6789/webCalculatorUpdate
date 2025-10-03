import Header from "../Header/Header";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import HeroCategoriesPageTemplate from "../Hero/HeroCategoriesPageTemplate";
import PopularTools from "../PopularTools/PopularTools";
import Subcategories from "../Subcategories/Subcategories";
import QuickAccess from "../QuickAccess/QuickAccess";
import Footer from "../Footer/Footer";


export default function CategoriesPageTemplate() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <HeroCategoriesPageTemplate />
      <PopularTools />
      {/* add later after complete data */}
      <Subcategories />
      <QuickAccess />
      <Footer />
    </>
  );
}