import React from 'react'

const Page = () => {
  return (
  
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-gray-900 text-white">
      <div className="w-full max-w-4xl mx-auto p-8 bg-black/60 backdrop-blur-md rounded-3xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-indigo-300">
          Aura Help Desk
        </h1>
        <p className="text-center text-gray-300 mb-10">
          Need assistance? We're here to help. Explore our resources, or connect
          with support to resolve any issues quickly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="p-6 bg-gradient-to-r from-indigo-800 to-purple-700 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">FAQs</h2>
            <p className="text-sm text-gray-300">
              Find answers to common questions about your employee portal,
              policies, and more.
            </p>
            <a
              href="/faqs"
              className="inline-block mt-4 px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition"
            >
              Visit FAQs
            </a>
          </div>
          {/* Card 2 */}
          <div className="p-6 bg-gradient-to-r from-indigo-800 to-purple-700 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Submit a Ticket</h2>
            <p className="text-sm text-gray-300">
              Can't find a solution? Submit a ticket to our support team, and
              we'll assist you.
            </p>
            <a
              href="/support-ticket"
              className="inline-block mt-4 px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition"
            >
              Submit a Ticket
            </a>
          </div>
          {/* Card 3 */}
          <div className="p-6 bg-gradient-to-r from-indigo-800 to-purple-700 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Live Chat</h2>
            <p className="text-sm text-gray-300">
              Talk to our live support team for immediate help with urgent
              issues.
            </p>
            <a
              href="/live-chat"
              className="inline-block mt-4 px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition"
            >
              Start Live Chat
            </a>
          </div>
          {/* Card 4 */}
          <div className="p-6 bg-gradient-to-r from-indigo-800 to-purple-700 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p className="text-sm text-gray-300">
              Get in touch with our team directly via email or phone for
              detailed assistance.
            </p>
            <a
              href="/contact"
              className="inline-block mt-4 px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition"
            >
              Contact Us
            </a>
          </div>
        </div>
        {/* Additional Content */}
        <div className="mt-10 text-center">
          <h3 className="text-xl font-medium mb-4">Important Notes</h3>
          <ul className="text-sm text-gray-300 list-disc list-inside">
            <li>Support is available Monday to Friday, 9 AM - 6 PM.</li>
            <li>Tickets are usually resolved within 24-48 hours.</li>
            <li>For urgent issues, use the live chat option.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Page 