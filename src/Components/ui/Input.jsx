export default function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
  error,
  placeholder,
}) {
  return (
    <div className="mb-3">

      {label && (
        <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-2 rounded border outline-none transition
          bg-white text-gray-800
          dark:bg-gray-800 dark:text-white
          border-gray-300 dark:border-gray-600
          focus:border-purple-500
          ${error ? "border-red-500" : ""}
        `}
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}

    </div>
  );
}