export default function TestimonialCard({ name, text }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <p className="text-gray-600">"{text}"</p>
      <h4 className="mt-4 font-bold">- {name}</h4>
    </div>
  );
}