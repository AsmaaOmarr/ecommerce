export async function GET(req) {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req, res) {
  const product = await req.json();

  // add new product
  await fetch("http://localhost:5000/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  return new Response(
    JSON.stringify({ message: "product added successfully! ✅" }),
    { status: 200 }
  );
}
