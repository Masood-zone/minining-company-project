import { useState } from "react";
import { newsletterBg } from "../../assets/images";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("The email field is required.");
      return;
    }
    // Add email validation (basic example)
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    setError("");
    // Handle subscription logic
    alert(`Subscribed with ${email}`);
  };

  return (
    <section
      className="relative bg-cover bg-center py-16 spacing-1"
      style={{
        backgroundImage: `url(${newsletterBg})`,
      }}
    >
      <div className="container mx-auto px-4 flex items-center max-md:items-start justify-between max-md:flex-col max-md:w-full">
        {/* Left side: Title and description */}
        <div className="text-white w-1/2 max-md:w-full">
          <h2 className="text-4xl font-bold mb-2">NEWSLETTER</h2>
          <p className="text-lg mb-6">
            Sign up for our newsletter and follow us on social media
          </p>
        </div>

        {/* Right side: Input and button */}
        <form
          onSubmit={handleSubmit}
          className="flex w-1/2 max-md:w-full justify-end items-center max-md:justify-start space-x-4"
        >
          <div className="relative w-full max-w-sm">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your E-mail"
              className="w-full p-6 max-md:p-4 rounded-none border border-gray-300 focus:ring focus:outline-none tex-black"
            />
            {error && (
              <p className="absolute right-0 top-2 text-xs text-gray-500">
                {error}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-white font-bold py-4 sm:py-6 md:py-6 px-6 sm:px-8 md:px-10 hover:bg-blue-400 transition-colors duration-300 text-sm sm:text-base md:text-lg"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
}
