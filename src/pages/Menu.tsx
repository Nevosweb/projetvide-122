
import Navbar from "../components/Navbar";
import MenuSection from "../components/MenuSection";
import Footer from "../components/Footer";

const Menu = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-japanBlack via-japanCharcoal to-japanBlack text-white tracking-wide">
      <Navbar />
      <div className="pt-24 pb-16 px-4 md:px-8 max-w-[1024px] mx-auto">
        <MenuSection />
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
