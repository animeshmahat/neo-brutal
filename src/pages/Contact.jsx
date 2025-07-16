import { useForm } from "react-hook-form"; // Core hook for managing forms
import { useState } from "react";
import Button from "../components/ui/Button";

// Simulated API call using a Promise that resolves after 1s
function sendFakeAPI(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🚀 Form submitted to fake API:", data);
      resolve({ success: true });
    }, 1000);
  });
}

export default function Contact() {
  // useForm returns methods to register inputs, handle validation, and more
  const {
    register, // Hook to register input elements with validation rules
    handleSubmit, // Function to handle form submission
    formState: { errors }, // Object containing validation errors
    reset, // Resets form values to initial state
  } = useForm();

  const [status, setStatus] = useState("idle"); // idle | loading | success

  // Form submit handler
  const onSubmit = async (data) => {
    setStatus("loading"); // Set loading state
    try {
      const res = await sendFakeAPI(data); // Simulate API call
      if (res.success) {
        setStatus("success");
        reset(); // Clear form fields
      }
    } catch (err) {
      alert("Failed to send message.");
      setStatus("idle");
    }
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold">📬 Contact Us</h1>
      <p className="text-lg">
        Feel free to reach out! Fill the form and hit submit.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)} // `handleSubmit` manages validation before running `onSubmit`
        className="space-y-4"
      >
        {/* NAME FIELD */}
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">
            Name
          </label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })} // Register with validation rule
            className="w-full p-2 border border-gray-400 rounded"
          />
          {/* Show validation error if name is missing */}
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* EMAIL FIELD */}
        <div>
          <label htmlFor="email" className="block font-semibold mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email regex
                message: "Invalid email address",
              },
            })}
            className="w-full p-2 border border-gray-400 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* MESSAGE FIELD */}
        <div>
          <label htmlFor="message" className="block font-semibold mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            {...register("message", {
              required: "Message cannot be empty",
              minLength: { value: 10, message: "At least 10 characters" },
            })}
            className="w-full p-2 border border-gray-400 rounded"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <div>
          <Button
            type="submit"
            variant="accent"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </Button>
        </div>

        {/* SUCCESS FEEDBACK */}
        {status === "success" && (
          <p className="text-green-600 font-semibold mt-3">
            ✅ Message sent successfully!
          </p>
        )}
      </form>
    </div>
  );
}
