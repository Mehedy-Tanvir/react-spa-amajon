import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <div className="grid items-center justify-center gap-4 gid-cols-1 md:grid-cols-2 mt-7 lg:grid-cols-3">
      {products?.map((product) => (
        <ProductsCard key={product.id} product={product}></ProductsCard>
      ))}
    </div>
  );
};

export default Products;
