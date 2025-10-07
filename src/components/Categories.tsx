import { Smartphone, Laptop, Watch, Camera, Gamepad2, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Electronics", icon: Smartphone },
  { name: "Computers", icon: Laptop },
  { name: "Wearables", icon: Watch },
  { name: "Cameras", icon: Camera },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Audio", icon: Headphones },
];

const Categories = () => {
  return (
    <section className="border-b bg-muted/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="ghost"
              className="flex items-center gap-2 whitespace-nowrap hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <category.icon className="h-4 w-4" />
              <span className="text-sm font-medium">{category.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
