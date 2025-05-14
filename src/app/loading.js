export default function LoadingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-black border-t-transparent mb-4"></div>
      <p className="text-lg text-gray-600">Loading, please wait...</p>
    </div>
  );
}
