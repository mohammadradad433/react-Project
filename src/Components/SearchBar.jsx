export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search courses..."
      className="border p-2 rounded w-full"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}