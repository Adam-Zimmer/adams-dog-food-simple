import { Products } from './components/Products';

function App() {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex items-center justify-center p-6">
        <div className="max-w-4xl w-full text-center space-y-8">
          {/* Logo/Icon */}
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

          {/* Scroll indicator */}
          <div className="pt-12">
            <a href="#products" className="inline-block animate-bounce">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div id="products">
        <Products />
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-amber-50 to-orange-50 py-8 text-center text-gray-600 text-sm">
        © 2026 Adam's Dog Food. All rights reserved.
      </footer>
    </>
  );
}

export default App;
