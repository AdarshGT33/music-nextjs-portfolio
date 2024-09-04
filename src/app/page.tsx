import FeaturedSections from "./components/FeaturedSections";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Instructor from "./components/Instructors";
import MusicSchoolTestimonials from "./components/MusicSchoolTestimonials";
import UpcomingWebinars from "./components/UpcomingWebinars";
import WhyChooseUs from "./components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedSections/>
      <WhyChooseUs/>
      <MusicSchoolTestimonials/>
      <UpcomingWebinars/>
      <Instructor/>
      <Footer/>
    </main>
  );
}
