import Hero from "@/components/home/Hero";
import MobileHero from "@/components/home/MobileHero";
import PopularTrips from "@/components/home/PopularTrips";
import OrganizedTrips from "@/components/home/OrganizedTrips";
import Categories from "@/components/home/Categories";
import PlanTripSection from "@/components/home/PlanTripSection";
import Testimonials from "@/components/home/Testimonials";

// export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="hidden md:block">
        <Hero />
      </div>
      <MobileHero />
      <Categories />
      <PopularTrips />
      <OrganizedTrips />
      <PlanTripSection />
      <Testimonials />
    </div>
  );
}
