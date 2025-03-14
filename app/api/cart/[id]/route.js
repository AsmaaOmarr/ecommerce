// update product quantity by 1
export async function PATCH(req, { params }) {
  const { id } = await params; // Extract ID from params
  const { quantity } = await req.json();
  // Fetch current product from cart
  const res = await fetch(`http://localhost:5000/cart?id=${id}`);
  if (!res.ok) {
    return new Response(JSON.stringify({ message: "Product not found" }), {
      status: 404,
    });
  }

  // res return as an array
  const [product] = await res.json();

  // Increment or decrement quantity by 1
  const updatedQuantity = product.quantity + quantity;

  // Update cart item with new quantity
  await fetch(`http://localhost:5000/cart/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ quantity: updatedQuantity }),
    headers: { "Content-Type": "application/json" },
  });

  return new Response(JSON.stringify({ message: "Quantity updated" }), {
    status: 200,
  });
}

// REMOVE product from cart
export async function DELETE(req, { params }) {
  const { id } = await params;

  await fetch(`http://localhost:5000/cart/${id}`, {
    method: "DELETE",
  });

  return new Response(JSON.stringify({ message: "Product removed" }), {
    status: 200,
  });
}
