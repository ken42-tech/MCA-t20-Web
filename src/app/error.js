"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-red-50 px-4 text-center">
      <h1 className="text-6xl font-bold text-black mb-4">
        Something went wrong
      </h1>
      <p className="text-xl text-gray-800 mb-6">
        {error?.message || "An unexpected error occurred."}
      </p>
      <button onClick={() => reset()} className="btn-primary">
        Try again
      </button>
    </div>
  );
}
