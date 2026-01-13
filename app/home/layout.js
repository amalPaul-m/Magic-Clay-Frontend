import { CartProvider } from "@/context/cartContext";
import { ProductProvider } from "@/context/productContext";

export default function RootLayout({ children }) {
  return (
    <ProductProvider>
    <CartProvider>
      {children}
    </CartProvider>
    </ProductProvider>
  );
}
