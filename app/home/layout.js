import { CartProvider } from "@/context/cartContext";
import { ProductProvider } from "@/context/productContext";
import { UsersProvider } from "@/context/usersContext";

export default function RootLayout({ children }) {
  return (
    <ProductProvider>
      <CartProvider>
        <UsersProvider>
          {children}
        </UsersProvider>
      </CartProvider>
    </ProductProvider>
  );
}
