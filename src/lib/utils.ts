import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: string | number): string {
  return `KSH ${Number(amount).toLocaleString("en-KE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;
}

export function getImageUrl(image: string | null | undefined): string {
  if (!image) return "/placeholder.svg";
  if (image.startsWith("http")) return image;
  return `${import.meta.env.VITE_API_URL?.replace("/api", "") || "http://127.0.0.1:8000"}${image}`;
}
