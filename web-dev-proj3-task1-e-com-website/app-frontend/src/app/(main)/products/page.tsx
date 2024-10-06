import {Metadata} from "next";
import Products from "@/app/components/ui/products";

export const metadata: Metadata = {
  title: 'Products',
};

export default function Page() {

  return (
      <main>
          <Products/>
      </main>
  )
}
