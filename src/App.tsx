function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Logo/Icon placeholder */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
            <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
          Adam's Dog Food
        </h1>

        {/* Subheading */}
        <p className="text-2xl md:text-3xl text-gray-700 font-light max-w-2xl mx-auto">
          Premium nutrition for your best friend
        </p>

        {/* Coming soon badge */}
        <div className="inline-block">
          <span className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-lg font-semibold rounded-full shadow-lg">
            Coming Soon
          </span>
        </div>

        {/* Email signup form */}
        <div className="max-w-md mx-auto pt-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-amber-200">
            <p className="text-gray-700 mb-4 font-medium">
              Be the first to know when we launch
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:border-amber-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-12 text-gray-600 text-sm">
          © 2026 Adam's Dog Food. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default App;
