export async function GET(req) {
  const res = await fetch("http://localhost:5000/cart");
  const cart = await res.json();

  return new Response(JSON.stringify(cart), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req, res) {
  const product = await req.json();
  // check if product already exists
  const cart = await fetch("http://localhost:5000/cart");
  const cartProducts = await cart.json();
  const existingProduct = cartProducts.find((p) => p.id === product.id);

  if (existingProduct) {
    // console.log(existingProduct);
      // update quantity
    //   const updatedProduct 
    await fetch(`http://localhost:5000/cart?id=${product.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: existingProduct.quantity + 1 }),
    });
  } else {
    // add new product
    await fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...product, quantity: 1 }),
    });
  }

  return new Response(
    JSON.stringify({ message: "cart updated successfully" }),
    { status: 200 }
  );
}
