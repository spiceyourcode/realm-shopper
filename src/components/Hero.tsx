import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Shop Smart, <span className="text-primary">Save Big</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Discover the latest gadgets, electronics, and lifestyle products at unbeatable prices. Free shipping on orders over $50.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="font-semibold">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="font-semibold">
                View Deals
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] animate-scale-in">
            <img
              src={heroBanner}
              alt="Featured products"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
