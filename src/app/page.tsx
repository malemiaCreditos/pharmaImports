import { AboutSection } from "@/components/AboutSection";
import { AppointmentsSection } from "@/components/AppointmentSection";
import { ContactSection } from "@/components/ContactSection";
import { DepartmentsSection } from "@/components/DepartmentsSection";
import { DoctorsSection } from "@/components/DoctorsSection";
import { FaqSection } from "@/components/FaqSection";
import { Footersection } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection ";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AppointmentsSection />
      <DepartmentsSection />
      <DoctorsSection />
      <FaqSection />
      <GallerySection />
      <ContactSection />
      <Footersection />
    </>
  );
}
