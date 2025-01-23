import React from 'react'

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-white">
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div>
        <h2 className="text-xl font-bold mb-4">TechEdu</h2>
        <p className="text-sm">
          Empowering tech enthusiasts with free, world-class education in various technology domains.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-blue-400">All Courses</a></li>
          <li><a href="#" className="hover:text-blue-400">For Students</a></li>
          <li><a href="#" className="hover:text-blue-400">For Instructors</a></li>
          <li><a href="#" className="hover:text-blue-400">Resources</a></li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Contact</h2>
        <p className="text-sm">Email: support@techedu.com</p>
        <p className="text-sm">Phone: +1 (555) 123-4567</p>
      </div>
    </div>
    <div className="bg-blue-900 text-center py-4">
      <p className="text-sm">
        © 2025 TechEdu. All Rights Reserved.
      </p>
    </div>
  </footer>
  )
}

export default Footer