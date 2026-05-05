export default function FilterDropdown({ value, onChange }) {
  return (
    <select
      className="
        border p-2 rounded outline-none transition
        bg-white text-gray-800 border-gray-300
        dark:bg-gray-800 dark:text-white dark:border-gray-700
      "
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="all">All Users</option>
      <option value="1">User 1</option>
      <option value="2">User 2</option>
      <option value="3">User 3</option>
    </select>
  );
}