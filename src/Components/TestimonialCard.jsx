export default function TestimonialCard({ name, text }) {
  return (
    <div className="
      p-6 rounded-xl shadow transition hover:shadow-lg
      bg-white text-gray-800
      dark:bg-gray-800 dark:text-white dark:shadow-black/30
    ">

      <p className="text-gray-600 dark:text-gray-300">
        "{text}"
      </p>

      <h4 className="mt-4 font-bold">
        - {name}
      </h4>

    </div>
  );
}