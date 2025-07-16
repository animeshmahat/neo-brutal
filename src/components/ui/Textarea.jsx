// Reusable Textarea component
export default function Textarea({
  label, // Label text above the textarea
  error, // Error message
  className = "", // Extra class styles
  rows = 4, // Default number of rows
  ...props // Spread remaining props (like {...register})
}) {
  return (
    <div className="space-y-1">
      {/* Optional label */}
      {label && <label className="block font-semibold">{label}</label>}

      {/* Textarea element */}
      <textarea
        rows={rows}
        className={`w-full p-2 border border-gray-400 rounded ${className}`}
        {...props} // Spread registered validation or events
      />

      {/* Validation error message */}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
