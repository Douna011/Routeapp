const Service = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service Card 1 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Web Development</h3>
            <p className="text-gray-600 mb-4">
              Custom websites and web applications built with modern technologies.
            </p>
            <span className="text-blue-600 font-medium">Learn more →</span>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Mobile Apps</h3>
            <p className="text-gray-600 mb-4">
              Cross-platform mobile applications for iOS and Android.
            </p>
            <span className="text-blue-600 font-medium">Learn more →</span>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-xl">☁️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Cloud Solutions</h3>
            <p className="text-gray-600 mb-4">
              Scalable cloud infrastructure and deployment services.
            </p>
            <span className="text-blue-600 font-medium">Learn more →</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service