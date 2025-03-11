import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Napkin Contracts
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Transform quick agreements into legally binding contracts. Write it on a napkin, 
            we'll handle the legal stuff.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/create"
              className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Start Writing
            </Link>
            <Link
              href="/templates"
              className="text-lg font-semibold leading-6 text-gray-900 hover:text-blue-600"
            >
              View Templates <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="relative">
              <div className="text-lg font-semibold text-blue-600 mb-3">Quick & Simple</div>
              <h3 className="text-xl font-bold text-gray-900">Write Like It's a Napkin</h3>
              <p className="mt-2 text-gray-600">
                Draft agreements naturally, just like you would on a napkin. No legal jargon needed.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="relative">
              <div className="text-lg font-semibold text-blue-600 mb-3">Legally Sound</div>
              <h3 className="text-xl font-bold text-gray-900">Automatic Legal Backup</h3>
              <p className="mt-2 text-gray-600">
                We transform your informal agreement into proper legal documentation automatically.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="relative">
              <div className="text-lg font-semibold text-blue-600 mb-3">Instant Sharing</div>
              <h3 className="text-xl font-bold text-gray-900">Share & Sign</h3>
              <p className="mt-2 text-gray-600">
                Send to counterparties instantly. Get signatures digitally. Done in minutes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">How It Works</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Choose Template</h3>
              <p className="text-gray-600">Select from common agreement types or start blank</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Write Terms</h3>
              <p className="text-gray-600">Draft your agreement in simple terms</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Sign & Share</h3>
              <p className="text-gray-600">Add your signature and share with others</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Get Documentation</h3>
              <p className="text-gray-600">Receive proper legal documentation automatically</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
