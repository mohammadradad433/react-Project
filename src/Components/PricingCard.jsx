export default function PricingCard({ title, price, desc }) {
  return (
    <div className="
      border p-6 rounded-xl text-center transition
      hover:shadow-lg
      bg-white text-gray-800 border-gray-200
      dark:bg-gray-800 dark:text-white dark:border-gray-700
    ">

      <h3 className="text-xl font-bold dark:text-white">
        {title}
      </h3>

      <p className="my-4 text-gray-500 dark:text-white">
        ${price}
      </p>

      <p className="text-gray-600 dark:text-white">
        {desc}
      </p>

    </div>
  );
}