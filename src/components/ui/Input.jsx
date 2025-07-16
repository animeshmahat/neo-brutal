// Reusable Input component
export default function Input({
  label, // Label text shown above the input
  error, // Optional error message shown below the input
  className = "", // Allow additional classes
  type = "text", // Input type (e.g. text, email, password)
  ...props // Spread the remaining props (e.g., {...register(...)})
}) {
  return (
    <div className="space-y-1">
      {/* Label text */}
      {label && <label className="block font-semibold">{label}</label>}

      {/* Actual input element */}
      <input
        type={type} // e.g. text, email
        className={`w-full p-2 border border-gray-400 rounded ${className}`} // Styling
        {...props} // e.g., {...register("field", rules)}
      />

      {/* Optional error message */}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
