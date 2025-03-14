import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Contact, Home, Menu, X, ChevronDown, GraduationCap, ExternalLink } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(name)
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    setActiveDropdown(null)
  }

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    {
      name: "Courses",
      href: "/courses",
      icon: GraduationCap,
      dropdown: [
        { name: "Web Development", href: "/courses/category/Web Development" },
        { name: "Cybersecurity", href: "/courses/category/Cybersecurity" },
        { name: "Data Science", href: "/courses/category/Data Science" },
        { name: "Mobile Development", href: "/courses/category/Mobile Development" },
        { name: "All Courses", href: "/courses" },
      ],
    },
    { name: "Books", href: "/books", icon: BookOpen },
    { name: "Contact", href: "/contact", icon: Contact },
  ]

  return (
    <header
      className={`sticky top-0 z-50 bg-black `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 z-10">
            <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center">
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              EDUFY
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center gap-1 px-4 py-2 text-white/80 hover:text-white transition-colors"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center gap-1 px-4 py-2 text-white/80 hover:text-white transition-colors"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                )}

                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-56 rounded-md overflow-hidden bg-white shadow-xl"
                      >
                        <div className="py-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className=" px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2"
                              onClick={closeMenu}
                            >
                              {dropdownItem.name === "All Courses" && <ExternalLink className="h-3 w-3" />}
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md">
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2 z-10" aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-blue-900/30"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full px-4 py-3 text-white/80 hover:text-white hover:bg-blue-900/20 rounded-md transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="h-5 w-5" />
                            <span>{item.name}</span>
                          </div>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
                          />
                        </button>

                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-8 mt-1 border-l-2 border-blue-600/30 pl-4"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="flex items-center gap-2 px-4 py-2 text-sm text-white/70 hover:text-white transition-colors"
                                  onClick={closeMenu}
                                >
                                  {dropdownItem.name === "All Courses" && <ExternalLink className="h-3 w-3" />}
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-blue-900/20 rounded-md transition-colors"
                        onClick={closeMenu}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}

                <div className="mt-4 pt-4 border-t border-blue-900/30">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md h-12">
                    <Link href="/signup" className="w-full flex items-center justify-center" onClick={closeMenu}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}