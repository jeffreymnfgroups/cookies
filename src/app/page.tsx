import Hero from "@/components/luxury/Hero";
import FeaturedProducts from "@/components/luxury/FeaturedProducts";
import Subscription from "@/components/luxury/Subscription";
import Testimonials from "@/components/luxury/Testimonials";
import Newsletter from "@/components/luxury/Newsletter";
import About from "@/components/luxury/About";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Subscription />
      <About />
      <Testimonials />
      <Newsletter />
    </>
  );
}