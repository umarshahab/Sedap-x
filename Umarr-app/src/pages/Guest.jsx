import GuestLayout from "../layouts/GuestLayout";
import NavbarG from "../components/NavbarG";
import HeroSectionG from "../components/HeroSectionG";
import AboutSectionG from "../components/AboutSectionG";
import TopProductsG from "../components/TopProductsG";
import TestimonialsG from "../components/TestimonialsG";
import FooterG from "../components/FooterG";

const Guest = () => {
  return (
    <GuestLayout>
      <NavbarG />
      <HeroSectionG />
      <AboutSectionG />
      <TopProductsG />
      <TestimonialsG />
      <FooterG />
    </GuestLayout>
  );
};

export default Guest;
