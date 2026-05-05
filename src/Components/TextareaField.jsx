export default function TextareaField({ value, onChange, error }) {
  return (
    <div>

      <textarea
        name="message"
        placeholder="Your Message"
        rows="4"
        value={value}
        onChange={onChange}
        className={`border p-2 w-full rounded outline-none transition
          bg-white text-gray-800
          dark:bg-gray-700 dark:text-white
          placeholder-gray-400
          dark:border-gray-600
          ${
            error
              ? "border-red-500"
              : "border-gray-300 focus:border-purple-500"
          }
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