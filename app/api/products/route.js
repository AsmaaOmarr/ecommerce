
export async function GET(req) {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
