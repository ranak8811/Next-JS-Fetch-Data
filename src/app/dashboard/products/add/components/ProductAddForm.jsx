"use client";

import { useRouter } from "next/navigation";

export default function ProductAddForm() {
  const { NEXT_PUBLIC_SERVER_ADDRESS } = process.env;
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const payload = { productName };
    const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });

    const result = await res.json();
    console.log(result);
    form.reset();
    // alert("Product added successfully");
    router.push("/products"); // this is client component
    // router.refresh();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="text-black"
          type="text"
          name="productName"
          placeholder="Product Name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
