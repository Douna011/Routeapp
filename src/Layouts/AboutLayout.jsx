import { Link, Outlet } from "react-router-dom"

const About = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h1 className="text-2xl font-bold text-gray-900">About</h1>
          <p className="text-gray-500 mt-1">Our purpose and direction</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation */}
          <aside className="lg:w-64">
            <div className="sticky top-6">
              <nav className="flex lg:flex-col gap-2 border-b lg:border-b-0 lg:border-r border-gray-200 pb-4 lg:pb-0 lg:pr-4">
                <Link 
                  to="vision"
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                >
                  Vision
                </Link>
                <Link 
                  to="mission"
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                >
                  Mission
                </Link>
                <Link 
                  to="goal"
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                >
                  Goal
                </Link>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default About