import Link from 'next/link';

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <div className="mb-8 w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-black font-black text-3xl">C</div>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
        Stop being a <span className="text-yellow-400 italic">Confused</span> Student.
      </h1>
      <p className="text-gray-400 max-w-lg text-lg mb-10">
        The premium academic dashboard to manage tasks, track focus, and get AI-powered study insights.
      </p>
      <Link 
        href="/dashboard" 
        className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors"
      >
        Enter Dashboard
      </Link>
    </div>
  );
}
