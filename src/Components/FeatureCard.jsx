export default function FeatureCard({ title, desc }) {
  return (
    <div className="
      p-6 rounded-xl shadow transition hover:shadow-lg
      bg-gray-50 text-gray-800
      dark:bg-gray-800 dark:text-white dark:shadow-black/30
    ">

      <h3 className="text-xl font-bold mb-2">
        {title}
      </h3>

      <p className="text-gray-500 dark:text-gray-300">
        {desc}
      </p>

    </div>
  );
}