export async function GET(req, { params }) {
  const { id } = await params; // Extract ID from params
  console.log(id);
  const res = await fetch(`http://localhost:5000/products?id=${id}`); // Fetch from JSON server

  if (!res.ok) return new Response("Product not found", { status: 404 });
  // it return as an array of one object so i destruct it
  const [product] = await res.json();
  return new Response(JSON.stringify(product), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(req, { params }) {
  const { id } = await params;

  await fetch(`http://localhost:5000/products/${id}`, {
    method: "DELETE",
  });

  return new Response(JSON.stringify({ message: "Product removed" }), {
    status: 200,
  });
}
