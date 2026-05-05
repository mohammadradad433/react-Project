export default function ErrorState({ message = "Something went wrong" }) {
  return (
    <div className="text-center py-10 text-red-500">
      <p>{message}</p>
    </div>
  );
}