import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Container from "@/components/global/Container";
import Section from "@/components/global/Section";
import FiltersSidebar from "@/components/shop/FiltersSidebar";
import Slide from "@/components/Slide";
import Subscribe from "@/components/Subscribe";

export default function ShopPage() {
  return (
    <>
      <Section className="bg-white">
        <Container className="py-12">
          <div>
            <FiltersSidebar />
            <div className="hidden flex-1 md:block">
              {/* Product grid would go here */}
            </div>
          </div>
        </Container>
      </Section>

      <Slide />
      <Features />
      <Gallery />
    </>
  );
}
