import { Code, Mail, Phone, MapPin, Twitter, Linkedin, Github, Youtube, ArrowRight } from "lucide-react"

function App() {
  const footerLinks = [
    {
      title: "Courses",
      links: [
        { name: "All Courses", href: "/courses" },
        { name: "Web Development", href: "/courses/web-development" },
        { name: "Cybersecurity", href: "/courses/cybersecurity" },
        { name: "Data Science", href: "/courses/data-science" },
        { name: "Mobile Development", href: "/courses/mobile-development" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Books", href: "/books" },
        { name: "Blog", href: "/blog" },
        { name: "Tutorials", href: "/tutorials" },
        { name: "Community", href: "/community" },
        { name: "Events", href: "/events" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Careers", href: "/careers" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ]

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-10 z-0" />
      <div className="absolute inset-0 noise-bg z-0" />

      {/* Animated gradient circles */}
      <div className="absolute -top-40 -right-40 w-60 h-60 rounded-full bg-blue-600/10 blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-60 h-60 rounded-full bg-blue-600/10 blur-3xl animate-pulse" />

      {/* Newsletter section */}
      <div className="relative z-10 border-b border-blue-900/30">
        <div className="container mx-auto px-3 py-6 md:py-10">
          <div className="max-w-4xl mx-auto bg-blue-950/50 backdrop-blur-sm rounded-lg p-3 md:p-6 border border-blue-900/50">
            <div className="grid md:grid-cols-2 gap-3 md:gap-6 items-center">
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-1">Stay Updated</h3>
                <p className="text-xs md:text-sm text-white/70 mb-0">
                  Get the latest news and updates on new courses, features, and opportunities.
                </p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-1.5 rounded-md bg-white/10 border border-blue-900/50 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                  />
                  <button className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors whitespace-nowrap text-sm">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-white/50 mt-1.5">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 container mx-auto px-3 py-6 md:py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {/* Logo and info */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2 space-y-4">
            <a href="/" className="inline-flex items-center gap-1.5">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                EDUFY
              </span>
            </a>
            <p className="text-xs md:text-sm text-white/70 max-w-md">
              Empowering tech enthusiasts with free, world-class education in various technology domains. Learn at your
              own pace with our comprehensive courses.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:support@edufy.com" className="text-white/70 hover:text-white transition-colors">
                    support@edufy.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+12345678901" className="text-white/70 hover:text-white transition-colors">
                    +1 (234) 567-8901
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-white/70">123 Tech Street, SF</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-2.5">
              <h3 className="text-sm font-bold">{section.title}</h3>
              <ul className="space-y-1.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs text-white/70 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      <ArrowRight className="h-2.5 w-2.5 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-blue-900/30 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/50 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} EDUFY. All rights reserved.
          </p>

          <div className="flex gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center text-white/70 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default App