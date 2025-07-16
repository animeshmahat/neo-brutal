import { useForm } from "react-hook-form"; // For form state and validation
import { useState } from "react"; // For tracking form status
import Button from "../components/ui/Button"; // Reusable button
import Input from "../components/ui/Input"; // Reusable input
import Textarea from "../components/ui/Textarea.jsx"; // Reusable textarea

// Fake API call to simulate sending form data
function sendFakeAPI(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🚀 Form submitted to fake API:", data);
      resolve({ success: true });
    }, 1000); // 1 second delay
  });
}

export default function Contact() {
  // useForm provides methods to handle form state, validation, and resetting
  const {
    register, // Hook to bind form inputs
    handleSubmit, // Wraps submit handler with validation
    formState: { errors }, // Stores validation error messages
    reset, // Resets form after successful submission
  } = useForm();

  // Form status tracking: idle, loading, or success
  const [status, setStatus] = useState("idle");

  // Called after validation passes
  const onSubmit = async (data) => {
    setStatus("loading");
    try {
      const res = await sendFakeAPI(data);
      if (res.success) {
        setStatus("success");
        reset(); // Clear form
      }
    } catch (err) {
      alert("Failed to send message.");
      setStatus("idle");
    }
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      {/* Page title and introduction */}
      <h1 className="text-4xl font-bold">📬 Contact Us</h1>
      <p className="text-lg">
        Feel free to reach out! Fill the form and hit submit.
      </p>

      {/* Main form using reusable inputs */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* NAME FIELD */}
        <Input
          label="Name"
          {...register("name", { required: "Name is required" })} // Validation rule
          error={errors.name?.message} // Show error if exists
        />

        {/* EMAIL FIELD */}
        <Input
          label="Email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, // Simple email pattern
              message: "Invalid email address",
            },
          })}
          error={errors.email?.message} // Show email error
        />

        {/* MESSAGE FIELD */}
        <Textarea
          label="Message"
          rows={4}
          {...register("message", {
            required: "Message cannot be empty",
            minLength: {
              value: 10,
              message: "At least 10 characters required",
            },
          })}
          error={errors.message?.message} // Show message error
        />

        {/* SUBMIT BUTTON */}
        <Button
          type="submit"
          variant="accent"
          disabled={status === "loading"} // Disable button while loading
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </Button>

        {/* SUCCESS MESSAGE */}
        {status === "success" && (
          <p className="text-green-600 font-semibold mt-3">
            ✅ Message sent successfully!
          </p>
        )}
      </form>
    </div>
  );
}
