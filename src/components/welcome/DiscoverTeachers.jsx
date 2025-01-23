import React from 'react'

const DiscoverTeachers = () => {
  return (
    <section id="experts" className="text-white bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center" data-aos="fade-down">
            Learn from Industry Experts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden text-gray-900 transition-transform duration-300 hover:scale-105"
              data-aos="fade-right"
            >
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop"
                alt="Sarah Johnson"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
                <p className="text-gray-600 mb-2">10+ years in Web Development</p>
                <p className="text-sm mb-4">Former lead developer at Tech Giant</p>
                <p className="text-sm text-gray-700">
                  "I'm passionate about creating intuitive and performant web applications. Join me to learn the latest
                  web technologies and best practices."
                </p>
              </div>
            </div>
            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden text-gray-900 transition-transform duration-300 hover:scale-105"
              data-aos="fade-up"
            >
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop"
                alt="Michael Chen"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
                <p className="text-gray-600 mb-2">8+ years in Mobile Development</p>
                <p className="text-sm mb-4">Creator of award-winning mobile apps</p>
                <p className="text-sm text-gray-700">
                  "Mobile apps are changing the world. I'll teach you how to build robust, scalable apps that users will
                  love."
                </p>
              </div>
            </div>
            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden text-gray-900 transition-transform duration-300 hover:scale-105"
              data-aos="fade-left"
            >
              <img
                src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=500&auto=format&fit=crop"
                alt="Emily Rodriguez"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Emily Rodriguez</h3>
                <p className="text-gray-600 mb-2">12+ years in Data Science</p>
                <p className="text-sm mb-4">AI researcher and consultant</p>
                <p className="text-sm text-gray-700">
                  "Data is the new oil. I'll show you how to extract insights and build predictive models that drive
                  business decisions."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default DiscoverTeachers