export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search courses..."
      className="
        border p-2 rounded w-full outline-none transition
        bg-white text-gray-800 border-gray-300
        dark:bg-gray-800 dark:text-white dark:border-gray-700
        placeholder-gray-400 dark:placeholder-gray-500
        focus:ring-2 focus:ring-purple-500
      "
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}