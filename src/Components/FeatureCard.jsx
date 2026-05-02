export default function FeatureCard({ title, desc }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500">{desc}</p>
    </div>
  );
}