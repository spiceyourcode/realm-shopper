import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <a href="/" className="flex items-center gap-2">
              <ShoppingCart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">ShopHub</span>
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden flex-1 max-w-2xl md:flex">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search for products, brands and more..."
                className="w-full pl-4 pr-12 h-10"
              />
              <Button
                size="sm"
                className="absolute right-0 top-0 h-10 px-4 rounded-l-none"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="hidden md:flex gap-2">
              <User className="h-5 w-5" />
              <span>Account</span>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden border-t px-4 py-2">
        <Input
          type="search"
          placeholder="Search products..."
          className="w-full"
        />
      </div>
    </header>
  );
};

export default Header;
