export default function PricingCard({ title, price, desc }) {
  return (
    <div className="border p-6 rounded-xl text-center hover:shadow-lg transition">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="my-4 text-gray-500">${price}</p>
      <p>{desc}</p>
    </div>
  );
}