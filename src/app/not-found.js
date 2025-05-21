export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-center px-4">
      <h1 className="font-bold text-white mb-4">404</h1>
      <p className="text-xl text-white mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a href="/" className="btn-secondary text-black">
        Go back home
      </a>
    </div>
  );
}
