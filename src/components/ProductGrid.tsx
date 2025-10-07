import ProductCard from "./ProductCard";
import productHeadphones from "@/assets/product-headphones.jpg";
import productSmartwatch from "@/assets/product-smartwatch.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productCamera from "@/assets/product-camera.jpg";
import productGaming from "@/assets/product-gaming.jpg";
import productPhone from "@/assets/product-phone.jpg";

const products = [
  {
    id: 1,
    image: productHeadphones,
    title: "Premium Wireless Noise-Cancelling Headphones",
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.5,
    reviews: 1234,
  },
  {
    id: 2,
    image: productSmartwatch,
    title: "Smart Fitness Watch with Heart Rate Monitor",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviews: 856,
  },
  {
    id: 3,
    image: productLaptop,
    title: "Ultra-Thin Laptop 15.6\" Full HD Display",
    price: 899.99,
    originalPrice: 1199.99,
    rating: 4.6,
    reviews: 543,
  },
  {
    id: 4,
    image: productCamera,
    title: "Professional DSLR Camera 24MP with Lens Kit",
    price: 799.99,
    rating: 4.9,
    reviews: 321,
  },
  {
    id: 5,
    image: productGaming,
    title: "Wireless Gaming Controller Pro Edition",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviews: 2145,
  },
  {
    id: 6,
    image: productPhone,
    title: "Latest Smartphone 128GB 5G Unlocked",
    price: 699.99,
    originalPrice: 849.99,
    rating: 4.5,
    reviews: 1876,
  },
];

const ProductGrid = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
          <p className="text-muted-foreground">
            Discover our handpicked selection of trending items
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
