import React from 'react'

const WhyChoose = () => {
  return (
    <section id="why-choose" className="text-gray-900 bg-gray-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center" data-aos="fade-down">
            Why Choose TechEdu?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-semibold mb-4">100% Free Courses</h3>
              <p className="mb-4">
                Access all our premium content without any cost. Learn at your own pace, completely free.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li>No hidden fees or subscriptions</li>
                <li>Lifetime access to course materials</li>
                <li>Regular updates to keep content current</li>
              </ul>
            </div>
            <div
              className="bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-semibold mb-4">Industry-Relevant Skills</h3>
              <p className="mb-4">Our curriculum is designed to match the current tech industry needs and trends.</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li>Courses aligned with job market demands</li>
                <li>Hands-on projects mimicking real-world scenarios</li>
                <li>Continuous updates to reflect industry changes</li>
              </ul>
            </div>
            <div
              className="bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-semibold mb-4">Expert Instructors</h3>
              <p className="mb-4">Learn from professionals with years of experience in their respective fields.</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li>Industry veterans as course instructors</li>
                <li>Insights from real-world experiences</li>
                <li>Mentorship opportunities with experts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}

export default WhyChoose