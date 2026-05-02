export default function CourseModal({
  isOpen,
  onClose,
  onSave,
  title,
  setTitle,
  editingCourse
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-white p-6 rounded-xl w-80">

        <h2 className="text-xl font-bold mb-4">
          {editingCourse ? "Edit Course" : "Add Course"}
        </h2>

        <input
          type="text"
          className="border p-2 w-full mb-4 rounded"
          placeholder="Course title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>

          <button
            onClick={onSave}
            className="px-4 py-2 bg-purple-600 text-white rounded"
          >
            Save
          </button>
        </div>

      </div>

    </div>
  );
}